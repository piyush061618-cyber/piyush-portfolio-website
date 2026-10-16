# Piyush Singh - Personal Developer Portfolio

A fast, recruiter-friendly, dark-themed personal portfolio website for **Piyush Singh**, Integrated M.Tech Computer Science and Engineering student at the **University of Hyderabad**.

Built strictly in accordance with the specifications in `piyush_portfolio_antigravity_master_prompt.md`.

---

## 🛠️ Tech Stack

- **Framework**: [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (Custom dark theme with emerald/lime accents)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Fonts**: [Inter](https://fonts.google.com/specimen/Inter) & [Fira Code](https://fonts.google.com/specimen/Fira+Code)

---

## 🚀 Running Locally

Ensure you have **Node.js (v18+)** installed.

1. **Install Dependencies** (already installed in workspace):
   ```bash
   npm install
   ```

2. **Start Development Server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

3. **Build for Production**:
   ```bash
   npm run build
   ```
   The compiled static files are generated in `dist/`.

4. **Preview Production Build**:
   ```bash
   npm run preview
   ```

---

## ✏️ Personalization & Content Updates

All personal information, links, projects, and achievements are organized in a **single centralized data file**:

👉 **[`src/data/portfolio.js`](file:///c:/Users/piyus/Desktop/piyush-portfolio/src/data/portfolio.js)**

### Key items to update in `src/data/portfolio.js`:

1. **Contact & Social Links**:
   - `contact.email`: Replace `piyush.singh@example.com` with your real email.
   - `contact.github`: Replace with your actual GitHub profile link.
   - `contact.linkedin`: Replace with your actual LinkedIn profile link.

2. **Resume PDF**:
   - Place your resume PDF in the [`public/`](file:///c:/Users/piyus/Desktop/piyush-portfolio/public) directory named `resume.pdf`.
   - In [`src/data/portfolio.js`](file:///c:/Users/piyus/Desktop/piyush-portfolio/src/data/portfolio.js), set `hasResumeFile: true`.
   - The Resume button will automatically activate in the Hero, Contact, and Navbar sections without linking to a missing file.

3. **Project Repositories & URLs**:
   - In `projects[0]` (*Student Attendance Management System*), replace `githubUrl` with your actual repository URL and set `githubIsPlaceholder: false`.
   - In `projects[1]` (*Real-Time Chat Application*) and `projects[2]` (*Spotify-Inspired Music Platform*), update demo URLs and GitHub links as they become public.

4. **Academic & Achievement Verification**:
   - Under `achievements`, verify items such as JEE Main percentile and competitive programming handles by toggling `verified: true` and updating `score`/`verificationNote`.

---

## 🌐 Deploying to Vercel

This is a 100% static React Vite application, perfect for zero-config deployment on [Vercel](https://vercel.com/):

### Option 1: Using the Vercel CLI
```bash
npm install -g vercel
vercel
```

### Option 2: Using GitHub & Vercel Dashboard
1. Push your repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "feat: complete developer portfolio website"
   git branch -M main
   git remote add origin https://github.com/<your-username>/piyush-portfolio.git
   git push -u origin main
   ```
2. Log into [vercel.com](https://vercel.com).
3. Click **Add New Project** and import your `piyush-portfolio` repository.
4. Framework preset will automatically be detected as **Vite**.
5. Click **Deploy**. Vercel will build and provide your live URL in seconds.

---

## 📂 Project Structure & Navigation Architecture

The site uses a clean, tab-based view architecture that avoids endless vertical page dumping. Only the selected section is displayed, complete with instant URL hash syncing (`#home`, `#about`, `#skills`, `#projects`, `#contact`):

```
piyush-portfolio/
├── public/
│   ├── favicon.svg                 # Branded dark/emerald SVG icon
│   └── resume.pdf                  # (Add your real resume here)
├── src/
│   ├── components/
│   │   ├── Navbar.jsx              # Tab navigation header with mobile drawer & active states
│   │   ├── SectionHeading.jsx      # Reusable badge & title component
│   │   ├── SkillCard.jsx           # Categorized skills (no percentage bars)
│   │   ├── ProjectCard.jsx         # Typographic project card with completed/planned features
│   │   ├── EducationTimeline.jsx   # Academic timeline
│   │   ├── AchievementCard.jsx     # Verified vs pending milestone cards
│   │   └── Footer.jsx              # Footer with quick tab switcher & socials
│   ├── sections/
│   │   ├── Hero.jsx                # Focused homepage with quick-gateway section cards
│   │   ├── About.jsx               # Integrated story, pillars, and Education timeline
│   │   ├── Skills.jsx              # Technical toolkit + CS Fundamentals
│   │   ├── Fundamentals.jsx        # 4 Core CS subjects (OS, DBMS, CN, OOP)
│   │   ├── ProjectsAndAchievements.jsx # Merged view with category filters
│   │   └── Contact.jsx             # Direct communication & mail actions
│   ├── data/
│   │   └── portfolio.js            # Central editable data file
│   ├── App.jsx                     # View orchestrator & hash router
│   ├── index.css                   # Tailwind directives & glassmorphic styles
│   └── main.jsx                    # React entry point
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

