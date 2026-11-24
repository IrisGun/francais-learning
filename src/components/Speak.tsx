import { speak } from '../lib/speech'
import { useLang } from '../lib/i18n'

export function Speak({ text, slow }: { text: string; slow?: boolean }) {
  const { t } = useLang()
  return (
    <button
      className="icon-btn"
      aria-label={slow ? t('slow') : 'play'}
      title={slow ? t('slow') : undefined}
      onClick={(e) => {
        e.stopPropagation()
        speak(text, slow)
      }}
    >
      {slow ? '🐢' : '🔊'}
    </button>
  )
}
