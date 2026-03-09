import { useSyncExternalStore } from 'react'
import { STORAGE_KEY_UI_LANGUAGE } from '../constants/storage'

export type UILanguage = 'zh' | 'en'

type TranslationKey =
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
