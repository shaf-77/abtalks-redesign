import React from 'react'
import { Compass } from 'lucide-react'
import Card from './Card'

export default function RealityCheck() {
  return (
    <Card className="border-[#ded9ff] bg-[#f6f4ff] p-5 shadow-none">
      <div className="flex gap-3">
        <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-white text-accent">
          <Compass size={18} />
        </div>
        <div>
          <p className="eyebrow text-accent">Reality check</p>
          <p className="mt-1.5 text-sm font-semibold leading-6">
            Recruiters can't see what you planned. They can see what you shipped.
          </p>
          <p className="mt-2 text-xs leading-5 text-muted">Today's API project is another piece of evidence you can show for your AI Engineer goal.</p>
        </div>
      </div>
    </Card>
  )
}
