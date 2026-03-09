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
