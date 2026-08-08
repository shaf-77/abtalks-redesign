import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function Navbar({ dashboard = false }) {
  return (
    <header className="border-b border-line/80 bg-paper/90 backdrop-blur">
      <div className="page-shell flex h-[68px] items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-bold tracking-tight">
          <span className="grid h-8 w-8 place-items-center rounded-xl bg-ink text-sm text-white">AB</span>
          <span>ABTalks</span>
        </Link>
        {dashboard ? (
          <Link to="/day/12" className="hidden items-center gap-2 rounded-full bg-ink px-4 py-2.5 text-sm font-semibold text-white sm:flex">
            Today's challenge <ArrowRight size={15} />
          </Link>
        ) : (
          <Link to="/dashboard" className="flex items-center gap-2 text-sm font-semibold">
            Open dashboard <ArrowRight size={15} />
          </Link>
        )}
      </div>
    </header>
  )
}
