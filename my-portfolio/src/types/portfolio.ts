export type ExperienceType = "work" | "education" | "project";
export type CourseLevel = "bachelor" | "master" | "phd" | "certificate" | "online";
export type CourseSemester = "spring" | "fall" | "summer";
export type CourseCategory =
  | "programming"
  | "mathematics"
  | "engineering"
  | "management"
  | "research"
  | "design"
  | "other";
export type SkillCategory = "frontend" | "backend" | "database" | "tools" | "languages";
export type SkillLevel = "beginner" | "intermediate" | "advanced" | "expert";

export interface SocialLink {
  url: string;
  label: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  description: string;
  status?: string;
  image?: string;
  imageAlt?: string;
  social: Record<string, SocialLink>;
  technologies: string[];
}

export interface SiteColors {
  primary: string;
  background: string;
  foreground: string;
}

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  ogImage?: string;
  colors: SiteColors;
  social: Record<string, string>;
}

export interface NavLink {
  href: string;
  label: string;
}

export interface ProjectLinks {
  demo?: string;
  github?: string;
  website?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  featured: boolean;
  technologies?: string[];
  links?: ProjectLinks;
  image?: string;
  year?: number;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
  technologies?: string[];
  type: ExperienceType;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  description?: string;
  gpa?: string;
}

export interface Skill {
  name: string;
  category: SkillCategory;
  level?: SkillLevel;
}

export interface Course {
  id: string;
  code: string;
  title: string;
  institution: string;
  level: CourseLevel;
  credits?: number;
  grade?: string;
  year: string;
  semester?: CourseSemester;
  description?: string;
  topics?: string[];
  category: CourseCategory;
}

export interface PortfolioSnapshot {
  personalInfo: PersonalInfo;
  siteConfig: SiteConfig;
  navigation: NavLink[];
  projects: Project[];
  featuredProjects: Project[];
  experiences: Experience[];
  education: Education[];
  skills: Skill[];
  courses: Course[];
}
