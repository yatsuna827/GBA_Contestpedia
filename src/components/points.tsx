import React from 'react'

const PointsSpan: React.FC<{ p: number; c: 'appeal' | 'jamming' }> = ({ p, c }) => {
  return (
    <span className="points">
      {p ? <span className={c}>{'♥'.repeat(p)}</span> : null}
      {8 - p ? '♡'.repeat(8 - p) : null}
    </span>
  )
}

export const Appeal: React.FC<{ points: number }> = ({ points }) => <PointsSpan p={points} c="appeal" />
export const Jamming: React.FC<{ points: number }> = ({ points }) => <PointsSpan p={points} c="jamming" />
