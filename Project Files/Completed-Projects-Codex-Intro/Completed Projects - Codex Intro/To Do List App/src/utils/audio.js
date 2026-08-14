const COMPLETION_START_FREQUENCY = 660
const COMPLETION_END_FREQUENCY = 880
const COMPLETION_RAMP_DURATION = 0.08
const COMPLETION_DURATION = 0.18
const COMPLETION_START_VOLUME = 0.001
const COMPLETION_PEAK_VOLUME = 0.08
const COMPLETION_ATTACK_DURATION = 0.01

let completionAudioContext

export function playCompletionSound() {
  if (typeof window === 'undefined') return

  const AudioContext = window.AudioContext || window.webkitAudioContext
  if (!AudioContext) return

  try {
    const audioContext = completionAudioContext || new AudioContext()
    completionAudioContext = audioContext

    if (audioContext.state === 'suspended') {
      audioContext.resume()
    }

    const oscillator = audioContext.createOscillator()
    const gain = audioContext.createGain()
    const startTime = audioContext.currentTime

    oscillator.type = 'sine'
    oscillator.frequency.setValueAtTime(COMPLETION_START_FREQUENCY, startTime)
    oscillator.frequency.exponentialRampToValueAtTime(
      COMPLETION_END_FREQUENCY,
      startTime + COMPLETION_RAMP_DURATION,
    )

    gain.gain.setValueAtTime(COMPLETION_START_VOLUME, startTime)
    gain.gain.exponentialRampToValueAtTime(
      COMPLETION_PEAK_VOLUME,
      startTime + COMPLETION_ATTACK_DURATION,
    )
    gain.gain.exponentialRampToValueAtTime(
      COMPLETION_START_VOLUME,
      startTime + COMPLETION_DURATION,
    )

    oscillator.connect(gain)
    gain.connect(audioContext.destination)
    oscillator.start(startTime)
    oscillator.stop(startTime + COMPLETION_DURATION)
  } catch {
    // Audio playback can be blocked by browser policy or unavailable in tests.
  }
}
