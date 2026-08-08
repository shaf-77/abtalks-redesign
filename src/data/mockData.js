export const student = {
  name: 'Aisha',
  track: 'Frontend Development',
  goal: 'AI Engineer Internship',
  weekday: '8:30 PM – 10:00 PM',
  weekend: '2:00 PM – 5:00 PM',
  session: 90,
  day: 1,
  streak: 0,
  xp: 0,
  level: 'Beginner',
  rank: 1240,
  learners: 1240,
}
export const challenge = {
  day: 1,
  title: 'Build a Weather Dashboard',
  description: 'Build a responsive weather dashboard that lets a user search for a city and see the current conditions in a clean interface.',
  difficulty: 'Intermediate',
  duration: 90,
  skills: ['Fetch API', 'Async JavaScript', 'Responsive UI'],
  objectives: [
    'Understand how to fetch data from an API.',
    'Handle loading and error states.',
    'Turn raw API data into a useful UI.',
  ],
  build: [
    'Create the weather dashboard layout.',
    'Add a city search interaction.',
    'Connect the weather data to the UI.',
    'Make the layout work on mobile.',
  ],
  resources: ['Fetch API — MDN', 'Async JavaScript — javascript.info', 'Responsive UI checklist'],
}

export const fullPlan = [
  { time: '8:30 – 8:45', title: 'Learn Fetch API', note: 'Concept + examples' },
  { time: '8:45 – 9:25', title: 'Build the weather UI', note: 'Search + card layout' },
  { time: '9:25 – 9:50', title: 'Connect API', note: 'Loading + error states' },
  { time: '9:50 – 10:00', title: 'Push GitHub commit', note: 'Ship your proof of work' },
]

export const moodPlans = {
  motivated: {
    label: 'Motivated',
    emoji: '😊',
    title: 'Full challenge',
    message: 'You have the energy for the complete 90-minute build. Let’s use it well.',
    plan: fullPlan,
  },
  good: {
    label: 'Good',
    emoji: '🙂',
    title: 'Normal challenge',
    message: 'A steady session is enough today. Follow the plan and ship something useful.',
    plan: fullPlan,
  },
  tired: {
    label: 'Tired',
    emoji: '😐',
    title: 'Smaller milestones',
    message: 'Let’s reduce the pressure. Focus on one milestone at a time and keep moving.',
    plan: [
      { time: '8:30 – 8:45', title: 'Learn Fetch API', note: 'Only the essentials' },
      { time: '8:45 – 9:10', title: 'Build the UI shell', note: 'Search + weather card' },
      { time: '9:10 – 9:30', title: 'Connect one API state', note: 'Get the happy path working' },
    ],
  },
  exhausted: {
    label: 'Exhausted',
    emoji: '😴',
    title: 'Minimum Win',
    message: 'Today is about keeping the chain alive, not forcing a perfect session.',
    plan: [
      { time: '10 min', title: 'Watch the concept', note: 'Fetch API basics' },
      { time: '10 min', title: 'Create the project', note: 'Starter files only' },
      { time: '5 min', title: 'Push starter commit', note: 'A small proof of work' },
    ],
  },
}

export const achievements = [
  { title: 'First Commit', icon: 'git', unlocked: true, detail: 'First proof of work shipped' },
  { title: '7 Day Streak', icon: 'flame', unlocked: true, detail: 'Seven days without breaking momentum' },
  { title: 'Weekend Warrior', icon: 'calendar', unlocked: true, detail: 'Three weekend builds completed' },
  { title: 'Night Owl', icon: 'moon', unlocked: false, detail: 'Complete five evening sessions' },
  { title: '10 Projects', icon: 'folder', unlocked: false, detail: 'Ship ten portfolio projects' },
  { title: 'Consistency Master', icon: 'trophy', unlocked: false, detail: 'Reach a 30 day streak' },
]

export const recentActivity = [
  { day: 'Day 17', title: 'Built a responsive landing page', meta: 'Yesterday · GitHub + LinkedIn' },
  { day: 'Day 16', title: 'Created a form validation UI', meta: '2 days ago · GitHub + LinkedIn' },
  { day: 'Day 15', title: 'Practiced array methods', meta: '3 days ago · GitHub' },
]

export const heatmap = Array.from({ length: 49 }, (_, i) => {
  const value = [0, 1, 2, 3][(i * 7 + 2) % 4]
  return i < 18 ? { value: Math.max(1, value) } : { value: i % 5 === 0 ? 1 : 0 }
})
