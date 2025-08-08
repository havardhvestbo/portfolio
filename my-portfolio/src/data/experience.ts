// profile.ts

export interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
  technologies?: string[];
  type: 'work' | 'education' | 'project';
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
  category: 'frontend' | 'backend' | 'database' | 'tools' | 'languages';
  level?: 'beginner' | 'intermediate' | 'advanced' | 'expert';
}

export const experiences: Experience[] = [
  {
    id: "bouvet-asa",
    title: "IT Consultant – Summer Intern (Frontend)",
    company: "Bouvet ASA",
    period: "2024-06 – 2024-07",
    description:
      "Worked as a frontend developer on a high-profile client project for Bane NOR, based at Bouvet ASA’s Oslo office. Contributed to building accessible, maintainable, and scalable user interfaces using React, React Router, and TypeScript. Collaborated closely with designers and backend developers in an agile environment to ensure a seamless and responsive user experience.",
    technologies: ["React", "React Router", "TypeScript"],
    type: "work"
  },
  {
    id: "fjordland",
    title: "Production Assistant",
    company: "Fjordland AS",
    period: "2024-06 – 2024-08",
    description:
      "Supported large-scale food production by accurately measuring and preparing ingredients in accordance with strict recipes and hygiene standards. Ensured compliance with food safety regulations, maintained a clean and organized workspace, and contributed to efficient production workflows under time constraints.",
    type: "work"
  },
  {
    id: "dinsko",
    title: "Sales Associate",
    company: "DinSko",
    period: "2023-09 – 2024-06",
    description:
      "Delivered excellent customer service in a fast-paced retail environment by advising customers on footwear styles and fit. Processed sales transactions, handled returns, and maintained an organized and visually appealing store layout. Assisted in inventory management and restocking to ensure optimal product availability.",
    type: "work"
  },
  {
    id: "homebrands",
    title: "Warehouse Employee",
    company: "Home Brands AS",
    period: "2020-09 – 2022-12",
    description:
      "Operated forklifts and other warehouse equipment to efficiently pick, prepare, and dispatch customer orders. Coordinated deliveries to meet tight deadlines, ensured accuracy in order fulfillment, and contributed to maintaining a safe and organized warehouse environment.",
    type: "work"
  },
  {
    id: "varhaug",
    title: "Farm Worker",
    company: "Varhaug Samdrift DA",
    period: "2017-03 – 2020-08",
    description:
      "Assisted with daily farm operations including feeding livestock, cleaning facilities, and performing general maintenance. Supported seasonal tasks such as harvesting and equipment upkeep, ensuring smooth farm operations during both weekdays and weekends.",
    type: "work"
  }
];

export const education: Education[] = [
  {
    id: "msc-ntnu",
    degree: "Master’s Degree in Management of Technology",
    institution: "Norwegian University of Science and Technology (NTNU)",
    period: "2024-08 – 2026-06",
    description:
      "Fokus på teknologi- og forretningsutvikling, strategi og innovasjon."
  },
  {
    id: "bsc-ntnu",
    degree: "Bachelor’s Degree in Computer Engineering – Application Development",
    institution: "Norwegian University of Science and Technology (NTNU)",
    period: "2021-08 – 2024-06",
    description:
      "Full‑stack fokus med frontend, backend og databaser."
  }
];

export const skills: Skill[] = [
  // Frontend
  { name: "React", category: "frontend", level: "advanced" },
  { name: "React Router", category: "frontend", level: "advanced" },
  { name: "HTML/CSS", category: "frontend", level: "advanced" },
  { name: "JavaScript", category: "frontend", level: "advanced" },
  { name: "TypeScript", category: "frontend", level: "advanced" },
  { name: "Flutter", category: "frontend", level: "intermediate" },
  { name: "Unity (UI/UX)", category: "frontend", level: "intermediate" },

  // Backend
  { name: "Spring Boot", category: "backend", level: "intermediate" },
  { name: ".NET MAUI", category: "backend", level: "intermediate" },
  { name: "Node.js", category: "backend", level: "intermediate" },
  { name: "Thymeleaf", category: "backend", level: "intermediate" },

  // Database
  { name: "MySQL", category: "database", level: "intermediate" },
  { name: "PostgreSQL", category: "database", level: "intermediate" },

  // Languages
  { name: "Java", category: "languages", level: "intermediate" },
  { name: "C#", category: "languages", level: "intermediate" },
  { name: "Dart", category: "languages", level: "beginner" },

  // Tools
  { name: "Git", category: "tools", level: "advanced" },
  { name: "Jira", category: "tools", level: "intermediate" },
  { name: "Confluence", category: "tools", level: "intermediate" },
  { name: "Postman", category: "tools", level: "intermediate" }
];
