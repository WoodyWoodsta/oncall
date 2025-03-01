import React from 'react';

import {
  HorizontalGroup,
  Button,
  VerticalGroup,
  Icon,
  ConfirmModal,
  Tooltip,
  Tab,
  TabsBar,
  TabContent,
  Alert,
} from '@grafana/ui';
import cn from 'classnames/bind';
import { debounce } from 'lodash-es';
import { observer } from 'mobx-react';
import CopyToClipboard from 'react-copy-to-clipboard';
import Emoji from 'react-emoji-render';
import { RouteComponentProps, withRouter } from 'react-router-dom';

import { GTable } from 'components/GTable/GTable';
import { HamburgerMenu } from 'components/HamburgerMenu/HamburgerMenu';
import { IntegrationLogo } from 'components/IntegrationLogo/IntegrationLogo';
import { LabelsTooltipBadge } from 'components/LabelsTooltipBadge/LabelsTooltipBadge';
import { PageBaseState } from 'components/PageErrorHandlingWrapper/PageErrorHandlingWrapper';
import {
  getWrongTeamResponseInfo,
  initErrorDataState,
} from 'components/PageErrorHandlingWrapper/PageErrorHandlingWrapper.helpers';
import { PluginLink } from 'components/PluginLink/PluginLink';
import { RenderConditionally } from 'components/RenderConditionally/RenderConditionally';
import { Text } from 'components/Text/Text';
import { TextEllipsisTooltip } from 'components/TextEllipsisTooltip/TextEllipsisTooltip';
import { TooltipBadge } from 'components/TooltipBadge/TooltipBadge';
import { WithContextMenu } from 'components/WithContextMenu/WithContextMenu';
import { IntegrationForm } from 'containers/IntegrationForm/IntegrationForm';
import { IntegrationLabelsForm } from 'containers/IntegrationLabelsForm/IntegrationLabelsForm';
import { RemoteFilters } from 'containers/RemoteFilters/RemoteFilters';
import { TeamName } from 'containers/TeamName/TeamName';
import { WithPermissionControlTooltip } from 'containers/WithPermissionControl/WithPermissionControlTooltip';
import { HeartIcon, HeartRedIcon } from 'icons/Icons';
import { AlertReceiveChannelStore } from 'models/alert_receive_channel/alert_receive_channel';
import {
  AlertReceiveChannel,
  MaintenanceMode,
  SupportedIntegrationFilters,
} from 'models/alert_receive_channel/alert_receive_channel.types';
import { IntegrationHelper } from 'pages/integration/Integration.helper';
import { AppFeature } from 'state/features';
import { PageProps, WithStoreProps } from 'state/types';
import { withMobXProviderContext } from 'state/withStore';
import { LocationHelper } from 'utils/LocationHelper';
import { UserActions } from 'utils/authorization/authorization';
import { PAGE, TEXT_ELLIPSIS_CLASS } from 'utils/consts';
import { openNotification } from 'utils/utils';

import styles from './Integrations.module.scss';

enum TabType {
  MonitoringSystems = 'monitoring-systems',
  DirectPaging = 'direct-paging',
}

const TAB_QUERY_PARAM_KEY = 'tab';

const TABS = [
  {
    label: 'Monitoring Systems',
    value: TabType.MonitoringSystems,
  },
  {
    label: 'Manual Direct Paging',
    value: TabType.DirectPaging,
  },
];

const cx = cn.bind(styles);
const FILTERS_DEBOUNCE_MS = 500;

interface IntegrationsState extends PageBaseState {
  integrationsFilters: SupportedIntegrationFilters;
  alertReceiveChannelId?: AlertReceiveChannel['id'] | 'new';
  alertReceiveChannelIdToShowLabels?: AlertReceiveChannel['id'];
  confirmationModal: {
    isOpen: boolean;
    title: any;
    dismissText: string;
    confirmText: string;
    body?: React.ReactNode;
    description?: string;
    confirmationText?: string;
    onConfirm: () => void;
  };
  activeTab: TabType;
}

interface IntegrationsProps extends WithStoreProps, PageProps, RouteComponentProps<{ id: string }> {}

@observer
class _IntegrationsPage extends React.Component<IntegrationsProps, IntegrationsState> {
  constructor(props: IntegrationsProps) {
    super(props);

    this.state = {
      integrationsFilters: { searchTerm: '', integration_ne: ['direct_paging'] },
      errorData: initErrorDataState(),
      confirmationModal: undefined,
      activeTab: props.query[TAB_QUERY_PARAM_KEY] || TabType.MonitoringSystems,
    };
  }

  async componentDidMount() {
    this.parseQueryParams();
  }

  componentDidUpdate(prevProps: IntegrationsProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.parseQueryParams();
    }
    if (prevProps.query[TAB_QUERY_PARAM_KEY] !== this.props.query[TAB_QUERY_PARAM_KEY]) {
      this.onTabChange(this.props.query[TAB_QUERY_PARAM_KEY] as TabType);
    }
  }

  parseQueryParams = async () => {
    const {
      store,
      match: {
        params: { id },
      },
    } = this.props;

    this.setState((_prevState) => ({
      errorData: initErrorDataState(),
      alertReceiveChannelId: undefined,
    })); // reset state on query parse

    if (!id) {
      return;
    }

    let alertReceiveChannel: AlertReceiveChannel | void = undefined;
    const isNewAlertReceiveChannel = id === 'new';

    if (!isNewAlertReceiveChannel) {
      alertReceiveChannel = await store.alertReceiveChannelStore
        .loadItem(id, true)
        .catch((error) => this.setState({ errorData: { ...getWrongTeamResponseInfo(error) } }));
    }

    if (alertReceiveChannel || isNewAlertReceiveChannel) {
      this.setState({ alertReceiveChannelId: id });
    }
  };

  getFiltersBasedOnCurrentTab = () => ({
    ...this.state.integrationsFilters,
    ...(this.state.activeTab === TabType.DirectPaging
      ? { integration: ['direct_paging'] }
      : {
          integration_ne: ['direct_paging'],
          integration: this.state.integrationsFilters.integration?.filter(
            (integration) => integration !== 'direct_paging'
          ),
        }),
  });

  update = () => {
    const { store } = this.props;
    const page = store.filtersStore.currentTablePageNum[PAGE.Integrations];

    LocationHelper.update({ p: page }, 'partial');

    return store.alertReceiveChannelStore.updatePaginatedItems({
      filters: this.getFiltersBasedOnCurrentTab(),
      page,
      updateCounters: false,
      invalidateFn: () => this.invalidateRequestFn(page),
    });
  };

  onTabChange = (tab: TabType) => {
    LocationHelper.update({ tab, integration: undefined, search: undefined }, 'partial');
    this.setState(
      {
        activeTab: tab,
      },
      () => {
        this.handleChangePage(1);
      }
    );
  };

  render() {
    const { store, query } = this.props;
    const {
      alertReceiveChannelId,
      alertReceiveChannelIdToShowLabels,
      confirmationModal,
      activeTab,
      integrationsFilters,
    } = this.state;
    const { alertReceiveChannelStore } = store;

    const { count, results, page_size } = alertReceiveChannelStore.getPaginatedSearchResult();
    const isDirectPagingSelectedOnMonitoringSystemsTab =
      activeTab === TabType.MonitoringSystems && integrationsFilters.integration?.includes('direct_paging');

    return (
      <>
        <div className={cx('root')}>
          <div className={cx('title')}>
            <HorizontalGroup justify="space-between">
              <VerticalGroup>
                <Text.Title level={3}>Integrations</Text.Title>
                <Text type="secondary">
                  Receive alerts, group and interpret using templates and route to escalations
                </Text>
              </VerticalGroup>
              <WithPermissionControlTooltip userAction={UserActions.IntegrationsWrite}>
                <Button
                  onClick={() => {
                    this.setState({ alertReceiveChannelId: 'new' });
                  }}
                  icon="plus"
                  className={cx('newIntegrationButton')}
                >
                  New integration
                </Button>
              </WithPermissionControlTooltip>
            </HorizontalGroup>
          </div>
          <div>
            <TabsBar className={cx('tabsBar')}>
              {TABS.map(({ label, value }) => (
                <Tab
                  key={value}
                  label={label}
                  active={activeTab === value}
                  onChangeTab={() => this.onTabChange(value)}
                />
              ))}
            </TabsBar>
            <TabContent>
              <RemoteFilters
                key={activeTab} // added to remount the component on each tab
                query={query}
                page={PAGE.Integrations}
                grafanaTeamStore={store.grafanaTeamStore}
                onChange={this.handleIntegrationsFiltersChange}
                {...(activeTab === TabType.DirectPaging && {
                  skipFilterOptionFn: ({ name }) => name === 'integration',
                })}
              />
              {isDirectPagingSelectedOnMonitoringSystemsTab && (
                <Alert
                  className={cx('goToDirectPagingAlert')}
                  severity="info"
                  title="Direct Paging integrations have been moved."
                >
                  <span>
                    They are in a separate tab now. Go to{' '}
                    <PluginLink query={{ page: 'integrations', tab: TabType.DirectPaging }}>
                      Direct Paging tab
                    </PluginLink>{' '}
                    to view them.
                  </span>
                </Alert>
              )}
              <GTable
                emptyText={count === undefined ? 'Loading...' : 'No integrations found'}
                loading={count === undefined}
                data-testid="integrations-table"
                rowKey="id"
                data={results}
                columns={this.getTableColumns(store.hasFeature)}
                className={cx('integrations-table')}
                rowClassName={cx('integrations-table-row')}
                pagination={{
                  page: store.filtersStore.currentTablePageNum[PAGE.Integrations],
                  total: results ? Math.ceil((count || 0) / page_size) : 0,
                  onChange: this.handleChangePage,
                }}
              />
            </TabContent>
          </div>
        </div>

        {alertReceiveChannelId && (
          <IntegrationForm
            onHide={() => {
              this.setState({ alertReceiveChannelId: undefined });
            }}
            onSubmit={this.update}
            id={alertReceiveChannelId}
            navigateToAlertGroupLabels={(id: AlertReceiveChannel['id']) => {
              this.setState({ alertReceiveChannelId: undefined, alertReceiveChannelIdToShowLabels: id });
            }}
          />
        )}

        {alertReceiveChannelIdToShowLabels && (
          <IntegrationLabelsForm
            onHide={() => {
              this.setState({ alertReceiveChannelIdToShowLabels: undefined });
            }}
            onSubmit={this.update}
            id={alertReceiveChannelIdToShowLabels}
            onOpenIntegrationSettings={(id: AlertReceiveChannel['id']) => {
              this.setState({ alertReceiveChannelId: id });
            }}
          />
        )}

        {confirmationModal && (
          <ConfirmModal
            isOpen={confirmationModal.isOpen}
            title={confirmationModal.title}
            confirmText={confirmationModal.confirmText}
            dismissText="Cancel"
            body={confirmationModal.body}
            description={confirmationModal.description}
            confirmationText={confirmationModal.confirmationText}
            onConfirm={confirmationModal.onConfirm}
            onDismiss={() =>
              this.setState({
                confirmationModal: undefined,
              })
            }
          />
        )}
      </>
    );
  }

  renderName = (item: AlertReceiveChannel) => {
    const { query } = this.props;

    return (
      <PluginLink
        query={{
          page: 'integrations',
          id: item.id,
          ...query,
        }}
      >
        <TextEllipsisTooltip placement="top" content={item.verbal_name}>
          <Text type="link" size="medium">
            <Emoji className={cx(TEXT_ELLIPSIS_CLASS)} text={item.verbal_name} />
          </Text>
        </TextEllipsisTooltip>
      </PluginLink>
    );
  };

  renderDatasource(item: AlertReceiveChannel, alertReceiveChannelStore: AlertReceiveChannelStore) {
    const alertReceiveChannel = alertReceiveChannelStore.items[item.id];
    const integration = alertReceiveChannelStore.getIntegration(alertReceiveChannel);
    const isLegacyIntegration = (integration?.value as string)?.toLowerCase().startsWith('legacy_');

    if (isLegacyIntegration) {
      return (
        <HorizontalGroup>
          <Tooltip placement="top" content={'This integration has been deprecated, consider migrating it.'}>
            <Icon name="info-circle" className="u-opacity" />
          </Tooltip>
          <Text type="secondary">
            <span className="u-opacity">{integration?.display_name}</span>
          </Text>
        </HorizontalGroup>
      );
    }

    return (
      <HorizontalGroup>
        <IntegrationLogo scale={0.08} integration={integration} />
        <Text type="secondary">{integration?.display_name}</Text>
      </HorizontalGroup>
    );
  }

  renderIntegrationStatus(item: AlertReceiveChannel, alertReceiveChannelStore: AlertReceiveChannelStore) {
    const alertReceiveChannelCounter = alertReceiveChannelStore.counters[item.id];
    let routesCounter = item.routes_count;
    let connectedEscalationsChainsCount = item.connected_escalations_chains_count;

    return (
      <HorizontalGroup spacing="xs">
        {alertReceiveChannelCounter && (
          <PluginLink query={{ page: 'incidents', integration: item.id }} className={cx('alertsInfoText')}>
            <TooltipBadge
              borderType="primary"
              placement="top"
              text={alertReceiveChannelCounter?.alerts_count + '/' + alertReceiveChannelCounter?.alert_groups_count}
              tooltipContent={
                alertReceiveChannelCounter?.alerts_count +
                ' alert' +
                (alertReceiveChannelCounter?.alerts_count === 1 ? '' : 's') +
                ' in ' +
                alertReceiveChannelCounter?.alert_groups_count +
                ' alert group' +
                (alertReceiveChannelCounter?.alert_groups_count === 1 ? '' : 's')
              }
            />
          </PluginLink>
        )}
        {routesCounter && (
          <TooltipBadge
            borderType="success"
            icon="link"
            text={`${connectedEscalationsChainsCount}/${routesCounter}`}
            tooltipContent={undefined}
            placement="top"
            tooltipTitle={
              connectedEscalationsChainsCount +
              ' connected escalation chain' +
              (connectedEscalationsChainsCount === 1 ? '' : 's') +
              ' in ' +
              routesCounter +
              ' route' +
              (routesCounter === 1 ? '' : 's')
            }
          />
        )}
      </HorizontalGroup>
    );
  }

  renderHeartbeat(item: AlertReceiveChannel) {
    const { store } = this.props;
    const { alertReceiveChannelStore, heartbeatStore } = store;
    const alertReceiveChannel = alertReceiveChannelStore.items[item.id];

    const heartbeatId = alertReceiveChannelStore.alertReceiveChannelToHeartbeat[alertReceiveChannel.id];
    const heartbeat = heartbeatStore.items[heartbeatId];

    const heartbeatStatus = Boolean(heartbeat?.status);
    return (
      <div>
        {alertReceiveChannel.is_available_for_integration_heartbeat && heartbeat?.last_heartbeat_time_verbal && (
          <TooltipBadge
            testId="heartbeat-badge"
            text={undefined}
            className={cx('heartbeat-badge')}
            placement="top"
            borderType={heartbeatStatus ? 'success' : 'danger'}
            customIcon={heartbeatStatus ? <HeartIcon /> : <HeartRedIcon />}
            tooltipTitle={`Last heartbeat: ${heartbeat?.last_heartbeat_time_verbal}`}
            tooltipContent={undefined}
          />
        )}
      </div>
    );
  }

  renderMaintenance(item: AlertReceiveChannel) {
    const maintenanceMode = item.maintenance_mode;

    if (maintenanceMode === MaintenanceMode.Debug || maintenanceMode === MaintenanceMode.Maintenance) {
      return (
        <div className={cx('u-flex')}>
          <TooltipBadge
            borderType="primary"
            icon="pause"
            placement="top"
            text={IntegrationHelper.getMaintenanceText(item.maintenance_till)}
            tooltipTitle={IntegrationHelper.getMaintenanceText(item.maintenance_till, maintenanceMode)}
            tooltipContent={undefined}
          />
        </div>
      );
    }

    return null;
  }

  renderTeam(item: AlertReceiveChannel, teams: any) {
    return (
      <TextEllipsisTooltip placement="top" content={teams[item.team]?.name}>
        <TeamName className={TEXT_ELLIPSIS_CLASS} team={teams[item.team]} />
      </TextEllipsisTooltip>
    );
  }

  renderButtons = (item: AlertReceiveChannel) => {
    const { store } = this.props;

    return (
      <WithContextMenu
        renderMenuItems={() => (
          <div className={cx('integrations-actionsList')}>
            <WithPermissionControlTooltip key="edit" userAction={UserActions.IntegrationsWrite}>
              <div className={cx('integrations-actionItem')} onClick={() => this.onIntegrationEditClick(item.id)}>
                <Text type="primary">Integration settings</Text>
              </div>
            </WithPermissionControlTooltip>

            {store.hasFeature(AppFeature.Labels) && (
              <WithPermissionControlTooltip key="edit" userAction={UserActions.IntegrationsWrite}>
                <div className={cx('integrations-actionItem')} onClick={() => this.onLabelsEditClick(item.id)}>
                  <Text type="primary">Alert group labeling</Text>
                </div>
              </WithPermissionControlTooltip>
            )}

            <CopyToClipboard text={item.id} onCopy={() => openNotification('Integration ID has been copied')}>
              <div className={cx('integrations-actionItem')}>
                <HorizontalGroup spacing={'xs'}>
                  <Icon name="copy" />

                  <Text type="primary">UID: {item.id}</Text>
                </HorizontalGroup>
              </div>
            </CopyToClipboard>
            <RenderConditionally shouldRender={item.allow_delete}>
              <div className={cx('thin-line-break')} />
              <WithPermissionControlTooltip key="delete" userAction={UserActions.IntegrationsWrite}>
                <div className={cx('integrations-actionItem')}>
                  <div
                    onClick={() => {
                      this.setState({
                        confirmationModal: {
                          isOpen: true,
                          confirmText: 'Delete',
                          dismissText: 'Cancel',
                          onConfirm: () => this.handleDeleteAlertReceiveChannel(item.id),
                          title: 'Delete integration',
                          body: (
                            <Text type="primary">
                              Are you sure you want to delete <Emoji text={item.verbal_name} /> integration?
                            </Text>
                          ),
                        },
                      });
                    }}
                    className="u-width-100"
                  >
                    <Text type="danger">
                      <HorizontalGroup spacing={'xs'}>
                        <Icon name="trash-alt" />
                        <span>Delete Integration</span>
                      </HorizontalGroup>
                    </Text>
                  </div>
                </div>
              </WithPermissionControlTooltip>
            </RenderConditionally>
          </div>
        )}
      >
        {({ openMenu }) => <HamburgerMenu openMenu={openMenu} listBorder={2} listWidth={200} />}
      </WithContextMenu>
    );
  };

  getTableColumns = (hasFeatureFn) => {
    const {
      grafanaTeamStore,
      alertReceiveChannelStore,
      filtersStore: { applyLabelFilter },
    } = this.props.store;
    const isMonitoringSystemsTab = this.state.activeTab === TabType.MonitoringSystems;

    const columns = [
      {
        width: '30%',
        title: 'Name',
        key: 'name',
        render: this.renderName,
      },

      {
        width: '15%',
        title: 'Status',
        key: 'status',
        render: (item: AlertReceiveChannel) => this.renderIntegrationStatus(item, alertReceiveChannelStore),
      },
      {
        width: '25%',
        title: 'Type',
        key: 'datasource',
        render: (item: AlertReceiveChannel) => this.renderDatasource(item, alertReceiveChannelStore),
      },
      ...(isMonitoringSystemsTab
        ? [
            {
              width: '10%',
              title: 'Maintenance',
              key: 'maintenance',
              render: (item: AlertReceiveChannel) => this.renderMaintenance(item),
            },
            {
              width: '5%',
              title: 'Heartbeat',
              key: 'heartbeat',
              render: (item: AlertReceiveChannel) => this.renderHeartbeat(item),
            },
          ]
        : []),
      {
        width: isMonitoringSystemsTab ? '15%' : '30%',
        title: 'Team',
        render: (item: AlertReceiveChannel) => this.renderTeam(item, grafanaTeamStore.items),
      },
      {
        width: '50px',
        key: 'buttons',
        render: (item: AlertReceiveChannel) => this.renderButtons(item),
        className: cx('buttons'),
      },
    ];

    if (hasFeatureFn(AppFeature.Labels)) {
      columns.splice(-2, 0, {
        width: '10%',
        title: 'Labels',
        render: ({ labels }: AlertReceiveChannel) => (
          <LabelsTooltipBadge labels={labels} onClick={(label) => applyLabelFilter(label, PAGE.Integrations)} />
        ),
      });
      columns.find((column) => column.key === 'datasource').width = '15%';
    }

    return columns;
  };

  invalidateRequestFn = (requestedPage: number) => {
    const { store } = this.props;
    return requestedPage !== store.filtersStore.currentTablePageNum[PAGE.Integrations];
  };

  handleChangePage = (page: number) => {
    const { store } = this.props;

    store.filtersStore.currentTablePageNum[PAGE.Integrations] = page;
    this.update();
  };

  onIntegrationEditClick = (id: AlertReceiveChannel['id']) => {
    this.setState({ alertReceiveChannelId: id });
  };

  onLabelsEditClick = (id: AlertReceiveChannel['id']) => {
    this.setState({ alertReceiveChannelIdToShowLabels: id });
  };

  handleDeleteAlertReceiveChannel = (alertReceiveChannelId: AlertReceiveChannel['id']) => {
    const { store } = this.props;

    const { alertReceiveChannelStore } = store;

    alertReceiveChannelStore.deleteAlertReceiveChannel(alertReceiveChannelId).then(this.applyFilters);
    this.setState({ confirmationModal: undefined });
  };

  handleIntegrationsFiltersChange = (
    integrationsFilters: IntegrationsState['integrationsFilters'],
    isOnMount: boolean
  ) => {
    this.setState({ integrationsFilters }, () => this.debouncedUpdateIntegrations(isOnMount));
  };

  applyFilters = async (isOnMount: boolean) => {
    const { store } = this.props;
    const { alertReceiveChannelStore } = store;
    const newPage = isOnMount ? store.filtersStore.currentTablePageNum[PAGE.Integrations] : 1;

    return alertReceiveChannelStore
      .updatePaginatedItems({
        filters: this.getFiltersBasedOnCurrentTab(),
        page: newPage,
        updateCounters: false,
        invalidateFn: () => this.invalidateRequestFn(newPage),
      })
      .then(() => {
        store.filtersStore.currentTablePageNum[PAGE.Integrations] = newPage;
        LocationHelper.update({ p: newPage }, 'partial');
      });
  };

  debouncedUpdateIntegrations = debounce(this.applyFilters, FILTERS_DEBOUNCE_MS);
}

export const IntegrationsPage = withRouter(withMobXProviderContext(_IntegrationsPage));
