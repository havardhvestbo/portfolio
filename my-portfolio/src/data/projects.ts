// projects.ts

export interface Project {
  id: string;
  title: string;
  description: string;
  featured?: boolean;
  technologies?: string[];
  links?: {
    demo?: string;
    github?: string;
    website?: string;
  };
  image?: string;
  year?: number;
}

export const projects: Project[] = [
  {
    id: "bane-nor-client-project",
    title: "Bane NOR – Client Project via Bouvet ASA",
    description:
      "Frontend-utvikler i et Bouvet-team på kundeprosjekt hos Bane NOR. Bygget moderne UI med React Router og TypeScript, med fokus på tilgjengelige, vedlikeholdbare og skalerbare komponenter.",
    featured: true,
    technologies: ["React", "React Router", "TypeScript"],
    year: 2024
  },
  {
    id: "bachelor-thesis",
    title: "Bachelor Thesis – Collecting Service for Mobile App Data",
    description:
      "Utviklet en innsamlingstjeneste for data fra mobilapplikasjoner med full‑stack integrasjon og sikre API-er.",
    featured: true,
    technologies: [
      "Cordel",
      ".NET MAUI",
      "React",
      "Spring Boot",
      "Jira",
      "Confluence",
      "GitHub",
      "Postman",
      "JWT",
      "Java",
      "C#",
      "PostgreSQL",
      "UI/UX",
      "SCRUM"
    ],
    year: 2024
  },
  {
    id: "mobile-stock-app",
    title: "Mobile Stock Application",
    description:
      "Lagerstyringsapp for mobil med autentisering, API-integrasjon og sikker backend.",
    featured: false,
    technologies: [
      "Flutter",
      "Spring Boot",
      "Dart",
      "Java",
      "JWT",
      "MySQL",
      "Spring Security",
      "State Management",
      "UI/UX"
    ],
    year: 2023
  },
  {
    id: "online-webshop",
    title: "Online Web Shop Application",
    description:
      "Full‑stack nettbutikk med autentisering, sikker REST‑API og produksjonsoppsett.",
    featured: false,
    technologies: [
      "HTML/CSS",
      "JavaScript",
      "Thymeleaf",
      "Java",
      "Spring Boot",
      "Spring Security",
      "REST API",
      "Swagger",
      "Postman",
      "Lighthouse",
      "TSL/SSL",
      "HTTPS",
      "Cookies",
      "JWT",
      "CORS",
      "Linux",
      "Nginx",
      "FTP",
      "SSH",
      "MySQL",
      "UI/UX"
    ],
    year: 2022
  },
  {
    id: "movemento-game",
    title: "Movemento Game (Windows/MacOS/Web)",
    description:
      "Fysikkbasert spill i Unity med kryssplattform-støtte og optimalisert ytelse.",
    featured: false,
    technologies: [
      "Unity",
      "C#",
      "Physics Simulation",
      "Game Mechanics",
      "Game Design",
      "Animation",
      "Performance Optimization"
    ],
    year: 2021
  }
];

export const featuredProjects = projects.filter(project => project.featured);
