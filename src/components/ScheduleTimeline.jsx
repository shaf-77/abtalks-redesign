import React from 'react'
import { Check } from 'lucide-react'
import Card from './Card'

export default function ScheduleTimeline({ plan, title = "Today's plan" }) {
  return (
    <Card className="p-5">
      <div className="flex items-end justify-between">
        <div>
          <p className="eyebrow">{title}</p>
          <h2 className="mt-1 text-lg font-bold">A focused session, not a perfect one.</h2>
        </div>
        <span className="pill">{plan.length > 3 ? '90 min' : '25 min'}</span>
      </div>
      <div className="mt-5">
        {plan.map((item, index) => (
          <div key={item.time} className="relative flex gap-4 pb-5 last:pb-0">
            {index !== plan.length - 1 && <span className="absolute left-[4px] top-7 h-[calc(100%-14px)] w-px bg-line" />}
            <span className="relative z-10 mt-0.5 grid h-2.5 w-2.5 shrink-0 place-items-center rounded-full bg-ink ring-4 ring-white">
              {index === plan.length - 1 && <Check size={7} className="text-white" />}
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-[11px] font-bold text-muted">{item.time}</p>
              <p className="mt-0.5 text-sm font-bold">{item.title}</p>
              <p className="mt-0.5 text-xs text-muted">{item.note}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}
