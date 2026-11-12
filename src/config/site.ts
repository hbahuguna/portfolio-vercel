/**
 * Site content & metadata configuration
 * -------------------------------------
 * Edit this file to update your portfolio content (name, bio, links, projects).
 * Keep placeholders until you're ready to replace them with your own information.
 */

export type SocialLink = {
  label: string;
  href: string;
};

export type Education = {
  institution: string;
  degree: string;
  startDate: string;
  endDate: string;
  description?: string;
  skills?: string[];
  certificateUrl?: string;
};

export type Experience = {
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  location?: string;
  description?: string;
  skills?: string[];
};

export type Testimonial = {
  name: string;
  role: string;
  company: string;
  quote: string;
};

export type Service = {
  title: string;
  description: string;
  icon?: string;
};

export type CaseStudy = {
  title: string;
  problem: string;
  solution: string;
  result: string;
  link?: string;
};

export type FAQ = {
  question: string;
  answer: string;
};

export type Stat = {
  label: string;
  value: string;
};

export type ManualProject = {
  title: string;
  description: string;
  /** Technologies/tags shown on the project card */
  tags: string[];
  /** Optional repository URL */
  repoUrl?: string;
  /** Optional live demo URL */
  demoUrl?: string;
  /** Optional image path/URL (e.g. "/projects/my-app.png") */
  image?: string;
  /** Mark featured projects to highlight them */
  featured?: boolean;
};

export const siteConfig = {
  /** Display name / owner name */
  name: "Himanshu Bahuguna",
  /** Profile image path (place image in public/) */
  profileImage: "/profile.jpg",
  /** Production site URL (used for canonical/OG URLs) */
  siteUrl: "https://himanshubahuguna-portfolio.vercel.app",
  /** GitHub username used for dynamic repository fetching */
  githubUsername: "hbahuguna",
  /** Pinned repository names to display in the "From GitHub" section */
  githubPinnedRepos: [
    "testradius-github-app",
    "kinva",
    "Test-Radius",
    "skribblle-bot",
    "langchain-document-helper",
  ],
  /** Short role or tagline shown in the hero */
  role: "Founder@TestRadius",
  tagline: "Building AI Harness for Software Testing",
  /** Short intro/bio placeholder (hero/about) */
  bio: "Founder at TestRadius, building AI that tests code like a human. I'm on a mission to eliminate flaky tests and help engineering teams ship faster with confidence. Previously, I built automation frameworks at BMC Software, People Inc. (Dotdash), and Cohesity. I have a deep passion for AI, machine learning, and developer tools.",
  /** Longer about placeholder for the About section */
  about: `I'm a builder at heart, currently focused on solving a problem I know intimately: the friction and frustration of unreliable software testing. As the founder of TestRadius, I'm developing an AI agent that explores UIs, adapts to changes, and validates goals, just like a human tester, to cut CI time by 80%.

My journey began as a Software Engineer at Ness Technologies, then I worked at BMC Software as staff SDET. I became an SDET Manager at People Inc (Dotdash), where I spent years connecting the dots between various automation frameworks and building robust systems for backup and recovery software at Cohesity. This hands-on experience gave me a deep understanding of the pain points that TestRadius is designed to solve.

Beyond TestRadius, I'm an active learner and builder, constantly exploring the intersection of AI and software development. You'll find me experimenting with LangChain, fine-tuning models, and contributing to open-source projects on GitHub. I'm always open to connecting with fellow engineers and founders who are passionate about improving the developer experience.`,
  /** Skills by category (for tabbed display) */
  skillCategories: {
    "AI & ML": [
      "LangChain",
      "LLM Fine-tuning",
      "AI Engineering",
      "OpenCode",
      "Agentic Development Workflows",
      "AI-Driven Testing",
    ],
    "Testing & QA": [
      "Test Automation",
      "Test Impact Analysis",
      "Flaky Test Detection",
      "Playwright",
      "Selenium",
      "CI/CD",
      "GitHub Actions",
    ],
    "Backend & Languages": [
      "Python",
      "Node.js",
      "TypeScript",
      "REST APIs",
      "FastAPI",
    ],
    "DevOps & Tools": [
      "Docker",
      "Git",
      "Neo4j",
    ],
  } as Record<string, string[]>,
  /** Skills/technologies to highlight (edit as needed) */
  skills: [
    "LangChain",
    "LLM Fine-tuning",
    "AI Engineering",
    "OpenCode",
    "Node.js",
    "Agentic Development Workflows",
    "Test Automation",
    "AI-Driven Testing",
    "Test Impact Analysis",
    "Flaky Test Detection",
    "Playwright",
    "Selenium",
    "CI/CD",
    "GitHub Actions",
    "Python",
    "REST APIs",
    "Git",
    "Docker",
  ],
  /** Work experience (newest first) */
  experience: [
    {
      company: "TestRadius",
      role: "Founder",
      startDate: "Jan 2026",
      endDate: "Present",
      location: "Remote",
      description:
        "Building AI-powered test impact analysis, map, analyze, and execute only the tests that matter. Leading product development, customer development, and go-to-market strategy.",
      skills: [
        "Product Development",
        "Customer Development",
        "Software Engineering",
        "Software Testing",
        "DevOps",
        "Business Development",
        "Team Building",
        "Go To Market",
        "Fund Raising",
        "Sales",
        "Marketing",
      ],
    },
    {
      company: "Cohesity",
      role: "Staff SDET",
      startDate: "Oct 2022",
      endDate: "Jun 2026",
      location: "Remote",
      description:
        "Staff Software Engineer in Test, building robust automation frameworks for backup and recovery software.",
    },
    {
      company: "Udacity",
      role: "Technical Mentor & Reviewer",
      startDate: "May 2019",
      endDate: "Jun 2026",
      location: "Remote",
      description:
        "Mentoring and reviewing student projects for Udacity nanodegree programs. Awarded Elite Mentor Badge (Q4 2021) and Premium Mentor Badge.",
      skills: ["Python"],
    },
    {
      company: "Outco Inc.",
      role: "Technical Coach",
      startDate: "Dec 2022",
      endDate: "Aug 2023",
      location: "Remote",
      description:
        "Coaching candidates on data structures and algorithms for technical interviews.",
      skills: ["Data Structures and Algorithms"],
    },
    {
      company: "People Inc.",
      role: "Sr. Manager SDET",
      startDate: "Jan 2022",
      endDate: "Oct 2022",
      location: "Edmonton, Alberta, Canada",
      description:
        "Leading SDET teams and driving test automation strategy.",
      skills: ["Java"],
    },
    {
      company: "People Inc.",
      role: "Manager SDET",
      startDate: "Mar 2020",
      endDate: "Jan 2022",
      location: "Edmonton, Alberta, Canada",
      description:
        "Managed SDET team, overseeing test automation frameworks and quality strategy.",
      skills: ["Java"],
    },
    {
      company: "People Inc.",
      role: "Lead SDET",
      startDate: "Oct 2019",
      endDate: "Mar 2020",
      location: "Edmonton, Alberta, Canada",
      description:
        "Led SDET initiatives and mentored team members on test automation best practices.",
      skills: ["Java", "Software Development"],
    },
    {
      company: "People Inc.",
      role: "Senior Software QA Engineer",
      startDate: "Sep 2014",
      endDate: "Sep 2019",
      location: "New York City Metropolitan Area",
      description:
        "Senior QA Engineer responsible for test automation and quality assurance.",
      skills: ["Java", "Software Development"],
    },
    {
      company: "BMC Software",
      role: "Staff Software Engineer",
      startDate: "Mar 2008",
      endDate: "Sep 2014",
      location: "New York, United States",
      description:
        "Staff Software Engineer working on enterprise software solutions.",
    },
    {
      company: "Ness Technologies",
      role: "Software Engineer",
      startDate: "Nov 2005",
      endDate: "Mar 2008",
      location: "Bangalore Urban district, India",
      description:
        "Software Engineer working on enterprise applications.",
    },
  ] as Experience[],
  /** Education (newest first) */
  education: [
    {
      institution: "Indian School of Business",
      degree: "Chief Technology Officer Program",
      startDate: "Nov 2023",
      endDate: "Jul 2024",
      certificateUrl: "/ISB_CTO.jpg",
    },
    {
      institution: "Stanford University Graduate School of Business",
      degree: "Launching a Startup",
      startDate: "Mar 2024",
      endDate: "May 2024",
      description:
        "In this six-week program, I learned to research, craft, test, and transform ideas into viable business concepts. I dove deep into a four-step framework, The Startup Canvas, a proprietary tool developed at Stanford GSB as a way to systematize a pathway to market success.",
      skills: [
        "Identifying and Interviewing Your Customer",
        "Developing a Prototype",
      ],
      certificateUrl: "/StanfordCert.jpg",
    },
    {
      institution: "buildspace",
      degree: "Nights & Weekends S4",
      startDate: "Aug 2023",
      endDate: "Sep 2023",
      description:
        "Built OmniChat,  a chat application that connects to multiple data sources. Demo: https://omnichat.streamlit.app/",
      certificateUrl: "/Buildspace-S4-cert.jpg",
    },
    {
      institution: "Govind Ballabh Pant Engineering College - India",
      degree: "B.E., Computer Science",
      startDate: "2001",
      endDate: "2005",
      skills: ["Software Development"],
    },
    {
      institution: "Udacity",
      degree: "Android Developer",
      startDate: "2016",
      endDate: "2017",
      skills: ["Java"],
    },
    {
      institution: "Udacity",
      degree: "AI",
      startDate: "2017",
      endDate: "2018",
      skills: ["Python (Programming Language)", "Software Development"],
    },
    {
      institution: "Udacity",
      degree: "AI for Trading (Nanodegree)",
      startDate: "Mar 2020",
      endDate: "Jun 2020",
      description: "Udacity AI for Trading NanoDegree.",
    },
    {
      institution: "Udacity",
      degree: "Mentorship, Student Counseling and Personnel Services",
      startDate: "Jun 2020",
      endDate: "Jul 2020",
    },
    {
      institution: "Founder Institute",
      degree: "Entrepreneurship",
      startDate: "Mar 2026",
      endDate: "Jun 2026",
      certificateUrl: "/FounderInstitute.jpg",
    },
  ] as Education[],
  /** Primary contact email (used for mailto links) */
  contactEmail: "himbahuguna@gmail.com",
  /** Social/profile links */
  socialLinks: [
    { label: "GitHub", href: "https://github.com/hbahuguna" },
    { label: "LinkedIn", href: "https://linkedin.com/in/himanshu-bahuguna-latest/" },
    { label: "X / Twitter", href: "https://x.com/TestSquad62299" },
    { label: "Company Website", href: "https://testradius.dev/" },
    { label: "Medium", href: "https://medium.com/@hbahuguna" },
  ] as SocialLink[],
  /** Curated/manual projects (edit or add entries as needed) */
  manualProjects: [
    {
      title: "Test-Radius",
      description:
        "Test Impact Analysis (TIA) that runs only the tests impacted by every code change. Powered by AST-based symbol resolution, Istanbul code coverage, and a Neo4j graph database. Deterministic, explainable, and open source. In a real-world validation on a mature py-key-value codebase, TestRadius reduced required test runs from 297 to 7, a 98% reduction, without missing a single relevant failure.",
      tags: ["Python",
      "FastAPI",
      "Neo4j",
      "Playwright",
      "React",
      "Docker",
      "TypeScript",],
      repoUrl: "https://github.com/hbahuguna/Test-Radius",
      demoUrl: "https://testradius.dev/",
      featured: true,
    },
    {
      title: "Test Agent",
      description:
        "AI-powered autonomous SDET platform. Multi-agent Chrome Dev Protocol test generator that turns natural-language scenarios into production-grade UI and API automation. Built with FastAPI, Docker sandboxes, and LLM inference.",
      tags: ["Python",
      "FastAPI",
      "AI Agents",
      "Playwright",
      "Docker",
      "LLM",],
      repoUrl: "https://github.com/hbahuguna/testradius",
      demoUrl: "https://testradius.dev/login",	       
      featured: true,
    },
    {
    title: "assay",
    description:
      "A deterministic, risk-based testing harness for release decisions. Inspects a source tree, operates a live target when a browser is available, stores hashed evidence, and emits a machine-readable confidence score. Five fixed phases, Risk Analysis, Test Planning, Execution, Evidence Collection, and Confidence Scoring — with no model deciding check order or scoring. Scoped engineering judgment, not a bug oracle.",
    tags: [
      "Python",
      "Testing",
      "CI/CD",
      "Release Confidence",
      "Playwright",
    ],
    repoUrl: "https://github.com/hbahuguna/assay",
    featured: true,
    },
    {
    title: "kinva",
    description:
      "ai development skills for opencode. kinva is sanskrit for yeast, the agent that transforms raw ingredients into something greater. four skills cover the full workflow: brainstorming (clarify fuzzy problems), vibe-coding (build fast through conversational loops), tdd (lock correctness before implementation), and debugging (find root causes cleanly).",
    tags: [
      "ai agents",
      "opencode",
      "developer tools",
      "prompt engineering",
      "tdd",
    ],
    repoUrl: "https://github.com/hbahuguna/kinva",
    featured: false,
  },
    {
    title: "PromptCart",
    description:
      "An event-driven microservices platform that lets customers browse catalogs, place orders, and receive updates entirely through WhatsApp chat. Built as a distributed system with independent services handling catalog, orders, notifications, and conversational state.",
    tags: [
      "Microservices",
      "Node.js",
      "TypeScript",
      "WhatsApp API",
      "Event-Driven",
      "Docker",
    ],
    repoUrl: "https://github.com/hbahuguna/promptcart",
    featured: false,
  },
  {
    title: "LangChain Document Helper",
    description:
      "A custom-built LangChain bot that acts as a conversational interface to the LangChain documentation. Answers questions by retrieving and reasoning over docs, deployed as a Streamlit app. A practical exploration of RAG (Retrieval-Augmented Generation) for developer documentation.",
    tags: [
      "LangChain",
      "Python",
      "Streamlit",
      "RAG",
      "LLM",
      "Documentation",
    ],
    repoUrl: "https://github.com/hbahuguna/langchain-document-helper",
    demoUrl:
      "https://hbahuguna-langchain-document-helper-main-06bch7.streamlit.app/",
    featured: false,
  },
  {
    title: "Pregnancy Tracker App",
    description:
      "An Android app for tracking pregnancy milestones week by week. Built as a capstone project with a focus on a clean mobile experience for expectant parents.",
    tags: ["Android", "Java", "Mobile", "Gradle"],
    repoUrl: "https://github.com/hbahuguna/Pregnancy-Tracker-App",
    featured: false,
  },
  {
    title: "diff2HtmlCompare",
    description:
      "A python script that takes a number of urls to compare the differences between html sources (side-by-side) in an HTML format. First url is the base url. All other url htmls are compared against the base url.",
    tags: ["Python", "Git", "pip"],
    repoUrl: "https://github.com/hbahuguna/diff2HtmlCompare",
    featured: false,
  },
  {
    title: "skribblle-bot",
    description:
      "Simple bot to fill words used in past games in the chat window",
    tags: ["JavaScript", "Chrome Developers Tool", "Chrome"],
    repoUrl: "https://github.com/hbahuguna/skribblle-bot",
    featured: false,
  },
  {
    title: "jacoco-integration-test-code-coverage",
    description:
      "Java test code coverage using Jacoco",
    tags: ["Java", "Jacoco", "Code Coverage"],
    repoUrl: "https://github.com/hbahuguna/jacoco-integration-test-code-coverage",
    featured: false,
  },
  {
    title: "chatgpt-app",
    description:
      "chat gpt app with prompt massaging",
    tags: [
      "JavaScript",
      "Node",
      "NPM",
      "Python",
    ],
    repoUrl: "https://github.com/hbahuguna/chatgpt-app",
    featured: false,
  },
  {
    title: "b2b-marketplace",
    description:
      "A platform connecting manufacturers directly with retailers, cutting out middlemen.",
    tags: [
      "TypeScript",
      "Shell",
      "Docker",
      "JavaScript",
    ],
    repoUrl: "https://github.com/hbahuguna/b2b-marketplace",
    featured: false,
  },
  {
    title: "smartbizchat",
    description:
      "Smart business chat widget with Docker, nginx, and Python backend",
    tags: [
      "HTML",
      "Python",
      "JavaScript",
    ],
    repoUrl: "https://github.com/hbahuguna/smartbizchat",
    featured: false,
  },
  {
    title: "private-blockchain",
    description:
      "Private blockchain application demonstrating blockchain fundamentals",
    tags: [
      "JavaScript",
    ],
    repoUrl: "https://github.com/hbahuguna/private-blockchain",
    featured: false,
  },



  ] as ManualProject[],
  /** Optional: number of GitHub repos to display in the dynamic section */
  githubReposLimit: 6,

  /** Testimonials (short quotes from colleagues, mentees, or clients) */
  testimonials: [
    {
      name: "Gaurish Siwatch",
      role: "Software Engineer",
      company: "BMC Software",
      quote:
        "Himanshu's deep expertise in test automation and his ability to build robust frameworks saved our team countless hours. His understanding of testing pain points is unmatched.",
    },
    {
      name: "Jessica Fernandese",
      role: "Mentee",
      company: "Udacity",
      quote:
        "Himanshu's mentorship was transformative. He breaks down complex concepts and makes them accessible, helping me grow as an engineer.",
    },
    {
      name: "Mark Giresi",
      role: "Client",
      company: "Startup",
      quote:
        "Working with Himanshu was a game-changer. He delivered a robust testing solution that cut our CI time dramatically and gave us confidence in every release.",
    },
  ] as Testimonial[],

  /** Services offered */
  services: [
    {
      title: "AI-Powered Test Automation",
      description:
        "Custom test impact analysis, flaky test detection, and intelligent test selection that reduces CI time by up to 98%.",
      icon: "🧪",
    },
    {
      title: "Custom AI Tools & Chatbots",
      description:
        "Build custom AI agents, chatbots, and LLM-powered tools tailored to your business needs.",
      icon: "🤖",
    },
    {
      title: "Test Automation Frameworks",
      description:
        "Design and implement robust, scalable test automation frameworks using Playwright, Selenium, and modern CI/CD pipelines.",
      icon: "⚙️",
    },
    {
      title: "Technical Mentorship",
      description:
        "One-on-one coaching for engineers on data structures, algorithms, and system design for technical interviews.",
      icon: "📚",
    },
  ] as Service[],

  /** Case studies (problem → what we built → result) */
  caseStudies: [
    {
      title: "TestRadius: 297 to 7",
      problem:
        "A mature py-key-value codebase was running 297 tests on every PR, wasting compute and slowing feedback loops.",
      solution:
        "Built TestRadius, an AI-powered test impact analysis tool using AST-based symbol resolution, Istanbul code coverage, and a Neo4j graph database.",
      result:
        "Reduced required test runs from 297 to 7 (98% reduction) without missing a single relevant failure.",
      link: "https://testradius.dev/blog/code-coverage-tia-article",
    },
    {
      title: "Autonomous QA Engineer",
      problem:
        "Manual test writing was slow and inconsistent across engineering teams.",
      solution:
        "Built Test Agent, a multi-agent Chrome Dev Protocol test generator that turns natural-language scenarios into production-grade UI and API automation.",
      result:
        "Automated test generation with FastAPI, Docker sandboxes, and LLM inference, cutting manual effort by 80%.",
      link: "https://testradius.dev/blog/sdet-model-journey",
    },
  ] as CaseStudy[],

  /** FAQ */
  faq: [
    {
      question: "How long does a typical project take?",
      answer:
        "A focused AI tool or automation framework typically takes 4-8 weeks. Larger platforms may take 3-6 months. I'll give you a clear timeline after our initial call.",
    },
    {
      question: "How do we work together?",
      answer:
        "We start with a free 30-minute discovery call. Then I propose a scope, timeline, and fixed price. Work happens in weekly sprints with regular demos.",
    },
    {
      question: "Do you offer ongoing support?",
      answer:
        "Yes. After delivery, I offer maintenance and support packages. Most clients opt for a monthly retainer.",
    },
    {
      question: "What technologies do you use?",
      answer:
        "Python, TypeScript, FastAPI, Playwright, LangChain, OpenAI/LLM APIs, Docker, and modern CI/CD tools. I adapt to your stack.",
    },
  ] as FAQ[],

  /** Key stats/numbers */
  stats: [
    { label: "Years of Experience", value: "20+" },
    { label: "Test Runs Reduced", value: "297 → 7" },
    { label: "CI Time Saved", value: "98%" },
    { label: "Projects Delivered", value: "10+" },
  ] as Stat[],

  /** How to get started */
  gettingStarted: {
    freeCall: "Book a free 30-minute discovery call to discuss your project.",
    startingPrice: "Projects start at $5,000 for a focused automation tool. Larger platforms quoted individually.",
    ctaText: "Tell me what you need",
    ctaLink: "https://zcal.co/i/suLjJzcq",
  },
};

export type SiteConfig = typeof siteConfig;
