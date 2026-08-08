import React from 'react'
export default function ProgressBar({ value }) {
  return (
    <div className="h-2 overflow-hidden rounded-full bg-warm">
      <div className="h-full rounded-full bg-ink transition-all duration-500" style={{ width: `${value}%` }} />
    </div>
  )
}
