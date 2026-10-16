/**
 * PORTFOLIO DATA CONFIGURATION
 * 
 * Piyush: Edit this single file to update your personal details, links,
 * projects, achievements, and verification statuses.
 * 
 * Fields marked with `isPlaceholder: true` or `verified: false` will be
 * honestly presented and can be toggled once you confirm your actual URLs/records.
 */

export const personalData = {
  name: "Piyush Singh",
  initials: "PS",
  role: "Integrated M.Tech CSE Student",
  institution: "University of Hyderabad",
  badge: "INTEGRATED M.TECH CSE · UNIVERSITY OF HYDERABAD",
  tagline: "Building software. Solving problems. Learning every day.",
  portrait: "/piyush-portrait.jpg",
  heroIntro: "I'm Piyush Singh, an Integrated M.Tech Computer Science and Engineering student at the University of Hyderabad, interested in software engineering, backend systems, full-stack development, and problem-solving.",

  aboutStory: [
    "I'm an Integrated M.Tech Computer Science and Engineering student at the University of Hyderabad, working to build strong foundations in programming, algorithms, and software development.",
    "I enjoy turning ideas into working applications, exploring backend architecture, and understanding the computer science concepts behind the software we use every day.",
    "My goal is to become a well-rounded engineer who can solve problems thoughtfully and build reliable, maintainable, useful products."
  ],

  focusAreas: [
    "Data Structures & Algorithms",
    "Full-Stack Development",
    "Backend Engineering",
    "Computer Science Fundamentals"
  ],

  // Links & contact info
  // Update these URLs with your real profiles:
  contact: {
    email: "piyush060806@gmail.com", // REPLACE with your actual email
    emailIsPlaceholder: true,
    github: "https://github.com/", // REPLACE with your GitHub profile (e.g. https://github.com/your-username)
    githubIsPlaceholder: true,
    linkedin: "https://linkedin.com/in/piyush-singh61618/", // REPLACE with your LinkedIn profile
    linkedinIsPlaceholder: true,
    location: "Hyderabad, Telangana, India",
    // Resume settings:
    // When you place your real resume in the public folder as "public/resume.pdf",
    // set hasResumeFile: true below.
    hasResumeFile: false,
    resumeUrl: "/resume.pdf"
  }
};

export const skillCategories = [
  {
    category: "Programming & Problem Solving",
    description: "Core algorithmic thinking and language proficiencies",
    skills: [
      { name: "C++", status: "Core Language" },
      { name: "Data Structures & Algorithms", status: "Active Practice" },
      { name: "Competitive Programming", status: "Active Practice" },
      { name: "Problem Solving", status: "Core Focus" }
    ]
  },
  {
    category: "Frontend Development",
    description: "Building responsive, modern user interfaces",
    skills: [
      { name: "HTML5", status: "Proficient" },
      { name: "CSS3 / Tailwind CSS", status: "Proficient" },
      { name: "JavaScript (ES6+)", status: "Proficient" },
      { name: "React.js", status: "Core Framework" }
    ]
  },
  {
    category: "Backend Development",
    description: "Server architecture, API design, and authentication",
    skills: [
      { name: "Node.js", status: "Server Runtime" },
      { name: "Express.js", status: "Web Framework" },
      { name: "REST APIs", status: "Architecture" },
      { name: "JWT Authentication", status: "Security" },
      { name: "Socket.IO", status: "Real-Time Comms" }
    ]
  },
  {
    category: "Databases",
    description: "Data storage, relational modelling, and schema design",
    skills: [
      { name: "MongoDB", status: "NoSQL" },
      { name: "SQL", status: "Relational DBMS" }
    ]
  },
  {
    category: "Tools & Deployment",
    description: "Version control, development environment, and hosting",
    skills: [
      { name: "Git", status: "Version Control" },
      { name: "GitHub", status: "Collaboration" },
      { name: "VS Code", status: "Editor" },
      { name: "Vercel", status: "Deployment" },
      { name: "Render", status: "Backend Hosting" }
    ]
  }
];

export const csFundamentals = [
  {
    title: "Operating Systems (OS)",
    tag: "Core Systems",
    icon: "HardDrive"
  },
  {
    title: "Database Management Systems (DBMS)",
    tag: "Data Architecture",
    icon: "Database"
  },
  {
    title: "Computer Networks (CN)",
    tag: "Protocols & Web",
    icon: "Network"
  },
  {
    title: "Object-Oriented Programming (OOP)",
    tag: "Software Design",
    icon: "Terminal"
  }
];


export const projects = [
  {
    id: "attendance-system",
    title: "Student Attendance Management System",
    category: "Full-Stack Web Application",
    badge: "Featured / Hackathon Project",
    summary: "A robust role-based attendance management system built for educational environments, incorporating GPS location constraints and short-lived teacher verification codes to prevent proxy attendance.",
    contextNote: "Built for a University Data Science Conference / Hackathon context (January 2026).",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT Auth", "Geolocation API", "Tailwind CSS"],
    liveDemoUrl: "https://seamless-attendance-system.vercel.app/",
    hasLiveDemo: true,
    githubUrl: "https://github.com/", // Replace with your repository URL
    githubIsPlaceholder: true,
    features: [
      "Role-based access control with distinct portals for Admins, Teachers, and Students",
      "Teacher attendance session creator with unique 6-digit dynamic code expiring in 2 minutes",
      "Client-side GPS geolocation verification to ensure physical presence inside classroom limits",
      "Course creation, instructor assignment, and student enrollment approval workflows",
      "Automated attendance analytics and leave application handling for students"
    ],
    plannedFeatures: [
      "Exportable PDF/Excel attendance audit reports",
      "Push notification alerts for low-attendance warnings"
    ]
  },
  {
    id: "realtime-chat",
    title: "Real-Time Chat Application",
    category: "Full-Stack / WebSocket Application",
    badge: "Real-Time Systems",
    summary: "A responsive instant messaging platform utilizing WebSockets for low-latency bi-directional communication, featuring instant channel messaging, active user presence, and secure token authentication.",
    contextNote: "Designed to explore real-time event-driven architecture and asynchronous messaging.",
    technologies: ["React.js", "Node.js", "Express.js", "Socket.IO", "MongoDB", "JWT Auth", "CSS3"],
    liveDemoUrl: "https://example.com", // Replace when deployed
    hasLiveDemo: false,
    githubUrl: "https://github.com/", // Replace with your repository URL
    githubIsPlaceholder: true,
    features: [
      "Instant bi-directional messaging with Socket.IO event listeners",
      "Active room and group chat mechanisms with live connection indicators",
      "JWT-authenticated WebSocket handshakes for secure message transport",
      "Persistent message history stored in MongoDB with timestamp ordering"
    ],
    plannedFeatures: [
      "Message delivery receipts and typing indicators",
      "End-to-end payload encryption exploration"
    ]
  },
  {
    id: "music-platform",
    title: "Spotify-Inspired Music Platform",
    category: "Full-Stack Media Application",
    badge: "Media Architecture",
    summary: "A comprehensive music streaming clone featuring responsive audio playback controls, album and artist catalog browsing, and an administrative panel for catalog management.",
    contextNote: "Spotify-inspired personal development project; not affiliated with Spotify.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "Tailwind CSS"],
    liveDemoUrl: "https://example.com", // Replace when deployed
    hasLiveDemo: false,
    githubUrl: "https://github.com/", // Replace with your repository URL
    githubIsPlaceholder: true,
    features: [
      "Custom audio playback controller with play, pause, seek, and volume adjustments",
      "Categorized catalog exploration for songs, playlists, and featured albums",
      "Dedicated admin interface for uploading and managing tracks and album metadata",
      "Responsive layout optimized for desktop and mobile audio listening"
    ],
    plannedFeatures: [
      "User playlist creation and favorites management",
      "Audio stream buffering optimization"
    ]
  }
];

export const educationData = [
  {
    degree: "Integrated M.Tech in Computer Science and Engineering",
    institution: "University of Hyderabad",
    duration: "2024 – 2029 (Expected)",
    status: "Currently Enrolled (5-Year Integrated Program)",
    details: "Pursuing in-depth foundations in core computer science, software systems engineering, data structures, algorithms, and computational theory.",
    cgpaNote: "CGPA record to be updated upon official university grade publication.",
    keyCoursework: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming (C++)",
      "Computer Organization & Architecture",
      "Discrete Mathematics",
      "Database Systems",
      "Operating Systems"
    ]
  },
  {
    degree: "Senior Secondary (Class XII) - CBSE",
    institution: "CBSE Board",
    duration: "Completed",
    status: "Verified Metric: 95.8%",
    details: "Science stream with Physics, Chemistry, Mathematics, and Computer Science.",
    keyCoursework: ["Mathematics", "Physics", "Chemistry", "Computer Science"]
  },
  {
    degree: "Secondary School (Class X) - CBSE",
    institution: "CBSE Board",
    duration: "Completed",
    status: "Verified Metric: 98.4%",
    details: "Core foundational academics with high distinction.",
    keyCoursework: ["Mathematics", "Science", "Social Science", "Languages"]
  }
];

/**
 * ACHIEVEMENTS & HIGHLIGHTS
 * 
 * Strict honesty rules:
 * - Entries with `verified: true` are displayed as confirmed records.
 * - Entries with `verified: false` are clearly marked with an honest "Pending Verification / In-Progress" badge
 *   or transparently noted so no claims are misrepresented to recruiters.
 */
export const achievements = [
  {
    id: "cbse-class-10",
    title: "CBSE Class X Examination",
    score: "98.4%",
    category: "Academic Excellence",
    verified: true,
    description: "Achieved 98.4% aggregate in the Central Board of Secondary Education examinations."
  },
  {
    id: "cbse-class-12",
    title: "CBSE Class XII Examination",
    score: "95.8%",
    category: "Academic Excellence",
    verified: true,
    description: "Scored 95.8% aggregate in the Class XII CBSE Senior School Certificate Examination."
  },
  {
    id: "jee-main",
    title: "Qualified Joint Entrance Examination (JEE Main)",
    score: "Qualified",
    category: "National Examination",
    verified: false,
    verificationNote: "Percentile & Year to be updated with scorecard reference",
    description: "Successfully cleared the national level engineering entrance examination for premier Indian technical institutions."
  },
  {
    id: "uoh-hackathon",
    title: "University Data Science Conference Hackathon",
    score: "Project Showcase",
    category: "Hackathons & Innovation",
    verified: true,
    description: "Developed and presented the 'Seamless Student Attendance System' at the university conference hackathon (January 2026)."
  },
  {
    id: "cp-practice",
    title: "Competitive Programming & Problem Solving",
    score: "Active Practice",
    category: "Coding Platforms",
    verified: false,
    verificationNote: "Profiles on LeetCode, Codeforces & CSES being consolidated",
    description: "Regular problem-solving focusing on standard data structures, algorithms, and complexity optimization."
  },
  {
    id: "sih-participation",
    title: "Smart India Hackathon (SIH) Internal Evaluation",
    score: "Participation",
    category: "National Initiatives",
    verified: false,
    verificationNote: "Team role & internal selection status to be confirmed",
    description: "Worked on collaborative problem-solving and software ideation for national problem statements."
  }
];
