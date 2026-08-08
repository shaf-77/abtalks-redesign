
import React from 'react'
import { Flame, ArrowUpRight } from 'lucide-react'
import Card from './Card'

export default function StreakCard({ streak = 1 }) {
  return (
    <Card className="relative overflow-hidden p-5">
      <div className="absolute right-[-28px] top-[-28px] h-28 w-28 rounded-full bg-orange-100/70 blur-2xl" />
      <div className="relative flex items-start justify-between">
        <div>
          <p className="eyebrow">Current streak</p>
          <div className="mt-2 flex items-end gap-2">
            <span className="font-[Space_Grotesk] text-4xl font-bold tracking-tight">{streak}</span>
            <span className="mb-1 text-sm font-medium text-muted">days</span>
            <span className="mb-1 ml-1 text-xl">🔥</span>
          </div>
          <p className="mt-1 text-sm text-muted">Keep today's momentum alive.</p>
        </div>
        <div className="grid h-10 w-10 place-items-center rounded-full bg-orange-50 text-orange-600">
          <Flame size={19} />
        </div>
      </div>
      <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-warm">
        <div className="h-full w-[4%] rounded-full bg-ink" />
      </div>
      <div className="mt-2 flex justify-between text-[11px] font-semibold text-muted">
        <span>1 day</span><span>Personal best 25</span>
      </div>
    </Card>
  )
}
