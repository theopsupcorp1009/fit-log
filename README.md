# 💪 FitLog: Workout Library

FitLog is a dark, no-nonsense gym companion built with Next.js. You can browse a library of workouts, open any workout to see its full details, add it to today's plan or save it for later, and track your daily exercises, minutes, and calories, all in one clean dashboard.

Pick a lift, lock it into today's plan, and watch the week's work add up.

## 🔗 Visit

- **Live Site:** https://fit-log-pink-seven.vercel.app/myplan
- **GitHub Repository:** https://github.com/theopsupcorp1009/fit-log

## 📖 About The Project

FitLog lets you:

- Browse a library of 12 workouts covering every major muscle group.
- Click any workout card to see its full detail page: equipment, difficulty, sets, reps, duration, calories, rating, and step-by-step instructions.
- Add a workout to **Today's Plan** or **Save it for later**, with instant toast notifications.
- See live badge counters in the navbar for how many workouts are planned and saved.
- Manage everything from the **My Plan** page. Mark workouts as done, remove them, sort them, and switch between the "Today's Plan" and "Saved" tabs.
- Come back later and pick up right where you left off, since your plan and saved list are stored in your browser.

## 🛠️ Technologies Used

- **Next.js** (App Router) for the project framework and page routing
- **React** for building the UI with components
- **Tailwind CSS** for styling and full responsiveness
- **DaisyUI** for ready-made UI components on top of Tailwind
- **React Icons** for all icons used across the app (navbar, buttons, stats)
- **React Toastify** for toast notifications on actions like adding, saving, marking done, and removing
- **React Context API** for global state (Today's Plan, Saved list, and active tab)
- **Browser LocalStorage** to save your plan and saved list so it survives a page reload
- **Fetch API** to pull workout data from the FitLog API

## ✨ Key Features

1. **Responsive Design.** The app looks and works great on mobile, tablet, and desktop. The navbar, hero, workout grid, and My Plan page all adapt smoothly to any screen size.
2. **Live Navbar Badges.** The "Plan" and "Saved" badge counters in the navbar update instantly whenever a workout is added or removed, and both link straight to the My Plan page.
3. **Workout Library & Detail Pages.** All 12 workouts are shown as cards with images, category tags, equipment, and stats (duration, calories, rating). Clicking a card opens a full detail page with instructions and specs.
4. **My Plan Dashboard.** A dedicated page with live stats (Exercises, Minutes, Calories), tabs for Today's Plan and Saved, a sort dropdown (Duration / Calories / Rating), and per-item actions: View Details, Mark as Done, and Remove.
5. **Persistent Data with LocalStorage.** Your Today's Plan and Saved list are saved in the browser, so refreshing or closing the page never resets your progress.
6. **Toast Notifications & Smart Limits.** Every important action (add, save, mark as done, remove) shows a toast message, and the "Add to today's plan" button automatically disables once the plan reaches its cap of 5 workouts.
7. **Custom 404 Page.** Visiting any unknown route shows a friendly, on-brand 404 page instead of an error.

## 🧭 Pages

- `/` : Home page with the Navbar, Hero/Banner section, and The Library grid of all workouts.
- `/exercises/[id]` : Workout Detail page for a single workout, with instructions and action buttons.
- `/myplan` : My Plan page with metrics, tabs (Today's Plan / Saved), sorting, and workout management.
- `*` : Custom 404 page for any route that doesn't exist.

## 🚀 Getting Started (Run Locally)

```bash
# 1. Clone the repository
git clone https://github.com/theopsupcorp1009/fit-log.git

# 2. Move into the project folder
cd fit-log

# 3. Install dependencies
npm install

# 4. Run the development server
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

## 📡 API Used

- **All workouts:** `https://api.abcz.workers.dev/api/fitlog`
- **Single workout:** `https://api.abcz.workers.dev/api/fitlog/:id`

## 📁 Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── allPlans/          # Mark as Done & Remove buttons (My Plan page)
│   │   ├── exerciseDetails/   # Add to Plan & Save for Later buttons (Detail page)
│   │   ├── shared/            # Exercise, Today Plan, Saved, and Empty state cards
│   │   ├── Navbar.jsx
│   │   ├── Banner.jsx
│   │   └── Footer.jsx
│   ├── exercises/
│   │   ├── [id]/page.jsx      # Workout Detail page
│   │   └── page.jsx           # Workout list (used on Home)
│   ├── myplan/page.jsx        # My Plan page
│   ├── not-found.jsx          # Custom 404 page
│   ├── layout.js
│   └── page.jsx               # Home page
├── Context/
│   └── Context.jsx            # Global state (Today's Plan, Saved, LocalStorage sync)
└── assets/                    # Logo, banner, and footer images
```

## 🙌 Credits

Built as part of the B14-A6-Fit Log assignment.

© 2026 FitLog: Workout Library. Train hard, log honest.

## 📝 Project Summary

FitLog is a responsive Next.js gym-tracking web app where users browse a library of 12 workouts, view detailed instructions for each one, and build a daily workout plan. Users can add workouts to "Today's Plan" or "Save for Later," see live counters update in the navbar, sort their plan by duration, calories, or rating, and mark workouts as done or remove them, all with toast feedback. Data is fetched live from the FitLog API and persisted in the browser with LocalStorage, so a plan survives page reloads. The UI is styled with Tailwind CSS and DaisyUI, follows the provided Figma design closely, and works cleanly across mobile, tablet, and desktop screens.
