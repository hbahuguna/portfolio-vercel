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
  name: "Your Name",
  /** GitHub username used for dynamic repository fetching */
  githubUsername: "hbahuguna",
  /** Short role or tagline shown in the hero */
  role: "Software Developer",
  tagline: "Building clean, useful, and performant web experiences.",
  /** Short intro/bio placeholder (hero/about) */
  bio: "This is a placeholder bio. Share a concise summary of who you are, what you build, and what you're interested in.",
  /** Longer about placeholder for the About section */
  about:
    "Replace this with a longer description of your background, experience, and goals. You can include your focus areas, the kinds of problems you enjoy solving, and what you're currently learning.",
  /** Primary contact email (used for mailto links) */
  contactEmail: "you@example.com",
  /** Social/profile links */
  socialLinks: [
    { label: "GitHub", href: "https://github.com/hbahuguna" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/your-profile" },
    { label: "X / Twitter", href: "https://x.com/your-handle" },
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
