import { pronunciation } from '../data/pronunciation'
import { useLang } from '../lib/i18n'
import { hasFrenchVoice } from '../lib/speech'
import { Speak } from './Speak'

export function Sounds() {
  const { lang, t } = useLang()
  return (
    <div>
      {!hasFrenchVoice() && <p className="tip">⚠️ {t('noVoice')}</p>}
      {pronunciation.map((s) => (
        <section key={s.id} className="panel">
          <h2>{s.title[lang]}</h2>
          <p>{s.intro[lang]}</p>
          {s.points && <ul>{s.points.map((p, i) => <li key={i}>{p[lang]}</li>)}</ul>}
          {s.sounds && (
            <ul className="list">
              {s.sounds.map((x) => (
                <li key={x.fr}>
                  <div>
                    <b>{x.fr}</b> <Speak text={x.fr} /> <Speak text={x.fr} slow />{' '}
                    <span className="ipa">{x.ipa}</span> <span className="say">{x.say}</span>
                    {x.note && <div className="muted">{x.note[lang]}</div>}
                  </div>
                </li>
              ))}
            </ul>
          )}
        </section>
      ))}
    </div>
  )
}
