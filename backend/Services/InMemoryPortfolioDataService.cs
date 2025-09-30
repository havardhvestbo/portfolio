using System.Linq;
using Portfolio.Api.Models;

namespace Portfolio.Api.Services;

public class InMemoryPortfolioDataService : IPortfolioDataService
{
    private readonly PersonalInfo _personalInfo;
    private readonly SiteConfig _siteConfig;
    private readonly IReadOnlyList<NavLink> _navigation;
    private readonly IReadOnlyList<Project> _projects;
    private readonly IReadOnlyList<Experience> _experiences;
    private readonly IReadOnlyList<Education> _education;
    private readonly IReadOnlyList<Skill> _skills;
    private readonly IReadOnlyList<Course> _courses;

    public InMemoryPortfolioDataService()
    {
        _personalInfo = BuildPersonalInfo();
        _siteConfig = BuildSiteConfig();
        _navigation = BuildNavigation();
        _projects = BuildProjects();
        _experiences = BuildExperiences();
        _education = BuildEducation();
        _skills = BuildSkills();
        _courses = BuildCourses();
    }

    public PersonalInfo GetPersonalInfo() => _personalInfo;

    public SiteConfig GetSiteConfig() => _siteConfig;

    public IReadOnlyList<NavLink> GetNavigation() => _navigation;

    public IReadOnlyList<Project> GetProjects() => _projects;

    public IReadOnlyList<Project> GetFeaturedProjects() => _projects.Where(p => p.Featured).ToList();

    public IReadOnlyList<Experience> GetExperiences() => _experiences;

    public IReadOnlyList<Education> GetEducation() => _education;

    public IReadOnlyList<Skill> GetSkills() => _skills;

    public IReadOnlyList<Course> GetCourses() => _courses;

    public PortfolioSnapshot GetSnapshot() => new()
    {
        PersonalInfo = _personalInfo,
        SiteConfig = _siteConfig,
        Navigation = _navigation,
        Projects = _projects,
        FeaturedProjects = GetFeaturedProjects(),
        Experiences = _experiences,
        Education = _education,
        Skills = _skills,
        Courses = _courses
    };

    private static PersonalInfo BuildPersonalInfo() => new()
    {
        Name = "Håvard Hetland Vestbø",
        Title = "Computer Engineering (BSc) & Management of Technology (MSc)",
        Description = "I’m a Master’s student in Management of Technology and Computer Engineering graduate, passionate about crafting frontend and full-stack applications that make a difference.",
        Status = "Available for projects",
        Image = "/me.jpeg",
        ImageAlt = "Portrait of Håvard",
        Social = new Dictionary<string, SocialLink>
        {
            ["github"] = new SocialLink { Url = "https://github.com/havardhvestbo", Label = "GitHub" },
            ["linkedin"] = new SocialLink { Url = "https://www.linkedin.com/in/h%C3%A5vard-hetland-vestb%C3%B8-0a9324151/", Label = "LinkedIn" }
        },
        Technologies = new List<string>
        {
            "React",
            "React Router",
            "Next.js",
            "TypeScript",
            "JavaScript",
            "Tailwind CSS",
            "HTML/CSS",
            "MUI",
            "Thymeleaf",
            "UI/UX Design",
            "Spring Boot",
            ".NET MAUI",
            "Node.js",
            "REST API",
            "Spring Security",
            "Flutter",
            "Dart",
            "PostgreSQL",
            "MySQL",
            "Unity",
            "C#",
            "Git",
            "Jira",
            "Confluence",
            "Postman",
            "Swagger",
            "Nginx",
            "Linux",
            "FTP",
            "SSH",
            "JWT Authentication",
            "SCRUM"
        }
    };

    private static SiteConfig BuildSiteConfig() => new()
    {
        Name = "Håvard - portfolio",
        Description = "Projects, education, and contact.",
        Url = "https://your-domain.com",
        OgImage = "/og-image.jpg",
        Colors = new SiteColors
        {
            Primary = "#facc15",
            Background = "#000000",
            Foreground = "#ffffff"
        },
        Social = new Dictionary<string, string>
        {
            ["github"] = "https://github.com/havardhvestbo",
            ["linkedin"] = "https://www.linkedin.com/in/h%C3%A5vard-hetland-vestb%C3%B8-0a9324151/"
        }
    };

    private static IReadOnlyList<NavLink> BuildNavigation() => new List<NavLink>
    {
        new() { Href = "/", Label = "Home" },
        new() { Href = "/projects", Label = "Projects" },
        new() { Href = "/about", Label = "About" },
        new() { Href = "/cv", Label = "CV" },
        new() { Href = "/courses", Label = "Courses" }
    };

    private static IReadOnlyList<Project> BuildProjects() => new List<Project>
    {
        new()
        {
            Id = "bane-nor-client-project",
            Title = "Bane NOR – Client Project via Bouvet ASA",
            Description = "Frontend-utvikler i et Bouvet-team på kundeprosjekt hos Bane NOR. Bygget moderne UI med React Router og TypeScript, med fokus på tilgjengelige, vedlikeholdbare og skalerbare komponenter.",
            Featured = true,
            Technologies = new List<string> { "React", "React Router", "TypeScript" },
            Year = 2024
        },
        new()
        {
            Id = "bachelor-thesis",
            Title = "Bachelor Thesis – Collecting Service for Mobile App Data",
            Description = "Utviklet en innsamlingstjeneste for data fra mobilapplikasjoner med full-stack integrasjon og sikre API-er.",
            Featured = true,
            Technologies = new List<string>
            {
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
            },
            Year = 2024
        },
        new()
        {
            Id = "mobile-stock-app",
            Title = "Mobile Stock Application",
            Description = "Lagerstyringsapp for mobil med autentisering, API-integrasjon og sikker backend.",
            Featured = false,
            Technologies = new List<string>
            {
                "Flutter",
                "Spring Boot",
                "Dart",
                "Java",
                "JWT",
                "MySQL",
                "Spring Security",
                "State Management",
                "UI/UX"
            },
            Year = 2023
        },
        new()
        {
            Id = "online-webshop",
            Title = "Online Web Shop Application",
            Description = "Full-stack nettbutikk med autentisering, sikker REST-API og produksjonsoppsett.",
            Featured = false,
            Technologies = new List<string>
            {
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
            },
            Year = 2022
        },
        new()
        {
            Id = "movemento-game",
            Title = "Movemento Game (Windows/MacOS/Web)",
            Description = "Fysikkbasert spill i Unity med kryssplattform-støtte og optimalisert ytelse.",
            Featured = false,
            Technologies = new List<string>
            {
                "Unity",
                "C#",
                "Physics Simulation",
                "Game Mechanics",
                "Game Design",
                "Animation",
                "Performance Optimization"
            },
            Year = 2021
        }
    };

    private static IReadOnlyList<Experience> BuildExperiences() => new List<Experience>
    {
        new()
        {
            Id = "bouvet-asa",
            Title = "IT Consultant – Summer Intern (Frontend)",
            Company = "Bouvet ASA",
            Period = "2024-06 – 2024-07",
            Description = "Worked as a frontend developer on a high-profile client project for Bane NOR, based at Bouvet ASA’s Oslo office. Contributed to building accessible, maintainable, and scalable user interfaces using React, React Router, and TypeScript. Collaborated closely with designers and backend developers in an agile environment to ensure a seamless and responsive user experience.",
            Technologies = new List<string> { "React", "React Router", "TypeScript" },
            Type = "work"
        },
        new()
        {
            Id = "fjordland",
            Title = "Production Assistant",
            Company = "Fjordland AS",
            Period = "2024-06 – 2024-08",
            Description = "Supported large-scale food production by accurately measuring and preparing ingredients in accordance with strict recipes and hygiene standards. Ensured compliance with food safety regulations, maintained a clean and organized workspace, and contributed to efficient production workflows under time constraints.",
            Type = "work"
        },
        new()
        {
            Id = "dinsko",
            Title = "Sales Associate",
            Company = "DinSko",
            Period = "2023-09 – 2024-06",
            Description = "Delivered excellent customer service in a fast-paced retail environment by advising customers on footwear styles and fit. Processed sales transactions, handled returns, and maintained an organized and visually appealing store layout. Assisted in inventory management and restocking to ensure optimal product availability.",
            Type = "work"
        },
        new()
        {
            Id = "homebrands",
            Title = "Warehouse Employee",
            Company = "Home Brands AS",
            Period = "2020-09 – 2022-12",
            Description = "Operated forklifts and other warehouse equipment to efficiently pick, prepare, and dispatch customer orders. Coordinated deliveries to meet tight deadlines, ensured accuracy in order fulfillment, and contributed to maintaining a safe and organized warehouse environment.",
            Type = "work"
        },
        new()
        {
            Id = "varhaug",
            Title = "Farm Worker",
            Company = "Varhaug Samdrift DA",
            Period = "2017-03 – 2020-08",
            Description = "Assisted with daily farm operations including feeding livestock, cleaning facilities, and performing general maintenance. Supported seasonal tasks such as harvesting and equipment upkeep, ensuring smooth farm operations during both weekdays and weekends.",
            Type = "work"
        }
    };

    private static IReadOnlyList<Education> BuildEducation() => new List<Education>
    {
        new()
        {
            Id = "msc-ntnu",
            Degree = "Master’s Degree in Management of Technology",
            Institution = "Norwegian University of Science and Technology (NTNU)",
            Period = "2024-08 – 2026-06",
            Description = "Fokus på teknologi- og forretningsutvikling, strategi og innovasjon."
        },
        new()
        {
            Id = "bsc-ntnu",
            Degree = "Bachelor’s Degree in Computer Engineering – Application Development",
            Institution = "Norwegian University of Science and Technology (NTNU)",
            Period = "2021-08 – 2024-06",
            Description = "Full‑stack fokus med frontend, backend og databaser."
        }
    };

    private static IReadOnlyList<Skill> BuildSkills() => new List<Skill>
    {
        new() { Name = "React", Category = "frontend", Level = "advanced" },
        new() { Name = "React Router", Category = "frontend", Level = "advanced" },
        new() { Name = "HTML/CSS", Category = "frontend", Level = "advanced" },
        new() { Name = "JavaScript", Category = "frontend", Level = "advanced" },
        new() { Name = "TypeScript", Category = "frontend", Level = "advanced" },
        new() { Name = "Flutter", Category = "frontend", Level = "intermediate" },
        new() { Name = "Unity (UI/UX)", Category = "frontend", Level = "intermediate" },
        new() { Name = "Spring Boot", Category = "backend", Level = "intermediate" },
        new() { Name = ".NET MAUI", Category = "backend", Level = "intermediate" },
        new() { Name = "Node.js", Category = "backend", Level = "intermediate" },
        new() { Name = "Thymeleaf", Category = "backend", Level = "intermediate" },
        new() { Name = "MySQL", Category = "database", Level = "intermediate" },
        new() { Name = "PostgreSQL", Category = "database", Level = "intermediate" },
        new() { Name = "Java", Category = "languages", Level = "intermediate" },
        new() { Name = "C#", Category = "languages", Level = "intermediate" },
        new() { Name = "Dart", Category = "languages", Level = "beginner" },
        new() { Name = "Git", Category = "tools", Level = "advanced" },
        new() { Name = "Jira", Category = "tools", Level = "intermediate" },
        new() { Name = "Confluence", Category = "tools", Level = "intermediate" },
        new() { Name = "Postman", Category = "tools", Level = "intermediate" }
    };

    private static IReadOnlyList<Course> BuildCourses() => new List<Course>
    {
        new()
        {
            Id = "HMS0006-2021-autumn",
            Code = "HMS0006",
            Title = "Health, Safety and Environment (HSE) – Ålesund",
            Institution = "NTNU",
            Level = "bachelor",
            Grade = "Passed",
            Year = "2021",
            Semester = "fall",
            Description = "Mandatory HSE introduction: safety culture, regulations, and lab/fieldwork best practices for first-year engineering students.",
            Topics = new List<string> { "HSE", "Safety culture", "Regulations" },
            Category = "other"
        },
        new()
        {
            Id = "IDATA1001-2021-autumn",
            Code = "IDATA1001",
            Title = "Programming 1",
            Institution = "NTNU",
            Level = "bachelor",
            Credits = 7.5,
            Grade = "C",
            Year = "2021",
            Semester = "fall",
            Description = "Introductory programming with variables, control flow, functions, and objects; introduces UML/class diagrams and layered architecture.",
            Topics = new List<string> { "Variables", "Control flow", "Functions", "OOP basics", "UML" },
            Category = "programming"
        },
        new()
        {
            Id = "IMAA1001-2021-autumn",
            Code = "IMAA1001",
            Title = "Mathematical Methods 1",
            Institution = "NTNU",
            Level = "bachelor",
            Credits = 10,
            Grade = "Passed",
            Year = "2021",
            Semester = "fall",
            Description = "Calculus and linear algebra for engineering: limits, derivatives, integrals, differential equations, vector spaces, eigenvalues.",
            Topics = new List<string> { "Calculus", "Differential equations", "Linear algebra" },
            Category = "mathematics"
        },
        new()
        {
            Id = "INGA1001-2021-autumn",
            Code = "INGA1001",
            Title = "Introduction to the Engineering Profession",
            Institution = "NTNU",
            Level = "bachelor",
            Credits = 10,
            Grade = "Passed",
            Year = "2021",
            Semester = "fall",
            Description = "Engineering ethics and role in society, scientific method, sustainability, teamwork/project methods, basic programming, and digital tools.",
            Topics = new List<string> { "Ethics", "Scientific method", "Sustainability", "Teamwork" },
            Category = "engineering"
        },
        new()
        {
            Id = "IDATA1002-2022-spring",
            Code = "IDATA1002",
            Title = "Software Engineering",
            Institution = "NTNU",
            Level = "bachelor",
            Credits = 10,
            Grade = "C",
            Year = "2022",
            Semester = "spring",
            Description = "Software lifecycle, agile practices, testing, version control; team project work with process and documentation.",
            Topics = new List<string> { "Agile", "Scrum", "Testing", "Git", "Requirements" },
            Category = "programming"
        },
        new()
        {
            Id = "IDATA2001-2022-spring",
            Code = "IDATA2001",
            Title = "Programming 2",
            Institution = "NTNU",
            Level = "bachelor",
            Credits = 10,
            Grade = "B",
            Year = "2022",
            Semester = "spring",
            Description = "Object-oriented programming and data structures; reusable design and algorithmic problem solving.",
            Topics = new List<string> { "OOP", "Collections", "Algorithms", "Design patterns" },
            Category = "programming"
        },
        new()
        {
            Id = "IMAA2021-2022-spring",
            Code = "IMAA2021",
            Title = "Mathematical Methods 2 for Computer Engineering",
            Institution = "NTNU",
            Level = "bachelor",
            Credits = 10,
            Grade = "D",
            Year = "2022",
            Semester = "spring",
            Description = "Multivariate calculus and linear algebra methods relevant to computer science applications.",
            Topics = new List<string> { "Multivariable calculus", "Linear algebra", "ODEs" },
            Category = "mathematics"
        },
        new()
        {
            Id = "IDATA2303-2022-autumn",
            Code = "IDATA2303",
            Title = "Data Modeling and Database Applications",
            Institution = "NTNU",
            Level = "bachelor",
            Credits = 7.5,
            Grade = "B",
            Year = "2022",
            Semester = "fall",
            Description = "Conceptual/relational modeling, SQL, application development; includes mandatory exercises and project work.",
            Topics = new List<string> { "ER modeling", "Normalization", "SQL", "Database performance" },
            Category = "programming"
        },
        new()
        {
            Id = "IDATA2304-2022-autumn",
            Code = "IDATA2304",
            Title = "Computer Communication and Network Programming",
            Institution = "NTNU",
            Level = "bachelor",
            Credits = 7.5,
            Grade = "C",
            Year = "2022",
            Semester = "fall",
            Description = "Networking (TCP/IP, HTTP) and network programming; includes IoT/protocol projects.",
            Topics = new List<string> { "TCP/IP", "HTTP", "Sockets", "IoT", "Protocols" },
            Category = "engineering"
        },
        new()
        {
            Id = "ISTA1003-2022-autumn",
            Code = "ISTA1003",
            Title = "Statistics",
            Institution = "NTNU",
            Level = "bachelor",
            Credits = 7.5,
            Grade = "C",
            Year = "2022",
            Semester = "fall",
            Description = "Probability, estimation, and hypothesis testing for engineers.",
            Topics = new List<string> { "Probability", "Estimation", "Hypothesis testing" },
            Category = "mathematics"
        },
        new()
        {
            Id = "IDATA2301-2023-spring",
            Code = "IDATA2301",
            Title = "Web Technologies",
            Institution = "NTNU",
            Level = "bachelor",
            Credits = 7.5,
            Grade = "B",
            Year = "2023",
            Semester = "spring",
            Description = "Modern web stack and standards (HTML/CSS, JS, HTTP/REST) with practical development.",
            Topics = new List<string> { "HTML/CSS", "JavaScript", "HTTP", "REST APIs" },
            Category = "programming"
        },
        new()
        {
            Id = "IDATA2305-2023-spring",
            Code = "IDATA2305",
            Title = "Operating Systems with System Programming",
            Institution = "NTNU",
            Level = "bachelor",
            Credits = 7.5,
            Grade = "B",
            Year = "2023",
            Semester = "spring",
            Description = "Processes, threads, memory, and concurrency with hands-on system programming.",
            Topics = new List<string> { "Processes", "Threads", "Memory", "Concurrency" },
            Category = "programming"
        },
        new()
        {
            Id = "IDATA2306-2023-spring",
            Code = "IDATA2306",
            Title = "Application Development",
            Institution = "NTNU",
            Level = "bachelor",
            Credits = 7.5,
            Grade = "B",
            Year = "2023",
            Semester = "spring",
            Description = "End-to-end application development: UI, APIs, deployment.",
            Topics = new List<string> { "Frontend", "APIs", "Deployment" },
            Category = "programming"
        },
        new()
        {
            Id = "IFYA1001-2023-summer",
            Code = "IFYA1001",
            Title = "Physics",
            Institution = "NTNU",
            Level = "bachelor",
            Credits = 7.5,
            Grade = "D",
            Year = "2023",
            Semester = "summer",
            Description = "Introductory physics: mechanics, waves, and electromagnetism.",
            Topics = new List<string> { "Mechanics", "Waves", "Electromagnetism" },
            Category = "engineering"
        },
        new()
        {
            Id = "IDATA1003-2023-autumn",
            Code = "IDATA1003",
            Title = "Programming 1 (extended)",
            Institution = "NTNU",
            Level = "bachelor",
            Credits = 7.5,
            Grade = "C",
            Year = "2023",
            Semester = "fall",
            Description = "Extended intro programming with OOP and architecture basics.",
            Topics = new List<string> { "OOP", "UML", "Architecture basics" },
            Category = "programming"
        },
        new()
        {
            Id = "IDATA2502-2023-autumn",
            Code = "IDATA2502",
            Title = "Cloud Service Administration",
            Institution = "NTNU",
            Level = "bachelor",
            Credits = 7.5,
            Grade = "B",
            Year = "2023",
            Semester = "fall",
            Description = "Cloud provisioning, virtualization, containers, and monitoring.",
            Topics = new List<string> { "Virtualization", "Containers", "Cloud", "Monitoring" },
            Category = "engineering"
        },
        new()
        {
            Id = "IDATA2503-2023-autumn",
            Code = "IDATA2503",
            Title = "Mobile Applications",
            Institution = "NTNU",
            Level = "bachelor",
            Credits = 7.5,
            Grade = "A",
            Year = "2023",
            Semester = "fall",
            Description = "Cross-platform mobile app dev with Flutter, state management, API integration.",
            Topics = new List<string> { "Flutter", "State management", "APIs", "Mobile UI/UX" },
            Category = "programming"
        },
        new()
        {
            Id = "IDATA2504-2023-autumn",
            Code = "IDATA2504",
            Title = "Game Development",
            Institution = "NTNU",
            Level = "bachelor",
            Credits = 7.5,
            Grade = "B",
            Year = "2023",
            Semester = "fall",
            Description = "Unity game dev: physics, rendering, animation, performance optimization.",
            Topics = new List<string> { "Unity", "C#", "Physics", "Rendering", "Animation" },
            Category = "programming"
        },
        new()
        {
            Id = "INFT2503-2023-autumn",
            Code = "INFT2503",
            Title = "C++ for Programmers",
            Institution = "NTNU",
            Level = "bachelor",
            Credits = 7.5,
            Grade = "Passed",
            Year = "2023",
            Semester = "fall",
            Description = "Advanced C++ for experienced programmers.",
            Topics = new List<string> { "C++", "Memory management", "STL", "OOP" },
            Category = "programming"
        },
        new()
        {
            Id = "IDATA2302-2024-spring",
            Code = "IDATA2302",
            Title = "Algorithms and Data Structures",
            Institution = "NTNU",
            Level = "bachelor",
            Credits = 7.5,
            Grade = "C",
            Year = "2024",
            Semester = "spring",
            Description = "Core algorithms, complexity, and data structures.",
            Topics = new List<string> { "Sorting", "Graphs", "Big-O", "Trees" },
            Category = "programming"
        },
        new()
        {
            Id = "IDATA2900-2024-spring",
            Code = "IDATA2900",
            Title = "Bachelor Thesis – Computer Engineering",
            Institution = "NTNU",
            Level = "bachelor",
            Credits = 20,
            Grade = "C",
            Year = "2024",
            Semester = "spring",
            Description = "Capstone engineering project and thesis.",
            Topics = new List<string> { "Research", "System design", "Documentation", "Presentation" },
            Category = "research"
        },
        new()
        {
            Id = "INGA2300-2024-spring",
            Code = "INGA2300",
            Title = "Engineering Systems Thinking",
            Institution = "NTNU",
            Level = "bachelor",
            Credits = 10,
            Grade = "B",
            Year = "2024",
            Semester = "spring",
            Description = "Applying systems thinking to engineering projects.",
            Topics = new List<string> { "Systems thinking", "Modeling", "Interdisciplinary collaboration" },
            Category = "engineering"
        },
        new()
        {
            Id = "BSOL4610-2024-autumn",
            Code = "BSOL4610",
            Title = "Strategy and Change in Technology Companies",
            Institution = "NTNU",
            Level = "master",
            Credits = 7.5,
            Grade = "C",
            Year = "2024",
            Semester = "fall",
            Description = "Strategic management and change in tech-intensive firms.",
            Topics = new List<string> { "Strategy", "Change management", "Innovation", "Leadership" },
            Category = "management"
        },
        new()
        {
            Id = "TMF410-2024-autumn",
            Code = "TMF410",
            Title = "Industrial Marketing",
            Institution = "NTNU",
            Level = "master",
            Credits = 7.5,
            Grade = "C",
            Year = "2024",
            Semester = "fall",
            Description = "B2B marketing strategies and relationship management.",
            Topics = new List<string> { "B2B marketing", "Sales", "Value propositions" },
            Category = "management"
        },
        new()
        {
            Id = "TSOL410-2024-autumn",
            Code = "TSOL410",
            Title = "Technology-Based Business Development",
            Institution = "NTNU",
            Level = "master",
            Credits = 7.5,
            Grade = "A",
            Year = "2024",
            Semester = "fall",
            Description = "Commercialization, venture creation, and innovation strategy.",
            Topics = new List<string> { "Entrepreneurship", "Business models", "Market analysis" },
            Category = "management"
        },
        new()
        {
            Id = "TØS410-2024-autumn",
            Code = "TØS410",
            Title = "Management Accounting in Technology-Based Firms",
            Institution = "NTNU",
            Level = "master",
            Credits = 7.5,
            Grade = "C",
            Year = "2024",
            Semester = "fall",
            Description = "Financial control and performance management for tech firms.",
            Topics = new List<string> { "Management accounting", "Budgeting", "KPIs", "Cost analysis" },
            Category = "management"
        },
        new()
        {
            Id = "BSOL4065-2025-spring",
            Code = "BSOL4065",
            Title = "Digital Transformation in Organizations",
            Institution = "NTNU",
            Level = "master",
            Credits = 7.5,
            Grade = "B",
            Year = "2025",
            Semester = "spring",
            Description = "Change management and culture in digital transformation.",
            Topics = new List<string> { "Digital transformation", "Change management", "Culture" },
            Category = "management"
        },
        new()
        {
            Id = "TDT4860-2025-spring",
            Code = "TDT4860",
            Title = "Experts in Teamwork – Digital Twins",
            Institution = "NTNU",
            Level = "master",
            Credits = 7.5,
            Grade = "A",
            Year = "2025",
            Semester = "spring",
            Description = "Interdisciplinary teamwork on Digital Twin projects.",
            Topics = new List<string> { "Digital twins", "Collaboration", "Prototyping" },
            Category = "other"
        },
        new()
        {
            Id = "TIF410-2025-spring",
            Code = "TIF410",
            Title = "Project Finance",
            Institution = "NTNU",
            Level = "master",
            Credits = 7.5,
            Grade = "C",
            Year = "2025",
            Semester = "spring",
            Description = "Financial appraisal and risk assessment of projects.",
            Topics = new List<string> { "Project finance", "Investment appraisal", "Risk assessment" },
            Category = "management"
        },
        new()
        {
            Id = "TMET410-2025-spring",
            Code = "TMET410",
            Title = "Research Methods",
            Institution = "NTNU",
            Level = "master",
            Credits = 7.5,
            Grade = "A",
            Year = "2025",
            Semester = "spring",
            Description = "Qualitative and quantitative research design, data collection, and analysis.",
            Topics = new List<string> { "Research design", "Quantitative methods", "Qualitative methods" },
            Category = "research"
        }
    };
}
