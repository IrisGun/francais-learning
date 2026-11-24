let voice: SpeechSynthesisVoice | null = null

function pick() {
  if (!('speechSynthesis' in window)) return
  const vs = speechSynthesis.getVoices().filter((v) => v.lang.toLowerCase().startsWith('fr'))
  voice = vs.find((v) => v.lang.toLowerCase() === 'fr-fr') ?? vs[0] ?? null
}

if ('speechSynthesis' in window) {
  pick()
  speechSynthesis.addEventListener('voiceschanged', pick)
}

export const hasFrenchVoice = () => {
  pick()
  return !!voice
}

export function speak(text: string, slow = false) {
  if (!('speechSynthesis' in window)) return
  speechSynthesis.cancel()
  const u = new SpeechSynthesisUtterance(text.replace(/\s*\/\s*/g, ', '))
  u.lang = 'fr-FR'
  if (voice) u.voice = voice
  u.rate = slow ? 0.6 : 0.9
  speechSynthesis.speak(u)
}
