import React from 'react'
import { Lock, Trophy, Flame, CalendarDays, Moon, FolderGit2, GitCommit } from 'lucide-react'
import Card from './Card'

const icons = { git: GitCommit, flame: Flame, calendar: CalendarDays, moon: Moon, folder: FolderGit2, trophy: Trophy }

export default function AchievementCard({ item }) {
  const Icon = icons[item.icon] || Trophy
  return (
    <Card className={`p-4 shadow-soft ${!item.unlocked ? 'opacity-55' : ''}`}>
      <div className={`grid h-10 w-10 place-items-center rounded-xl ${item.unlocked ? 'bg-warm' : 'bg-neutral-100'}`}>
        {item.unlocked ? <Icon size={18} /> : <Lock size={17} className="text-muted" />}
      </div>
      <p className="mt-3 text-sm font-bold">{item.title}</p>
      <p className="mt-1 text-xs leading-5 text-muted">{item.detail}</p>
    </Card>
  )
}
