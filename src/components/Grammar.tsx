import { useState } from 'react'
import { lessons as viLessons, type Block, type Lesson } from '../data/grammar'
import { lessonsEn } from '../data/grammarEn'
import { useLang } from '../lib/i18n'
import { Speak } from './Speak'

const isFrench = (s: string) => /[àâçéèêëîïôûùüœ]|\b(je|tu|il|elle|nous|vous|les?|la|un|une|des|est|c'est)\b/i.test(s)

function Render({ b }: { b: Block }) {
  if (b.t === 'p') return <p>{b.text}</p>
  if (b.t === 'tip') return <p className="tip">💡 {b.text}</p>
  if (b.t === 'table')
    return (
      <div className="scroll">
        <table>
          <thead><tr>{b.head.map((h, i) => <th key={i}>{h}</th>)}</tr></thead>
          <tbody>
            {b.rows.map((r, i) => (
              <tr key={i}>{r.map((c, j) => <td key={j}>{c}</td>)}</tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  return (
    <ul className="ex">
      {b.items.map(([fr, tr], i) => (
        <li key={i}>
          <b>{fr}</b> {isFrench(fr) && <Speak text={fr.split('→').pop()!.trim()} />}
          <div className="muted">{tr}</div>
        </li>
      ))}
    </ul>
  )
}

function Quiz({ lesson }: { lesson: Lesson }) {
  const { t } = useLang()
  const [picked, setPicked] = useState<Record<number, number>>({})
  const done = Object.keys(picked).length === lesson.quiz.length
  const score = lesson.quiz.filter((q, i) => picked[i] === q.answer).length
  return (
    <div className="panel">
      <h3>{t('quiz')}</h3>
      {lesson.quiz.map((q, i) => (
        <div key={i} className="q">
          <p><b>{i + 1}. {q.q}</b></p>
          <div className="opts">
            {q.options.map((o, j) => {
              const sel = picked[i] !== undefined
              const cls = !sel ? '' : j === q.answer ? 'ok' : picked[i] === j ? 'bad' : ''
              return (
                <button key={j} className={cls} disabled={sel} onClick={() => setPicked({ ...picked, [i]: j })}>
                  {o}
                </button>
              )
            })}
          </div>
          {picked[i] !== undefined && (
            <p className="muted">{picked[i] === q.answer ? t('correct') : t('wrong')}{q.why}</p>
          )}
        </div>
      ))}
      {done && (
        <p>
          <b>{t('score')}: {score}/{lesson.quiz.length}</b>{' '}
          <button onClick={() => setPicked({})}>{t('retry')}</button>
        </p>
      )}
    </div>
  )
}

export function Grammar() {
  const { lang, t } = useLang()
  const [id, setId] = useState<string | null>(null)
  const list = lang === 'vi' ? viLessons : lessonsEn
  const lesson = list.find((l) => l.id === id)
  if (!lesson)
    return (
      <ul className="lessons">
        {list.map((l, i) => (
          <li key={l.id}>
            <button onClick={() => setId(l.id)}>
              <span className="num">{i + 1}</span>
              <span><b>{l.title}</b><br /><span className="muted">{l.summary}</span></span>
            </button>
          </li>
        ))}
      </ul>
    )
  return (
    <div>
      <button className="link" onClick={() => setId(null)}>{t('back')}</button>
      <h2>{lesson.title}</h2>
      {lesson.blocks.map((b, i) => <Render key={i} b={b} />)}
      <Quiz key={lesson.id + lang} lesson={lesson} />
    </div>
  )
}
