import React from 'react'
import { CheckCircle2, Sparkles } from 'lucide-react'
import Card from './Card'

export default function MinimumWin() {
  const items = ['Watch the 10-minute concept video', 'Create the project', 'Push the starter commit']
  return (
    <Card className="p-5">
      <div className="flex items-start justify-between">
        <div>
          <p className="eyebrow">Minimum win</p>
          <h2 className="mt-1 text-lg font-bold">Keep the chain moving.</h2>
        </div>
        <div className="grid h-9 w-9 place-items-center rounded-full bg-warm"><Sparkles size={17} /></div>
      </div>
      <p className="mt-2 text-sm leading-6 text-muted">You don't need a perfect day. You just need a day that moves forward.</p>
      <div className="mt-4 space-y-2.5">
        {items.map(item => (
          <div key={item} className="flex items-center gap-2.5 text-sm font-medium">
            <CheckCircle2 size={17} className="text-green" /> {item}
          </div>
        ))}
      </div>
    </Card>
  )
}
