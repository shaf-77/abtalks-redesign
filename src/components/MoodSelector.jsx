import React from 'react'
import { motion } from 'framer-motion'
import Card from './Card'
import { moodPlans } from '../data/mockData'

const moods = Object.entries(moodPlans)

export default function MoodSelector({ mood, setMood }) {
  return (
    <Card className="p-5">
      <div>
        <p className="eyebrow">Mood check</p>
        <h2 className="mt-1 text-lg font-bold">How are you feeling today?</h2>
        <p className="mt-1 text-sm text-muted">Your plan changes with your energy — no guilt, just adaptation.</p>
      </div>
      <div className="mt-5 grid grid-cols-4 gap-2">
        {moods.map(([key, item]) => {
          const active = mood === key
          return (
            <motion.button
              key={key}
              whileTap={{ scale: 0.96 }}
              onClick={() => setMood(key)}
              className={`rounded-2xl border p-2.5 text-center transition ${active ? 'border-ink bg-ink text-white shadow-sm' : 'border-line bg-paper text-ink hover:border-neutral-300'}`}
              aria-pressed={active}
            >
              <span className="block text-xl">{item.emoji}</span>
              <span className="mt-1 block text-[10px] font-bold">{item.label}</span>
            </motion.button>
          )
        })}
      </div>
      <div className="mt-4 rounded-2xl bg-warm p-4">
        <div className="flex items-center justify-between">
          <p className="text-sm font-bold">{moodPlans[mood].title}</p>
          <span className="pill">{moodPlans[mood].label}</span>
        </div>
        <p className="mt-1.5 text-sm leading-6 text-muted">{moodPlans[mood].message}</p>
      </div>
    </Card>
  )
}
