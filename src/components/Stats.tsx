import { useRef, useState } from 'react'
import { allWords } from '../data/vocab'
import { useLang } from '../lib/i18n'
import { exportJson, importJson, learnedCount, resetAll, useStore } from '../lib/store'

export function Stats() {
  const s = useStore()
  const { t } = useLang()
  const [msg, setMsg] = useState('')
  const file = useRef<HTMLInputElement>(null)
  return (
    <div>
      <div className="grid">
        <div className="topic"><div className="emoji">🔥</div><b>{s.streak} {t('days')}</b><div className="muted">{t('streak')}</div></div>
        <div className="topic"><div className="emoji">📚</div><b>{learnedCount(s)}/{allWords.length}</b><div className="muted">{t('totalLearned')}</div></div>
      </div>
      <div className="panel">
        <p className="muted">{t('backupNote')}</p>
        <div className="row">
          <button onClick={() => {
            const a = document.createElement('a')
            a.href = URL.createObjectURL(new Blob([exportJson()], { type: 'application/json' }))
            a.download = 'francais-progress.json'
            a.click()
          }}>{t('exportData')}</button>
          <button onClick={() => file.current?.click()}>{t('importData')}</button>
          <button onClick={() => confirm(t('resetConfirm')) && resetAll()}>{t('reset')}</button>
        </div>
        <input ref={file} type="file" accept="application/json" hidden onChange={async (e) => {
          const f = e.target.files?.[0]
          if (!f) return
          try { importJson(await f.text()); setMsg(t('imported')) } catch { setMsg(t('importFail')) }
          e.target.value = ''
        }} />
        {msg && <p>{msg}</p>}
        <p className="muted">{t('install')}</p>
      </div>
    </div>
  )
}
