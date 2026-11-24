import { useSyncExternalStore } from 'react'

export interface Card {
  ease: number
  interval: number // days
  due: number // epoch day
  reps: number
}

export interface State {
  cards: Record<string, Card>
  streak: number
  lastDay: number
  newToday: { day: number; n: number }
}

const KEY = 'fr-a1-state'
export const NEW_PER_DAY = 10
export const today = () => Math.floor((Date.now() - new Date().getTimezoneOffset() * 60000) / 86400000)

const empty = (): State => ({ cards: {}, streak: 0, lastDay: 0, newToday: { day: 0, n: 0 } })

function load(): State {
  try {
    return { ...empty(), ...JSON.parse(localStorage.getItem(KEY) || '{}') }
  } catch {
    return empty()
  }
}

let state = load()
const subs = new Set<() => void>()

function commit(next: State) {
  state = next
  localStorage.setItem(KEY, JSON.stringify(state))
  subs.forEach((f) => f())
}

export const useStore = () =>
  useSyncExternalStore(
    (f) => (subs.add(f), () => subs.delete(f)),
    () => state,
  )

export type Rating = 0 | 1 | 2 | 3 // again, hard, good, easy

// simplified SM-2
export function rate(id: string, r: Rating) {
  const d = today()
  const prev = state.cards[id]
  const isNew = !prev
  let { ease, interval, reps } = prev ?? { ease: 2.5, interval: 0, reps: 0 }
  if (r === 0) {
    reps = 0
    interval = 0
    ease = Math.max(1.3, ease - 0.2)
  } else {
    reps += 1
    if (reps === 1) interval = r === 3 ? 4 : 1
    else if (reps === 2) interval = r === 3 ? 7 : r === 2 ? 3 : 2
    else interval = Math.max(1, Math.round(interval * (r === 1 ? 1.2 : r === 2 ? ease : ease * 1.3)))
    if (r === 1) ease = Math.max(1.3, ease - 0.15)
    if (r === 3) ease += 0.15
  }
  const card: Card = { ease, interval, reps, due: r === 0 ? d : d + interval }
  let streak = state.streak
  if (state.lastDay !== d) streak = state.lastDay === d - 1 ? streak + 1 : 1
  const newToday = state.newToday.day === d ? { ...state.newToday } : { day: d, n: 0 }
  if (isNew) newToday.n += 1
  commit({ ...state, cards: { ...state.cards, [id]: card }, streak, lastDay: d, newToday })
}

export const learnedCount = (s: State, ids?: string[]) =>
  (ids ?? Object.keys(s.cards)).filter((id) => (s.cards[id]?.reps ?? 0) > 0).length

export const exportJson = () => JSON.stringify(state)

export function importJson(text: string) {
  const o = JSON.parse(text)
  if (!o || typeof o !== 'object' || !o.cards) throw new Error('bad')
  commit({ ...empty(), ...o })
}

export const resetAll = () => commit(empty())
