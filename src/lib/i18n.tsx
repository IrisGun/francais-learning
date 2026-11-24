import { createContext, useContext, useState, type ReactNode } from 'react'

export type Lang = 'vi' | 'en'

const ui = {
  vi: {
    appName: 'Tiếng Pháp A1',
    tabVocab: 'Từ vựng',
    tabGrammar: 'Ngữ pháp',
    tabSound: 'Phát âm',
    tabStats: 'Tiến độ',
    reviewToday: 'Ôn hôm nay',
    due: 'cần ôn',
    newCards: 'từ mới',
    startReview: 'Bắt đầu ôn',
    nothingDue: 'Hôm nay không còn thẻ nào. Giỏi lắm! 🎉',
    topics: 'Chủ đề',
    words: 'từ',
    learned: 'đã học',
    study: 'Học',
    list: 'Danh sách',
    back: '← Quay lại',
    show: 'Hiện đáp án',
    again: 'Lại',
    hard: 'Khó',
    good: 'Được',
    easy: 'Dễ',
    done: 'Xong phiên học!',
    streak: 'Chuỗi ngày',
    days: 'ngày',
    totalLearned: 'Từ đã học',
    exportData: 'Sao lưu (xuất file)',
    importData: 'Khôi phục (nhập file)',
    reset: 'Xóa tiến độ',
    resetConfirm: 'Xóa toàn bộ tiến độ học?',
    noVoice: 'Máy bạn chưa có giọng tiếng Pháp. Vào Cài đặt Android → Chuyển văn bản thành giọng nói → cài giọng Pháp (fr-FR).',
    check: 'Kiểm tra',
    quiz: 'Bài tập',
    correct: 'Đúng! ',
    wrong: 'Chưa đúng. ',
    score: 'Điểm',
    retry: 'Làm lại',
    slow: 'Đọc chậm',
    example: 'Ví dụ',
    language: 'Ngôn ngữ',
    backupNote: 'Tiến độ chỉ lưu trên máy này. Hãy sao lưu định kỳ để không mất.',
    install: 'Mẹo: Chrome → ⋮ → "Thêm vào màn hình chính" để dùng như app.',
    imported: 'Đã khôi phục.',
    importFail: 'File không hợp lệ.',
  },
  en: {
    appName: 'French A1',
    tabVocab: 'Vocab',
    tabGrammar: 'Grammar',
    tabSound: 'Sounds',
    tabStats: 'Progress',
    reviewToday: "Today's review",
    due: 'due',
    newCards: 'new',
    startReview: 'Start review',
    nothingDue: 'No cards left today. Well done! 🎉',
    topics: 'Topics',
    words: 'words',
    learned: 'learned',
    study: 'Study',
    list: 'List',
    back: '← Back',
    show: 'Show answer',
    again: 'Again',
    hard: 'Hard',
    good: 'Good',
    easy: 'Easy',
    done: 'Session complete!',
    streak: 'Streak',
    days: 'days',
    totalLearned: 'Words learned',
    exportData: 'Back up (export file)',
    importData: 'Restore (import file)',
    reset: 'Reset progress',
    resetConfirm: 'Delete all learning progress?',
    noVoice: 'No French voice found. Go to Android Settings → Text-to-speech → install French (fr-FR).',
    check: 'Check',
    quiz: 'Exercises',
    correct: 'Correct! ',
    wrong: 'Not quite. ',
    score: 'Score',
    retry: 'Try again',
    slow: 'Slow',
    example: 'Example',
    language: 'Language',
    backupNote: 'Progress is stored on this device only. Back up regularly.',
    install: 'Tip: Chrome → ⋮ → "Add to Home screen" to use it like an app.',
    imported: 'Restored.',
    importFail: 'Invalid file.',
  },
} as const

export type UiKey = keyof (typeof ui)['vi']

interface Ctx {
  lang: Lang
  setLang: (l: Lang) => void
  t: (k: UiKey) => string
}

const C = createContext<Ctx>(null!)

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setL] = useState<Lang>(() => (localStorage.getItem('lang') as Lang) || 'vi')
  const setLang = (l: Lang) => {
    localStorage.setItem('lang', l)
    setL(l)
  }
  return <C.Provider value={{ lang, setLang, t: (k) => ui[lang][k] }}>{children}</C.Provider>
}

export const useLang = () => useContext(C)
