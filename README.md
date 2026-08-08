# ABTalks — 60-Day Journey

ABTalks is a 60-day learning and accountability platform designed to help learners stay consistent, complete practical challenges, track progress, and build better learning habits.

## ✨ Features

- 🏁 **60-Day Learning Journey**
  - Start and track a structured 60-day journey.
  - View the current day and remaining days.
  - Track overall journey progress.

- 📊 **Personal Dashboard**
  - Current journey day
  - XP and level
  - Current streak
  - Learner ranking
  - Daily challenge
  - Achievements
  - Learning activity

- 🔥 **Streak Tracking**
  - Track daily learning streaks.
  - View personal best.
  - Visual streak progress.

- 🎯 **Daily Challenges**
  - Practical challenge for each journey day.
  - Challenge descriptions and requirements.
  - Dedicated challenge page.

- 📝 **Challenge Submission**
  - Submit completed daily challenges.
  - Dedicated submission interface.

- 🏆 **Achievements & XP**
  - Earn achievements throughout the journey.
  - Track XP and learner level.
  - Gamified learning experience.

- 📅 **Learning Schedule**
  - Weekday and weekend learning schedules.
  - Session duration and learning timeline.

- 🔥 **Activity Heatmap**
  - Visualize learning activity.
  - Identify consistency and gaps in the journey.

- 😊 **Mood Tracking**
  - Select your current mood.
  - Encourage reflection and self-awareness.

- 🧠 **Reality Check**
  - Reflect on current progress.
  - Encourage honest self-assessment and consistency.

- 🌱 **Minimum Win**
  - Focus on completing one meaningful action each day.
  - Helps maintain momentum even on difficult days.

- 📱 **Responsive Design**
  - Desktop, tablet, and mobile-friendly interface.
  - Mobile bottom navigation for easier access.

- 🎨 **Modern UI**
  - Clean and minimal design.
  - Card-based layouts.
  - Progress indicators.
  - Consistent typography and spacing.
  - Focused learning experience.

## 🛠️ Tech Stack

- React
- Vite
- JavaScript / JSX
- React Router
- Tailwind CSS
- Lucide React

## 📁 Project Structure

```text
abtalks-redesign/
│
├── src/
│   ├── components/
│   │   ├── AchievementCard.jsx
│   │   ├── BottomNav.jsx
│   │   ├── Card.jsx
│   │   ├── ChallengeCard.jsx
│   │   ├── Heatmap.jsx
│   │   ├── MinimumWin.jsx
│   │   ├── MoodSelector.jsx
│   │   ├── Navbar.jsx
│   │   ├── ProgressBar.jsx
│   │   ├── RealityCheck.jsx
│   │   ├── ScheduleTimeline.jsx
│   │   ├── StreakCard.jsx
│   │   └── SubmissionForm.jsx
│   │
│   ├── data/
│   │   └── mockData.js
│   │
│   ├── pages/
│   │   ├── ChallengePage.jsx
│   │   ├── Dashboard.jsx
│   │   └── LandingPage.jsx
│   │
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js