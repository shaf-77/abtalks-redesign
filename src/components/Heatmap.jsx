import React from 'react'
import Card from './Card'
import { heatmap } from '../data/mockData'

export default function Heatmap() {
  return (
    <Card className="p-5">
      <div className="flex items-end justify-between">
        <div><p className="eyebrow">Weekly activity</p><h2 className="mt-1 text-lg font-bold">Your proof of work</h2></div>
        <span className="text-xs font-semibold text-muted">Last 7 weeks</span>
      </div>
      <div className="mt-5 grid grid-cols-7 gap-1.5">
        {heatmap.map((cell, i) => (
          <span key={i} title={`${cell.value} activity`} className={`aspect-square rounded-[5px] ${cell.value === 0 ? 'bg-warm' : cell.value === 1 ? 'bg-[#d6d1ff]' : cell.value === 2 ? 'bg-[#a59bff]' : 'bg-[#6d5dfc]'}`} />
        ))}
      </div>
      <div className="mt-3 flex justify-end gap-1.5 text-[10px] text-muted">
        <span>Less</span><span className="h-2.5 w-2.5 rounded-[3px] bg-warm" /><span className="h-2.5 w-2.5 rounded-[3px] bg-[#d6d1ff]" /><span className="h-2.5 w-2.5 rounded-[3px] bg-[#a59bff]" /><span className="h-2.5 w-2.5 rounded-[3px] bg-[#6d5dfc]" /><span>More</span>
      </div>
    </Card>
  )
}
