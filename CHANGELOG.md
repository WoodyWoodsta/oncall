# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## Unreleased

### Fixed

- Fix edit default team by admin @mderynck ([#3885](https://github.com/grafana/oncall/pull/3885))
- Unblock slack install by skipping check chatops gateway link in OSS deployment @mderynck ([#3893](https://github.com/grafana/oncall/pull/3893))
- Improvements for dragging the add rotation form in Schedules ([#3904](https://github.com/grafana/oncall/pull/3904))

### Changed

- Check for permissions on Slack escalate command ([#3891](https://github.com/grafana/oncall/pull/3891))
- Update OnCall Insights dashboard @Ferril ([#3875](https://github.com/grafana/oncall/pull/3875))
- Do not delete webhook if its team is deleted @mderynck ([#3873](https://github.com/grafana/oncall/pull/3873))
- Update user details internal API perms ([#3900](https://github.com/grafana/oncall/pull/3900))

## v1.3.105 (2024-02-13)

### Fixed

- Quotes in templates not rendering results correctly @mderynck ([#3884](https://github.com/grafana/oncall/pull/3884))

## v1.3.104 (2024-02-12)

### Changed

- Revert requiring permission on Slack direct paging ([#3881](https://github.com/grafana/oncall/pull/3881))

## v1.3.103 (2024-02-12)

### Added

- Improved zvonok verification call @sreway ([#3768](https://github.com/grafana/oncall/pull/3768))
- Add permission checks for Slack paging and shift swaps actions ([#3861](https://github.com/grafana/oncall/pull/3861))
- Include all upcoming shifts in upcoming shifts internal endpoint ([#3871](https://github.com/grafana/oncall/pull/3871))

### Changed

- Allow mobile app to access escalation options endpoints @imtoori ([#3847](https://github.com/grafana/oncall/pull/3847))
- Enable templating for alert escalation mobile app push notifications by @joeyorlando ([#3845](https://github.com/grafana/oncall/pull/3845))
- Change email notification template to not wrap user template @mderynck ([#3862](https://github.com/grafana/oncall/pull/3862))
- Update integration name uniqueness check to be per team ([#3863](https://github.com/grafana/oncall/pull/3863))

### Fixed

- Fix rounding issue with displayed time when sending "You're going oncall" push notification by @joeyorlando ([#3872](https://github.com/grafana/oncall/pull/3872))

## v1.3.102 (2024-02-06)

### Fixed

Maintenance release

## v1.3.101 (2024-02-05)

### Added

– Enable labels feature (Currently cloud-only)

### Fixed

- Address outgoing webhook encoding error when passing non-latin characters in the webhook request body by @joeyorlando
  ([#3832](https://github.com/grafana/oncall/pull/3832))

## v1.3.100 (2024-02-01)

### Added

- Allow configuration of outgoing webhook timeout via `OUTGOING_WEBHOOK_TIMEOUT` environment variable @kevindw-fluxys ([#3801](https://github.com/grafana/oncall/pull/3801))
- Include teams info in users API ([#3817](https://github.com/grafana/oncall/pull/3817))

### Fixed

- Handle alert group does not exist on telegram button press ([#3814](https://github.com/grafana/oncall/pull/3814))

## v1.3.99 (2024-02-01)

### Added

- Render alert group action buttons even if getting AG data fails ([#2383](https://github.com/grafana/oncall-private/issues/2383))
- Enable Grafana Alerting V2 feature flag by default

### Fixed

- Incorrect end date on creating weekly on-call shift ([#3755](https://github.com/grafana/oncall/issues/3755))

## v1.3.98 (2024-02-01)

### Fixed

Maintenance release

## v1.3.97 (2024-01-31)

### Changed

- Ensure alert group log records are committed to DB before signalling about them @mderynck([#3731](https://github.com/grafana/oncall/pull/3731))

### Fixed

- Address `SlackAPIRatelimitError` exceptions in `apps.slack.tasks.send_message_to_thread_if_bot_not_in_channel` task
  by @joeyorlando ([#3803](https://github.com/grafana/oncall/pull/3803))
- Fix exception when parsing incident plugin config @mderynck ([#3802](https://github.com/grafana/oncall/pull/3802))

## v1.3.96 (2024-01-31)

### Added

- Allow routing incoming alerts based on labels by @joeyorlando ([#3778](https://github.com/grafana/oncall/pull/3778))

### Changed

- Remove `/oncall` Slack slash command (ie. manual alert group creation command) by @joeyorlando ([#3790](https://github.com/grafana/oncall/pull/3790))
- Increase frequency of checking for gaps and empty shifts in schedules by @Ferril ([#3785](https://github.com/grafana/oncall/pull/3785))

### Fixed

- Fixed checking whether user has telegram connection for `get_telegram_verification_code` endpoint by @Ferril ([#3794](https://github.com/grafana/oncall/pull/3794))
- Fix interval validation when creating shift via public API ([#3775](https://github.com/grafana/oncall/pull/3775))
- Fix list user serializer logic refactoring ([3793](https://github.com/grafana/oncall/pull/3793))

## v1.3.94 (2024-01-30)

### Added

- Improved logging during plugin sync and install with Grafana @mderynck ([#3730](https://github.com/grafana/oncall/pull/3730))
- Added `is_currently_oncall` information to internal user details API ([#3765](https://github.com/grafana/oncall/pull/3765))
- Add a modal for autoresolve and grouping templates for Alertmanager-based integrations ([#3764](https://github.com/grafana/oncall/pull/3764))

### Fixed

- Fixed too frequent retry of `perform_notification` task on Telegram ratelimit error by @Ferril ([#3744](https://github.com/grafana/oncall/pull/3744))
- Dynamic labels & multi-label extraction label are broken ([#3750](https://github.com/grafana/oncall/issues/3750))
- Add check whether organization has Slack connection on update Slack related field using public api endpoints
  by @Ferril ([#3751](https://github.com/grafana/oncall/pull/3751))
- Fixed calculating the number of on-call users per team by @Ferril ([#3773](https://github.com/grafana/oncall/pull/3773))
- Refactor create_alert task by @iskhakov ([#3604](https://github.com/grafana/oncall/pull/3759))

## v1.3.92 (2024-01-23)

Maintenance release

## v1.3.91 (2024-01-23)

### Changed

- Improved alert group table columns spacing ([#3712](https://github.com/grafana/oncall/pull/3712))

## v1.3.90 (2024-01-18)

### Changed

- Improvements for the columns selector ([3668](https://github.com/grafana/oncall/pull/3668))

### Fixed

- Address infinite retrying `apps.alerts.tasks.notify_user.perform_notification` task when `UserNotificationPolicyLogRecord`
  object cannot be found by @joeyorlando ([#3708](https://github.com/grafana/oncall/pull/3708))

## v1.3.89 (2024-01-17)

### Fixed

- Fixed Webhooks UI not allowing simple webhooks to be created ([#3691](https://github.com/grafana/oncall/pull/3691))
- Fix posting Slack message when route is deleted by @vadimkerr ([#3702](https://github.com/grafana/oncall/pull/3702))

### Changed

- Update schedules on-call users cache on every scheduled schedule refresh task ([#3699](https://github.com/grafana/oncall/pull/3699)).

## v1.3.88 (2024-01-16)

### Fixed

- Fix updating a shift swap with no Slack message by @vadimkerr ([#3686](https://github.com/grafana/oncall/pull/3686))

## v1.3.87 (2024-01-15)

### Fixed

- Fix occasional `AttributeError` in `apps.grafana_plugin.tasks.sync.sync_organization_async` task by @joeyorlando ([#3687](https://github.com/grafana/oncall/pull/3687))

## v1.3.86 (2024-01-12)

### Fixed

- Fix unicode characters not rendering correctly in webhooks @mderynck ([#3670](https://github.com/grafana/oncall/pull/3670))
- UI bug related to time inputs for "current UTC time is in" range escalation policy step ([#3585](https://github.com/grafana/oncall/issues/3585)]
- MS Teams Connection user profile tab - shouldn't reshow connection steps if already connected ([#2427](https://github.com/grafana/oncall-private/issues/2427))
- Fix internal schedule detail API to set oncall_now for a schedule in orgs with multiple entries ([#3671](https://github.com/grafana/oncall/pull/3671))

## v1.3.85 (2024-01-12)

Maintenance release

## v1.3.84 (2024-01-10)

### Added

- Add endpoint for alert group escalation snapshot by @Ferril ([#3615](https://github.com/grafana/oncall/pull/3615))

### Changed

- Do not retry `firebase.messaging.UnregisteredError` exceptions for FCM relay tasks by @joeyorlando ([#3637](https://github.com/grafana/oncall/pull/3637))
- Decrease outgoing webhook timeouts from 10secs to 4secs by @joeyorlando ([#3639](https://github.com/grafana/oncall/pull/3639))
- Add stack slug to `/organization` endpoint response by @Ferril ([#3644](https://github.com/grafana/oncall/pull/3644))
- Moved Mobile Connection Tab to separate user profile in Grafana ([#3296](https://github.com/grafana/oncall/pull/3296)

### Fixed

- Address HTTP 500s occurring when receiving messages from Telegram user in a discussion group by @joeyorlando ([#3622](https://github.com/grafana/oncall/pull/3622))
- Fix `module 'apps.schedules.tasks.notify_about_empty_shifts_in_schedule' has no attribute 'apply_async'`
  `AttributeError` by @joeyorlando ([#3640](https://github.com/grafana/oncall/pull/3640))

## v1.3.83 (2024-01-08)

### Changed

- Move Insights to OnCall as a separate page ([#2382](https://github.com/grafana/oncall-private/issues/2382))
- Allow mobile app to access paging endpoint @imtoori ([#3619](https://github.com/grafana/oncall/pull/3619))
- Create log record when there is a telegram formatting error in notification ([#3628](https://github.com/grafana/oncall/pull/3628))

### Fixed

- Fixed schedule timezone issues ([#3576](https://github.com/grafana/oncall/issues/3576))
- Ignore `requests.exceptions.Timeout` exceptions when attempting to send outgoing webhook requests by @joeyorlando ([#3632](https://github.com/grafana/oncall/pull/3632))

## v1.3.82 (2024-01-04)

### Added

- Add ability to create an Outgoing Webhook with the PATCH HTTP method via the UI by @joeyorlando ([#3604](https://github.com/grafana/oncall/pull/3604))

### Changed

- Handle message to reply to not found in Telegram send log ([#3587](https://github.com/grafana/oncall/pull/3587))
- Upgrade mobx lib to the latest version 6.12.0 ([#3453](https://github.com/grafana/oncall/issues/3453))
- Add task lock to avoid running multiple sync_organization tasks in parallel for the same org ([#3612](https://github.com/grafana/oncall/pull/3612))

## v1.3.81 (2023-12-28)

### Added

- Support e2e tests in Tilt and Makefile ([#3516](https://github.com/grafana/oncall/pull/3516))
- Support PATCH method for outgoing webhooks by @ravishankar15 ([#3580](https://github.com/grafana/oncall/pull/3580))

### Changed

- Limit acknowledge reminders to stop repeating after 1 month @mderynck ([#3571](https://github.com/grafana/oncall/pull/3571))

### Fixed

- Check reason to skip notification in Slack to avoid task perform_notification retries @Ferril ([#3562](https://github.com/grafana/oncall/pull/3562))
- Fix alert group table columns validation @Ferril ([#3577](https://github.com/grafana/oncall/pull/3577))
- Fix posting message about rate limit to Slack @Ferril ([#3582](https://github.com/grafana/oncall/pull/3582))
- Fix issue with parsing sender email address from email message for inbound email integration endpoint @Ferril ([#3586](https://github.com/grafana/oncall/pull/3586))
- Fix PUT /api/v1/escalation_policies/id issue when updating `from_time` and `to_time` by @joeyorlando ([#3581](https://github.com/grafana/oncall/pull/3581))
- Fix issue where duplicate team options would show up in the teams dropdown for the `/escalate` Slack command
  by @joeyorlando ([#3590](https://github.com/grafana/oncall/pull/3590))

## v1.3.80 (2023-12-14)

### Added

- Create success log records for delivered personal notifications ([3557](https://github.com/grafana/oncall/pull/3557))

## v1.3.79 (2023-12-14)

### Added

- Add backend for multi-stack support for mobile-app @Ferril ([#3500](https://github.com/grafana/oncall/pull/3500))

## v1.3.78 (2023-12-12)

### Changed

- Add error code for mobile push notification logs when device is not set up @Ferril ([#3554](https://github.com/grafana/oncall/pull/3554))

### Fixed

- Fix issue when mobile push notification message is too big @Ferril ([#3556](https://github.com/grafana/oncall/pull/3556)

## v1.3.77 (2023-12-11)

### Fixed

- Fix schedules invalid dates issue ([#support-escalations/issues/8084](https://github.com/grafana/support-escalations/issues/8084))
- Fix issue related to updating alert group metrics when deleting an alert group via the public API by @joeyorlando ([#3544](https://github.com/grafana/oncall/pull/3544))
- Fix issue with `amazon_ses` inbound email ESP provider by @Lutseslav ([#3509](https://github.com/grafana/oncall/pull/3509))

## v1.3.76 (2023-12-11)

### Fixed

– Fix minor UI bugs

## v1.3.75 (2023-12-08)

### Fixed

- Fix setting integration team to default on update @Ferril ([#3530](https://github.com/grafana/oncall/pull/3530))

## v1.3.74 (2023-12-06)

### Fixed

- Fix missing timestamp value in old grafana API endpoint ([#3522](https://github.com/grafana/oncall/pull/3522))

## v1.3.73 (2023-12-06)

### Added

- Track alert received timestamp on alert group creation ([#3513](https://github.com/grafana/oncall/pull/3513))

## v1.3.72 (2023-12-05)

### Fixed

- Address metrics calculation issue which occurred when `USE_REDIS_CLUSTER` env var was set by @joeyorlando ([#3510](https://github.com/grafana/oncall/pull/3510))

## v1.3.71 (2023-12-05)

### Added

- Add `datetimeformat_as_timezone` Jinja2 template helper filter by @jorgeav ([#3426](https://github.com/grafana/oncall/pull/3426))

### Changed

- Disallow creating and deleting direct paging integrations by @vadimkerr ([#3475](https://github.com/grafana/oncall/pull/3475))
- Renamed "Connections" tab to "Monitoring Systems" and "Direct Paging" to "Manual Direct Paging" on Integrations page

## v1.3.70 (2023-12-01)

Maintenance release

## v1.3.69 (2023-12-01)

Maintenance release + bugfixes

## v1.3.68 (2023-11-30)

### Fixed

- Create missing direct paging integrations on organization sync by @vadimkerr ([#3468](https://github.com/grafana/oncall/pull/3468))

## v1.3.67 (2023-11-30)

Minor bugfixes + dependency updates :)

## v1.3.66 (2023-11-30)

### Fixed

- Delete duplicate direct paging integrations by @vadimkerr ([#3412](https://github.com/grafana/oncall/pull/3412))

## v1.3.65 (2023-11-29)

### Added

- Add options to customize table columns in AlertGroup page ([3281](https://github.com/grafana/oncall/pull/3281))
- Add proxying capabilities for the OnCall mobile API by @joeyorlando ([#3449](https://github.com/grafana/oncall/pull/3449))

### Fixed

- User profile UI tweaks ([#3443](https://github.com/grafana/oncall/pull/3443))
- Ensure stack_id and org_id are ints @mderynck [(#3458](https://github.com/grafana/oncall/pull/3458))

## v1.3.64 (2023-11-28)

### Fixed

- Fix excess usage of bots_info slack api call to avoid ratelimits ([#3440](https://github.com/grafana/oncall/pull/3440))

## v1.3.63 (2023-11-28)

### Added

- Add ability to use Grafana Service Account Tokens for OnCall API (This is only enabled for resolution_notes
  endpoint currently) @mderynck ([#3189](https://github.com/grafana/oncall/pull/3189))
- Add ability for webhook presets to mask sensitive headers @mderynck
  ([#3189](https://github.com/grafana/oncall/pull/3189))

### Changed

- Use instance ID for cloud Grafana service token auth @mderynck ([#3435](https://github.com/grafana/oncall/pull/3435))

### Fixed

- Fixed issue that blocked saving webhooks with presets if the preset is controlling the URL @mderynck
  ([#3189](https://github.com/grafana/oncall/pull/3189))
- User filter doesn't display current value on Alert Groups page ([1714](https://github.com/grafana/oncall/issues/1714))
- Remove displaying rotation modal for Terraform/API based schedules
- Filters polishing ([3183](https://github.com/grafana/oncall/issues/3183))
- Fixed permissions so User settings reader role included list users @mderynck ([#3419](https://github.com/grafana/oncall/pull/3419))
- Fixed alert group rendering when some links were broken because of replacing `-` to `_` @Ferril ([#3424](https://github.com/grafana/oncall/pull/3424))
- Make telegram on_alert_group_action_triggered asynchronous([#3471](https://github.com/grafana/oncall/pull/3471))

## v1.3.62 (2023-11-21)

### Added

- Add builtin slack retry on ratelimited error ([#3401](https://github.com/grafana/oncall/pull/3401))

### Changed

- Add integration id to alert creation logging @mderynck ([#3392](https://github.com/grafana/oncall/pull/3392))

## v1.3.61 (2023-11-21)

### Fixed

- Fix deleting integrations with duplicate names by @vadimkerr ([#3397](https://github.com/grafana/oncall/pull/3397))

## v1.3.60 (2023-11-20)

### Fixed

- Fixes forwarding of Amazon SNS headers @mderynck ([#3371](https://github.com/grafana/oncall/pull/3371))
- Fixes issue when using the `/escalate` Slack command and selecting a team by @joeyorlando ([#3381](https://github.com/grafana/oncall/pull/3381))
- Fix issue when RBAC is enabled where Viewers with "Notifications Receiver" role do not properly show up in schedule
  rotations by @joeyorlando ([#3378](https://github.com/grafana/oncall/pull/3378))

## v1.3.59 (2023-11-16)

### Added

- Populate `users` field of the public Shift GET API with `rolling_users` from the type override created from web UI([#3303](https://github.com/grafana/oncall/pull/3303))
- Do not retry to update slack user group on every API error ([#3363](https://github.com/grafana/oncall/pull/3363))
- Allow specifying a comma-separated list of redis-servers to the `REDIS_URI` engine environment variable by @joeyorlando
  ([#3368](https://github.com/grafana/oncall/pull/3368))

### Fixed

- Fixed recurrency limit issue in the Rotation Modal ([#3358](https://github.com/grafana/oncall/pull/3358))
- Added dragging boundary constraints for Rotation Modal and show scroll for the users list ([#3365](https://github.com/grafana/oncall/pull/3365))
- Delete direct paging integration on team delete by @vadimkerr ([#3367](https://github.com/grafana/oncall/pull/3367))

## v1.3.58 (2023-11-14)

### Added

- Added user timezone field to the users public API response ([#3311](https://github.com/grafana/oncall/pull/3311))
- Allow filtering users by public primary key in internal API ([#3339](https://github.com/grafana/oncall/pull/3339))

### Changed

- Split Integrations table into Connections and Direct Paging tabs ([#3290](https://github.com/grafana/oncall/pull/3290))

### Fixed

- Fix issue where Slack user connection error message is sometimes shown despite successful connection by @joeyorlando ([#3327](https://github.com/grafana/oncall/pull/3327))
- Forward headers for Amazon SNS when organizations are moved @mderynck ([#3326](https://github.com/grafana/oncall/pull/3326))
- Fix styling when light theme is turned on via system preferences
  by excluding dark theme css vars in this case ([#3336](https://github.com/grafana/oncall/pull/3336))
- Fix issue when acknowledge reminder works for deleted organizations @Ferril ([#3345](https://github.com/grafana/oncall/pull/3345))
- Fix generating QR code ([#3347](https://github.com/grafana/oncall/pull/3347))

## v1.3.57 (2023-11-10)

### Fixed

- Fix AmazonSNS integration to handle exceptions the same as other integrations @mderynck ([#3315](https://github.com/grafana/oncall/pull/3315))

## v1.3.56 (2023-11-10)

## v1.3.55 (2023-11-07)

### Changed

- Unify naming of Grafana Cloud / Cloud OnCall / Grafana Cloud OnCall
  so that it's always Grafana Cloud OnCall ([#3279](https://github.com/grafana/oncall/pull/3279))

### Fixed

- Fix escalation policy importance going back to default by @vadimkerr ([#3282](https://github.com/grafana/oncall/pull/3282))
- Improve user permissions query ([#3291](https://github.com/grafana/oncall/pull/3291))

## v1.3.54 (2023-11-06)

### Added

- Add `b64decode` Jinja2 template helper filter by @jorgeav ([#3242](https://github.com/grafana/oncall/pull/3242))

## v1.3.53 (2023-11-03)

### Fixed

- Fix db migration for mobile app @Ferril ([#3260](https://github.com/grafana/oncall/pull/3260))

## v1.3.52 (2023-11-02)

### Fixed

- Address `TypeError` that occurs under some scenarios on the Alert Group detail page

### Changed

- Change wording for push notifications timing choices @Ferril ([#3253](https://github.com/grafana/oncall/pull/3253))

## v1.3.51 (2023-11-02)

### Fixed

- Postpone Legacy AlertManager and Grafana Alerting integration auto-migration date ([3250])(<https://github.com/grafana/oncall/pull/3250>)

## v1.3.50 (2023-11-02)

### Fixed

- Return alert groups for deleted integrations on private api ([3223](https://github.com/grafana/oncall/pull/3223))

## v1.3.49 (2023-10-31)

### Changed

- Removed the hardcoding of page size on frontend ([#3205](https://github.com/grafana/oncall/pull/3205))
- Prevent additional polling on Incidents if the previous request didn't complete
  ([#3205](https://github.com/grafana/oncall/pull/3205))
- Order results from `GET /teams` internal API endpoint by ascending name by @joeyorlando ([#3220](https://github.com/grafana/oncall/pull/3220))
- Order alert groups internal API endpoint by descending started_at by @mderynck ([#3240](https://github.com/grafana/oncall/pull/3240))

### Fixed

- Improve slow `GET /users` + `GET /teams` internal API endpoints by @joeyorlando ([#3220](https://github.com/grafana/oncall/pull/3220))
- Fix search issue when searching for teams in the add responders popup window by @joeyorlando ([#3220](https://github.com/grafana/oncall/pull/3220))
- CSS changes to add responders dropdown to fix long search results list by @joeyorlando ([#3220](https://github.com/grafana/oncall/pull/3220))
- Do not allow to update terraform-based shifts in web UI schedule API ([#3224](https://github.com/grafana/oncall/pull/3224))

## v1.3.48 (2023-10-30)

### Added

- Data type changed from `DateField` to `DateTimeField` on the `final_shifts` API endpoint. Endpoint now accepts either
  a date or a datetime ([#3103](https://github.com/grafana/oncall/pull/3103))

### Changed

- Simplify Direct Paging workflow. Now when using Direct Paging you either simply specify a team, or one or more users
  to page by @joeyorlando ([#3128](https://github.com/grafana/oncall/pull/3128))
- Enable timing options for mobile push notifications, allow multi-select by @Ferril ([#3187](https://github.com/grafana/oncall/pull/3187))

### Fixed

- Fix RBAC authorization bugs related to interacting with Alert Group Slack messages by @joeyorlando ([#3213](https://github.com/grafana/oncall/pull/3213))

## v1.3.47 (2023-10-25)

### Fixed

- Add filtering term length check for channel filter endpoints @Ferril ([#3192](https://github.com/grafana/oncall/pull/3192))

## v1.3.46 (2023-10-23)

### Added

- Check for basic role permissions on get/create/update labels @Ferril ([#3173](https://github.com/grafana/oncall/pull/3173))

### Fixed

- Discard old pending network requests in the UI (Users/Schedules) [#3172](https://github.com/grafana/oncall/pull/3172)
- Fix resolution note source for mobile app by @vadimkerr ([#3174](https://github.com/grafana/oncall/pull/3174))
- Fix iCal imported schedules related users and next shifts per user ([#3178](https://github.com/grafana/oncall/pull/3178))
- Fix references to removed access control functions in Grafana @mderynck ([#3184](https://github.com/grafana/oncall/pull/3184))

### Changed

- Upgrade Django to 4.2.6 and update iCal related deps ([#3176](https://github.com/grafana/oncall/pull/3176))

## v1.3.45 (2023-10-19)

### Added

- Use shift data from event object
- Update shifts public API to improve web shifts support ([#3165](https://github.com/grafana/oncall/pull/3165))

### Fixed

- Update ical schedule creation/update to trigger final schedule refresh ([#3156](https://github.com/grafana/oncall/pull/3156))
- Handle None role when syncing users from Grafana ([#3147](https://github.com/grafana/oncall/pull/3147))
- Polish "Build 'When I am on-call' for web UI" [#2915](https://github.com/grafana/oncall/issues/2915)
- Fix iCal schedule incorrect view [#2001](https://github.com/grafana/oncall-private/issues/2001)
- Fix rotation name rendering issue [#2324](https://github.com/grafana/oncall/issues/2324)

### Changed

- Add user TZ information to next shifts per user endpoint ([#3157](https://github.com/grafana/oncall/pull/3157))

## v1.3.44 (2023-10-16)

### Added

- Update plugin OnCaller role permissions ([#3145](https://github.com/grafana/oncall/pull/3145))
- Add labels implementation for OnCall integrations under the feature flag ([#3014](https://github.com/grafana/oncall/pull/3014))

### Fixed

- Fix plugin status to always return URL with trailing / @mderynck ([#3122](https://github.com/grafana/oncall/pull/3122))

## v1.3.43 (2023-10-05)

### Added

- Make it possible to acknowledge/unacknowledge and resolve/unresolve alert groups via API by @vadimkerr ([#3108](https://github.com/grafana/oncall/pull/3108))

### Changed

- Improve alert group deletion API by @vadimkerr ([#3124](https://github.com/grafana/oncall/pull/3124))
- Removed Integrations Name max characters limit
  ([#3123](https://github.com/grafana/oncall/pull/3123))
- Truncate long table rows (Integration Name/Alert Group) and show tooltip for the truncated content
  ([#3123](https://github.com/grafana/oncall/pull/3123))

## v1.3.42 (2023-10-04)

### Added

- Add additional shift info in schedule filter_events internal API ([#3110](https://github.com/grafana/oncall/pull/3110))

## v1.3.41 (2023-10-04)

### Added

- New RBAC action `grafana-oncall-app.alert-groups:direct-paging` and role "Alert Groups Direct Paging" by @joeyorlando
  ([#3107](https://github.com/grafana/oncall/pull/3107))

### Fixed

- Accept empty and null user when updating webhook via API @mderynck ([#3094](https://github.com/grafana/oncall/pull/3094))
- Fix slack notification for a shift which end is affected by a taken swap ([#3092](https://github.com/grafana/oncall/pull/3092))

## v1.3.40 (2023-09-28)

### Added

- Create Direct Paging integration by default for every team, create default E-Mail notification policy for every user ([#3064](https://github.com/grafana/oncall/pull/3064))

## v1.3.39 (2023-09-27)

### Added

- Presets for webhooks @mderynck ([#2996](https://github.com/grafana/oncall/pull/2996))
- Add `enable_web_overrides` option to schedules public API ([#3062](https://github.com/grafana/oncall/pull/3062))

### Fixed

- Fix regression in public actions endpoint handling user field by @mderynck ([#3053](https://github.com/grafana/oncall/pull/3053))

### Changed

- Rework how users are fetched from DB when getting users from schedules ical representation ([#3067](https://github.com/grafana/oncall/pull/3067))

## v1.3.38 (2023-09-19)

### Fixed

- Fix Slack access token length issue by @toolchainX ([#3016](https://github.com/grafana/oncall/pull/3016))
- Fix shifts for current user internal endpoint to return the right shift PK ([#3036](https://github.com/grafana/oncall/pull/3036))
- Handle Slack ratelimit on alert group deletion by @vadimkerr ([#3038](https://github.com/grafana/oncall/pull/3038))

## v1.3.37 (2023-09-12)

### Added

- Notify user via Slack/mobile push-notification when their shift swap request is taken by @joeyorlando ([#2992](https://github.com/grafana/oncall/pull/2992))
- Unify breadcrumbs behaviour with other Grafana Apps and main core# ([1906](https://github.com/grafana/oncall/issues/1906))

### Changed

- Improve Slack error handling by @vadimkerr ([#3000](https://github.com/grafana/oncall/pull/3000))

### Fixed

- Avoid task retries because of missing AlertGroupLogRecord on send_alert_group_signal ([#3001](https://github.com/grafana/oncall/pull/3001))
- Update escalation policies public API to handle new webhooks ([#2999](https://github.com/grafana/oncall/pull/2999))

## v1.3.36 (2023-09-07)

### Added

- Add option to create new contact point for existing integrations ([#2909](https://github.com/grafana/oncall/issues/2909))

### Changed

- Enable email notification step by default on Helm by @vadimkerr ([#2975](https://github.com/grafana/oncall/pull/2975))
- Handle slack resolution note errors consistently ([#2976](https://github.com/grafana/oncall/pull/2976))

### Fixed

- Don't update Slack user groups for deleted organizations by @vadimkerr ([#2985](https://github.com/grafana/oncall/pull/2985))
- Fix Slack integration leftovers after disconnecting by @vadimkerr ([#2986](https://github.com/grafana/oncall/pull/2986))
- Fix handling Slack rate limits by @vadimkerr ([#2991](https://github.com/grafana/oncall/pull/2991))

## v1.3.35 (2023-09-05)

### Fixed

- Fix issue in `SlackClientWithErrorHandling` paginted API calls by @joeyorlando

## v1.3.34 (2023-09-05)

### Fixed

- Fix issue in `apps.slack.tasks.populate_slack_channels_for_team` task by @joeyorlando ([#2969](https://github.com/grafana/oncall/pull/2969))

## v1.3.33 (2023-09-05)

### Fixed

- Fix issue in `apps.slack.tasks.post_or_update_log_report_message_task` task related to passing tuple to `text` arg
  for `SlackClient.chat_postMessage` method by @joeyorlando ([#2966](https://github.com/grafana/oncall/pull/2966))

## v1.3.32 (2023-09-05)

### Added

- Add internal API endpoint for getting schedules shifts for current user by @Ferril ([#2928](https://github.com/grafana/oncall/pull/2928))

### Changed

- Make Slack integration not post an alert group message if it's already deleted + refactor AlertGroup and
  SlackMessage foreign key relationship by @vadimkerr ([#2957](https://github.com/grafana/oncall/pull/2957))

### Fixed

- Reject file uploads when POSTing to an integration endpoint ([#2958](https://github.com/grafana/oncall/pull/2958))

## v1.3.31 (2023-09-04)

### Fixed

- Fix for Cloud plugin install not refreshing page after completion ([2974](https://github.com/grafana/oncall/issues/2874))
- Fix escalation snapshot building if user was deleted @Ferril ([#2954](https://github.com/grafana/oncall/pull/2954))

### Added

- ([Use Tilt for local development](https://github.com/grafana/oncall/pull/1396))

### Changed

- Update slack schedule shift-changed notification ([#2949](https://github.com/grafana/oncall/pull/2949))

## v1.3.30 (2023-08-31)

### Added

- Add optional param to expand user details in shift swaps internal endpoints ([#2923](https://github.com/grafana/oncall/pull/2923))

### Changed

- Update Shift Swap Request Slack message formatting by @joeyorlando ([#2918](https://github.com/grafana/oncall/pull/2918))
- Performance and UX tweaks to integrations page ([#2869](https://github.com/grafana/oncall/pull/2869))
- Expand users details in filter swaps internal endpoint ([#2921](https://github.com/grafana/oncall/pull/2921))
- Truncate exported final shifts to match the requested period ([#2924](https://github.com/grafana/oncall/pull/2924))

### Fixed

- Fix issue with helm chart when specifying `broker.type=rabbitmq` where Redis environment variables
  were not longer being injected by @joeyorlando ([#2927](https://github.com/grafana/oncall/pull/2927))
- Fix silence for alert groups with empty escalation chain @Ferril ([#2929](https://github.com/grafana/oncall/pull/2929))
- Fixed NPE when migrating legacy Grafana Alerting integrations ([#2908](https://github.com/grafana/oncall/issues/2908))
- Fix `IntegrityError` exceptions that occasionally would occur when trying to create `ResolutionNoteSlackMessage`
  objects by @joeyorlando ([#2933](https://github.com/grafana/oncall/pull/2933))

## v1.3.29 (2023-08-29)

### Fixed

- Fix metrics calculation and OnCall dashboard, rename dashboard @Ferril ([#2895](https://github.com/grafana/oncall/pull/2895))
- Fix slack schedule notification settings dialog ([#2902](https://github.com/grafana/oncall/pull/2902))

## v1.3.28 (2023-08-29)

### Changed

- Switch engine to alpine base image ([2872](https://github.com/grafana/oncall/pull/2872))

### Added

- Visualization of shift swap requests in Overrides and swaps section ([#2844](https://github.com/grafana/oncall/issues/2844))

### Fixed

- Address bug when a Shift Swap Request is accepted either via the web or mobile UI, and the Slack message is not
  updated to reflect the latest state by @joeyorlando ([#2886](https://github.com/grafana/oncall/pull/2886))
- Fix issue where Grafana integration would fail to parse alerting config for routes without receivers @mderynck
  ([#2894](https://github.com/grafana/oncall/pull/2894))

## v1.3.27 (2023-08-25)

### Added

- Public API for webhooks @mderynck ([#2790](https://github.com/grafana/oncall/pull/2790))
- Use Telegram polling protocol instead of a webhook if `FEATURE_TELEGRAM_LONG_POLLING_ENABLED` set to `True` by @alexintech
  ([#2250](https://github.com/grafana/oncall/pull/2250))

### Changed

- Public API for actions now wraps webhooks @mderynck ([#2790](https://github.com/grafana/oncall/pull/2790))
- Allow mobile app to access status endpoint @mderynck ([#2791](https://github.com/grafana/oncall/pull/2791))
- Enable shifts export endpoint for all schedule types ([#2863](https://github.com/grafana/oncall/pull/2863))
- Use priority field to track primary/overrides calendar in schedule iCal export ([#2871](https://github.com/grafana/oncall/pull/2871))

### Fixed

- Fix public api docs for escalation policies by @Ferril ([#2830](https://github.com/grafana/oncall/pull/2830))

## v1.3.26 (2023-08-22)

### Changed

- Increase mobile app verification token TTL by @joeyorlando ([#2859](https://github.com/grafana/oncall/pull/2859))

### Fixed

- Changed HTTP Endpoint to Email for inbound email integrations
  ([#2816](https://github.com/grafana/oncall/issues/2816))
- Enable inbound email feature flag by default by @vadimkerr ([#2846](https://github.com/grafana/oncall/pull/2846))
- Fixed initial search on Users page ([#2842](https://github.com/grafana/oncall/issues/2842))

## v1.3.25 (2023-08-18)

### Changed

- Improve Grafana Alerting integration by @Ferril @teodosii ([#2742](https://github.com/grafana/oncall/pull/2742))
- Fixed UTC conversion for escalation chain step of timerange
  ([#2781](https://github.com/grafana/oncall/issues/2781))

### Fixed

- Check for possible split events in range when resolving schedule ([#2828](https://github.com/grafana/oncall/pull/2828))

## v1.3.24 (2023-08-17)

### Added

- Shift swap requests public API ([#2775](https://github.com/grafana/oncall/pull/2775))
- Shift swap request Slack follow-ups by @vadimkerr ([#2798](https://github.com/grafana/oncall/pull/2798))
- Shift swap request push notification follow-ups by @vadimkerr ([#2805](https://github.com/grafana/oncall/pull/2805))

### Changed

- Improve default AlertManager template ([#2794](https://github.com/grafana/oncall/pull/2794))

### Fixed

- Ignore ical cancelled events when calculating shifts ([#2776](https://github.com/grafana/oncall/pull/2776))
- Fix Slack acknowledgment reminders by @vadimkerr ([#2769](https://github.com/grafana/oncall/pull/2769))
- Fix issue with updating "Require resolution note" setting by @Ferril ([#2782](https://github.com/grafana/oncall/pull/2782))
- Don't send notifications about past SSRs when turning on info notifications by @vadimkerr ([#2783](https://github.com/grafana/oncall/pull/2783))
- Add schedule shift type validation on create/preview ([#2789](https://github.com/grafana/oncall/pull/2789))
- Add alertmanager integration for heartbeat support ([2807](https://github.com/grafana/oncall/pull/2807))

## v1.3.23 (2023-08-10)

### Added

- Shift Swap Requests Web UI ([#2593](https://github.com/grafana/oncall/issues/2593))
- Final schedule shifts should lay in one line ([#1665](https://github.com/grafana/oncall/issues/1665))
- Add backend support for push notification sounds with custom extensions by @vadimkerr ([#2759](https://github.com/grafana/oncall/pull/2759))

### Changed

- Add stack slug to organization options for direct paging Slash command by @vadimkerr ([#2743](https://github.com/grafana/oncall/pull/2743))
- Avoid creating (or notifying about) potential event splits resulting from untaken swap requests ([#2748](https://github.com/grafana/oncall/pull/2748))
- Refactor heartbeats into a periodic task ([2723](https://github.com/grafana/oncall/pull/2723))

### Fixed

- Do not show override shortcut when web overrides are disabled ([#2745](https://github.com/grafana/oncall/pull/2745))
- Handle ical schedule import with duplicated event UIDs ([#2760](https://github.com/grafana/oncall/pull/2760))
- Allow Editor to access Phone Verification ([#2772](https://github.com/grafana/oncall/pull/2772))

## v1.3.22 (2023-08-03)

### Added

- Add mobile app push notifications for shift swap requests by @vadimkerr ([#2717](https://github.com/grafana/oncall/pull/2717))

### Changed

- Skip past due swap requests when calculating events ([2718](https://github.com/grafana/oncall/pull/2718))
- Update schedule slack notifications to use schedule final events by @Ferril ([#2710](https://github.com/grafana/oncall/pull/2710))

### Fixed

- Fix schedule final_events datetime filtering when splitting override ([#2715](https://github.com/grafana/oncall/pull/2715))
- Fix swap requests event filter limits in schedule events ([#2716](https://github.com/grafana/oncall/pull/2716))
- Fix Alerting contact point auto-creation ([2721](https://github.com/grafana/oncall/pull/2721))

## v1.3.21 (2023-08-01)

### Added

- [Helm] Add `extraContainers` for engine, celery and migrate-job pods to define sidecars by @lu1as ([#2650](https://github.com/grafana/oncall/pull/2650))
  – Rework of AlertManager integration ([#2643](https://github.com/grafana/oncall/pull/2643))

## v1.3.20 (2023-07-31)

### Added

- Add filter_shift_swaps endpoint to schedules API ([#2684](https://github.com/grafana/oncall/pull/2684))
- Add shifts endpoint to shift swap API ([#2697](https://github.com/grafana/oncall/pull/2697/))

### Fixed

- Fix helm env variable validation logic when specifying Twilio auth related values by @njohnstone2 ([#2674](https://github.com/grafana/oncall/pull/2674))
- Fixed mobile app verification not sending SMS to phone number ([#2687](https://github.com/grafana/oncall/issues/2687))

## v1.3.19 (2023-07-28)

### Fixed

- Fix one of the latest migrations failing on SQLite by @vadimkerr ([#2680](https://github.com/grafana/oncall/pull/2680))

### Added

- Apply swap requests details to schedule events ([#2677](https://github.com/grafana/oncall/pull/2677))

## v1.3.18 (2023-07-28)

### Changed

- Update the direct paging feature to page for acknowledged & silenced alert groups,
  and show a warning for resolved alert groups by @vadimkerr ([#2639](https://github.com/grafana/oncall/pull/2639))
- Change calls to get instances from GCOM to paginate by @mderynck ([#2669](https://github.com/grafana/oncall/pull/2669))
- Update checking on-call users to use schedule final events ([#2651](https://github.com/grafana/oncall/pull/2651))

### Fixed

- Remove checks delaying plugin load and cause "Initializing plugin..." ([2624](https://github.com/grafana/oncall/pull/2624))
- Fix "Continue escalation if >X alerts per Y minutes" escalation step by @vadimkerr ([#2636](https://github.com/grafana/oncall/pull/2636))
- Post to Telegram ChatOps channel option is not showing in the integrations page
  by @alexintech ([#2498](https://github.com/grafana/oncall/pull/2498))

## v1.3.17 (2023-07-25)

### Added

- Added banner on the ChatOps screen for OSS to let the user know if no chatops integration is enabled
  ([#1735](https://github.com/grafana/oncall/issues/1735))
- Add `rbac_enabled` to `GET /api/internal/v1/current_team` response schema + `rbac_permissions` to `GET /api/internal/v1/user`
  response schema by @joeyorlando ([#2611](https://github.com/grafana/oncall/pull/2611))

### Fixed

- Bring heartbeats back to UI by @maskin25 ([#2550](https://github.com/grafana/oncall/pull/2550))
- Address issue when Grafana feature flags which were enabled via the `feature_flags.enabled` were only properly being
  parsed, when they were space-delimited. This fix allows them to be _either_ space or comma-delimited.
  by @joeyorlando ([#2623](https://github.com/grafana/oncall/pull/2623))

## v1.3.16 (2023-07-21)

### Added

- Allow persisting mobile app's timezone, to allow for more accurate datetime related notifications by @joeyorlando
  ([#2601](https://github.com/grafana/oncall/pull/2601))
- Add filter integrations by type ([2609](https://github.com/grafana/oncall/pull/2609))

### Changed

- Update direct paging docs by @vadimkerr ([#2600](https://github.com/grafana/oncall/pull/2600))
- Improve APIs for creating/updating direct paging integrations by @vadimkerr ([#2603](https://github.com/grafana/oncall/pull/2603))
- Remove unnecessary team checks in public API by @vadimkerr ([#2606](https://github.com/grafana/oncall/pull/2606))

### Fixed

- Fix Slack direct paging issue when there are more than 100 schedules by @vadimkerr ([#2594](https://github.com/grafana/oncall/pull/2594))
- Fix webhooks unable to be copied if they contain password or authorization header ([#2608](https://github.com/grafana/oncall/pull/2608))

## v1.3.15 (2023-07-19)

### Changed

- Deprecate `AlertGroup.is_archived` column. Column will be removed in a subsequent release. By @joeyorlando ([#2524](https://github.com/grafana/oncall/pull/2524)).
- Update Slack "invite" feature to use direct paging by @vadimkerr ([#2562](https://github.com/grafana/oncall/pull/2562))
- Change "Current responders" to "Additional Responders" in web UI by @vadimkerr ([#2567](https://github.com/grafana/oncall/pull/2567))

### Fixed

- Fix duplicate orders on routes and escalation policies by @vadimkerr ([#2568](https://github.com/grafana/oncall/pull/2568))
- Fixed Slack channels sync by @Ferril ([#2571](https://github.com/grafana/oncall/pull/2571))
- Fixed rendering of slack connection errors ([#2526](https://github.com/grafana/oncall/pull/2526))

## v1.3.14 (2023-07-17)

### Changed

- Added `PHONE_PROVIDER` configuration check by @sreway ([#2523](https://github.com/grafana/oncall/pull/2523))
- Deprecate `/oncall` Slack command, update direct paging functionality by @vadimkerr ([#2537](https://github.com/grafana/oncall/pull/2537))
- Change plugin version to drop the `v` prefix. ([#2540](https://github.com/grafana/oncall/pull/2540))

## v1.3.13 (2023-07-17)

### Changed

- Remove deprecated `heartbeat.HeartBeat` model/table by @joeyorlando ([#2534](https://github.com/grafana/oncall/pull/2534))

## v1.3.12 (2023-07-14)

### Added

- Add `page_size`, `current_page_number`, and `total_pages` attributes to paginated API responses by @joeyorlando ([#2471](https://github.com/grafana/oncall/pull/2471))

### Fixed

- New webhooks incorrectly masking authorization header by @mderynck ([#2541](https://github.com/grafana/oncall/pull/2541))

## v1.3.11 (2023-07-13)

### Added

- Release new webhooks functionality by @mderynck @matiasb @maskin25 @teodosii @raphael-batte ([#1830](https://github.com/grafana/oncall/pull/1830))

### Changed

- Custom button webhooks are deprecated, they will be automatically migrated to new webhooks. ([#1830](https://github.com/grafana/oncall/pull/1830))

## v1.3.10 (2023-07-13)

### Added

- [Helm] Added ability to specify `resources` definition within the `wait-for-db` init container by @Shelestov7
  ([#2501](https://github.com/grafana/oncall/pull/2501))
- Added index on `started_at` column in `alerts_alertgroup` table. This substantially speeds up query used by the `check_escalation_finished_task`
  task. By @joeyorlando and @Konstantinov-Innokentii ([#2516](https://github.com/grafana/oncall/pull/2516)).

### Changed

- Deprecated `/maintenance` web UI page. Maintenance is now handled at the integration level and can be performed
  within a single integration's page. by @Ukochka ([#2497](https://github.com/grafana/oncall/issues/2497))

### Fixed

- Fixed a bug in the integration maintenance mode workflow where a user could not start/stop an integration's
  maintenance mode by @joeyorlando ([#2511](https://github.com/grafana/oncall/issues/2511))
- Schedules: Long popup does not fit screen & buttons unreachable & objects outside of the popup [#1002](https://github.com/grafana/oncall/issues/1002)
- New schedules white theme issues [#2356](https://github.com/grafana/oncall/issues/2356)

## v1.3.9 (2023-07-12)

### Added

- Bring new Jinja editor to webhooks ([#2344](https://github.com/grafana/oncall/issues/2344))

### Fixed

- Add debounce on Select UI components to avoid making API search requests on each key-down event by
  @maskin25 ([#2466](https://github.com/grafana/oncall/pull/2466))
- Make Direct paging integration configurable ([2483](https://github.com/grafana/oncall/pull/2483))

## v1.3.8 (2023-07-11)

### Added

- Add `event.users.avatar_full` field to `GET /api/internal/v1/schedules/{schedule_id}/filter_events`
  payload by @joeyorlando ([#2459](https://github.com/grafana/oncall/pull/2459))
- Add `affinity` and `tolerations` for `celery` and `migrations` pods into helm chart + unit test for chart

### Changed

- Modified DRF pagination class used by `GET /api/internal/v1/alert_receive_channels` and `GET /api/internal/v1/schedules`
  endpoints so that the `next` and `previous` pagination links are properly set when OnCall is run behind
  a reverse proxy by @joeyorlando ([#2467](https://github.com/grafana/oncall/pull/2467))
- Polish user settings and warnings ([#2425](https://github.com/grafana/oncall/pull/2425))

### Fixed

- Address issue where we were improperly parsing Grafana feature flags that were enabled via the `feature_flags.enabled`
  method by @joeyorlando ([#2477](https://github.com/grafana/oncall/pull/2477))
- Fix cuddled list Markdown issue by @vadimkerr ([#2488](https://github.com/grafana/oncall/pull/2488))
- Fixed schedules slack notifications for deleted organizations ([#2493](https://github.com/grafana/oncall/pull/2493))

## v1.3.7 (2023-07-06)

### Changed

- OnCall Metrics dashboard update ([#2400](https://github.com/grafana/oncall/pull/2400))

## v1.3.6 (2023-07-05)

### Fixed

- Address issue where having multiple registered mobile apps for a user could lead to issues in delivering push
  notifications by @joeyorlando ([#2421](https://github.com/grafana/oncall/pull/2421))

## v1.3.5 (2023-07-05)

### Fixed

- Fix for phone provider initialization which can lead to an HTTP 500 on startup ([#2434](https://github.com/grafana/oncall/pull/2434))

## v1.3.4 (2023-07-05)

### Added

- Add full avatar URL for on-call users in schedule internal API by @vadimkerr ([#2414](https://github.com/grafana/oncall/pull/2414))
- Add phone call using the zvonok.com service by @sreway ([#2339](https://github.com/grafana/oncall/pull/2339))

### Changed

- UI drawer updates for webhooks2 ([#2419](https://github.com/grafana/oncall/pull/2419))
- Removed url from sms notification, changed format ([#2317](https://github.com/grafana/oncall/pull/2317))

## v1.3.3 (2023-06-29)

### Added

- Docs for `/resolution_notes` public api endpoint [#222](https://github.com/grafana/oncall/issues/222)

### Fixed

- Change alerts order for `/alert` public api endpoint [#1031](https://github.com/grafana/oncall/issues/1031)
- Change resolution notes order for `/resolution_notes` public api endpoint to show notes for the newest alert group
  on top ([#2404](https://github.com/grafana/oncall/pull/2404))
- Remove attempt to check token when editor/viewers are accessing the plugin @mderynck ([#2410](https://github.com/grafana/oncall/pull/2410))

## v1.3.2 (2023-06-29)

### Added

- Add metric "how many alert groups user was notified of" to Prometheus exporter ([#2334](https://github.com/grafana/oncall/pull/2334/))

### Changed

- Change permissions used during setup to better represent actions being taken by @mderynck ([#2242](https://github.com/grafana/oncall/pull/2242))
- Display 100000+ in stats when there are more than 100000 alert groups in the result ([#1901](https://github.com/grafana/oncall/pull/1901))
- Change OnCall plugin to use service accounts and api tokens for communicating with backend, by @mderynck ([#2385](https://github.com/grafana/oncall/pull/2385))
- RabbitMQ Docker image upgraded from 3.7.19 to 3.12.0 in `docker-compose-developer.yml` and
  `docker-compose-mysql-rabbitmq.yml`. **Note**: if you use one of these config files for your deployment
  you _may_ need to follow the RabbitMQ "upgrade steps" listed [here](https://rabbitmq.com/upgrade.html#rabbitmq-version-upgradability)
  by @joeyorlando ([#2359](https://github.com/grafana/oncall/pull/2359))

### Fixed

- For "You're Going OnCall" push notifications, show shift times in the user's configured timezone, otherwise UTC
  by @joeyorlando ([#2351](https://github.com/grafana/oncall/pull/2351))

## v1.3.1 (2023-06-26)

### Fixed

- Fix phone call & SMS relay by @vadimkerr ([#2345](https://github.com/grafana/oncall/pull/2345))

## v1.3.0 (2023-06-26)

### Added

- Secrets consistency for the chart. Bugfixing [#1016](https://github.com/grafana/oncall/pull/1016)

### Changed

- `telegram.webhookUrl` now defaults to `https://<base_url>` if not set
- UI Updates for the integrations page ([#2310](https://github.com/grafana/oncall/pull/2310))
- Prefer shift start when displaying rotation start value for existing shifts ([#2316](https://github.com/grafana/oncall/pull/2316))

### Fixed

- Fixed minor schedule preview issue missing last day ([#2316](https://github.com/grafana/oncall/pull/2316))

## v1.2.46 (2023-06-22)

### Added

- Make it possible to completely delete a rotation oncall ([#1505](https://github.com/grafana/oncall/issues/1505))
- Polish rotation modal form oncall ([#1506](https://github.com/grafana/oncall/issues/1506))
- Quick actions when editing a schedule oncall ([#1507](https://github.com/grafana/oncall/issues/1507))
- Enable schedule related profile settings oncall ([#1508](https://github.com/grafana/oncall/issues/1508))
- Highlight user shifts oncall ([#1509](https://github.com/grafana/oncall/issues/1509))
- Rename or Description for Schedules Rotations ([#1460](https://github.com/grafana/oncall/issues/1406))
- Add documentation for OnCall metrics exporter ([#2149](https://github.com/grafana/oncall/pull/2149))
- Add dashboard for OnCall metrics ([#1973](https://github.com/grafana/oncall/pull/1973))

## Changed

- Change mobile shift notifications title and subtitle by @imtoori ([#2288](https://github.com/grafana/oncall/pull/2288))
- Make web schedule updates to trigger sync refresh of its ical representation ([#2279](https://github.com/grafana/oncall/pull/2279))

## Fixed

- Fix duplicate orders for user notification policies by @vadimkerr ([#2278](https://github.com/grafana/oncall/pull/2278))
- Fix broken markup on alert group page, declutter, make time format consistent ([#2296](https://github.com/grafana/oncall/pull/2295))

## v1.2.45 (2023-06-19)

### Changed

- Change .Values.externalRabbitmq.passwordKey from `password` to `""` (default value `rabbitmq-password`) ([#864](https://github.com/grafana/oncall/pull/864))
- Remove deprecated `permissions` string array from the internal API user serializer by @joeyorlando ([#2269](https://github.com/grafana/oncall/pull/2269))

### Added

- Add `locale` column to mobile app user settings table by @joeyorlando [#2131](https://github.com/grafana/oncall/pull/2131)
- Update notification text for "You're going on call" push notifications to include information about the shift start
  and end times by @joeyorlando ([#2131](https://github.com/grafana/oncall/pull/2131))

### Fixed

- Handle non-UTC UNTIL datetime value when repeating ical events [#2241](https://github.com/grafana/oncall/pull/2241)
- Optimize AlertManager auto-resolve mechanism

## v1.2.44 (2023-06-14)

### Added

- Users with the Viewer basic role can now connect and use the mobile app ([#1892](https://github.com/grafana/oncall/pull/1892))
- Add helm chart support for redis and mysql existing secrets [#2156](https://github.com/grafana/oncall/pull/2156)

### Changed

- Removed `SlackActionRecord` model and database table by @joeyorlando [#2201](https://github.com/grafana/oncall/pull/2201)
- Require users when creating a schedule rotation using the web UI [#2220](https://github.com/grafana/oncall/pull/2220)

### Fixed

- Fix schedule shift preview to not breaking rotation shifts when there is overlap [#2218](https://github.com/grafana/oncall/pull/2218)
- Fix schedule list filter by type to allow considering multiple values [#2218](https://github.com/grafana/oncall/pull/2218)

## v1.2.43 (2023-06-12)

### Changed

- Propogate CI/CD changes

## v1.2.42 (2023-06-12)

### Changed

- Helm chart: Upgrade helm dependecies, improve local setup [#2144](https://github.com/grafana/oncall/pull/2144)

### Fixed

- Fixed bug on Filters where team param from URL was discarded [#6237](https://github.com/grafana/support-escalations/issues/6237)
- Fix receive channel filter in alert groups API [#2140](https://github.com/grafana/oncall/pull/2140)
- Helm chart: Fix usage of `env` settings as map;
  Fix usage of `mariadb.auth.database` and `mariadb.auth.username` for MYSQL env variables by @alexintech [#2146](https://github.com/grafana/oncall/pull/2146)

### Added

- Helm chart: Add unittests for rabbitmq and redis [2165](https://github.com/grafana/oncall/pull/2165)

## v1.2.41 (2023-06-08)

### Added

- Twilio Provider improvements by @Konstantinov-Innokentii, @mderynck and @joeyorlando
  [#2074](https://github.com/grafana/oncall/pull/2074) [#2034](https://github.com/grafana/oncall/pull/2034)
- Run containers as a non-root user by @alexintech [#2053](https://github.com/grafana/oncall/pull/2053)

## v1.2.40 (2023-06-07)

### Added

- Allow mobile app to consume "internal" schedules API endpoints by @joeyorlando ([#2109](https://github.com/grafana/oncall/pull/2109))
- Add inbound email address in integration API by @vadimkerr ([#2113](https://github.com/grafana/oncall/pull/2113))

### Changed

- Make viewset actions more consistent by @vadimkerr ([#2120](https://github.com/grafana/oncall/pull/2120))

### Fixed

- Fix + revert [#2057](https://github.com/grafana/oncall/pull/2057) which reverted a change which properly handles
  `Organization.DoesNotExist` exceptions for Slack events by @joeyorlando ([#TBD](https://github.com/grafana/oncall/pull/TBD))
- Fix Telegram ratelimit on live setting change by @vadimkerr and @alexintech ([#2100](https://github.com/grafana/oncall/pull/2100))

## v1.2.39 (2023-06-06)

### Changed

- Do not hide not secret settings in the web plugin UI by @alexintech ([#1964](https://github.com/grafana/oncall/pull/1964))

## v1.2.36 (2023-06-02)

### Added

- Add public API endpoint to export a schedule's final shifts by @joeyorlando ([2047](https://github.com/grafana/oncall/pull/2047))

### Fixed

- Fix demo alert for inbound email integration by @vadimkerr ([#2081](https://github.com/grafana/oncall/pull/2081))
- Fix calendar TZ used when comparing current shifts triggering slack shift notifications ([#2091](https://github.com/grafana/oncall/pull/2091))

## v1.2.35 (2023-06-01)

### Fixed

- Fix a bug with permissions for telegram user settings by @alexintech ([#2075](https://github.com/grafana/oncall/pull/2075))
- Fix orphaned messages in Slack by @vadimkerr ([#2023](https://github.com/grafana/oncall/pull/2023))
- Fix duplicated slack shift-changed notifications ([#2080](https://github.com/grafana/oncall/pull/2080))

## v1.2.34 (2023-05-31)

### Added

- Add description to "Default channel for Slack notifications" UI dropdown by @joeyorlando ([2051](https://github.com/grafana/oncall/pull/2051))

### Fixed

- Fix templates when slack or telegram is disabled ([#2064](https://github.com/grafana/oncall/pull/2064))
- Reduce number of alert groups returned by `Attach To` in slack to avoid event trigger timeout @mderynck ([#2049](https://github.com/grafana/oncall/pull/2049))

## v1.2.33 (2023-05-30)

### Fixed

- Revert #2040 breaking `/escalate` Slack command

## v1.2.32 (2023-05-30)

### Added

- Add models and framework to use different services (Phone, SMS, Verify) in Twilio depending on
  the destination country code by @mderynck ([#1976](https://github.com/grafana/oncall/pull/1976))
- Prometheus exporter backend for alert groups related metrics
- Helm chart: configuration of `uwsgi` using environment variables by @alexintech ([#2045](https://github.com/grafana/oncall/pull/2045))
- Much expanded/improved docs for mobile app ([2026](https://github.com/grafana/oncall/pull/2026>))
- Enable by-day selection when defining monthly and hourly rotations ([2037](https://github.com/grafana/oncall/pull/2037))

### Fixed

- Fix error when updating closed modal window in Slack by @vadimkerr ([#2019](https://github.com/grafana/oncall/pull/2019))
- Fix final schedule export failing to update when ical imported events set start/end as date ([#2025](https://github.com/grafana/oncall/pull/2025))
- Helm chart: fix bugs in helm chart with external postgresql configuration by @alexintech ([#2036](https://github.com/grafana/oncall/pull/2036))
- Properly address `Organization.DoesNotExist` exceptions thrown which result in HTTP 500 for the Slack `interactive_api_endpoint`
  endpoint by @joeyorlando ([#2040](https://github.com/grafana/oncall/pull/2040))
- Fix issue when trying to sync Grafana contact point and config receivers miss a key ([#2046](https://github.com/grafana/oncall/pull/2046))

### Changed

- Changed mobile notification title and subtitle. Removed the body. by @imtoori [#2027](https://github.com/grafana/oncall/pull/2027)

## v1.2.31 (2023-05-26)

### Fixed

- Fix AmazonSNS ratelimit by @Konstantinov-Innokentii ([#2032](https://github.com/grafana/oncall/pull/2032))

## v1.2.30 (2023-05-25)

### Fixed

- Fix Phone provider status callbacks [#2014](https://github.com/grafana/oncall/pull/2014)

## v1.2.29 (2023-05-25)

### Changed

- Phone provider refactoring [#1713](https://github.com/grafana/oncall/pull/1713)

### Fixed

- Handle slack metadata limit when creating paging command payload ([#2007](https://github.com/grafana/oncall/pull/2007))
- Fix issue with sometimes cached final schedule not being refreshed after an update ([#2004](https://github.com/grafana/oncall/pull/2004))

## v1.2.28 (2023-05-24)

### Fixed

- Improve plugin authentication by @vadimkerr ([#1995](https://github.com/grafana/oncall/pull/1995))
- Fix MultipleObjectsReturned error on webhook endpoints by @vadimkerr ([#1996](https://github.com/grafana/oncall/pull/1996))
- Remove user defined time period from "you're going oncall" mobile push by @iskhakov ([#2001](https://github.com/grafana/oncall/pull/2001))

## v1.2.27 (2023-05-23)

### Added

- Allow passing Firebase credentials via environment variable by @vadimkerr ([#1969](https://github.com/grafana/oncall/pull/1969))

### Changed

- Update default Alertmanager templates by @iskhakov ([#1944](https://github.com/grafana/oncall/pull/1944))

### Fixed

- Fix SQLite permission issue by @vadimkerr ([#1984](https://github.com/grafana/oncall/pull/1984))
- Remove user defined time period from "you're going oncall" mobile push ([2001](https://github.com/grafana/oncall/pull/2001))

## v1.2.26 (2023-05-18)

### Fixed

- Fix inbound email bug when attaching files by @vadimkerr ([#1970](https://github.com/grafana/oncall/pull/1970))

## v1.2.25 (2023-05-18)

### Added

- Test mobile push backend

## v1.2.24 (2023-05-17)

### Fixed

- Fixed bug in Escalation Chains where reordering an item crashed the list

## v1.2.23 (2023-05-15)

### Added

- Add a way to set a maintenance mode message and display this in the web plugin UI by @joeyorlando ([#1917](https://github.com/grafana/oncall/pull/#1917))

### Changed

- Use `user_profile_changed` Slack event instead of `user_change` to update Slack user profile by @vadimkerr ([#1938](https://github.com/grafana/oncall/pull/1938))

## v1.2.22 (2023-05-12)

### Added

- Add mobile settings for info notifications by @imtoori ([#1926](https://github.com/grafana/oncall/pull/1926))

### Fixed

- Fix bug in the "You're Going Oncall" push notification copy by @joeyorlando ([#1922](https://github.com/grafana/oncall/pull/1922))
- Fix bug with newlines in markdown converter ([#1925](https://github.com/grafana/oncall/pull/1925))
- Disable "You're Going Oncall" push notification by default ([1927](https://github.com/grafana/oncall/pull/1927))

## v1.2.21 (2023-05-09)

### Added

- Add a new mobile app push notification which notifies users when they are going on call by @joeyorlando ([#1814](https://github.com/grafana/oncall/pull/1814))
- Add a new mobile app user setting field, `important_notification_volume_override` by @joeyorlando ([#1893](https://github.com/grafana/oncall/pull/1893))

### Changed

- Improve ical comparison when checking for imported ical updates ([1870](https://github.com/grafana/oncall/pull/1870))
- Upgrade to Python 3.11.3 by @joeyorlando ([#1849](https://github.com/grafana/oncall/pull/1849))

### Fixed

- Fix issue with how OnCall determines if a cloud Grafana Instance supports RBAC by @joeyorlando ([#1880](https://github.com/grafana/oncall/pull/1880))
- Fix issue trying to set maintenance mode for integrations belonging to non-current team

## v1.2.20 (2023-05-09)

### Fixed

- Hotfix perform notification task

## v1.2.19 (2023-05-04)

### Fixed

- Fix issue with parsing response when sending Slack message

## v1.2.18 (2023-05-03)

### Added

- Documentation updates

## v1.2.17 (2023-05-02)

### Added

- Add filter descriptions to web ui by @iskhakov ([1845](https://github.com/grafana/oncall/pull/1845))
- Add "Notifications Receiver" RBAC role by @joeyorlando ([#1853](https://github.com/grafana/oncall/pull/1853))

### Changed

- Remove template editor from Slack by @iskhakov ([1847](https://github.com/grafana/oncall/pull/1847))
- Remove schedule name uniqueness restriction ([1859](https://github.com/grafana/oncall/pull/1859))

### Fixed

- Fix bugs in web title and message templates rendering and visual representation ([1747](https://github.com/grafana/oncall/pull/1747))

## v1.2.16 (2023-04-27)

### Added

- Add 2, 3 and 6 hours Alert Group silence options by @tommysitehost ([#1822](https://github.com/grafana/oncall/pull/1822))
- Add schedule related users endpoint to plugin API

### Changed

- Update web UI, Slack, and Telegram to allow silencing an acknowledged alert group by @joeyorlando ([#1831](https://github.com/grafana/oncall/pull/1831))

### Fixed

- Optimize duplicate queries occurring in AlertGroupFilter by @joeyorlando ([1809](https://github.com/grafana/oncall/pull/1809))

## v1.2.15 (2023-04-24)

### Fixed

- Helm chart: Fix helm hook for db migration job
- Performance improvements to `GET /api/internal/v1/alertgroups` endpoint by @joeyorlando and @iskhakov ([#1805](https://github.com/grafana/oncall/pull/1805))

### Added

- Add helm chart support for twilio existing secrets by @atownsend247 ([#1435](https://github.com/grafana/oncall/pull/1435))
- Add web_title, web_message and web_image_url attributes to templates ([1786](https://github.com/grafana/oncall/pull/1786))

### Changed

- Update shift API to use a default interval value (`1`) when a `frequency` is set and no `interval` is given
- Limit number of alertmanager alerts in alert group to autoresolve by 500 ([1779](https://github.com/grafana/oncall/pull/1779))
- Update schedule and personal ical exports to use final shift events

## v1.2.14 (2023-04-19)

### Fixed

- Fix broken documentation links by @shantanualsi ([#1766](https://github.com/grafana/oncall/pull/1766))
- Fix bug when updating team access settings by @vadimkerr ([#1794](https://github.com/grafana/oncall/pull/1794))

## v1.2.13 (2023-04-18)

### Changed

- Rework ical schedule export to include final events; also improve changing shifts sync

### Fixed

- Fix issue when creating web overrides for TF schedules using a non-UTC timezone

## v1.2.12 (2023-04-18)

### Changed

- Move `alerts_alertgroup.is_restricted` column to `alerts_alertreceivechannel.restricted_at` by @joeyorlando ([#1770](https://github.com/grafana/oncall/pull/1770))

### Added

- Add new field description_short to private api ([#1698](https://github.com/grafana/oncall/pull/1698))
- Added preview and migration API endpoints for route migration from regex into jinja2 ([1715](https://github.com/grafana/oncall/pull/1715))
- Helm chart: add the option to use a helm hook for the migration job ([1386](https://github.com/grafana/oncall/pull/1386))
- Add endpoints to start and stop maintenance in alert receive channel private api ([1755](https://github.com/grafana/oncall/pull/1755))
- Send demo alert with dynamic payload and get demo payload example on private api ([1700](https://github.com/grafana/oncall/pull/1700))
- Add is_default fields to templates, remove WritableSerialiserMethodField ([1759](https://github.com/grafana/oncall/pull/1759))
- Allow use of dynamic payloads in alert receive channels preview template in private api ([1756](https://github.com/grafana/oncall/pull/1756))

## v1.2.11 (2023-04-14)

### Added

- add new columns `gcom_org_contract_type`, `gcom_org_irm_sku_subscription_start_date`,
  and `gcom_org_oldest_admin_with_billing_privileges_user_id` to `user_management_organization` table,
  plus `is_restricted` column to `alerts_alertgroup` table by @joeyorlando and @teodosii ([1522](https://github.com/grafana/oncall/pull/1522))
- emit two new Django signals by @joeyorlando and @teodosii ([1522](https://github.com/grafana/oncall/pull/1522))
  - `org_sync_signal` at the end of the `engine/apps/user_management/sync.py::sync_organization` method
  - `alert_group_created_signal` when a new Alert Group is created

## v1.2.10 (2023-04-13)

### Added

- Added mine filter to schedules listing

### Fixed

- Fixed a bug in GForm's RemoteSelect where the value for Dropdown could not change
- Fixed the URL attached to an Incident created via the 'Declare Incident' button of a Slack alert by @sd2k ([#1738](https://github.com/grafana/oncall/pull/1738))

## v1.2.9 (2023-04-11)

### Fixed

- Catch the new Slack error - "message_limit_exceeded"

## v1.2.8 (2023-04-06)

### Changed

- Allow editing assigned team via public api ([1619](https://github.com/grafana/oncall/pull/1619))
- Disable mentions when resolution note is created by @iskhakov ([1696](https://github.com/grafana/oncall/pull/1696))
- Display warnings on users page in a clean and consistent way by @iskhakov ([#1681](https://github.com/grafana/oncall/pull/1681))

## v1.2.7 (2023-04-03)

### Added

- Save selected teams filter in local storage ([#1611](https://github.com/grafana/oncall/issues/1611))

### Changed

- Renamed routes from /incidents to /alert-groups ([#1678](https://github.com/grafana/oncall/pull/1678))

### Fixed

- Fix team search when filtering resources by @vadimkerr ([#1680](https://github.com/grafana/oncall/pull/1680))
- Fix issue when trying to scroll in Safari ([#415](https://github.com/grafana/oncall/issues/415))

## v1.2.6 (2023-03-30)

### Fixed

- Fixed bug when web schedules/shifts use non-UTC timezone and shift is deleted by @matiasb ([#1661](https://github.com/grafana/oncall/pull/1661))

## v1.2.5 (2023-03-30)

### Fixed

- Fixed a bug with Slack links not working in the plugin UI ([#1671](https://github.com/grafana/oncall/pull/1671))

## v1.2.4 (2023-03-30)

### Added

- Added the ability to change the team for escalation chains by @maskin25, @iskhakov and @vadimkerr ([#1658](https://github.com/grafana/oncall/pull/1658))

### Fixed

- Addressed bug with iOS mobile push notifications always being set to critical by @imtoori and @joeyorlando ([#1646](https://github.com/grafana/oncall/pull/1646))
- Fixed issue where Viewer was not able to view which people were oncall in a schedule ([#999](https://github.com/grafana/oncall/issues/999))
- Fixed a bug with syncing teams from Grafana API by @vadimkerr ([#1652](https://github.com/grafana/oncall/pull/1652))

## v1.2.3 (2023-03-28)

Only some minor performance/developer setup changes to report in this version.

## v1.2.2 (2023-03-27)

### Changed

- Drawers with Forms are not closing by clicking outside of the drawer. Only by clicking Cancel or X (by @Ukochka in [#1608](https://github.com/grafana/oncall/pull/1608))
- When the `DANGEROUS_WEBHOOKS_ENABLED` environment variable is set to true, it's possible now to create Outgoing Webhooks
  using URLs without a top-level domain (by @hoptical in [#1398](https://github.com/grafana/oncall/pull/1398))
- Updated wording when creating an integration (by @callmehyde in [#1572](https://github.com/grafana/oncall/pull/1572))
- Set FCM iOS/Android "message priority" to "high priority" for mobile app push notifications (by @joeyorlando in [#1612](https://github.com/grafana/oncall/pull/1612))
- Improve schedule quality feature (by @vadimkerr in [#1602](https://github.com/grafana/oncall/pull/1602))

### Fixed

- Update override deletion changes to set its final duration (by @matiasb in [#1599](https://github.com/grafana/oncall/pull/1599))

## v1.2.1 (2023-03-23)

### Changed

- Mobile app settings backend by @vadimkerr in ([1571](https://github.com/grafana/oncall/pull/1571))
- Fix integrations and escalations autoselect, improve GList by @maskin25 in ([1601](https://github.com/grafana/oncall/pull/1601))
- Add filters to outgoing webhooks 2 by @iskhakov in ([1598](https://github.com/grafana/oncall/pull/1598))

## v1.2.0 (2023-03-21)

### Changed

- Add team-based filtering for resources, so that users can see multiple resources at once and link them together ([1528](https://github.com/grafana/oncall/pull/1528))

## v1.1.41 (2023-03-21)

### Added

- Modified `check_escalation_finished_task` celery task to use read-only databases for its query, if one is defined +
  make the validation logic stricter + ping a configurable heartbeat on successful completion of this task ([1266](https://github.com/grafana/oncall/pull/1266))

### Changed

- Updated wording throughout plugin to use 'Alert Group' instead of 'Incident' ([1565](https://github.com/grafana/oncall/pull/1565),
  [1576](https://github.com/grafana/oncall/pull/1576))
- Check for enabled Telegram feature was added to ChatOps and to User pages ([319](https://github.com/grafana/oncall/issues/319))
- Filtering for Editors/Admins was added to rotation form. It is not allowed to assign Viewer to rotation ([1124](https://github.com/grafana/oncall/issues/1124))
- Modified search behaviour on the Escalation Chains page to allow for "partial searching" ([1578](https://github.com/grafana/oncall/pull/1578))

### Fixed

- Fixed a few permission issues on the UI ([1448](https://github.com/grafana/oncall/pull/1448))
- Fix resolution note rendering in Slack message threads where the Slack username was not
  being properly rendered ([1561](https://github.com/grafana/oncall/pull/1561))

## v1.1.40 (2023-03-16)

### Fixed

- Check for duplicated positions in terraform escalation policies create/update

### Added

- Add `regex_match` Jinja filter ([1556](https://github.com/grafana/oncall/pull/1556))

### Changed

- Allow passing `null` as a value for `escalation_chain` when creating routes via the public API ([1557](https://github.com/grafana/oncall/pull/1557))

## v1.1.39 (2023-03-16)

### Added

- Inbound email integration ([837](https://github.com/grafana/oncall/pull/837))

## v1.1.38 (2023-03-14)

### Added

- Add filtering by escalation chain to alert groups page ([1535](https://github.com/grafana/oncall/pull/1535))

### Fixed

- Improve tasks checking/triggering webhooks in new backend

## v1.1.37 (2023-03-14)

### Fixed

- Fixed redirection issue on integrations screen

### Added

- Enable web overrides for Terraform-based schedules
- Direct user paging improvements ([1358](https://github.com/grafana/oncall/issues/1358))
- Added Schedule Score quality within the schedule view ([118](https://github.com/grafana/oncall/issues/118))

## v1.1.36 (2023-03-09)

### Fixed

- Fix bug with override creation ([1515](https://github.com/grafana/oncall/pull/1515))

## v1.1.35 (2023-03-09)

### Added

- Insight logs

### Fixed

- Fixed issue with Alert group involved users filter
- Fixed email sending failure due to newline in title

## v1.1.34 (2023-03-08)

### Added

- Jinja2 based routes ([1319](https://github.com/grafana/oncall/pull/1319))

### Changed

- Remove mobile app feature flag ([1484](https://github.com/grafana/oncall/pull/1484))

### Fixed

- Prohibit creating & updating past overrides ([1474](https://github.com/grafana/oncall/pull/1474))

## v1.1.33 (2023-03-07)

### Fixed

- Show permission error for accessing Telegram as Viewer ([1273](https://github.com/grafana/oncall/issues/1273))

### Changed

- Pass email and phone limits as environment variables ([1219](https://github.com/grafana/oncall/pull/1219))

## v1.1.32 (2023-03-01)

### Fixed

- Schedule filters improvements ([941](https://github.com/grafana/oncall/issues/941))
- Fix pagination issue on schedules page ([1437](https://github.com/grafana/oncall/pull/1437))

## v1.1.31 (2023-03-01)

### Added

- Add acknowledge_signal and source link to public api

## v1.1.30 (2023-03-01)

### Fixed

- Fixed importing of global grafana styles ([672](https://github.com/grafana/oncall/issues/672))
- Fixed UI permission related bug where Editors could not export their user iCal link
- Fixed error when a shift is created using Etc/UTC as timezone
- Fixed issue with refresh ical file task not considering empty string values
- Schedules: Long popup does not fit screen & buttons unreachable & objects outside of the popup ([1002](https://github.com/grafana/oncall/issues/1002))
- Can't scroll on integration settings page ([415](https://github.com/grafana/oncall/issues/415))
- Team change in the Integration page always causes 403 ([1292](https://github.com/grafana/oncall/issues/1292))
- Schedules: Permalink doesn't work with multi-teams ([940](https://github.com/grafana/oncall/issues/940))
- Schedules list -> expanded schedule blows page width ([1293](https://github.com/grafana/oncall/issues/1293))

### Changed

- Moved reCAPTCHA to backend environment variable for more flexible configuration between different environments.
- Add pagination to schedule listing
- Show 100 latest alerts on alert group page ([1417](https://github.com/grafana/oncall/pull/1417))

## v1.1.29 (2023-02-23)

### Changed

- Allow creating schedules with type "web" using public API

### Fixed

- Fixed minor issue during the sync process where an HTTP 302 (redirect) status code from the Grafana
  instance would cause the sync to not properly finish

## v1.1.28 (2023-02-23)

### Fixed

- Fixed maintenance mode for Telegram and MSTeams

## v1.1.27 (2023-02-22)

### Added

- Added reCAPTCHA validation for requesting a mobile verification code

### Changed

- Added ratelimits for phone verification
- Link to source was added
- Header of Incident page was reworked: clickable labels instead of just names, users section was deleted
- "Go to Integration" button was deleted, because the functionality was moved to clickable labels

### Fixed

- Fixed HTTP request to Google where when fetching an iCal, the response would sometimes contain HTML instead
  of the expected iCal data

## v1.1.26 (2023-02-20)

### Fixed

- Make alert group filters persistent ([482](https://github.com/grafana/oncall/issues/482))

### Changed

- Update phone verification error message

## v1.1.25 (2023-02-20)

### Fixed

- Fixed too long declare incident link in Slack

## v1.1.24 (2023-02-16)

### Added

- Add direct user paging ([823](https://github.com/grafana/oncall/issues/823))
- Add App Store link to web UI ([1328](https://github.com/grafana/oncall/pull/1328))

### Fixed

- Cleaning of the name "Incident" ([704](https://github.com/grafana/oncall/pull/704))
- Alert Group/Alert Groups naming polishing. All the names should be with capital letters
- Design polishing ([1290](https://github.com/grafana/oncall/pull/1290))
- Not showing contact details in User tooltip if User does not have edit/admin access
- Updated slack link account to redirect back to user profile instead of chatops

### Changed

- Incidents - Removed buttons column and replaced status with toggler ([#1237](https://github.com/grafana/oncall/issues/1237))
- Responsiveness changes across multiple pages (Incidents, Integrations, Schedules) ([#1237](https://github.com/grafana/oncall/issues/1237))
- Add pagination to schedule listing

## v1.1.23 (2023-02-06)

### Fixed

- Fix bug with email case sensitivity for ICal on-call schedules ([1297](https://github.com/grafana/oncall/pull/1297))

## v1.1.22 (2023-02-03)

### Fixed

- Fix bug with root/dependant alert groups list api endpoint ([1284](https://github.com/grafana/oncall/pull/1284))
- Fixed NPE on teams switch

### Added

- Optimize alert and alert group public api endpoints and add filter by id ([1274](https://github.com/grafana/oncall/pull/1274))
- Enable mobile app backend by default on OSS

## v1.1.21 (2023-02-02)

### Added

- Add [`django-dbconn-retry` library](https://github.com/jdelic/django-dbconn-retry) to `INSTALLED_APPS` to attempt
  to alleviate occasional `django.db.utils.OperationalError` errors
- Improve alerts and alert group endpoint response time in internal API with caching ([1261](https://github.com/grafana/oncall/pull/1261))
- Optimize alert and alert group public api endpoints and add filter by id ([1274](https://github.com/grafana/oncall/pull/1274)
- Added Coming Soon for iOS on Mobile App screen

### Fixed

- Fix issue on Integrations where you were redirected back once escalation chain was loaded ([#1083](https://github.com/grafana/oncall/issues/1083))
  ([#1257](https://github.com/grafana/oncall/issues/1257))

## v1.1.20 (2023-01-30)

### Added

- Add involved users filter to alert groups listing page (+ mine shortcut)

### Changed

- Improve logging for creating contact point for Grafana Alerting integration

### Fixed

- Fix bugs related to creating contact point for Grafana Alerting integration
- Fix minor UI bug on OnCall users page where it would idefinitely show a "Loading..." message
- Only show OnCall user's table to users that are authorized
- Fixed NPE in ScheduleUserDetails component ([#1229](https://github.com/grafana/oncall/issues/1229))

## v1.1.19 (2023-01-25)

### Added

- Add Server URL below QR code for OSS for debugging purposes
- Add Slack slash command allowing to trigger a direct page via a manually created alert group
- Remove resolved and acknowledged filters as we switched to status ([#1201](https://github.com/grafana/oncall/pull/1201))
- Add sync with grafana on /users and /teams api calls from terraform plugin

### Changed

- Allow users with `viewer` role to fetch cloud connection status using the internal API ([#1181](https://github.com/grafana/oncall/pull/1181))
- When removing the Slack ChatOps integration, make it more explicit to the user what the implications of doing so are
- Improve performance of `GET /api/internal/v1/schedules` endpoint ([#1169](https://github.com/grafana/oncall/pull/1169))

### Fixed

- Removed duplicate API call, in the UI on plugin initial load, to `GET /api/internal/v1/alert_receive_channels`
- Increased plugin startup speed ([#1200](https://github.com/grafana/oncall/pull/1200))

## v1.1.18 (2023-01-18)

### Added

- Allow messaging backends to be enabled/disabled per organization ([#1151](https://github.com/grafana/oncall/pull/1151))

### Changed

- Send a Slack DM when user is not in channel ([#1144](https://github.com/grafana/oncall/pull/1144))

## v1.1.17 (2023-01-18)

### Changed

- Modified how the `Organization.is_rbac_permissions_enabled` flag is set,
  based on whether we are dealing with an open-source, or cloud installation
- Backend implementation to support direct user/schedule paging
- Changed documentation links to open in new window
- Remove helm chart signing
- Changed the user's profile modal to be wide for all tabs

### Added

- Added state filter for alert_group public API endpoint.
- Enrich user tooltip on Schedule page
- Added redirects for old-style links

### Fixed

- Updated typo in Helm chart values when specifying a custom Slack command name
- Fix for web schedules ical export to give overrides the right priority
- Fix for topnavbar to show initial loading inside PluginPage

## v1.1.16 (2023-01-12)

### Fixed

- Minor bug fix in how the value of `Organization.is_rbac_permissions_enabled` is determined

- Helm chart: default values file and documentation now reflect the correct key to set for the Slack
  slash command name, `oncall.slack.commandName`.

## v1.1.15 (2023-01-10)

### Changed

- Simplify and speed up slack rendering ([#1105](https://github.com/grafana/oncall/pull/1105))
- Faro - Point to 3 separate apps instead of just 1 for all environments ([#1110](https://github.com/grafana/oncall/pull/1110))
- Schedules - ([#1114](https://github.com/grafana/oncall/pull/1114), [#1109](https://github.com/grafana/oncall/pull/1109))

### Fixed

- Bugfix for topnavbar to place alerts inside PageNav ([#1040](https://github.com/grafana/oncall/pull/1040))

## v1.1.14 (2023-01-05)

### Changed

- Change wording from "incident" to "alert group" for the Telegram integration ([#1052](https://github.com/grafana/oncall/pull/1052))
- Soft-delete of organizations on stack deletion.

## v1.1.13 (2023-01-04)

### Added

- Integration with [Grafana Faro](https://grafana.com/docs/grafana-cloud/faro-web-sdk/) for Cloud Instances

## v1.1.12 (2023-01-03)

### Fixed

- Handle jinja exceptions during alert creation
- Handle exception for slack rate limit message

## v1.1.11 (2023-01-03)

### Fixed

- Fix error when schedule was not able to load
- Minor fixes

## v1.1.10 (2023-01-03)

### Fixed

- Minor fixes

## v1.1.9 (2023-01-03)

### Fixed

- Alert group query optimization
- Update RBAC scopes
- Fix error when schedule was not able to load
- Minor bug fixes

## v1.1.8 (2022-12-13)

### Added

- Added a `make` command, `enable-mobile-app-feature-flags`, which sets the backend feature flag in `./dev/.env.dev`,
  and updates a record in the `base_dynamicsetting` database table, which are needed to enable the mobile
  app backend features.

### Changed

- Added ability to change engine deployment update strategy via values in helm chart.
- removed APNS support
- changed the `django-push-notification` library from the `iskhakov` fork to the [`grafana` fork](https://github.com/grafana/django-push-notifications).
  This new fork basically patches an issue which affected the database migrations of this django app (previously the
  library would not respect the `USER_MODEL` setting when creating its tables and would instead reference the
  `auth_user` table.. which we don't want)
- add `--no-cache` flag to the `make build` command

### Fixed

- fix schedule UI types and permissions

## v1.1.7 (2022-12-09)

### Fixed

- Update fallback role for schedule write RBAC permission
- Mobile App Verification tab in the user settings modal is now hidden for users that do not have proper
  permissions to use it

## v1.1.6 (2022-12-09)

### Added

- RBAC permission support
- Add `time_zone` serializer validation for OnCall shifts and calendar/web schedules. In addition, add database migration
  to update values that may be invalid
- Add a `permalinks.web` field, which is a permalink to the alert group web app page, to the alert group internal/public
  API responses
- Added the ability to customize job-migrate `ttlSecondsAfterFinished` field in the helm chart

### Fixed

- Got 500 error when saving Outgoing Webhook ([#890](https://github.com/grafana/oncall/issues/890))
- v1.0.13 helm chart - update the OnCall backend pods image pull policy to "Always" (and explicitly set tag to `latest`).
  This should resolve some recent issues experienced where the frontend/backend versions are not aligned.

### Changed

- When editing templates for alert group presentation or outgoing webhooks, errors and warnings are now displayed in
  the UI as notification popups or displayed in the preview.
- Errors and warnings that occur when rendering templates during notification or webhooks will now render
  and display the error/warning as the result.

## v1.1.5 (2022-11-24)

### Added

- Added a QR code in the "Mobile App Verification" tab on the user settings modal to connect the mobile
  application to your OnCall instance

### Fixed

- UI bug fixes for Grafana 9.3 ([#860](https://github.com/grafana/oncall/pull/860))
- Bug fix for saving source link template ([#898](https://github.com/grafana/oncall/pull/898))

## v1.1.4 (2022-11-23)

### Fixed

- Bug fix for [#882](https://github.com/grafana/oncall/pull/882) which was causing the OnCall web calendars to not load
- Bug fix which, when installing the plugin, or after removing a Grafana API token, caused the plugin to not load properly

## v1.1.3 (2022-11-22)

- Bug Fixes

### Changed

- For OSS installations of OnCall, initial configuration is now simplified. When running for local development, you no
  longer need to configure the plugin via the UI. This is achieved through passing one environment variable to both the
  backend & frontend containers, both of which have been preconfigured for you in `docker-compose-developer.yml`.
  - The Grafana API URL **must be** passed as an environment variable, `GRAFANA_API_URL`, to the OnCall backend
    (and can be configured by updating this env var in your `./dev/.env.dev` file)
  - The OnCall API URL can optionally be passed as an environment variable, `ONCALL_API_URL`, to the OnCall UI.
    If the environment variable is found, the plugin will "auto-configure", otherwise you will be shown a simple
    configuration form to provide this info.
- For Helm installations, if you are running Grafana externally (eg. `grafana.enabled` is set to `false`
  in your `values.yaml`), you will now be required to specify `externalGrafana.url` in `values.yaml`.
- `make start` will now idempotently check to see if a "127.0.0.1 grafana" record exists in `/etc/hosts`
  (using a tool called [`hostess`](https://github.com/cbednarski/hostess)). This is to support using `http://grafana:3000`
  as the `Organization.grafana_url` in two scenarios:
  - `oncall_engine`/`oncall_celery` -> `grafana` Docker container communication
  - public URL generation. There are some instances where `Organization.grafana_url` is referenced to generate public
    URLs to a Grafana plugin page. Without the `/etc/hosts` record, navigating to `http://grafana:3000/some_page` in
    your browser, you would obviously get an error from your browser.

## v1.1.2 (2022-11-18)

- Bug Fixes

## v1.1.1 (2022-11-16)

- Compatibility with Grafana 9.3.0
- Bug Fixes

## v1.0.52 (2022-11-09)

- Allow use of API keys as alternative to account auth token for Twilio
- Remove `grafana_plugin_management` Django app
- Enable new schedules UI
- Bug fixes

## v1.0.51 (2022-11-05)

- Bug Fixes

## v1.0.50 (2022-11-03)

- Updates to documentation
- Improvements to web schedules
- Bug fixes

## v1.0.49 (2022-11-01)

- Enable SMTP email backend by default
- Fix Grafana sidebar frontend bug

## v1.0.48 (2022-11-01)

- verify_number management command
- chatops page redesign

## v1.0.47 (2022-11-01)

- Bug fixes

## v1.0.46 (2022-10-28)

- Bug fixes
- remove `POST /api/internal/v1/custom_buttons/{id}/action` endpoint

## v1.0.45 (2022-10-27)

- Bug fix to revert commit which removed unused engine code

## v1.0.44 (2022-10-26)

- Bug fix for an issue that was affecting phone verification

## v1.0.43 (2022-10-25)

- Bug fixes

## v1.0.42 (2022-10-24)

- Fix posting resolution notes to Slack

## v1.0.41 (2022-10-24)

- Add personal email notifications
- Bug fixes

## v1.0.40 (2022-10-05)

- Improved database and celery backends support
- Added script to import PagerDuty users to Grafana
- Bug fixes

## v1.0.39 (2022-10-03)

- Fix issue in v1.0.38 blocking the creation of schedules and webhooks in the UI

## v1.0.38 (2022-09-30)

- Fix exception handling for adding resolution notes when slack and oncall users are out of sync.
- Fix all day events showing as having gaps in slack notifications
- Improve plugin configuration error message readability
- Add `telegram` key to `permalinks` property in `AlertGroup` public API response schema

## v1.0.37 (2022-09-21)

- Improve API token creation form
- Fix alert group bulk action bugs
- Add `permalinks` property to `AlertGroup` public API response schema
- Scheduling system bug fixes
- Public API bug fixes

## v1.0.36 (2022-09-12)

- Alpha web schedules frontend/backend updates
- Bug fixes

## v1.0.35 (2022-09-07)

- Bug fixes

## v1.0.34 (2022-09-06)

- Fix schedule notification spam

## v1.0.33 (2022-09-06)

- Add raw alert view
- Add GitHub star button for OSS installations
- Restore alert group search functionality
- Bug fixes

## v1.0.32 (2022-09-01)

- Bug fixes

## v1.0.31 (2022-09-01)

- Bump celery version
- Fix oss to cloud connection

## v1.0.30 (2022-08-31)

- Bug fix: check user notification policy before access

## v1.0.29 (2022-08-31)

- Add arm64 docker image

## v1.0.28 (2022-08-31)

- Bug fixes

## v1.0.27 (2022-08-30)

- Bug fixes

## v1.0.26 (2022-08-26)

- Insight log's format fixes
- Remove UserNotificationPolicy auto-recreating

## v1.0.25 (2022-08-24)

- Bug fixes

## v1.0.24 (2022-08-24)

- Insight logs
- Default DATA_UPLOAD_MAX_MEMORY_SIZE to 1mb

## v1.0.23 (2022-08-23)

- Bug fixes

## v1.0.22 (2022-08-16)

- Make STATIC_URL configurable from environment variable

## v1.0.21 (2022-08-12)

- Bug fixes

## v1.0.19 (2022-08-10)

- Bug fixes

## v1.0.15 (2022-08-03)

- Bug fixes

## v1.0.13 (2022-07-27)

- Optimize alert group list view
- Fix a bug related to Twilio setup

## v1.0.12 (2022-07-26)

- Update push-notifications dependency
- Rework how absolute URLs are built
- Fix to show maintenance windows per team
- Logging improvements
- Internal api to get a schedule final events

## v1.0.10 (2022-07-22)

- Speed-up of alert group web caching
- Internal api for OnCall shifts

## v1.0.9 (2022-07-21)

- Frontend bug fixes & improvements
- Support regex_replace() in templates
- Bring back alert group caching and list view

## v1.0.7 (2022-07-18)

- Backend & frontend bug fixes
- Deployment improvements
- Reshape webhook payload for outgoing webhooks
- Add escalation chain usage info on escalation chains page
- Improve alert group list load speeds and simplify caching system

## v1.0.6 (2022-07-12)

- Manual Incidents enabled for teams
- Fix phone notifications for OSS
- Public API improvements

## v1.0.5 (2022-07-06)

- Bump Django to 3.2.14
- Fix PagerDuty iCal parsing

## 1.0.4 (2022-06-28)

- Allow Telegram DMs without channel connection.

## 1.0.3 (2022-06-27)

- Fix users public api endpoint. Now it returns users with all roles.
- Fix redundant notifications about gaps in schedules.
- Frontend fixes.

## 1.0.2 (2022-06-17)

- Fix Grafana Alerting integration to handle API changes in Grafana 9
- Improve public api endpoint for outgoing webhooks (/actions) by adding ability to create, update and delete
  outgoing webhook instance

## 1.0.0 (2022-06-14)

- First Public Release

## 0.0.71 (2022-06-06)

- Initial Commit Release
