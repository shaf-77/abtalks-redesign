import React from 'react'
import { useState } from 'react'
import { ArrowLeft, Check, Clock3, ExternalLink, Gauge, Github, Linkedin, Target } from 'lucide-react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import BottomNav from '../components/BottomNav'
import Card from '../components/Card'
import MoodSelector from '../components/MoodSelector'
import ScheduleTimeline from '../components/ScheduleTimeline'
import RealityCheck from '../components/RealityCheck'
import MinimumWin from '../components/MinimumWin'
import SubmissionForm from '../components/SubmissionForm'
import { challenge, moodPlans } from '../data/mockData'

export default function ChallengePage() {
  const [mood, setMood] = useState('good')
  const [complete, setComplete] = useState(false)
  const plan = moodPlans[mood].plan

  return (
    <div className="min-h-screen bg-paper pb-24 lg:pb-10">
      <Navbar dashboard />
      <main className="page-shell py-7 sm:py-10">
        <Link to="/dashboard" className="inline-flex items-center gap-2 text-sm font-bold text-muted hover:text-ink"><ArrowLeft size={16} /> Back to dashboard</Link>
        <div className="mt-5 max-w-3xl">
          <div className="flex flex-wrap items-center gap-2"><span className="pill border-ink bg-ink text-white">DAY 12</span><span className="pill">Frontend Development</span><span className="pill">Intermediate</span></div>
          <h1 className="mt-4 font-[Space_Grotesk] text-4xl font-bold tracking-tight sm:text-5xl">{challenge.title}</h1>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-muted sm:text-base">{challenge.description}</p>
          <div className="mt-5 flex flex-wrap gap-2"><span className="pill"><Clock3 size={14} className="mr-1.5" />90 min</span><span className="pill"><Gauge size={14} className="mr-1.5" />Intermediate</span>{challenge.skills.map(skill => <span key={skill} className="pill">{skill}</span>)}</div>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-[minmax(0,1fr)_340px]">
          <div className="space-y-5">
            <Card className="p-5"><p className="eyebrow">Learning objectives</p><div className="mt-4 space-y-3">{challenge.objectives.map(x => <div key={x} className="flex gap-3 text-sm leading-6"><span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-warm"><Target size={12} /></span>{x}</div>)}</div></Card>
            <Card className="p-5"><p className="eyebrow">What you'll build</p><div className="mt-4 space-y-3">{challenge.build.map((x, i) => <div key={x} className="flex gap-3 text-sm leading-6"><span className="grid h-6 w-6 shrink-0 place-items-center rounded-lg bg-ink text-xs font-bold text-white">{i + 1}</span>{x}</div>)}</div></Card>
            <Card className="p-5"><p className="eyebrow">Resources</p><div className="mt-4 space-y-2">{challenge.resources.map(x => <a href="#" onClick={e => e.preventDefault()} key={x} className="flex items-center justify-between rounded-xl border border-line p-3 text-sm font-semibold hover:bg-paper"><span>{x}</span><ExternalLink size={14} className="text-muted" /></a>)}</div></Card>
            <Card className="p-5"><p className="eyebrow">Task checklist</p><div className="mt-4 space-y-2.5">{challenge.build.map(x => <label key={x} className="flex cursor-pointer items-center gap-3 rounded-xl border border-line p-3 text-sm"><input type="checkbox" className="h-4 w-4 accent-[#171717]" />{x}</label>)}</div></Card>
            <MoodSelector mood={mood} setMood={setMood} />
            <ScheduleTimeline plan={plan} title="Personalized schedule" />
            <MinimumWin />
            <RealityCheck />
            <SubmissionForm onComplete={() => setComplete(true)} />
            {complete && <Card className="border-[#d6eadf] bg-[#f4fbf7] p-5 shadow-none"><p className="text-sm font-bold">Day 12 is marked complete in this demo.</p><p className="mt-1 text-xs leading-5 text-muted">Your streak UI can now treat this day as shipped.</p></Card>}
          </div>

          <aside className="hidden lg:block">
            <div className="sticky top-5 space-y-5">
              <Card className="bg-ink p-5 text-white shadow-none"><p className="text-xs font-bold uppercase tracking-[.16em] text-white/45">Ship checklist</p><div className="mt-5 space-y-3 text-sm">{[['GitHub repository', Github], ['GitHub commit', Github], ['LinkedIn learning post', Linkedin]].map(([label, Icon]) => <div key={label} className="flex items-center gap-2.5"><span className="grid h-7 w-7 place-items-center rounded-lg bg-white/10"><Icon size={14} /></span>{label}<Check size={14} className="ml-auto text-white/35" /></div>)}</div></Card>
              <Card className="p-5"><p className="eyebrow">Reflection</p><h2 className="mt-1 text-lg font-bold">Make the lesson stick.</h2><p className="mt-2 text-sm leading-6 text-muted">After shipping, write one sentence about what you understand now that you didn't before.</p></Card>
            </div>
          </aside>
        </div>
      </main>
      <BottomNav />
    </div>
  )
}
