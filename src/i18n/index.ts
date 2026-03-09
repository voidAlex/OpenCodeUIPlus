import { useSyncExternalStore } from 'react'
import { STORAGE_KEY_UI_LANGUAGE } from '../constants/storage'

export type UILanguage = 'zh' | 'en'

export type TranslationKey =
  | 'appName'
  | 'waiting'
  | 'waitingQueue'
  | 'waitingReasoning'
  | 'waitingTool'
  | 'waitingRetry'
  | 'waitingSince'
  | 'retryingAttempt'
  | 'nextIn'
  | 'subagents'
  | 'subagentRunning'
  | 'subagentDone'
  | 'subagentError'
  | 'relatedTask'
  | 'startedAt'
  | 'jumpToMessage'
  | 'openSession'
  | 'language'
  | 'newChat'
  | 'openSidebar'
  | 'clickToRename'
  | 'shareSession'
  | 'loadingSession'
  | 'loading'
  | 'noMoreHistory'
  | 'closeAppTitle'
  | 'closeAppDescription'
  | 'closing'
  | 'closeAndStopService'
  | 'closeKeepService'
  | 'cancel'
  | 'settings'
  | 'context'
  | 'contextUsage'
  | 'searchChats'
  | 'clearSearch'
  | 'recents'
  | 'active'
  | 'noActiveSessions'
  | 'notifications'
  | 'readAll'
  | 'clear'
  | 'appearance'
  | 'viewDetails'
  | 'wideMode'
  | 'standardWidth'
  | 'connectionConnected'
  | 'connectionConnecting'
  | 'connectionDisconnected'
  | 'connectionError'
  | 'dismiss'
  | 'startNewConversation'
  | 'chooseWorkingDirectory'
  | 'workingDirectory'
  | 'enterAbsolutePath'
  | 'backToDirectoryList'
  | 'backToParentSession'
  | 'selectDirectory'
  | 'current'
  | 'enterCustomPath'
  | 'startConversation'
  | 'startWithCurrentDirectoryHint'
  | 'question'
  | 'minimize'
  | 'sending'
  | 'submit'
  | 'skip'
  | 'typeYourOwnAnswer'
  | 'permissionTitle'
  | 'fromSubtask'
  | 'subtask'
  | 'changesPreview'
  | 'requesting'
  | 'allowed'
  | 'allowOnce'
  | 'alwaysAllow'
  | 'browserSession'
  | 'thisSession'
  | 'reject'
  | 'autoApproveEnabledHint'
  | 'permissionSettingsHint'
  | 'shareChat'
  | 'publicLink'
  | 'publicLinkDescription'
  | 'copyLink'
  | 'processing'
  | 'stopSharing'
  | 'done'
  | 'creatingLink'
  | 'createPublicLink'
  | 'failedCreateShareLink'
  | 'failedRemoveShareLink'
  | 'searchModels'
  | 'noModelsFound'
  | 'tryDifferentKeyword'
  | 'thinking'
  | 'vision'
  | 'pinToTop'
  | 'unpin'
  | 'selectModel'
  | 'attachFile'
  | 'stopGeneration'
  | 'sendingMessage'
  | 'sendMessage'
  | 'scrollToBottom'
  | 'reply'
  | 'dropFilesHere'
  | 'addProject'
  | 'remove'
  | 'removeProject'
  | 'removeProjectConfirm'
  | 'moreCount'
  | 'globalProject'
  | 'session'
  | 'messages'
  | 'provider'
  | 'model'
  | 'contextLimit'
  | 'totalTokens'
  | 'usage'
  | 'totalCost'
  | 'input'
  | 'output'
  | 'reasoning'
  | 'cacheRW'
  | 'rawMessages'
  | 'lastMessage'
  | 'close'
  | 'themePresets'
  | 'themePresetsDesc'
  | 'customCss'
  | 'customCssDesc'
  | 'display'
  | 'displayDesc'
  | 'colorMode'
  | 'auto'
  | 'light'
  | 'dark'
  | 'wideModeDesc'
  | 'languageDesc'
  | 'pathsFormatting'
  | 'pathsFormattingDesc'
  | 'agentBehavior'
  | 'agentBehaviorDesc'
  | 'autoApprove'
  | 'autoApproveDesc'
  | 'sidebarRecents'
  | 'sidebarRecentsDesc'
  | 'folderStyleRecents'
  | 'folderStyleRecentsDesc'
  | 'conversationExperience'
  | 'conversationExperienceDesc'
  | 'collapseLongMessages'
  | 'collapseLongMessagesDesc'
  | 'thinkingDisplay'
  | 'thinkingDisplayDesc'
  | 'capsule'
  | 'italic'
  | 'stepFinishInfo'
  | 'tokens'
  | 'cache'
  | 'cost'
  | 'duration'
  | 'totalDuration'
  | 'showTokenUsage'
  | 'showCacheHitInfo'
  | 'showApiCost'
  | 'showMessageResponseTime'
  | 'showFullTurnElapsedTime'
  | 'systemNotifications'
  | 'systemNotificationsDesc'
  | 'notificationsLabel'
  | 'blockedByBrowser'
  | 'notifyWhenAiCompletes'
  | 'testNotification'
  | 'testNotificationDesc'
  | 'enableNotificationsToTest'
  | 'send'
  | 'systemNotificationsUnavailable'
  | 'inAppAlerts'
  | 'inAppAlertsDesc'
  | 'toastNotifications'
  | 'toastNotificationsDesc'
  | 'localService'
  | 'localServiceDesc'
  | 'binaryPath'
  | 'binaryPathPlaceholder'
  | 'binaryPathHint'
  | 'autoStartService'
  | 'autoStartServiceDesc'
  | 'serviceStatus'
  | 'startingOpencodeService'
  | 'runningStartedByApp'
  | 'runningExternal'
  | 'notRunning'
  | 'start'
  | 'stop'
  | 'refresh'
  | 'environmentVariables'
  | 'envVarsDesc'
  | 'desktopOnlyServiceDesc'
  | 'checkHealth'
  | 'checking'
  | 'invalidCredentials'
  | 'offline'
  | 'unknown'
  | 'name'
  | 'url'
  | 'username'
  | 'password'
  | 'nameRequired'
  | 'urlRequired'
  | 'invalidUrl'
  | 'myServer'
  | 'serverUrlPlaceholder'
  | 'opencodeDefault'
  | 'hideAuthentication'
  | 'addAuthentication'
  | 'crossOriginPasswordWarning'
  | 'credentialsStoredHint'
  | 'connections'
  | 'connectionsDesc'
  | 'noServersConfigured'
  | 'tabServers'
  | 'tabServersDesc'
  | 'tabChat'
  | 'tabChatDesc'
  | 'tabAppearance'
  | 'tabAppearanceDesc'
  | 'tabNotifications'
  | 'tabNotificationsDesc'
  | 'tabService'
  | 'tabServiceDesc'
  | 'tabShortcuts'
  | 'tabShortcutsDesc'
  | 'core'
  | 'advanced'
  | 'customizeUiBehaviorServerSetup'
  | 'closeSettings'
  | 'awaitingPermission'
  | 'awaitingAnswer'
  | 'retrying'
  | 'working'
  | 'completed'
  | 'error'
  | 'permission'
  | 'noProjectFoldersYet'
  | 'addProjectBrowseHint'
  | 'deleteChat'
  | 'deleteChatConfirm'
  | 'delete'
  | 'moveFolderUp'
  | 'moveFolderDown'
  | 'noChatsInFolder'
  | 'loadingMore'
  | 'showMoreChats'
  | 'keyboardShortcuts'
  | 'resetAll'
  | 'resetToDefault'
  | 'filter'
  | 'noMatches'
  | 'shortcutRebindHelp'
  | 'add'
  | 'online'
  | 'openCodeWebModeHint'
  | 'pathStyleAuto'
  | 'pathStyleUnix'
  | 'pathStyleWindows'
  | 'general'
  | 'terminal'
  | 'enter'
  | 'viewFullSession'
  | 'loadingPanel'
  | 'noContent'
  | 'noActiveSession'
  | 'createTerminal'
  | 'restoringSessions'
  | 'skills'
  | 'refresh'
  | 'filterSkills'
  | 'loadingSkills'
  | 'noSkillsFound'
  | 'mcpServers'
  | 'addServer'
  | 'loadingServers'
  | 'noMcpServersConfigured'
  | 'newTerminal'
  | 'hidePanel'
  | 'failedLoadSkills'
  | 'retry'
  | 'failedLoadMcpServers'
  | 'task'
  | 'againToStop'
  | 'failedLoadWorktrees'
  | 'worktreeFailed'
  | 'failedCreateWorktree'
  | 'failedRemoveWorktree'
  | 'failedResetWorktree'
  | 'selectProjectToManageWorktrees'
  | 'worktrees'
  | 'createWorktree'
  | 'loadingWorktrees'
  | 'noWorktreesFound'
  | 'removeWorktree'
  | 'removeWorktreeConfirmPrefix'
  | 'removeWorktreeConfirmSuffix'
  | 'resetWorktree'
  | 'resetWorktreeConfirmPrefix'
  | 'resetWorktreeConfirmSuffix'
  | 'reset'
  | 'newWorktree'
  | 'worktreeNamePlaceholder'
  | 'openSessionAfterCreation'
  | 'create'
  | 'openSessionInWorktree'
  | 'using'
  | 'detected'
  | 'windows'
  | 'unix'
  | 'serverNameRequired'
  | 'commandRequired'
  | 'failedAddServer'
  | 'addMcpServer'
  | 'local'
  | 'remote'
  | 'serverName'
  | 'commandPlaceholder'
  | 'adding'
  | 'disabled'
  | 'failed'
  | 'needsAuth'
  | 'needsRegistration'
  | 'disconnect'
  | 'connect'
  | 'authenticate'

type Translator = Record<TranslationKey, string>

const dictionaries: Record<UILanguage, Translator> = {
  en: {
    appName: 'OpenCodeUIPlus',
    waiting: 'Waiting',
    waitingQueue: 'Queued',
    waitingReasoning: 'Reasoning',
    waitingTool: 'Running tools',
    waitingRetry: 'Retrying',
    waitingSince: 'since {seconds}s',
    retryingAttempt: 'Retrying (attempt {attempt})',
    nextIn: 'next in {time}',
    subagents: 'Subagents',
    subagentRunning: 'Running',
    subagentDone: 'Done',
    subagentError: 'Error',
    relatedTask: 'Task: {task}',
    startedAt: 'Started at {time}',
    jumpToMessage: 'Jump to message',
    openSession: 'Open session',
    language: 'Language',
    newChat: 'New chat',
    openSidebar: 'Open sidebar',
    clickToRename: 'Click to rename',
    shareSession: 'Share session',
    loadingSession: 'Loading session...',
    loading: 'Loading...',
    noMoreHistory: 'No more history',
    closeAppTitle: 'Close OpenCodeUIPlus',
    closeAppDescription: 'The opencode service was started by this app. Do you want to stop it as well?',
    closing: 'Closing...',
    closeAndStopService: 'Close and stop service',
    closeKeepService: 'Close, keep service running',
    cancel: 'Cancel',
    settings: 'Settings',
    context: 'Context',
    contextUsage: 'Context Usage',
    searchChats: 'Search chats...',
    clearSearch: 'Clear search',
    recents: 'Recents',
    active: 'Active',
    noActiveSessions: 'No active sessions',
    notifications: 'Notifications',
    readAll: 'Read all',
    clear: 'Clear',
    appearance: 'Appearance',
    viewDetails: 'View details',
    wideMode: 'Wide Mode',
    standardWidth: 'Standard Width',
    connectionConnected: 'Connected',
    connectionConnecting: 'Connecting',
    connectionDisconnected: 'Disconnected',
    connectionError: 'Error',
    dismiss: 'Dismiss',
    startNewConversation: 'Start a new conversation',
    chooseWorkingDirectory: 'Choose a working directory for this session',
    workingDirectory: 'Working Directory',
    enterAbsolutePath: 'Enter absolute path...',
    backToDirectoryList: '← Back to directory list',
    backToParentSession: 'Back to parent session',
    selectDirectory: 'Select directory...',
    current: '(current)',
    enterCustomPath: 'Enter custom path...',
    startConversation: 'Start Conversation',
    startWithCurrentDirectoryHint: 'Or just type a message below to start with the current directory',
    question: 'Question',
    minimize: 'Minimize',
    sending: 'Sending...',
    submit: 'Submit',
    skip: 'Skip',
    typeYourOwnAnswer: 'Type your own answer...',
    permissionTitle: 'Permission: {permission}',
    fromSubtask: 'From subtask: {title}',
    subtask: 'Subtask',
    changesPreview: 'Changes preview',
    requesting: 'Requesting',
    allowed: 'Allowed',
    allowOnce: 'Allow once',
    alwaysAllow: 'Always allow',
    browserSession: 'Browser session',
    thisSession: 'This session',
    reject: 'Reject',
    autoApproveEnabledHint: 'Auto-approve enabled. Refresh browser to reset permissions.',
    permissionSettingsHint: 'You can change permission settings at any time.',
    shareChat: 'Share Chat',
    publicLink: 'Public Link',
    publicLinkDescription: 'Anyone with this link can view this chat session.',
    copyLink: 'Copy link',
    processing: 'Processing...',
    stopSharing: 'Stop sharing',
    done: 'Done',
    creatingLink: 'Creating link...',
    createPublicLink: 'Create public link',
    failedCreateShareLink: 'Failed to create share link',
    failedRemoveShareLink: 'Failed to remove share link',
    searchModels: 'Search models...',
    noModelsFound: 'No models found',
    tryDifferentKeyword: 'Try a different keyword',
    thinking: 'Thinking',
    vision: 'Vision',
    pinToTop: 'Pin to top',
    unpin: 'Unpin',
    selectModel: 'Select model',
    attachFile: 'Attach file',
    stopGeneration: 'Stop generation',
    sendingMessage: 'Sending message',
    sendMessage: 'Send message',
    scrollToBottom: 'Scroll to bottom',
    reply: 'Reply...',
    dropFilesHere: 'Drop files here',
    addProject: 'Add project...',
    remove: 'Remove',
    removeProject: 'Remove Project',
    removeProjectConfirm: "Remove this project folder from the list? Files won't be deleted.",
    moreCount: '+{count} more',
    globalProject: 'Global',
    session: 'Session',
    messages: 'Messages',
    provider: 'Provider',
    model: 'Model',
    contextLimit: 'Context Limit',
    totalTokens: 'Total Tokens',
    usage: 'Usage',
    totalCost: 'Total Cost',
    input: 'Input',
    output: 'Output',
    reasoning: 'Reasoning',
    cacheRW: 'Cache (r/w)',
    rawMessages: 'Raw Messages',
    lastMessage: 'last: {id}',
    close: 'Close',
    themePresets: 'Theme Presets',
    themePresetsDesc: 'Choose a base visual style for the app',
    customCss: 'Custom CSS',
    customCssDesc: 'Override fonts, colors, and any CSS variables. Works with all themes.',
    display: 'Display',
    displayDesc: 'Control color mode and layout',
    colorMode: 'Color Mode',
    auto: 'Auto',
    light: 'Light',
    dark: 'Dark',
    wideModeDesc: 'Expand chat area for long outputs',
    languageDesc: 'Switch UI language instantly and persist preference',
    pathsFormatting: 'Paths & Formatting',
    pathsFormattingDesc: 'How file paths are displayed in messages and tools',
    agentBehavior: 'Agent Behavior',
    agentBehaviorDesc: 'Execution defaults for tool actions',
    autoApprove: 'Auto-Approve',
    autoApproveDesc: 'Use local rules for always, send once to server',
    sidebarRecents: 'Sidebar Recents',
    sidebarRecentsDesc: 'Optional folder view for recent chats',
    folderStyleRecents: 'Folder-Style Recents',
    folderStyleRecentsDesc: 'Group recent chats by project folder while keeping the default list available',
    conversationExperience: 'Conversation Experience',
    conversationExperienceDesc: 'Message density, reasoning style, and step summary fields',
    collapseLongMessages: 'Collapse Long Messages',
    collapseLongMessagesDesc: 'Auto-collapse lengthy user messages',
    thinkingDisplay: 'Thinking Display',
    thinkingDisplayDesc: 'Choose capsule or low-noise italic style',
    capsule: 'Capsule',
    italic: 'Italic',
    stepFinishInfo: 'Step Finish Info',
    tokens: 'Tokens',
    cache: 'Cache',
    cost: 'Cost',
    duration: 'Duration',
    totalDuration: 'Total Duration',
    showTokenUsage: 'Show token usage',
    showCacheHitInfo: 'Show cache hit info',
    showApiCost: 'Show API cost',
    showMessageResponseTime: 'Show message response time',
    showFullTurnElapsedTime: 'Show full turn elapsed time',
    systemNotifications: 'System Notifications',
    systemNotificationsDesc: 'Browser-level notifications when responses complete',
    notificationsLabel: 'Notifications',
    blockedByBrowser: 'Blocked by browser',
    notifyWhenAiCompletes: 'Notify when AI completes a response',
    testNotification: 'Test Notification',
    testNotificationDesc: 'Send a sample notification',
    enableNotificationsToTest: 'Enable notifications to test',
    send: 'Send',
    systemNotificationsUnavailable: 'System notifications are not available in this environment',
    inAppAlerts: 'In-App Alerts',
    inAppAlertsDesc: 'Toast notifications for background session events',
    toastNotifications: 'Toast Notifications',
    toastNotificationsDesc: 'Show in-app toast popups',
    localService: 'Local Service',
    localServiceDesc: 'Manage embedded opencode serve startup, status, and environment',
    binaryPath: 'Binary Path',
    binaryPathPlaceholder: 'opencode (default, uses PATH)',
    binaryPathHint: 'Leave empty to use opencode from PATH. Or enter full path, e.g. /usr/local/bin/opencode',
    autoStartService: 'Auto-start Service',
    autoStartServiceDesc: 'Run opencode serve automatically when app launches',
    serviceStatus: 'Service Status',
    startingOpencodeService: 'Starting opencode serve...',
    runningStartedByApp: 'Running (started by app)',
    runningExternal: 'Running (external)',
    notRunning: 'Not running',
    start: 'Start',
    stop: 'Stop',
    environmentVariables: 'Environment Variables',
    envVarsDesc: 'Passed to the opencode serve process (e.g. HTTPS_PROXY, API keys)',
    desktopOnlyServiceDesc: 'This section is available on desktop app only',
    checkHealth: 'Check health',
    checking: 'Checking...',
    invalidCredentials: 'Invalid credentials',
    offline: 'Offline',
    unknown: 'Unknown',
    name: 'Name',
    url: 'URL',
    username: 'Username',
    password: 'Password',
    nameRequired: 'Name required',
    urlRequired: 'URL required',
    invalidUrl: 'Invalid URL',
    myServer: 'My Server',
    serverUrlPlaceholder: 'http://192.168.1.100:4096',
    opencodeDefault: 'opencode (default)',
    hideAuthentication: 'Hide authentication',
    addAuthentication: 'Add authentication',
    crossOriginPasswordWarning: 'Cross-origin + password may not work due to a backend CORS limitation',
    credentialsStoredHint:
      'Credentials are stored in localStorage. For same-origin setups, the browser can handle auth natively without entering credentials here.',
    connections: 'Connections',
    connectionsDesc: 'Manage backend endpoints and choose which server this session uses',
    noServersConfigured: 'No servers configured',
    tabServers: 'Servers',
    tabServersDesc: 'Backend connections and fast active endpoint switching',
    tabChat: 'Chat',
    tabChatDesc: 'Reasoning style, path display, and conversation behavior',
    tabAppearance: 'Appearance',
    tabAppearanceDesc: 'Theme, color mode, and layout preferences',
    tabNotifications: 'Notifications',
    tabNotificationsDesc: 'Desktop and in-app alerts',
    tabService: 'Service',
    tabServiceDesc: 'Local opencode service management',
    tabShortcuts: 'Shortcuts',
    tabShortcutsDesc: 'Customize keyboard shortcuts for faster workflows',
    core: 'Core',
    advanced: 'Advanced',
    customizeUiBehaviorServerSetup: 'Customize UI, behavior, and server setup',
    closeSettings: 'Close settings',
    awaitingPermission: 'Awaiting Permission',
    awaitingAnswer: 'Awaiting Answer',
    retrying: 'Retrying',
    working: 'Working',
    completed: 'Completed',
    error: 'Error',
    permission: 'Permission',
    noProjectFoldersYet: 'No project folders yet',
    addProjectBrowseHint: 'Add a project to browse recent chats by folder.',
    deleteChat: 'Delete Chat',
    deleteChatConfirm: 'Are you sure you want to delete this chat? This action cannot be undone.',
    delete: 'Delete',
    moveFolderUp: 'Move folder up',
    moveFolderDown: 'Move folder down',
    noChatsInFolder: 'No chats in this folder',
    loadingMore: 'Loading more...',
    showMoreChats: 'Show more chats',
    keyboardShortcuts: 'Keyboard Shortcuts',
    resetAll: 'Reset all',
    resetToDefault: 'Reset to default',
    filter: 'Filter...',
    noMatches: 'No matches',
    shortcutRebindHelp: 'Click a shortcut to rebind. Enter confirm, Esc cancel.',
    add: 'Add',
    online: 'Online',
    openCodeWebModeHint:
      'OpenCode web mode connects to external servers and does not manage a local background service',
    pathStyleAuto: 'Auto',
    pathStyleUnix: 'Unix /',
    pathStyleWindows: 'Win \\',
    general: 'General',
    terminal: 'Terminal',
    enter: 'Enter',
    viewFullSession: 'View full session',
    loadingPanel: 'Loading panel...',
    noContent: 'No content',
    noActiveSession: 'No active session',
    createTerminal: 'Create Terminal',
    restoringSessions: 'Restoring sessions...',
    skills: 'Skills',
    refresh: 'Refresh',
    filterSkills: 'Filter skills...',
    loadingSkills: 'Loading skills...',
    noSkillsFound: 'No skills found',
    mcpServers: 'MCP Servers',
    addServer: 'Add Server',
    loadingServers: 'Loading servers...',
    noMcpServersConfigured: 'No MCP servers configured',
    newTerminal: 'New Terminal',
    hidePanel: 'Hide Panel',
    failedLoadSkills: 'Failed to load skills',
    retry: 'Retry',
    failedLoadMcpServers: 'Failed to load MCP servers',
    task: 'Task',
    againToStop: 'again to stop',
    failedLoadWorktrees: 'Failed to load worktrees',
    worktreeFailed: 'Worktree failed',
    failedCreateWorktree: 'Failed to create worktree',
    failedRemoveWorktree: 'Failed to remove worktree',
    failedResetWorktree: 'Failed to reset worktree',
    selectProjectToManageWorktrees: 'Select a project to manage worktrees',
    worktrees: 'Worktrees',
    createWorktree: 'Create Worktree',
    loadingWorktrees: 'Loading worktrees...',
    noWorktreesFound: 'No worktrees found',
    removeWorktree: 'Remove Worktree',
    removeWorktreeConfirmPrefix: 'Remove worktree',
    removeWorktreeConfirmSuffix: 'This will delete the worktree directory.',
    resetWorktree: 'Reset Worktree',
    resetWorktreeConfirmPrefix: 'Reset worktree',
    resetWorktreeConfirmSuffix: 'This will discard all uncommitted changes.',
    reset: 'Reset',
    newWorktree: 'New Worktree',
    worktreeNamePlaceholder: 'Worktree name (e.g. feature-xyz)',
    openSessionAfterCreation: 'Open session after creation',
    create: 'Create',
    openSessionInWorktree: 'Open session in this worktree',
    using: 'Using',
    detected: 'detected',
    windows: 'Windows',
    unix: 'Unix',
    serverNameRequired: 'Server name is required',
    commandRequired: 'Command is required',
    failedAddServer: 'Failed to add server',
    addMcpServer: 'Add MCP Server',
    local: 'Local',
    remote: 'Remote',
    serverName: 'Server name',
    commandPlaceholder: 'Command (e.g., npx -y @modelcontextprotocol/server-github)',
    adding: 'Adding...',
    disabled: 'Disabled',
    failed: 'Failed',
    needsAuth: 'Needs Auth',
    needsRegistration: 'Needs Registration',
    disconnect: 'Disconnect',
    connect: 'Connect',
    authenticate: 'Authenticate',
  },
  zh: {
    appName: 'OpenCodeUIPlus',
    waiting: '等待中',
    waitingQueue: '排队中',
    waitingReasoning: '推理中',
    waitingTool: '工具执行中',
    waitingRetry: '重试中',
    waitingSince: '已等待 {seconds} 秒',
    retryingAttempt: '重试中（第 {attempt} 次）',
    nextIn: '{time} 后重试',
    subagents: '子代理',
    subagentRunning: '运行中',
    subagentDone: '完成',
    subagentError: '异常',
    relatedTask: '关联任务：{task}',
    startedAt: '开始时间：{time}',
    jumpToMessage: '定位消息',
    openSession: '进入会话',
    language: '界面语言',
    newChat: '新建会话',
    openSidebar: '打开侧边栏',
    clickToRename: '点击重命名',
    shareSession: '分享会话',
    loadingSession: '正在加载会话...',
    loading: '加载中...',
    noMoreHistory: '没有更多历史消息',
    closeAppTitle: '关闭 OpenCodeUIPlus',
    closeAppDescription: '当前应用已启动 opencode 服务，是否同时停止服务？',
    closing: '正在关闭...',
    closeAndStopService: '关闭并停止服务',
    closeKeepService: '仅关闭，保持服务运行',
    cancel: '取消',
    settings: '设置',
    context: '上下文',
    contextUsage: '上下文占用',
    searchChats: '搜索会话...',
    clearSearch: '清空搜索',
    recents: '最近',
    active: '进行中',
    noActiveSessions: '暂无进行中的会话',
    notifications: '通知',
    readAll: '全部已读',
    clear: '清空',
    appearance: '外观',
    viewDetails: '查看详情',
    wideMode: '宽屏模式',
    standardWidth: '标准宽度',
    connectionConnected: '已连接',
    connectionConnecting: '连接中',
    connectionDisconnected: '未连接',
    connectionError: '错误',
    dismiss: '忽略',
    startNewConversation: '开始新会话',
    chooseWorkingDirectory: '为本次会话选择工作目录',
    workingDirectory: '工作目录',
    enterAbsolutePath: '输入绝对路径...',
    backToDirectoryList: '← 返回目录列表',
    backToParentSession: '返回父会话',
    selectDirectory: '选择目录...',
    current: '（当前）',
    enterCustomPath: '输入自定义路径...',
    startConversation: '开始会话',
    startWithCurrentDirectoryHint: '或直接在下方输入消息，以当前目录开始',
    question: '问题',
    minimize: '最小化',
    sending: '发送中...',
    submit: '提交',
    skip: '跳过',
    typeYourOwnAnswer: '输入你的自定义答案...',
    permissionTitle: '权限：{permission}',
    fromSubtask: '来自子任务：{title}',
    subtask: '子任务',
    changesPreview: '变更预览',
    requesting: '请求内容',
    allowed: '已允许',
    allowOnce: '仅本次允许',
    alwaysAllow: '始终允许',
    browserSession: '浏览器会话',
    thisSession: '当前会话',
    reject: '拒绝',
    autoApproveEnabledHint: '已启用自动批准。刷新浏览器可重置权限状态。',
    permissionSettingsHint: '你可以随时修改权限设置。',
    shareChat: '分享会话',
    publicLink: '公开链接',
    publicLinkDescription: '任何持有此链接的人都可查看该会话。',
    copyLink: '复制链接',
    processing: '处理中...',
    stopSharing: '停止分享',
    done: '完成',
    creatingLink: '创建链接中...',
    createPublicLink: '创建公开链接',
    failedCreateShareLink: '创建分享链接失败',
    failedRemoveShareLink: '移除分享链接失败',
    searchModels: '搜索模型...',
    noModelsFound: '未找到模型',
    tryDifferentKeyword: '试试其他关键词',
    thinking: '思考',
    vision: '视觉',
    pinToTop: '置顶',
    unpin: '取消置顶',
    selectModel: '选择模型',
    attachFile: '添加文件',
    stopGeneration: '停止生成',
    sendingMessage: '发送消息中',
    sendMessage: '发送消息',
    scrollToBottom: '滚动到底部',
    reply: '回复...',
    dropFilesHere: '将文件拖放到此处',
    addProject: '添加项目...',
    remove: '移除',
    removeProject: '移除项目',
    removeProjectConfirm: '将该项目从列表中移除？不会删除实际文件。',
    moreCount: '另 {count} 项',
    globalProject: '全局',
    session: '会话',
    messages: '消息',
    provider: '提供商',
    model: '模型',
    contextLimit: '上下文上限',
    totalTokens: '总 Token',
    usage: '使用率',
    totalCost: '总费用',
    input: '输入',
    output: '输出',
    reasoning: '推理',
    cacheRW: '缓存（读/写）',
    rawMessages: '原始消息',
    lastMessage: '最后消息：{id}',
    close: '关闭',
    themePresets: '主题预设',
    themePresetsDesc: '为应用选择基础视觉风格',
    customCss: '自定义 CSS',
    customCssDesc: '覆盖字体、颜色和 CSS 变量，适配所有主题',
    display: '显示',
    displayDesc: '控制颜色模式和布局',
    colorMode: '颜色模式',
    auto: '自动',
    light: '浅色',
    dark: '深色',
    wideModeDesc: '为长输出扩展聊天区域宽度',
    languageDesc: '即时切换界面语言并持久化偏好',
    pathsFormatting: '路径与格式',
    pathsFormattingDesc: '控制消息和工具中的路径显示方式',
    agentBehavior: 'Agent 行为',
    agentBehaviorDesc: '工具操作的执行默认项',
    autoApprove: '自动批准',
    autoApproveDesc: '本地规则处理 always，向服务端发送 once',
    sidebarRecents: '侧边栏最近会话',
    sidebarRecentsDesc: '为最近会话启用可选文件夹视图',
    folderStyleRecents: '文件夹式最近会话',
    folderStyleRecentsDesc: '按项目文件夹分组最近会话，同时保留默认列表',
    conversationExperience: '会话体验',
    conversationExperienceDesc: '消息密度、推理样式和步骤摘要字段',
    collapseLongMessages: '折叠长消息',
    collapseLongMessagesDesc: '自动折叠较长的用户消息',
    thinkingDisplay: '思考展示',
    thinkingDisplayDesc: '选择胶囊或低噪音斜体样式',
    capsule: '胶囊',
    italic: '斜体',
    stepFinishInfo: '步骤完成信息',
    tokens: 'Token',
    cache: '缓存',
    cost: '费用',
    duration: '时长',
    totalDuration: '总时长',
    showTokenUsage: '显示 Token 使用',
    showCacheHitInfo: '显示缓存命中信息',
    showApiCost: '显示 API 费用',
    showMessageResponseTime: '显示消息响应时间',
    showFullTurnElapsedTime: '显示整轮耗时',
    systemNotifications: '系统通知',
    systemNotificationsDesc: '响应完成后触发浏览器级通知',
    notificationsLabel: '通知',
    blockedByBrowser: '已被浏览器阻止',
    notifyWhenAiCompletes: 'AI 响应完成时通知',
    testNotification: '测试通知',
    testNotificationDesc: '发送一条示例通知',
    enableNotificationsToTest: '请先启用通知再测试',
    send: '发送',
    systemNotificationsUnavailable: '当前环境不支持系统通知',
    inAppAlerts: '应用内提醒',
    inAppAlertsDesc: '后台会话事件的 Toast 通知',
    toastNotifications: 'Toast 通知',
    toastNotificationsDesc: '显示应用内浮动提示',
    localService: '本地服务',
    localServiceDesc: '管理内置 opencode serve 的启动、状态与环境',
    binaryPath: '二进制路径',
    binaryPathPlaceholder: 'opencode（默认，使用 PATH）',
    binaryPathHint: '留空将使用 PATH 中的 opencode。也可输入完整路径，例如 /usr/local/bin/opencode',
    autoStartService: '自动启动服务',
    autoStartServiceDesc: '应用启动时自动运行 opencode serve',
    serviceStatus: '服务状态',
    startingOpencodeService: '正在启动 opencode serve...',
    runningStartedByApp: '运行中（由应用启动）',
    runningExternal: '运行中（外部启动）',
    notRunning: '未运行',
    start: '启动',
    stop: '停止',
    environmentVariables: '环境变量',
    envVarsDesc: '传递给 opencode serve 进程（如 HTTPS_PROXY、API key）',
    desktopOnlyServiceDesc: '该部分仅在桌面端可用',
    checkHealth: '检查健康状态',
    checking: '检查中...',
    invalidCredentials: '凭据无效',
    offline: '离线',
    unknown: '未知',
    name: '名称',
    url: 'URL',
    username: '用户名',
    password: '密码',
    nameRequired: '名称必填',
    urlRequired: 'URL 必填',
    invalidUrl: 'URL 无效',
    myServer: '我的服务',
    serverUrlPlaceholder: 'http://192.168.1.100:4096',
    opencodeDefault: 'opencode（默认）',
    hideAuthentication: '隐藏认证',
    addAuthentication: '添加认证',
    crossOriginPasswordWarning: '跨域 + 密码可能因后端 CORS 限制无法使用',
    credentialsStoredHint: '凭据保存在 localStorage。对于同源部署，浏览器通常可原生处理认证，无需在此填写。',
    connections: '连接',
    connectionsDesc: '管理后端端点并选择当前会话使用的服务',
    noServersConfigured: '尚未配置服务',
    tabServers: '服务',
    tabServersDesc: '后端连接与快速切换当前端点',
    tabChat: '聊天',
    tabChatDesc: '推理样式、路径显示与会话行为',
    tabAppearance: '外观',
    tabAppearanceDesc: '主题、颜色模式与布局偏好',
    tabNotifications: '通知',
    tabNotificationsDesc: '桌面与应用内提醒',
    tabService: '服务',
    tabServiceDesc: '本地 opencode 服务管理',
    tabShortcuts: '快捷键',
    tabShortcutsDesc: '自定义快捷键以提升效率',
    core: '核心',
    advanced: '高级',
    customizeUiBehaviorServerSetup: '自定义界面、行为与服务配置',
    closeSettings: '关闭设置',
    awaitingPermission: '等待权限',
    awaitingAnswer: '等待回答',
    retrying: '重试中',
    working: '执行中',
    completed: '完成',
    error: '错误',
    permission: '权限',
    noProjectFoldersYet: '暂无项目文件夹',
    addProjectBrowseHint: '添加项目后可按文件夹浏览最近会话。',
    deleteChat: '删除会话',
    deleteChatConfirm: '确定删除该会话吗？该操作不可撤销。',
    delete: '删除',
    moveFolderUp: '上移文件夹',
    moveFolderDown: '下移文件夹',
    noChatsInFolder: '此文件夹暂无会话',
    loadingMore: '加载更多中...',
    showMoreChats: '显示更多会话',
    keyboardShortcuts: '键盘快捷键',
    resetAll: '全部重置',
    resetToDefault: '恢复默认',
    filter: '筛选...',
    noMatches: '无匹配项',
    shortcutRebindHelp: '点击快捷键可重新绑定。Enter 确认，Esc 取消。',
    add: '添加',
    online: '在线',
    openCodeWebModeHint: 'OpenCode 网页模式连接外部服务，不管理本地后台服务',
    pathStyleAuto: '自动',
    pathStyleUnix: 'Unix /',
    pathStyleWindows: 'Win \\',
    general: '通用',
    terminal: '终端',
    enter: '进入',
    viewFullSession: '查看完整会话',
    loadingPanel: '面板加载中...',
    noContent: '暂无内容',
    noActiveSession: '当前没有活跃会话',
    createTerminal: '创建终端',
    restoringSessions: '正在恢复会话...',
    skills: '技能',
    refresh: '刷新',
    filterSkills: '筛选技能...',
    loadingSkills: '技能加载中...',
    noSkillsFound: '未找到技能',
    mcpServers: 'MCP 服务',
    addServer: '添加服务',
    loadingServers: '服务加载中...',
    noMcpServersConfigured: '尚未配置 MCP 服务',
    newTerminal: '新建终端',
    hidePanel: '隐藏面板',
    failedLoadSkills: '加载技能失败',
    retry: '重试',
    failedLoadMcpServers: '加载 MCP 服务失败',
    task: '任务',
    againToStop: '再次按下以停止',
    failedLoadWorktrees: '加载 worktree 失败',
    worktreeFailed: 'worktree 执行失败',
    failedCreateWorktree: '创建 worktree 失败',
    failedRemoveWorktree: '移除 worktree 失败',
    failedResetWorktree: '重置 worktree 失败',
    selectProjectToManageWorktrees: '请先选择项目再管理 worktree',
    worktrees: 'Worktree',
    createWorktree: '创建 Worktree',
    loadingWorktrees: '正在加载 worktree...',
    noWorktreesFound: '未找到 worktree',
    removeWorktree: '移除 Worktree',
    removeWorktreeConfirmPrefix: '确认移除 worktree',
    removeWorktreeConfirmSuffix: '该操作会删除对应 worktree 目录。',
    resetWorktree: '重置 Worktree',
    resetWorktreeConfirmPrefix: '确认重置 worktree',
    resetWorktreeConfirmSuffix: '该操作会丢弃所有未提交修改。',
    reset: '重置',
    newWorktree: '新建 Worktree',
    worktreeNamePlaceholder: 'Worktree 名称（如 feature-xyz）',
    openSessionAfterCreation: '创建后进入会话',
    create: '创建',
    openSessionInWorktree: '在该 worktree 中打开会话',
    using: '使用',
    detected: '检测到',
    windows: 'Windows',
    unix: 'Unix',
    serverNameRequired: '服务名称必填',
    commandRequired: '命令必填',
    failedAddServer: '添加服务失败',
    addMcpServer: '添加 MCP 服务',
    local: '本地',
    remote: '远程',
    serverName: '服务名称',
    commandPlaceholder: '命令（例如：npx -y @modelcontextprotocol/server-github）',
    adding: '添加中...',
    disabled: '已禁用',
    failed: '失败',
    needsAuth: '需要认证',
    needsRegistration: '需要注册',
    disconnect: '断开连接',
    connect: '连接',
    authenticate: '认证',
  },
}

type I18nState = {
  language: UILanguage
}

type Subscriber = () => void

const subscribers = new Set<Subscriber>()

const detectLanguage = (): UILanguage => {
  const stored = localStorage.getItem(STORAGE_KEY_UI_LANGUAGE)
  if (stored === 'zh' || stored === 'en') return stored
  const nav = navigator.language.toLowerCase()
  return nav.startsWith('zh') ? 'zh' : 'en'
}

const state: I18nState = {
  language: detectLanguage(),
}

const emit = () => {
  subscribers.forEach(fn => fn())
}

const setDocumentLanguage = (lang: UILanguage) => {
  document.documentElement.lang = lang
}

setDocumentLanguage(state.language)

export const setUILanguage = (language: UILanguage) => {
  if (state.language === language) return
  state.language = language
  localStorage.setItem(STORAGE_KEY_UI_LANGUAGE, language)
  setDocumentLanguage(language)
  emit()
}

export const getUILanguage = (): UILanguage => state.language

export const subscribeUILanguage = (fn: Subscriber) => {
  subscribers.add(fn)
  return () => subscribers.delete(fn)
}

export const t = (key: TranslationKey, vars?: Record<string, string | number>) => {
  const dictionary = dictionaries[state.language]
  const template = dictionary[key]
  if (!vars) return template
  return Object.entries(vars).reduce((text, [name, value]) => {
    return text.replaceAll(`{${name}}`, String(value))
  }, template)
}

export const useI18n = () => {
  const language = useSyncExternalStore(subscribeUILanguage, getUILanguage)
  return {
    language,
    setLanguage: setUILanguage,
    t,
  }
}
