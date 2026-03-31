import type {
  Course,
  Education,
  Experience,
  NavLink,
  PersonalInfo,
  PortfolioSnapshot,
  Project,
  SiteConfig,
  Skill,
} from "@/types/portfolio";

export const fallbackPersonalInfo: PersonalInfo = {
  name: "Håvard Hetland Vestbø",
  title: "Fullstack developer, NTNU graduate, and future consultant at Bouvet",
  description:
    "Fullstack developer with a passion for building thoughtful digital experiences. BSc Computer Engineering, MSc Management of Technology at NTNU.",
  status: "Available August 2026",
  email: "havardvestbo@icloud.com",
  location: "Bokn, Norway",
  availabilityLabel: "Available August 2026",
  image: "/me.jpeg",
  imageAlt: "Portrait of Håvard",
  social: {
    github: { url: "https://github.com/havardhvestbo", label: "GitHub" },
    linkedin: {
      url: "https://www.linkedin.com/in/h%C3%A5vard-hetland-vestb%C3%B8-0a9324151/",
      label: "LinkedIn",
    },
  },
  highlightMetric: {
    value: "5+",
    label: "Years building and shipping software",
  },
  nextRole: {
    company: "Bouvet",
    start: "August 2026",
    label: "Starting at Bouvet consultancy",
  },
  aboutParagraphs: [
    "I’m from Bokn on Norway’s west coast and currently finishing an MSc in Management of Technology after completing a BSc in Computer Engineering at NTNU.",
    "My most formative recent experience was at Bouvet ASA, where I worked on a client project for Bane NOR and contributed accessible, maintainable frontend features in React, React Router, and TypeScript.",
    "I enjoy the overlap between careful engineering, product thinking, and collaboration: writing good code, building useful things, and helping ideas move from rough concept to production.",
  ],
  technologies: [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "C# / .NET",
    "Spring Boot",
    "PostgreSQL",
  ],
};

export const fallbackSiteConfig: SiteConfig = {
  name: "Håvard",
  description: "Editorial portfolio for Håvard Vestbø: projects, experience, and contact.",
  url: "http://localhost:3000",
  ogImage: "/og-image.jpg",
  colors: {
    primary: "#8B6914",
    background: "#F5F0E8",
    foreground: "#2C2418",
  },
  social: {
    github: "https://github.com/havardhvestbo",
    linkedin: "https://www.linkedin.com/in/h%C3%A5vard-hetland-vestb%C3%B8-0a9324151/",
  },
};

export const fallbackNavigation: NavLink[] = [
  { href: "/#about", label: "About", group: "primary" },
  { href: "/#projects", label: "Projects", group: "primary" },
  { href: "/#experience", label: "Experience", group: "primary" },
  { href: "/#contact", label: "Contact", group: "primary" },
  { href: "/cv", label: "CV", group: "secondary" },
  { href: "/courses", label: "Courses", group: "secondary" },
];

export const fallbackProjects: Project[] = [
  {
    id: "bane-nor-client-project",
    title: "Bane NOR Client Project via Bouvet ASA",
    description:
      "Frontend work on a large client project in a Bouvet team, focused on accessible, maintainable React Router and TypeScript interfaces.",
    featured: true,
    technologies: ["React", "React Router", "TypeScript"],
    year: 2024,
  },
  {
    id: "bachelor-thesis",
    title: "Bachelor Thesis: Mobile Data Collection Service",
    description:
      "A fullstack bachelor thesis project connecting mobile app data collection, secure APIs, and practical product delivery across frontend and backend.",
    featured: true,
    technologies: ["React", ".NET MAUI", "Spring Boot", "PostgreSQL"],
    year: 2024,
  },
  {
    id: "mobile-stock-app",
    title: "Mobile Stock Application",
    description:
      "A mobile inventory app with authentication, API integration, and a secure backend built for practical workflows.",
    featured: false,
    technologies: ["Flutter", "Spring Boot", "JWT", "MySQL"],
    year: 2023,
  },
  {
    id: "online-webshop",
    title: "Online Web Shop Application",
    description:
      "A full-stack webshop covering authentication, REST APIs, production deployment, and real-world web engineering concerns.",
    featured: false,
    technologies: ["JavaScript", "Spring Boot", "Thymeleaf", "MySQL"],
    year: 2022,
  },
];

export const fallbackExperiences: Experience[] = [
  {
    id: "bouvet-asa",
    title: "IT Consultant – Summer Intern (Frontend)",
    company: "Bouvet ASA",
    period: "2024-06 – 2024-07",
    description:
      "Worked on a client project for Bane NOR, building accessible and maintainable frontend features with React, React Router, and TypeScript in a collaborative product team.",
    technologies: ["React", "React Router", "TypeScript"],
    type: "work",
  },
  {
    id: "fjordland",
    title: "Production Assistant",
    company: "Fjordland AS",
    period: "2024-06 – 2024-08",
    description:
      "Supported large-scale food production workflows with a focus on accuracy, hygiene, and reliable operations under time pressure.",
    type: "work",
  },
  {
    id: "dinsko",
    title: "Sales Associate",
    company: "DinSko",
    period: "2023-09 – 2024-06",
    description:
      "Delivered customer support, handled sales, and helped maintain a clear and effective in-store experience in a fast-paced retail setting.",
    type: "work",
  },
  {
    id: "homebrands",
    title: "Warehouse Employee",
    company: "Home Brands AS",
    period: "2020-09 – 2022-12",
    description:
      "Prepared orders, coordinated deliveries, and contributed to accurate, deadline-driven warehouse operations.",
    type: "work",
  },
];

export const fallbackEducation: Education[] = [
  {
    id: "msc-ntnu",
    degree: "Master’s Degree in Management of Technology",
    institution: "Norwegian University of Science and Technology (NTNU)",
    period: "2024-08 – 2026-06",
    description: "Technology strategy, innovation, and business development.",
  },
  {
    id: "bsc-ntnu",
    degree: "Bachelor’s Degree in Computer Engineering – Application Development",
    institution: "Norwegian University of Science and Technology (NTNU)",
    period: "2021-08 – 2024-06",
    description: "Full-stack focus across frontend, backend, databases, and engineering practice.",
  },
];

export const fallbackSkills: Skill[] = [
  { name: "React", category: "frontend", level: "advanced" },
  { name: "TypeScript", category: "frontend", level: "advanced" },
  { name: "HTML/CSS", category: "frontend", level: "advanced" },
  { name: "Tailwind CSS", category: "frontend", level: "advanced" },
  { name: "Spring Boot", category: "backend", level: "intermediate" },
  { name: ".NET MAUI", category: "backend", level: "intermediate" },
  { name: "PostgreSQL", category: "database", level: "intermediate" },
  { name: "MySQL", category: "database", level: "intermediate" },
  { name: "C#", category: "languages", level: "intermediate" },
  { name: "Git", category: "tools", level: "advanced" },
];

export const fallbackCourses: Course[] = [
  {
    id: "idata1001-2021-fall",
    code: "IDATA1001",
    title: "Programming 1",
    institution: "NTNU",
    level: "bachelor",
    credits: 7.5,
    grade: "C",
    year: "2021",
    semester: "fall",
    description: "Introductory programming with variables, control flow, functions, and objects.",
    topics: ["Variables", "Control flow", "Functions", "OOP basics"],
    category: "programming",
  },
  {
    id: "idata2001-2022-spring",
    code: "IDATA2001",
    title: "Programming 2",
    institution: "NTNU",
    level: "bachelor",
    credits: 10,
    grade: "B",
    year: "2022",
    semester: "spring",
    description: "Object-oriented programming, data structures, and algorithmic problem solving.",
    topics: ["OOP", "Collections", "Algorithms", "Design patterns"],
    category: "programming",
  },
  {
    id: "idata2301-2023-spring",
    code: "IDATA2301",
    title: "Web Technologies",
    institution: "NTNU",
    level: "bachelor",
    credits: 7.5,
    grade: "B",
    year: "2023",
    semester: "spring",
    description: "Modern web standards and practical frontend development.",
    topics: ["HTML/CSS", "JavaScript", "HTTP", "REST APIs"],
    category: "programming",
  },
  {
    id: "tdt4136-2024-fall",
    code: "TDT4136",
    title: "Introduction to Artificial Intelligence",
    institution: "NTNU",
    level: "master",
    credits: 7.5,
    grade: "B",
    year: "2024",
    semester: "fall",
    description: "Core AI concepts including search, reasoning, and machine learning foundations.",
    topics: ["Search", "Reasoning", "Machine learning"],
    category: "research",
  },
  {
    id: "tio4550-2025-spring",
    code: "TIO4550",
    title: "Technology Strategy",
    institution: "NTNU",
    level: "master",
    credits: 7.5,
    grade: "A",
    year: "2025",
    semester: "spring",
    description: "Strategic analysis of technology, innovation, and competitive advantage.",
    topics: ["Strategy", "Innovation", "Business development"],
    category: "management",
  },
];

export const fallbackPortfolioSnapshot: PortfolioSnapshot = {
  personalInfo: fallbackPersonalInfo,
  siteConfig: fallbackSiteConfig,
  navigation: fallbackNavigation,
  projects: fallbackProjects,
  featuredProjects: fallbackProjects.filter((project) => project.featured),
  experiences: fallbackExperiences,
  education: fallbackEducation,
  skills: fallbackSkills,
  courses: fallbackCourses,
};

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function mergeSocialLinks(value: unknown, fallback: PersonalInfo["social"]) {
  if (!isRecord(value)) {
    return fallback;
  }

  return {
    github: {
      url:
        isRecord(value.github) && typeof value.github.url === "string"
          ? value.github.url
          : fallback.github.url,
      label:
        isRecord(value.github) && typeof value.github.label === "string"
          ? value.github.label
          : fallback.github.label,
    },
    linkedin: {
      url:
        isRecord(value.linkedin) && typeof value.linkedin.url === "string"
          ? value.linkedin.url
          : fallback.linkedin.url,
      label:
        isRecord(value.linkedin) && typeof value.linkedin.label === "string"
          ? value.linkedin.label
          : fallback.linkedin.label,
    },
  };
}

export function normalizePersonalInfo(value: unknown): PersonalInfo {
  if (!isRecord(value)) {
    return fallbackPersonalInfo;
  }

  return {
    ...fallbackPersonalInfo,
    ...value,
    email: typeof value.email === "string" ? value.email : fallbackPersonalInfo.email,
    location: typeof value.location === "string" ? value.location : fallbackPersonalInfo.location,
    availabilityLabel:
      typeof value.availabilityLabel === "string"
        ? value.availabilityLabel
        : typeof value.status === "string"
          ? value.status
          : fallbackPersonalInfo.availabilityLabel,
    social: mergeSocialLinks(value.social, fallbackPersonalInfo.social),
    highlightMetric:
      isRecord(value.highlightMetric) &&
      typeof value.highlightMetric.value === "string" &&
      typeof value.highlightMetric.label === "string"
        ? {
            value: value.highlightMetric.value,
            label: value.highlightMetric.label,
          }
        : fallbackPersonalInfo.highlightMetric,
    nextRole:
      isRecord(value.nextRole) &&
      typeof value.nextRole.company === "string" &&
      typeof value.nextRole.start === "string" &&
      typeof value.nextRole.label === "string"
        ? {
            company: value.nextRole.company,
            start: value.nextRole.start,
            label: value.nextRole.label,
          }
        : fallbackPersonalInfo.nextRole,
    aboutParagraphs:
      Array.isArray(value.aboutParagraphs) && value.aboutParagraphs.every((item) => typeof item === "string")
        ? value.aboutParagraphs
        : fallbackPersonalInfo.aboutParagraphs,
    technologies:
      Array.isArray(value.technologies) && value.technologies.every((item) => typeof item === "string")
        ? value.technologies
        : fallbackPersonalInfo.technologies,
  };
}

export function normalizeSiteConfig(value: unknown): SiteConfig {
  if (!isRecord(value)) {
    return fallbackSiteConfig;
  }

  return {
    ...fallbackSiteConfig,
    ...value,
    colors:
      isRecord(value.colors) &&
      typeof value.colors.primary === "string" &&
      typeof value.colors.background === "string" &&
      typeof value.colors.foreground === "string"
        ? {
            primary: value.colors.primary,
            background: value.colors.background,
            foreground: value.colors.foreground,
          }
        : fallbackSiteConfig.colors,
    social:
      isRecord(value.social) &&
      typeof value.social.github === "string" &&
      typeof value.social.linkedin === "string"
        ? {
            github: value.social.github,
            linkedin: value.social.linkedin,
          }
        : fallbackSiteConfig.social,
  };
}

export function normalizeNavigation(value: unknown): NavLink[] {
  if (!Array.isArray(value) || value.length === 0) {
    return fallbackNavigation;
  }

  const hasGroupedNavigation = value.some(
    (item) => isRecord(item) && (item.group === "primary" || item.group === "secondary"),
  );

  if (!hasGroupedNavigation) {
    return fallbackNavigation;
  }

  return value
    .filter(isRecord)
    .map((link, index) => {
      const fallback = fallbackNavigation[index] ?? fallbackNavigation[fallbackNavigation.length - 1];
      const href = typeof link.href === "string" ? link.href : fallback.href;
      const label = typeof link.label === "string" ? link.label : fallback.label;

      return {
        href,
        label,
        group:
          link.group === "primary" || link.group === "secondary"
            ? link.group
            : fallback.group,
      };
    });
}

export function normalizePortfolioSnapshot(value: unknown): PortfolioSnapshot {
  if (!isRecord(value)) {
    return fallbackPortfolioSnapshot;
  }

  const projects =
    Array.isArray(value.projects) && value.projects.length > 0
      ? (value.projects as Project[])
      : fallbackPortfolioSnapshot.projects;
  const featuredProjects =
    Array.isArray(value.featuredProjects) && value.featuredProjects.length > 0
      ? (value.featuredProjects as Project[])
      : projects.filter((project) => project.featured);

  return {
    personalInfo: normalizePersonalInfo(value.personalInfo),
    siteConfig: normalizeSiteConfig(value.siteConfig),
    navigation: normalizeNavigation(value.navigation),
    projects,
    featuredProjects: featuredProjects.length > 0 ? featuredProjects : fallbackPortfolioSnapshot.featuredProjects,
    experiences:
      Array.isArray(value.experiences) && value.experiences.length > 0
        ? (value.experiences as Experience[])
        : fallbackPortfolioSnapshot.experiences,
    education:
      Array.isArray(value.education) && value.education.length > 0
        ? (value.education as Education[])
        : fallbackPortfolioSnapshot.education,
    skills:
      Array.isArray(value.skills) && value.skills.length > 0
        ? (value.skills as Skill[])
        : fallbackPortfolioSnapshot.skills,
    courses:
      Array.isArray(value.courses) && value.courses.length > 0
        ? (value.courses as Course[])
        : fallbackPortfolioSnapshot.courses,
  };
}
