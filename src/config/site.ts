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
  /** Production site URL (used for canonical/OG URLs) */
  siteUrl: "https://himanshubahuguna-portfolio.vercel.app",
  /** GitHub username used for dynamic repository fetching */
  githubUsername: "hbahuguna",
  /** Short role or tagline shown in the hero */
  role: "Founder",
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
      title: "Featured Project One",
      description:
        "Placeholder description for a highlighted project. Explain the problem, your approach, and the outcome.",
      tags: ["Astro", "TypeScript", "CSS"],
      repoUrl: "https://github.com/hbahuguna/example-project-one",
      demoUrl: "https://example.com",
      featured: true,
    },
    {
      title: "Featured Project Two",
      description:
        "Placeholder description for another project. Include key features or impact where possible.",
      tags: ["JavaScript", "API", "Responsive Design"],
      repoUrl: "https://github.com/hbahuguna/example-project-two",
      featured: false,
    },
  ] as ManualProject[],
  /** Optional: number of GitHub repos to display in the dynamic section */
  githubReposLimit: 6,
};

export type SiteConfig = typeof siteConfig;
