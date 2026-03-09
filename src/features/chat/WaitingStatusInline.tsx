import { memo, useEffect, useMemo, useState } from 'react'
import { SpinnerIcon } from '../../components/Icons'
import { useI18n } from '../../i18n'

export interface WaitingStatusInlineData {
  phase: 'queue' | 'reasoning' | 'tool' | 'retry'
  since: number
}

export const WaitingStatusInline = memo(function WaitingStatusInline({ status }: { status: WaitingStatusInlineData }) {
  const { t } = useI18n()
  const [now, setNow] = useState(() => Date.now())

  useEffect(() => {
    const timer = window.setInterval(() => setNow(Date.now()), 1000)
    return () => window.clearInterval(timer)
  }, [])

  const phaseLabel = useMemo(() => {
    if (status.phase === 'queue') return t('waitingQueue')
    if (status.phase === 'reasoning') return t('waitingReasoning')
    if (status.phase === 'tool') return t('waitingTool')
    return t('waitingRetry')
  }, [status.phase, t])

  const elapsedSeconds = Math.max(0, Math.floor((now - status.since) / 1000))

  return (
    <div
      className="my-2 px-3 py-2 rounded-lg border border-info-100/20 bg-info-100/10"
      role="status"
      aria-live="polite"
    >
      <div className="flex items-center gap-2 min-w-0">
        <SpinnerIcon className="w-4 h-4 text-info-100 animate-spin flex-shrink-0" />
        <span className="text-sm text-info-100 flex-1 min-w-0 truncate">
          {t('waiting')} · {phaseLabel}
          <span className="text-xs text-text-400 ml-2 tabular-nums">
            {t('waitingSince', { seconds: elapsedSeconds })}
          </span>
        </span>
      </div>
    </div>
  )
})
