import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Home, Target, BarChart3, User } from 'lucide-react'

const items = [
  { to: '/dashboard', label: 'Home', icon: Home },
  { to: '/day/12', label: 'Challenge', icon: Target },
  { to: '/dashboard', label: 'Progress', icon: BarChart3 },
  { to: '/dashboard', label: 'Profile', icon: User },
]

export default function BottomNav() {
  const location = useLocation()
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 border-t border-line bg-white/95 px-2 pb-[max(8px,env(safe-area-inset-bottom))] pt-2 backdrop-blur lg:hidden">
      <div className="mx-auto flex max-w-md justify-around">
        {items.map(({ to, label, icon: Icon }) => {
          const active = (label === 'Challenge' && location.pathname.startsWith('/day')) || (label === 'Home' && location.pathname === '/dashboard')
          return (
            <Link key={label} to={to} className={`flex min-w-[68px] flex-col items-center gap-1 rounded-2xl px-3 py-1.5 text-[10px] font-semibold ${active ? 'text-ink' : 'text-muted'}`}>
              <Icon size={19} strokeWidth={active ? 2.5 : 1.8} />
              {label}
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
