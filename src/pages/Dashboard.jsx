import React from 'react'
import { useState } from 'react'
import { ArrowRight, Award, ChevronRight, Clock3, Github, Linkedin, Target } from 'lucide-react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import BottomNav from '../components/BottomNav'
import Card from '../components/Card'
import StreakCard from '../components/StreakCard'
import ChallengeCard from '../components/ChallengeCard'
import MoodSelector from '../components/MoodSelector'
import ScheduleTimeline from '../components/ScheduleTimeline'
import RealityCheck from '../components/RealityCheck'
import MinimumWin from '../components/MinimumWin'
import ProgressBar from '../components/ProgressBar'
import Heatmap from '../components/Heatmap'
import AchievementCard from '../components/AchievementCard'
import { achievements, moodPlans, recentActivity, student } from '../data/mockData'

export default function Dashboard() {
  const [mood, setMood] = useState('good')
  const [state, setState] = useState('active')
  const plan = moodPlans[mood].plan

  return (
    <div className="min-h-screen bg-paper pb-24 lg:pb-10">
      <Navbar dashboard />
      <main className="page-shell py-8 sm:py-10">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div><p className="eyebrow">Your journey</p><h1 className="mt-1 font-[Space_Grotesk] text-3xl font-bold tracking-tight sm:text-4xl">Good evening, {student.name} 👋</h1><p className="mt-1 text-sm text-muted">Day {student.day} of 60 · {60 - student.day} days remaining</p></div>
          <div className="flex items-center gap-2"><span className="pill">Level {student.level}</span><span className="pill">{student.xp.toLocaleString()} XP</span></div>
        </div>

        {state === 'missed' && <Card className="mt-6 border-[#eadfce] bg-[#fffaf2] p-4 shadow-none"><p className="text-sm font-bold">You missed yesterday. That's okay.</p><p className="mt-1 text-xs text-muted">Today is still available. A recovery plan can be smaller.</p><div className="mt-3 flex gap-2"><button onClick={() => setState('active')} className="rounded-xl bg-ink px-3 py-2 text-xs font-bold text-white">Continue</button><button onClick={() => setMood('tired')} className="rounded-xl border border-line bg-white px-3 py-2 text-xs font-bold">Recovery plan</button></div></Card>}

        <div className="desktop-grid mt-7 grid gap-5">
          <div className="space-y-5">
            <StreakCard />
            <ChallengeCard />
            <MoodSelector mood={mood} setMood={setMood} />
            <ScheduleTimeline plan={plan} />
            <RealityCheck />
            <MinimumWin />

            <Card className="p-5">
              <div className="flex items-end justify-between"><div><p className="eyebrow">Your progress</p><h2 className="mt-1 text-lg font-bold">Day {student.day} / 60</h2></div><span className="font-[Space_Grotesk] text-xl font-bold">30%</span></div>
              <ProgressBar value={30} />
              <div className="mt-4 grid grid-cols-3 divide-x divide-line text-center"><div><p className="font-bold">{student.xp.toLocaleString()}</p><p className="mt-1 text-[10px] text-muted">XP</p></div><div><p className="font-bold">1</p><p className="mt-1 text-[10px] text-muted">days streak</p></div><div><p className="font-bold">#{student.rank}</p><p className="mt-1 text-[10px] text-muted">of {student.learners.toLocaleString()}</p></div></div>
            </Card>

            <Heatmap />

            <div><div className="mb-3 flex items-center justify-between"><div><p className="eyebrow">Achievements</p><h2 className="mt-1 text-lg font-bold">Milestones worth keeping</h2></div><Award size={18} className="text-muted" /></div><div className="grid grid-cols-2 gap-3 sm:grid-cols-3">{achievements.map(item => <AchievementCard key={item.title} item={item} />)}</div></div>

            <Card className="p-5">
              <div className="flex items-end justify-between"><div><p className="eyebrow">Recent activity</p><h2 className="mt-1 text-lg font-bold">Proof of work</h2></div><button className="text-xs font-bold">View all</button></div>
              <div className="mt-4 divide-y divide-line">{recentActivity.map(item => <div key={item.day} className="flex items-center gap-3 py-3 first:pt-0 last:pb-0"><div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-warm text-[10px] font-bold">{item.day.replace('Day ', 'D')}</div><div className="min-w-0 flex-1"><p className="truncate text-sm font-semibold">{item.title}</p><p className="mt-0.5 truncate text-xs text-muted">{item.meta}</p></div><ChevronRight size={15} className="text-muted" /></div>)}</div>
            </Card>
          </div>

          <aside className="hidden space-y-5 lg:block">
            <Card className="p-5"><p className="eyebrow">Your profile</p><p className="mt-1 text-lg font-bold">{student.name}</p><p className="mt-1 text-sm text-muted">{student.track}</p><div className="mt-5 space-y-3 text-xs"><div className="flex justify-between gap-4"><span className="text-muted">Long-term goal</span><span className="text-right font-semibold">{student.goal}</span></div><div className="flex justify-between gap-4"><span className="text-muted">Weekdays</span><span className="font-semibold">{student.weekday}</span></div><div className="flex justify-between gap-4"><span className="text-muted">Weekends</span><span className="font-semibold">{student.weekend}</span></div></div></Card>
            <Card className="p-5"><p className="eyebrow">Profile completion</p><p className="mt-1 text-lg font-bold">3 / 3 complete</p><ProgressBar value={100} /><div className="mt-4 space-y-2 text-xs font-semibold"><p>✓ Goal</p><p>✓ Track</p><p>✓ Availability</p></div></Card>
            <Card className="bg-ink p-5 text-white shadow-none"><Target size={19} /><p className="mt-4 text-xs font-bold uppercase tracking-[.14em] text-white/45">Long-term goal</p><p className="mt-1 font-[Space_Grotesk] text-xl font-bold">{student.goal}</p><p className="mt-2 text-xs leading-5 text-white/55">Today's build is another piece of evidence for your portfolio.</p></Card>
            <Card className="p-5"><p className="eyebrow">Demo states</p><p className="mt-1 text-sm text-muted">Use these to preview real-world edge cases.</p><div className="mt-4 grid grid-cols-2 gap-2"><button onClick={() => setState('active')} className="rounded-xl border border-line p-2 text-xs font-bold">Active</button><button onClick={() => setState('missed')} className="rounded-xl border border-line p-2 text-xs font-bold">Missed day</button></div></Card>
          </aside>
        </div>
      </main>
      <BottomNav />
    </div>
  )
}
