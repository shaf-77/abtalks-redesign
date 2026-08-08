import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Check, Clock3, Github, Linkedin, Moon, Sparkles, Target, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Card from '../components/Card'

const fade = { initial: { opacity: 0, y: 18 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: .2 }, transition: { duration: .5 } }

export default function LandingPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-paper">
      <Navbar />
      <main>
        <section className="page-shell pb-20 pt-14 sm:pb-28 sm:pt-24">
          <div className="mx-auto max-w-4xl text-center">
            <motion.div {...fade}><span className="pill">Built for students who want proof, not promises</span></motion.div>
            <motion.h1 {...fade} transition={{ delay: .05, duration: .5 }} className="mt-6 font-[Space_Grotesk] text-5xl font-bold leading-[.98] tracking-[-0.045em] sm:text-7xl">
              60 days. 60 builds.<br /><span className="text-accent">One stronger version of you.</span>
            </motion.h1>
            <motion.p {...fade} transition={{ delay: .1, duration: .5 }} className="mx-auto mt-6 max-w-2xl text-base leading-7 text-muted sm:text-lg">
              ABTalks turns consistency into a public body of work. Choose a track, build something every day, and adapt the challenge around your real life.
            </motion.p>
            <motion.div {...fade} transition={{ delay: .15, duration: .5 }} className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link to="/dashboard" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-ink px-6 py-3.5 text-sm font-bold text-white shadow-soft transition hover:-translate-y-0.5">
                Start My 60-Day Journey <ArrowRight size={17} />
              </Link>
              <a href="#how" className="inline-flex items-center justify-center rounded-2xl border border-line bg-white px-6 py-3.5 text-sm font-bold">See how it works</a>
            </motion.div>
          </div>

          <motion.div {...fade} className="mx-auto mt-14 grid max-w-4xl grid-cols-3 divide-x divide-line rounded-[24px] border border-line bg-white shadow-soft">
            {[['12,400+', 'students'], ['47,000+', 'builds shipped'], ['68%', 'reached day 30']].map(([value, label]) => (
              <div key={label} className="p-4 text-center sm:p-6"><p className="font-[Space_Grotesk] text-xl font-bold sm:text-2xl">{value}</p><p className="mt-1 text-[10px] font-semibold text-muted sm:text-xs">{label}</p></div>
            ))}
          </motion.div>
        </section>

        <section id="how" className="border-y border-line bg-white py-20">
          <div className="page-shell">
            <div className="max-w-2xl"><p className="eyebrow">How it works</p><h2 className="section-title mt-2">Small builds. Visible progress. A portfolio that compounds.</h2></div>
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {[
                ['01', 'Choose your track', 'Pick the skill path that matches where you want to go next.'],
                ['02', 'Build every day', 'Get a focused challenge that fits your available time and energy.'],
                ['03', 'Show your work', 'Ship a GitHub commit and share what you learned on LinkedIn.'],
              ].map(([n, title, body]) => (
                <motion.div {...fade} key={n} className="rounded-[22px] border border-line bg-paper p-6">
                  <span className="text-xs font-bold text-muted">{n}</span><h3 className="mt-10 text-lg font-bold">{title}</h3><p className="mt-2 text-sm leading-6 text-muted">{body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="page-shell py-20 sm:py-28">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div><p className="eyebrow">The difference</p><h2 className="section-title mt-2 text-4xl sm:text-5xl">Your challenge adapts to your life.</h2><p className="mt-5 max-w-xl text-base leading-7 text-muted">College schedules change. Energy changes. ABTalks doesn't treat that as failure. Your plan can flex while your consistency stays intact.</p>
              <div className="mt-7 space-y-3">
                {[['Schedule', 'Your weekday and weekend availability shape the session.'], ['Mood', 'Motivated, good, tired or exhausted — the workload changes.'], ['Minimum Win', 'When a full session is too much, you still have a small way forward.']].map(([title, body]) => <div key={title} className="flex gap-3"><span className="mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-ink text-white"><Check size={13} /></span><div><p className="text-sm font-bold">{title}</p><p className="text-sm leading-6 text-muted">{body}</p></div></div>)}
              </div>
            </div>
            <Card className="overflow-hidden p-0">
              <div className="bg-ink p-5 text-white"><div className="flex items-center justify-between"><span className="text-xs font-bold text-white/60">TODAY · DAY 18</span><span className="rounded-full bg-white/10 px-2.5 py-1 text-[10px]">90 min</span></div><h3 className="mt-8 font-[Space_Grotesk] text-2xl font-bold">Build a Weather Dashboard</h3><p className="mt-2 text-sm text-white/60">Frontend Development · Intermediate</p></div>
              <div className="space-y-3 p-5">{[['8:30 – 8:45', 'Learn Fetch API'], ['8:45 – 9:25', 'Build the weather UI'], ['9:25 – 9:50', 'Connect API'], ['9:50 – 10:00', 'Push GitHub commit']].map(([time, title]) => <div key={time} className="flex items-center gap-3"><span className="w-24 text-[10px] font-bold text-muted">{time}</span><span className="h-px flex-1 bg-line" /><span className="text-xs font-semibold">{title}</span></div>)}</div>
              <div className="border-t border-line bg-[#f6f4ff] p-5"><div className="flex gap-3"><Sparkles size={18} className="mt-0.5 text-accent" /><p className="text-sm font-semibold leading-6">“You don't need a perfect day. You just need a day that moves forward.”</p></div></div>
            </Card>
          </div>
        </section>

        <section className="bg-ink py-20 text-white">
          <div className="page-shell text-center"><p className="text-xs font-bold uppercase tracking-[.18em] text-white/45">A supportive reality check</p><h2 className="mx-auto mt-4 max-w-2xl font-[Space_Grotesk] text-3xl font-bold tracking-tight sm:text-4xl">Recruiters can't see what you planned. They can see what you shipped.</h2><p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-white/55">One commit today becomes one more piece of proof tomorrow.</p></div>
        </section>

        <section className="page-shell py-20 text-center sm:py-28"><p className="eyebrow">Start small</p><h2 className="mt-2 font-[Space_Grotesk] text-4xl font-bold tracking-tight sm:text-5xl">Your Day 1 starts today.</h2><p className="mx-auto mt-4 max-w-lg text-sm leading-6 text-muted">No perfect routine required. Just a willingness to build, reflect and keep going.</p><Link to="/dashboard" className="mt-7 inline-flex items-center gap-2 rounded-2xl bg-ink px-6 py-3.5 text-sm font-bold text-white">Open ABTalks <ArrowRight size={17} /></Link></section>
      </main>
      <footer className="border-t border-line py-7"><div className="page-shell flex flex-col items-center justify-between gap-2 text-xs text-muted sm:flex-row"><span className="font-bold text-ink">ABTalks</span><span>Your coding journey should adapt to your life.</span></div></footer>
    </div>
  )
}
