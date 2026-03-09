import { memo, useMemo } from 'react'
import { UsersIcon } from '../../components/Icons'
import type { ChildSessionInfo } from '../../store'
import { useI18n } from '../../i18n'

interface SubagentListInlineProps {
  items: Array<
    ChildSessionInfo & {
      relatedTask: string
      relatedMessageId?: string
      elapsedSeconds: number
    }
  >
  onOpenSession: (sessionId: string) => void
  onJumpToMessage: (messageId: string) => void
}

export const SubagentListInline = memo(function SubagentListInline({
  items,
  onOpenSession,
  onJumpToMessage,
}: SubagentListInlineProps) {
  const { t } = useI18n()

  const rows = useMemo(
    () =>
      items.map(item => {
        const status =
          item.status === 'running'
            ? t('subagentRunning')
            : item.status === 'idle'
              ? t('subagentDone')
              : t('subagentError')
        return {
          ...item,
          status,
        }
      }),
    [items, t],
  )

  if (rows.length === 0) return null

  return (
    <div className="mx-auto w-full max-w-[900px] px-4 mt-2">
      <div className="rounded-lg border border-border-200/60 bg-bg-100/70 p-3">
        <div className="flex items-center gap-2 text-xs text-text-300 mb-2">
          <UsersIcon size={14} />
          <span className="font-medium">{t('subagents')}</span>
        </div>
        <div className="space-y-2">
          {rows.map(item => (
            <div key={item.id} className="rounded-md border border-border-200/50 bg-bg-050/60 px-2.5 py-2">
              <div className="flex items-center justify-between gap-2">
                <div className="min-w-0">
                  <div className="text-sm text-text-100 truncate">
                    {item.agent || item.title || item.id.slice(0, 8)}
                  </div>
                  <div className="text-[11px] text-text-400 mt-0.5 truncate">
                    {item.status} · {item.elapsedSeconds}s
                  </div>
                </div>
                <div className="flex items-center gap-1.5 shrink-0">
                  <button
                    className="px-2 py-1 text-[11px] rounded border border-border-200/60 hover:bg-bg-200/60 text-text-300"
                    onClick={() => onJumpToMessage(item.relatedMessageId || item.relatedTask)}
                  >
                    {t('jumpToMessage')}
                  </button>
                  <button
                    className="px-2 py-1 text-[11px] rounded border border-border-200/60 hover:bg-bg-200/60 text-text-300"
                    onClick={() => onOpenSession(item.id)}
                  >
                    {t('openSession')}
                  </button>
                </div>
              </div>
              <div className="text-[11px] text-text-400 mt-1 truncate">
                {t('relatedTask', { task: item.relatedTask })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
})
