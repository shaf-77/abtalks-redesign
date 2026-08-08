import React from 'react'
import { ArrowRight, Clock3, Gauge } from 'lucide-react'
import { Link } from 'react-router-dom'
import Card from './Card'

export default function ChallengeCard() {
  return (
    <Card className="overflow-hidden">
      <div className="bg-ink p-5 text-white">
        <div className="flex items-center justify-between">
          <span className="rounded-full bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider">Day 1</span>
          <span className="text-xs text-white/60">Frontend Development</span>
        </div>
        <h2 className="mt-6 font-[Space_Grotesk] text-2xl font-bold tracking-tight">Build a Weather Dashboard</h2>
        <p className="mt-2 max-w-md text-sm leading-6 text-white/65">Turn Fetch API fundamentals into a small project you can actually show.</p>
      </div>
      <div className="grid grid-cols-2 gap-px bg-line">
        <div className="bg-white p-4"><Clock3 size={16} className="text-muted" /><p className="mt-2 text-xs text-muted">Estimated</p><p className="text-sm font-bold">90 min</p></div>
        <div className="bg-white p-4"><Gauge size={16} className="text-muted" /><p className="mt-2 text-xs text-muted">Difficulty</p><p className="text-sm font-bold">Intermediate</p></div>
      </div>
      <Link to="/day/1" className="flex items-center justify-between p-4 text-sm font-bold hover:bg-paper">
        Start today's challenge <ArrowRight size={17} />
      </Link>
    </Card>
  )
}
