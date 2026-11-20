import { useState } from 'react'
import { Grammar } from './components/Grammar'
import { Sounds } from './components/Sounds'
import { Stats } from './components/Stats'
import { Vocab } from './components/Vocab'
import { LangProvider, useLang, type UiKey } from './lib/i18n'

const tabs: { id: string; key: UiKey; icon: string }[] = [
  { id: 'vocab', key: 'tabVocab', icon: '🗂️' },
  { id: 'grammar', key: 'tabGrammar', icon: '📖' },
  { id: 'sound', key: 'tabSound', icon: '🔊' },
  { id: 'stats', key: 'tabStats', icon: '📈' },
]

function Shell() {
  const [tab, setTab] = useState('vocab')
  const { lang, setLang, t } = useLang()
  return (
    <div className="app">
      <header>
        <b>🇫🇷 {t('appName')}</b>
        <div className="lang" role="group" aria-label={t('language')}>
          <button className={lang === 'vi' ? 'on' : ''} onClick={() => setLang('vi')}>VI</button>
          <button className={lang === 'en' ? 'on' : ''} onClick={() => setLang('en')}>EN</button>
        </div>
      </header>
      <main>
        {tab === 'vocab' && <Vocab />}
        {tab === 'grammar' && <Grammar />}
        {tab === 'sound' && <Sounds />}
        {tab === 'stats' && <Stats />}
      </main>
      <nav>
        {tabs.map((x) => (
          <button key={x.id} className={tab === x.id ? 'on' : ''} onClick={() => setTab(x.id)}>
            <span>{x.icon}</span>
            {t(x.key)}
          </button>
        ))}
      </nav>
    </div>
  )
}

export default function App() {
  return (
    <LangProvider>
      <Shell />
    </LangProvider>
  )
}
