import React from 'react'
import { useState } from 'react'
import { CheckCircle2, Github, Linkedin, Send } from 'lucide-react'
import Card from './Card'

export default function SubmissionForm({ onComplete }) {
  const [values, setValues] = useState({ repo: '', commit: '', linkedin: '', reflection: '' })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const update = (key, value) => setValues(v => ({ ...v, [key]: value }))

  const submit = (e) => {
    e.preventDefault()
    if (!values.repo.trim() || !values.commit.trim() || !values.linkedin.trim()) {
      setError('Add your GitHub repository, commit, and LinkedIn post before submitting.')
      return
    }
    setError('')
    setSubmitted(true)
    onComplete?.()
  }

  if (submitted) {
    return (
      <Card className="overflow-hidden p-0">
        <div className="grid place-items-center px-6 py-12 text-center">
          <div className="grid h-16 w-16 animate-pulse place-items-center rounded-full bg-[#e7f5ed] text-green"><CheckCircle2 size={32} /></div>
          <p className="mt-5 text-xs font-bold uppercase tracking-[0.16em] text-green">Day completed</p>
          <h2 className="mt-2 font-[Space_Grotesk] text-2xl font-bold">You shipped. That counts.</h2>
          <p className="mt-2 max-w-sm text-sm leading-6 text-muted">Your proof of work is logged for this demo. Keep the momentum going tomorrow.</p>
        </div>
      </Card>
    )
  }

  const fields = [
    { key: 'repo', label: 'GitHub repository URL', icon: Github, placeholder: 'https://github.com/...' },
    { key: 'commit', label: 'GitHub commit URL', icon: Github, placeholder: 'https://github.com/.../commit/...' },
    { key: 'linkedin', label: 'LinkedIn post URL', icon: Linkedin, placeholder: 'https://linkedin.com/posts/...' },
  ]

  return (
    <Card className="p-5">
      <div><p className="eyebrow">Ship your work</p><h2 className="mt-1 text-lg font-bold">Submit Day 12</h2><p className="mt-1 text-sm text-muted">Mock submission — nothing is sent anywhere.</p></div>
      <form onSubmit={submit} className="mt-5 space-y-4">
        {fields.map(({ key, label, icon: Icon, placeholder }) => (
          <label key={key} className="block">
            <span className="mb-1.5 block text-xs font-bold">{label}</span>
            <div className="relative">
              <Icon size={16} className="absolute left-3 top-3.5 text-muted" />
              <input value={values[key]} onChange={e => update(key, e.target.value)} placeholder={placeholder} className="w-full rounded-xl border border-line bg-paper py-3 pl-10 pr-3 text-sm outline-none transition placeholder:text-neutral-400 focus:border-ink focus:bg-white" />
            </div>
          </label>
        ))}
        <label className="block">
          <span className="mb-1.5 block text-xs font-bold">What was today's biggest learning?</span>
          <textarea value={values.reflection} onChange={e => update('reflection', e.target.value)} rows={4} placeholder="One thing you understand better now..." className="w-full resize-none rounded-xl border border-line bg-paper p-3 text-sm outline-none transition placeholder:text-neutral-400 focus:border-ink focus:bg-white" />
        </label>
        {error && <p className="rounded-xl bg-red-50 px-3 py-2.5 text-xs font-semibold text-red-700">{error}</p>}
        <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-ink px-4 py-3.5 text-sm font-bold text-white transition hover:bg-neutral-800 active:scale-[.99]">
          <Send size={16} /> Submit Day 12
        </button>
      </form>
    </Card>
  )
}
