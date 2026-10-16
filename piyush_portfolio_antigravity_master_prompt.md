# MASTER PROMPT --- PERSONAL DEVELOPER PORTFOLIO WEBSITE

Copy the entire prompt below and paste it into Google Antigravity (or
another coding agent). Ask the agent to work directly in your project
folder, implement the website, run it, and fix errors.

------------------------------------------------------------------------

## ROLE

Act as a senior frontend engineer, UI/UX designer, and
accessibility-minded web developer. Build a complete, polished,
production-quality personal portfolio website for **Piyush Singh**, an
Integrated M.Tech Computer Science and Engineering student at the
**University of Hyderabad**.

Do not only give me a plan or snippets. Inspect the project, implement
the complete working website, run it locally, test it, and fix any
build/runtime errors. If the folder is empty, scaffold the project.
Explain important decisions briefly and provide exact commands to run
and deploy it.

## 1. PRIMARY GOAL

Create a recruiter-friendly portfolio that presents me as a computer
science student and aspiring software engineer with interests in
problem-solving, full-stack development, backend engineering, core CS
subjects, and practical software projects.

The website should communicate: - Who I am and what I am
learning/building. - My technical skills and core computer science
knowledge. - My projects, what each project does, and the technologies
used. - My education and verifiable achievements. - My GitHub, LinkedIn,
resume, and contact information.

Keep the content credible and student-focused. Do not invent employment,
internships, awards, project metrics, users, performance statistics, or
expertise. Mark missing information with clearly named placeholders in
one easy-to-edit data file.

## 2. TECH STACK

Use: - React with Vite - Tailwind CSS (use the currently compatible Vite
integration and follow the installed Tailwind version's setup) -
JavaScript unless TypeScript is already configured in the existing
project - Lucide React icons if needed - React components and
data-driven rendering for repeated cards/sections

Do not add a backend or database unless there is a clear need. The first
version should be a fast, static portfolio deployable to Vercel. Do not
use a UI framework that makes the site generic or heavy.

## 3. VISUAL DIRECTION

Design style: **dark, modern, minimal, elegant, developer-focused**.

Visual requirements: - Near-black/charcoal background, off-white text,
muted gray secondary text. - A restrained lime/green accent used
sparingly for highlights, links, active states, and small details. -
Excellent typography, strong spacing, subtle borders, clean cards,
tasteful gradients/glows only where they add value. - Strong hierarchy
and generous whitespace; do not make every element glow or animate. - A
distinctive hero section and polished project cards. - Small, subtle
transitions and hover states; respect `prefers-reduced-motion`. -
Responsive on mobile, tablet, laptop, and wide desktop. - Professional,
not flashy; avoid excessive animations, giant gradients, stock photos,
fake terminal animations, or skill percentage bars. - Use CSS shapes,
typography, icons, and real project screenshots if provided. Do not
invent screenshots of my actual apps. If screenshots are unavailable,
make clean typographic project cards. - Ensure readable contrast,
keyboard navigation, visible focus styles, accessible labels, and
semantic HTML.

## 4. WEBSITE SECTIONS AND NAVIGATION

Create these sections in this order:

### A. Sticky Navbar

-   Brand/monogram: `P.S` or `Piyush Singh`.
-   Links: Home, About, Skills, Projects, CS Fundamentals, Education,
    Achievements, Contact.
-   Smooth scrolling and clear hover/focus states.
-   Responsive mobile menu with an accessible open/close button.
-   Navbar should not cover section headings when navigating to anchors.

### B. Hero / Home

Headline direction: **"Building software. Solving problems. Learning
every day."**

Intro: "I'm Piyush Singh, an Integrated M.Tech Computer Science and
Engineering student at the University of Hyderabad, interested in
software engineering, backend systems, full-stack development, and
problem-solving."

Include: - Small label:
`INTEGRATED M.TECH CSE · UNIVERSITY OF HYDERABAD` - Short, confident
supporting copy (avoid exaggerated claims). - Primary CTA: "Explore
Projects" - Secondary CTA: "Contact Me" - Optional Resume button only
when a real resume PDF exists. - Small interest labels such as
`Problem Solving`, `Full-Stack Development`, `Backend Engineering`,
`CS Fundamentals`. - Do not display fake "available for work" status
unless I confirm it.

### C. About Me

Use a warm, concise first-person introduction: "I'm an Integrated M.Tech
Computer Science and Engineering student at the University of Hyderabad,
working to build strong foundations in programming, algorithms, and
software development. I enjoy turning ideas into working applications,
exploring backend architecture, and understanding the computer science
concepts behind the software we use every day. My goal is to become a
well-rounded engineer who can solve problems thoughtfully and build
reliable, maintainable, useful products."

Keep this editable. Do not include private family or financial details
in the public portfolio.

### D. Skills / Technical Toolkit

Render categorized skill cards with technology tags, not
percentage/proficiency bars. Use the following as a **starting list that
must be easy to edit**:

1.  **Programming & Problem Solving**
    -   C++
    -   Data Structures and Algorithms
    -   Competitive Programming
    -   Problem Solving
2.  **Frontend Development**
    -   HTML
    -   CSS
    -   JavaScript
    -   React.js
3.  **Backend Development**
    -   Node.js
    -   Express.js
    -   REST APIs
    -   JWT Authentication
    -   Socket.IO
4.  **Databases**
    -   MongoDB
    -   SQL
5.  **Tools & Deployment**
    -   Git
    -   GitHub
    -   VS Code
    -   Vercel
    -   Render (include only if still relevant to my work)

Do not imply that I am an expert in every listed technology. Organize
skills so I can move items between "comfortable with" and "currently
learning" later. Do not include Redis, Docker, Kubernetes, AWS,
TypeScript, Python, AI/ML, or other tools as established skills unless
the site clearly labels them as learning/experience to verify first.

### E. Featured Projects

Create attractive, responsive project cards. Every card should
support: - Project title and category - Brief description focused on the
problem/use case - Key implemented features - Technology tags - Optional
screenshot/preview image - GitHub repository link - Live demo link -
Optional "View Details" route or modal only if implemented properly

Use these projects as starting content. Keep project details in a
central data file such as `src/data/portfolio.js`.

#### Project 1: Student Attendance Management System (feature this first)

-   Type: Full-stack academic/hackathon project
-   Existing live demo: https://seamless-attendance-system.vercel.app/
-   Technologies: MERN stack, REST APIs, JWT authentication, role-based
    access control, geolocation (verify each against the actual code
    before publishing).
-   Known planned/implemented feature list to verify:
    -   Admin, teacher, and student roles/dashboards
    -   Course and instructor assignment
    -   Student enrollment and approval
    -   GPS/location verification
    -   Six-digit teacher attendance code with a two-minute expiry
    -   Attendance analytics and leave management
-   Describe only features confirmed in the actual project. Distinguish
    completed functionality from planned features. Do not claim AI-based
    attendance analysis is implemented unless verified.
-   The project was created for a university Data Science
    Conference/hackathon context in January 2026; verify the exact event
    name and how participation should be described.
-   Add a GitHub link placeholder until I provide the actual repository
    URL.

#### Project 2: Real-Time Chat Application

-   Type: Full-stack / real-time communication
-   Technologies: MERN stack and Socket.IO (verify actual
    implementation).
-   Emphasize messaging, real-time event handling, and frontend/backend
    integration only if confirmed.
-   GitHub and live demo should be editable placeholders until actual
    URLs are provided.

#### Project 3: Spotify-Inspired Music Platform

-   Type: Full-stack music application
-   Project structure has included a music frontend, backend, and admin
    interface.
-   Potential technologies: React, Node.js, Express, MongoDB (verify
    actual code).
-   Potential features: songs/albums management and admin-side content
    management; verify before publishing.
-   Use the wording "Spotify-inspired" or "music streaming clone"; do
    not imply affiliation with Spotify.
-   Add real GitHub/demo URLs only when supplied.

#### Additional projects

Create a simple, data-driven way to add my Notes App and any future
projects. Do not invent features, dates, or links. If there are only
three complete project descriptions, show those three rather than
creating filler projects.

### F. Core Computer Science Fundamentals

Display a clean grid of subject cards. Include subjects I have studied
or am studying, but keep the list editable and do not misrepresent
mastery.

Starting list: - Data Structures and Algorithms - Database Management
Systems (DBMS) - Computer Networks - Operating Systems - Object-Oriented
Programming (OOP) - Computer Organization and Architecture (COA) -
Discrete Mathematics - Software Engineering - Distributed Computing
(mark as coursework/interest only if accurate) - Algorithms and
complexity analysis

Optional one-line topics: - DSA: trees, graphs, recursion, dynamic
programming, sorting/searching, complexity. - DBMS: SQL, relational
modelling, normalization, transactions, indexing. - Networks: TCP/IP,
routing, addressing, protocols. - OS: processes, threads, scheduling,
memory management. - OOP: encapsulation, abstraction, inheritance,
polymorphism.

Do not claim expertise in a topic simply because it appears here. Add a
small note such as "Core subjects studied and currently strengthening."

### G. Education

Create a clean timeline or education card: - Degree: Integrated M.Tech
in Computer Science and Engineering - Institution: University of
Hyderabad - Expected graduation: 2029 (verify current program dates
before publishing) - CGPA: leave as a placeholder or omit until I
confirm the current value. - Coursework: selected core CS subjects.

School education can be included only if useful, with school names/dates
left blank until supplied. Do not invent school names.

### H. Achievements & Highlights

Use a small, tasteful section---not an inflated trophy wall.

Potential entries requiring verification: - Reported CBSE Class X score:
98.4%. - Reported CBSE Class XII score: 95.8%. - School/district topper
claims were mentioned previously; publish only after I confirm the exact
class, rank, district, and supporting details. - Qualified JEE Main;
exact year and percentile should be confirmed before display. -
Competitive programming practice on LeetCode, Codeforces, and CSES.
Avoid displaying solved-problem counts or rating claims unless I
explicitly provide updated figures. - University hackathon/project
participation, with exact event title and role verified first. - Smart
India Hackathon project work may be listed only with accurate status,
team role, and participation details. Do not claim finalist/winner
status unless confirmed.

Use a central data file with fields like `verified: true/false` or
`status: "verify"` and do not render unverified entries as confirmed
achievements. Prefer omitting an unverified claim from the public page
and showing it in a clearly marked TODO list for me.

### I. Contact

-   A clear heading such as "Let's build something meaningful."
-   Short text inviting professional connections, internships,
    collaboration, and technical discussions.
-   Email link (`mailto:`) using a placeholder until I provide the
    correct email.
-   GitHub link.
-   LinkedIn link.
-   Resume download only when a real file is present.
-   Do not build a fake contact form that cannot submit. If a form is
    added, make it genuinely functional using a suitable service or
    clearly explain the setup needed.

### J. Footer

-   `© [current year] Piyush Singh`
-   Small links to GitHub and LinkedIn, plus Back to Top.
-   Consistent styling and no unnecessary footer clutter.

## 5. FUNCTIONAL REQUIREMENTS

-   All navbar links and CTAs must work.
-   Mobile navigation must open, close, and close after a link is
    selected.
-   External links must use safe `target="_blank"` and
    `rel="noreferrer"` where appropriate.
-   Email must use a valid `mailto:` URL once supplied.
-   Resume button must not point to a missing file.
-   No dead buttons, fake links, fake metrics, or decorative controls
    that imply functionality.
-   Smooth scrolling should respect reduced-motion settings.
-   All repeated lists/cards should be rendered from data arrays.
-   Use semantic headings in a sensible hierarchy.
-   Add a custom page title, meta description, theme color, favicon if
    feasible, and social-sharing metadata.
-   Optimize for fast load, avoid unnecessary dependencies, and prevent
    horizontal overflow.
-   Use responsive layouts and test mobile navigation.
-   If an image is missing, show a designed fallback rather than a
    broken image.

## 6. CODE QUALITY / PROJECT STRUCTURE

Keep the project maintainable. Suggested structure:

``` text
piyush-portfolio/
├── public/
│   ├── favicon.svg
│   └── resume.pdf              # only if I provide the real file
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── SectionHeading.jsx
│   │   ├── SkillCard.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── EducationTimeline.jsx
│   │   ├── AchievementCard.jsx
│   │   └── Footer.jsx
│   ├── sections/
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Fundamentals.jsx
│   │   ├── Education.jsx
│   │   ├── Achievements.jsx
│   │   └── Contact.jsx
│   ├── data/
│   │   └── portfolio.js        # all editable personal content and links
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── README.md
```

Adapt the structure if the existing project already has a sensible
structure. Do not create unnecessary abstractions. Keep personal content
and URLs in `src/data/portfolio.js` so I can edit them without searching
through components.

Add comments only where useful. Use consistent naming and avoid giant
components, duplicated data, or excessive dependencies.

## 7. ACCURACY AND PRIVACY RULES

-   Use the profile name **Piyush Singh** in the portfolio unless I
    change it.
-   Degree: Integrated M.Tech CSE, University of Hyderabad; expected
    graduation 2029, to verify.
-   Do not publish my family's financial situation or other private
    personal details.
-   Do not invent my email, phone number, LinkedIn URL, GitHub URL,
    school names, CGPA, awards, ranks, internships, or employment.
-   Use placeholders in a central configuration file and tell me exactly
    what to replace.
-   Clearly distinguish completed project features from ideas or planned
    features.
-   Do not expose API keys, secrets, `.env` values, or private
    credentials.
-   Do not add fake testimonials, client logos, visitor counters, skill
    percentages, or fabricated performance numbers.

## 8. BUILD AND TEST WORKFLOW

Work in this order: 1. Inspect the current folder and existing files
before changing anything. 2. If needed, scaffold React + Vite and
install Tailwind using the correct integration for the installed
version. 3. Implement the complete design and all sections. 4. Add the
personal content in a central data file. 5. Check for missing links,
placeholder URLs, missing images, and unsupported claims. 6. Run the
development server and inspect the actual rendered site if browser tools
are available. 7. Run `npm run build` and fix all errors. 8. Check
desktop and mobile layouts, navigation, anchor offsets, keyboard focus,
and console errors. 9. Provide a concise summary of what was built, the
files created, the command to run locally, what personal details I need
to replace, and how to deploy to Vercel. 10. Do not stop after writing a
plan. Continue until the working implementation and production build are
complete, or explain any genuine blocker.

## 9. DEFINITION OF DONE

The work is complete when: - The website runs locally. - The production
build succeeds. - All requested sections exist and look consistent. -
The site is responsive and accessible. - Project and social links work
when configured. - Missing personal data is clearly identified. -
Unverified achievements are not presented as facts. - There are no fake
controls or broken image placeholders. - I receive simple instructions
for editing the content and deploying it.

**Now inspect the project folder and implement the website. Make
sensible design decisions without asking me to approve every small
detail.**
