
const Hearts = (n) => '♥'.repeat(n)
const HeartsEmpty = (n) => '♡'.repeat(n)

const Span = (n, c) => {
  const points = n ? `<span class="${c}">${Hearts(n)}</span>` : ''
  const rest = (8-n) ? HeartsEmpty(8-n) : ''

  return `<span class="points">${points}${rest}</span>`
}

export const Appeal = (n) => Span(n, 'appeal')
export const Jamming = (n) => Span(n, 'jamming')
