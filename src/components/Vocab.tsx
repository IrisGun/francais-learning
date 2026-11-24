import { useMemo, useState } from 'react'
import { allWords, topics, type Word } from '../data/vocab'
import { vocabEn } from '../data/vocabEn'
import { useLang } from '../lib/i18n'
import { NEW_PER_DAY, learnedCount, rate, today, useStore, type Rating } from '../lib/store'
import { Speak } from './Speak'

export function useMeaning() {
  const { lang } = useLang()
  return (w: Word) => {
    if (lang === 'vi') return { meaning: w.vi, ex: w.exVi }
    const idx = Number(w.id.slice(w.id.lastIndexOf('-') + 1))
    const topicId = w.id.slice(0, w.id.lastIndexOf('-'))
    const e = vocabEn[topicId]?.[idx]
    return { meaning: e?.[0] ?? w.vi, ex: e?.[1] ?? w.exVi }
  }
}

function Card({ w, onRate }: { w: Word; onRate: (r: Rating) => void }) {
  const [shown, setShown] = useState(false)
  const { t } = useLang()
  const m = useMeaning()(w)
  return (
    <div className="card">
      <div className="fr">
        {w.fr} <Speak text={w.fr} />
      </div>
      {!shown ? (
        <button className="primary" onClick={() => setShown(true)}>
          {t('show')}
        </button>
      ) : (
        <>
          <div className="ipa">{w.ipa}</div>
          <div className="say">{w.say}</div>
          <div className="meaning">{m.meaning}</div>
          <div className="example">
            <b>{w.ex}</b> <Speak text={w.ex} /> <Speak text={w.ex} slow />
            <br />
            <span className="muted">{m.ex}</span>
          </div>
          <div className="rates">
            <button className="r0" onClick={() => onRate(0)}>{t('again')}</button>
            <button className="r1" onClick={() => onRate(1)}>{t('hard')}</button>
            <button className="r2" onClick={() => onRate(2)}>{t('good')}</button>
            <button className="r3" onClick={() => onRate(3)}>{t('easy')}</button>
          </div>
        </>
      )}
    </div>
  )
}

function Session({ words, onExit }: { words: Word[]; onExit: () => void }) {
  const { t } = useLang()
  const [queue, setQueue] = useState(words)
  const [total] = useState(words.length)
  if (queue.length === 0)
    return (
      <div className="center">
        <h2>{t('done')} 🎉</h2>
        <button className="primary" onClick={onExit}>{t('back')}</button>
      </div>
    )
  const w = queue[0]
  return (
    <div>
      <button className="link" onClick={onExit}>{t('back')}</button>
      <div className="muted">{total - queue.length + 1} / {total}</div>
      <Card
        key={w.id + queue.length}
        w={w}
        onRate={(r) => {
          rate(w.id, r)
          setQueue((q) => (r === 0 ? [...q.slice(1), w] : q.slice(1)))
        }}
      />
    </div>
  )
}

function WordList({ words, onExit }: { words: Word[]; onExit: () => void }) {
  const { t } = useLang()
  const m = useMeaning()
  return (
    <div>
      <button className="link" onClick={onExit}>{t('back')}</button>
      <ul className="list">
        {words.map((w) => (
          <li key={w.id}>
            <div>
              <b>{w.fr}</b> <Speak text={w.fr} /> <span className="ipa">{w.ipa}</span>
              <div className="say">{w.say}</div>
              <div>{m(w).meaning}</div>
              <div className="muted">{w.ex} — {m(w).ex}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function Vocab() {
  const s = useStore()
  const { t } = useLang()
  const [mode, setMode] = useState<{ kind: 'review' | 'study' | 'list'; words: Word[] } | null>(null)

  const d = today()
  const { dueWords, newWords } = useMemo(() => {
    const dueWords = allWords.filter((w) => s.cards[w.id] && s.cards[w.id].due <= d)
    const left = Math.max(0, NEW_PER_DAY - (s.newToday.day === d ? s.newToday.n : 0))
    const newWords = allWords.filter((w) => !s.cards[w.id]).slice(0, left)
    return { dueWords, newWords }
  }, [s, d])

  if (mode?.kind === 'list') return <WordList words={mode.words} onExit={() => setMode(null)} />
  if (mode) return <Session words={mode.words} onExit={() => setMode(null)} />

  const todayWords = [...dueWords, ...newWords]
  return (
    <div>
      <div className="panel">
        <h2>{t('reviewToday')}</h2>
        <p>
          <b>{dueWords.length}</b> {t('due')} · <b>{newWords.length}</b> {t('newCards')}
        </p>
        {todayWords.length ? (
          <button className="primary" onClick={() => setMode({ kind: 'review', words: todayWords })}>
            {t('startReview')}
          </button>
        ) : (
          <p>{t('nothingDue')}</p>
        )}
      </div>
      <h3>{t('topics')}</h3>
      <div className="grid">
        {topics.map((tp) => {
          const ids = tp.words.map((w) => w.id)
          const n = learnedCount(s, ids)
          return (
            <div key={tp.id} className="topic">
              <div className="emoji">{tp.emoji}</div>
              <b>{tp.title}</b>
              <div className="muted">{n}/{tp.words.length} {t('learned')}</div>
              <div className="bar"><div style={{ width: `${(n / tp.words.length) * 100}%` }} /></div>
              <div className="row">
                <button onClick={() => setMode({ kind: 'study', words: tp.words })}>{t('study')}</button>
                <button onClick={() => setMode({ kind: 'list', words: tp.words })}>{t('list')}</button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
