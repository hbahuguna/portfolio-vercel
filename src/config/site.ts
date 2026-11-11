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
  /** Short role or tagline shown in the hero */
  role: "Founder@TestRadius",
  tagline: "Building AI Harness for Software Testing",
  /** Short intro/bio placeholder (hero/about) */
  bio: "Founder at TestRadius, building AI that tests code like a human. I'm on a mission to eliminate flaky tests and help engineering teams ship faster with confidence. Previously, I built automation frameworks at Cohesity and have a deep passion for AI, machine learning, and developer tools.",
  /** Longer about placeholder for the About section */
  about: `I'm a builder at heart, currently focused on solving a problem I know intimately: the friction and frustration of unreliable software testing. As the founder of TestRadius, I'm developing an AI agent that explores UIs, adapts to changes, and validates goals—just like a human tester—to cut CI time by 80%.

My journey began as a Software Engineer at Ness Technologies, then I worked at BMC Software as staff SDET. I became an SDET Manager at People Inc, where I spent years connecting the dots between various automation frameworks and building robust systems for backup and recovery software at Cohesity. This hands-on experience gave me a deep understanding of the pain points that TestRadius is designed to solve.

Beyond TestRadius, I'm an active learner and builder, constantly exploring the intersection of AI and software development. You'll find me experimenting with LangChain, fine-tuning models, and contributing to open-source projects on GitHub. I'm always open to connecting with fellow engineers and founders who are passionate about improving the developer experience.`,
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
        "Test Impact Analysis (TIA) that runs only the tests impacted by every code change. Powered by AST-based symbol resolution, Istanbul code coverage, and a Neo4j graph database. Deterministic, explainable, and open source. In a real-world validation on a mature Django monolith, TestRadius reduced required test runs from 735 to 42 — a 94% reduction — without missing a single relevant failure.",
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
      "A deterministic, risk-based testing harness for release decisions. Inspects a source tree, operates a live target when a browser is available, stores hashed evidence, and emits a machine-readable confidence score. Five fixed phases — Risk Analysis, Test Planning, Execution, Evidence Collection, and Confidence Scoring — with no model deciding check order or scoring. Scoped engineering judgment, not a bug oracle.",
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
      "AI development skills for OpenCode. Kinva is Sanskrit for yeast — the agent that transforms raw ingredients into something greater. Four skills cover the full workflow: brainstorming (clarify fuzzy problems), vibe-coding (build fast through conversational loops), TDD (lock correctness before implementation), and debugging (find root causes cleanly).",
    tags: [
      "AI Agents",
      "OpenCode",
      "Developer Tools",
      "Prompt Engineering",
      "TDD",
    ],
    repoUrl: "https://github.com/hbahuguna/kinva",
    featured: true,
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
    featured: true,
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
    featured: true,
  },
  {
    title: "Pregnancy Tracker App",
    description:
      "An Android app for tracking pregnancy milestones week by week. Built as a capstone project with a focus on a clean mobile experience for expectant parents.",
    tags: ["Android", "Java", "Mobile", "Gradle"],
    repoUrl: "https://github.com/hbahuguna/Pregnancy-Tracker-App",
    featured: true,
  },
  {
    title: "diff2HtmlCompare",
    description:
      "A python script that takes a number of urls to compare the differences between html sources (side-by-side) in an HTML format. First url is the base url. All other url htmls are compared against the base url.",
    tags: ["Python", "Git", "pip"],
    repoUrl: "https://github.com/hbahuguna/diff2HtmlCompare",
    featured: true,
  },
  {
    title: "skribblle-bot",
    description:
      "Simple bot to fill words used in past games in the chat window",
    tags: ["JavaScript", "Chrome Developers Tool", "Chrome"],
    repoUrl: "https://github.com/hbahuguna/skribblle-bot",
    featured: true,
  },
  {
    title: "jacoco-integration-test-code-coverage",
    description:
      "Java test code coverage using Jacoco",
    tags: ["Java", "Jacoco", "Code Coverage"],
    repoUrl: "https://github.com/hbahuguna/jacoco-integration-test-code-coverage",
    featured: true,
  },


  ] as ManualProject[],
  /** Optional: number of GitHub repos to display in the dynamic section */
  githubReposLimit: 6,
};

export type SiteConfig = typeof siteConfig;
