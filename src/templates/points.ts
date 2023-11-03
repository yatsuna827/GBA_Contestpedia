
const Hearts = (n: number) => '♥'.repeat(n)
const HeartsEmpty = (n: number) => '♡'.repeat(n)

const Span = (n: number, c: 'appeal' | 'jamming') => {
  const points = n ? `<span class="${c}">${Hearts(n)}</span>` : ''
  const rest = (8-n) ? HeartsEmpty(8-n) : ''

  return `<span class="points">${points}${rest}</span>`
}

export const Appeal = (n: number) => Span(n, 'appeal')
export const Jamming = (n: number) => Span(n, 'jamming')
