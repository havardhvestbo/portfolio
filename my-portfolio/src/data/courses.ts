export interface Course {
  id: string;
  code: string;
  title: string;
  institution: string;
  level: 'bachelor' | 'master' | 'phd' | 'certificate' | 'online';
  credits?: number;
  grade?: string;
  year: string;
  semester?: 'spring' | 'fall' | 'summer';
  description?: string;
  topics?: string[];
  category: 'programming' | 'mathematics' | 'engineering' | 'management' | 'research' | 'design' | 'other';
}

export const courses: Course[] = [
  // 2021 Autumn (Bachelor)
  {
    id: "HMS0006-2021-autumn",
    code: "HMS0006",
    title: "Health, Safety and Environment (HSE) – Ålesund",
    institution: "NTNU",
    level: "bachelor",
    grade: "Passed",
    year: "2021",
    semester: "fall",
    description: "Mandatory HSE introduction: safety culture, regulations, and lab/fieldwork best practices for first-year engineering students.",
    topics: ["HSE", "Safety culture", "Regulations"],
    category: "other"
  },
  {
    id: "IDATA1001-2021-autumn",
    code: "IDATA1001",
    title: "Programming 1",
    institution: "NTNU",
    level: "bachelor",
    credits: 7.5,
    grade: "C",
    year: "2021",
    semester: "fall",
    description: "Introductory programming with variables, control flow, functions, and objects; introduces UML/class diagrams and layered architecture.",
    topics: ["Variables", "Control flow", "Functions", "OOP basics", "UML"],
    category: "programming"
  },
  {
    id: "IMAA1001-2021-autumn",
    code: "IMAA1001",
    title: "Mathematical Methods 1",
    institution: "NTNU",
    level: "bachelor",
    credits: 10,
    grade: "Passed",
    year: "2021",
    semester: "fall",
    description: "Calculus and linear algebra for engineering: limits, derivatives, integrals, differential equations, vector spaces, eigenvalues.",
    topics: ["Calculus", "Differential equations", "Linear algebra"],
    category: "mathematics"
  },
  {
    id: "INGA1001-2021-autumn",
    code: "INGA1001",
    title: "Introduction to the Engineering Profession",
    institution: "NTNU",
    level: "bachelor",
    credits: 10,
    grade: "Passed",
    year: "2021",
    semester: "fall",
    description: "Engineering ethics and role in society, scientific method, sustainability, teamwork/project methods, basic programming, and digital tools.",
    topics: ["Ethics", "Scientific method", "Sustainability", "Teamwork"],
    category: "engineering"
  },

  // 2022 Spring (Bachelor)
  {
    id: "IDATA1002-2022-spring",
    code: "IDATA1002",
    title: "Software Engineering",
    institution: "NTNU",
    level: "bachelor",
    credits: 10,
    grade: "C",
    year: "2022",
    semester: "spring",
    description: "Software lifecycle, agile practices, testing, version control; team project work with process and documentation.",
    topics: ["Agile", "Scrum", "Testing", "Git", "Requirements"],
    category: "programming"
  },
  {
    id: "IDATA2001-2022-spring",
    code: "IDATA2001",
    title: "Programming 2",
    institution: "NTNU",
    level: "bachelor",
    credits: 10,
    grade: "B",
    year: "2022",
    semester: "spring",
    description: "Object-oriented programming and data structures; reusable design and algorithmic problem solving.",
    topics: ["OOP", "Collections", "Algorithms", "Design patterns"],
    category: "programming"
  },
  {
    id: "IMAA2021-2022-spring",
    code: "IMAA2021",
    title: "Mathematical Methods 2 for Computer Engineering",
    institution: "NTNU",
    level: "bachelor",
    credits: 10,
    grade: "D",
    year: "2022",
    semester: "spring",
    description: "Multivariate calculus and linear algebra methods relevant to computer science applications.",
    topics: ["Multivariable calculus", "Linear algebra", "ODEs"],
    category: "mathematics"
  },

  // 2022 Autumn (Bachelor)
  {
    id: "IDATA2303-2022-autumn",
    code: "IDATA2303",
    title: "Data Modeling and Database Applications",
    institution: "NTNU",
    level: "bachelor",
    credits: 7.5,
    grade: "B",
    year: "2022",
    semester: "fall",
    description: "Conceptual/relational modeling, SQL, application development; includes mandatory exercises and project work.",
    topics: ["ER modeling", "Normalization", "SQL", "Database performance"],
    category: "programming"
  },
  {
    id: "IDATA2304-2022-autumn",
    code: "IDATA2304",
    title: "Computer Communication and Network Programming",
    institution: "NTNU",
    level: "bachelor",
    credits: 7.5,
    grade: "C",
    year: "2022",
    semester: "fall",
    description: "Networking (TCP/IP, HTTP) and network programming; includes IoT/protocol projects.",
    topics: ["TCP/IP", "HTTP", "Sockets", "IoT", "Protocols"],
    category: "engineering"
  },
  {
    id: "ISTA1003-2022-autumn",
    code: "ISTA1003",
    title: "Statistics",
    institution: "NTNU",
    level: "bachelor",
    credits: 7.5,
    grade: "C",
    year: "2022",
    semester: "fall",
    description: "Probability, estimation, and hypothesis testing for engineers.",
    topics: ["Probability", "Estimation", "Hypothesis testing"],
    category: "mathematics"
  },

  // 2023 Spring (Bachelor)
  {
    id: "IDATA2301-2023-spring",
    code: "IDATA2301",
    title: "Web Technologies",
    institution: "NTNU",
    level: "bachelor",
    credits: 7.5,
    grade: "B",
    year: "2023",
    semester: "spring",
    description: "Modern web stack and standards (HTML/CSS, JS, HTTP/REST) with practical development.",
    topics: ["HTML/CSS", "JavaScript", "HTTP", "REST APIs"],
    category: "programming"
  },
  {
    id: "IDATA2305-2023-spring",
    code: "IDATA2305",
    title: "Operating Systems with System Programming",
    institution: "NTNU",
    level: "bachelor",
    credits: 7.5,
    grade: "B",
    year: "2023",
    semester: "spring",
    description: "Processes, threads, memory, and concurrency with hands-on system programming.",
    topics: ["Processes", "Threads", "Memory", "Concurrency"],
    category: "programming"
  },
  {
    id: "IDATA2306-2023-spring",
    code: "IDATA2306",
    title: "Application Development",
    institution: "NTNU",
    level: "bachelor",
    credits: 7.5,
    grade: "B",
    year: "2023",
    semester: "spring",
    description: "End-to-end application development: UI, APIs, deployment.",
    topics: ["Frontend", "APIs", "Deployment"],
    category: "programming"
  },

  // 2023 Summer (Bachelor)
  {
    id: "IFYA1001-2023-summer",
    code: "IFYA1001",
    title: "Physics",
    institution: "NTNU",
    level: "bachelor",
    credits: 7.5,
    grade: "D",
    year: "2023",
    semester: "summer",
    description: "Introductory physics: mechanics, waves, and electromagnetism.",
    topics: ["Mechanics", "Waves", "Electromagnetism"],
    category: "engineering"
  },

  // 2023 Autumn (Bachelor)
  {
    id: "IDATA1003-2023-autumn",
    code: "IDATA1003",
    title: "Programming 1 (extended)",
    institution: "NTNU",
    level: "bachelor",
    credits: 7.5,
    grade: "C",
    year: "2023",
    semester: "fall",
    description: "Extended intro programming with OOP and architecture basics.",
    topics: ["OOP", "UML", "Architecture basics"],
    category: "programming"
  },
  {
    id: "IDATA2502-2023-autumn",
    code: "IDATA2502",
    title: "Cloud Service Administration",
    institution: "NTNU",
    level: "bachelor",
    credits: 7.5,
    grade: "B",
    year: "2023",
    semester: "fall",
    description: "Cloud provisioning, virtualization, containers, and monitoring.",
    topics: ["Virtualization", "Containers", "Cloud", "Monitoring"],
    category: "engineering"
  },
  {
    id: "IDATA2503-2023-autumn",
    code: "IDATA2503",
    title: "Mobile Applications",
    institution: "NTNU",
    level: "bachelor",
    credits: 7.5,
    grade: "A",
    year: "2023",
    semester: "fall",
    description: "Cross-platform mobile app dev with Flutter, state management, API integration.",
    topics: ["Flutter", "State management", "APIs", "Mobile UI/UX"],
    category: "programming"
  },
  {
    id: "IDATA2504-2023-autumn",
    code: "IDATA2504",
    title: "Game Development",
    institution: "NTNU",
    level: "bachelor",
    credits: 7.5,
    grade: "B",
    year: "2023",
    semester: "fall",
    description: "Unity game dev: physics, rendering, animation, performance optimization.",
    topics: ["Unity", "C#", "Physics", "Rendering", "Animation"],
    category: "programming"
  },
  {
    id: "INFT2503-2023-autumn",
    code: "INFT2503",
    title: "C++ for Programmers",
    institution: "NTNU",
    level: "bachelor",
    credits: 7.5,
    grade: "Passed",
    year: "2023",
    semester: "fall",
    description: "Advanced C++ for experienced programmers.",
    topics: ["C++", "Memory management", "STL", "OOP"],
    category: "programming"
  },

  // 2024 Spring (Bachelor)
  {
    id: "IDATA2302-2024-spring",
    code: "IDATA2302",
    title: "Algorithms and Data Structures",
    institution: "NTNU",
    level: "bachelor",
    credits: 7.5,
    grade: "C",
    year: "2024",
    semester: "spring",
    description: "Core algorithms, complexity, and data structures.",
    topics: ["Sorting", "Graphs", "Big-O", "Trees"],
    category: "programming"
  },
  {
    id: "IDATA2900-2024-spring",
    code: "IDATA2900",
    title: "Bachelor Thesis – Computer Engineering",
    institution: "NTNU",
    level: "bachelor",
    credits: 20,
    grade: "C",
    year: "2024",
    semester: "spring",
    description: "Capstone engineering project and thesis.",
    topics: ["Research", "System design", "Documentation", "Presentation"],
    category: "research"
  },
  {
    id: "INGA2300-2024-spring",
    code: "INGA2300",
    title: "Engineering Systems Thinking",
    institution: "NTNU",
    level: "bachelor",
    credits: 10,
    grade: "B",
    year: "2024",
    semester: "spring",
    description: "Applying systems thinking to engineering projects.",
    topics: ["Systems thinking", "Modeling", "Interdisciplinary collaboration"],
    category: "engineering"
  },

  // 2024 Autumn (Master)
  {
    id: "BSOL4610-2024-autumn",
    code: "BSOL4610",
    title: "Strategy and Change in Technology Companies",
    institution: "NTNU",
    level: "master",
    credits: 7.5,
    grade: "C",
    year: "2024",
    semester: "fall",
    description: "Strategic management and change in tech-intensive firms.",
    topics: ["Strategy", "Change management", "Innovation", "Leadership"],
    category: "management"
  },
  {
    id: "TMF410-2024-autumn",
    code: "TMF410",
    title: "Industrial Marketing",
    institution: "NTNU",
    level: "master",
    credits: 7.5,
    grade: "C",
    year: "2024",
    semester: "fall",
    description: "B2B marketing strategies and relationship management.",
    topics: ["B2B marketing", "Sales", "Value propositions"],
    category: "management"
  },
  {
    id: "TSOL410-2024-autumn",
    code: "TSOL410",
    title: "Technology-Based Business Development",
    institution: "NTNU",
    level: "master",
    credits: 7.5,
    grade: "A",
    year: "2024",
    semester: "fall",
    description: "Commercialization, venture creation, and innovation strategy.",
    topics: ["Entrepreneurship", "Business models", "Market analysis"],
    category: "management"
  },
  {
    id: "TØS410-2024-autumn",
    code: "TØS410",
    title: "Management Accounting in Technology-Based Firms",
    institution: "NTNU",
    level: "master",
    credits: 7.5,
    grade: "C",
    year: "2024",
    semester: "fall",
    description: "Financial control and performance management for tech firms.",
    topics: ["Management accounting", "Budgeting", "KPIs", "Cost analysis"],
    category: "management"
  },

  // 2025 Spring (Master)
  {
    id: "BSOL4065-2025-spring",
    code: "BSOL4065",
    title: "Digital Transformation in Organizations",
    institution: "NTNU",
    level: "master",
    credits: 7.5,
    grade: "B",
    year: "2025",
    semester: "spring",
    description: "Change management and culture in digital transformation.",
    topics: ["Digital transformation", "Change management", "Culture"],
    category: "management"
  },
  {
    id: "TDT4860-2025-spring",
    code: "TDT4860",
    title: "Experts in Teamwork – Digital Twins",
    institution: "NTNU",
    level: "master",
    credits: 7.5,
    grade: "A",
    year: "2025",
    semester: "spring",
    description: "Interdisciplinary teamwork on Digital Twin projects.",
    topics: ["Digital twins", "Collaboration", "Prototyping"],
    category: "other"
  },
  {
    id: "TIF410-2025-spring",
    code: "TIF410",
    title: "Project Finance",
    institution: "NTNU",
    level: "master",
    credits: 7.5,
    grade: "C",
    year: "2025",
    semester: "spring",
    description: "Financial appraisal and risk assessment of projects.",
    topics: ["Project finance", "Investment appraisal", "Risk assessment"],
    category: "management"
  },
  {
    id: "TMET410-2025-spring",
    code: "TMET410",
    title: "Research Methods",
    institution: "NTNU",
    level: "master",
    credits: 7.5,
    grade: "A",
    year: "2025",
    semester: "spring",
    description: "Qualitative and quantitative research design, data collection, and analysis.",
    topics: ["Research design", "Quantitative methods", "Qualitative methods"],
    category: "research"
  }
];
