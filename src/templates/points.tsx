const Hearts = (n: number) => '♥'.repeat(n)
const HeartsEmpty = (n: number) => '♡'.repeat(n)

const Span = (n: number, c: 'appeal' | 'jamming') => {
  return (
    <span className="points">
      {n ? <span className={c}>{Hearts(n)}</span> : null}
      {8 - n ? HeartsEmpty(8 - n) : null}
    </span>
  )
}

export const Appeal = (n: number) => Span(n, 'appeal')
export const Jamming = (n: number) => Span(n, 'jamming')
