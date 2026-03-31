using Portfolio.Api.Models;

namespace Portfolio.Api.Data.Seeds;

internal static class CoursesSeed
{
    public static IReadOnlyList<Course> Create() =>
    [
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
            Topics = ["HSE", "Safety culture", "Regulations"],
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
            Topics = ["Variables", "Control flow", "Functions", "OOP basics", "UML"],
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
            Topics = ["Calculus", "Differential equations", "Linear algebra"],
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
            Topics = ["Ethics", "Scientific method", "Sustainability", "Teamwork"],
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
            Topics = ["Agile", "Scrum", "Testing", "Git", "Requirements"],
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
            Topics = ["OOP", "Collections", "Algorithms", "Design patterns"],
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
            Topics = ["Multivariable calculus", "Linear algebra", "ODEs"],
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
            Topics = ["ER modeling", "Normalization", "SQL", "Database performance"],
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
            Topics = ["TCP/IP", "HTTP", "Sockets", "IoT", "Protocols"],
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
            Topics = ["Probability", "Estimation", "Hypothesis testing"],
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
            Topics = ["HTML/CSS", "JavaScript", "HTTP", "REST APIs"],
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
            Topics = ["Processes", "Threads", "Memory", "Concurrency"],
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
            Topics = ["Frontend", "APIs", "Deployment"],
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
            Topics = ["Mechanics", "Waves", "Electromagnetism"],
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
            Topics = ["OOP", "UML", "Architecture basics"],
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
            Topics = ["Virtualization", "Containers", "Cloud", "Monitoring"],
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
            Topics = ["Flutter", "State management", "APIs", "Mobile UI/UX"],
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
            Topics = ["Unity", "C#", "Physics", "Rendering", "Animation"],
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
            Topics = ["C++", "Memory management", "STL", "OOP"],
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
            Topics = ["Sorting", "Graphs", "Big-O", "Trees"],
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
            Topics = ["Research", "System design", "Documentation", "Presentation"],
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
            Topics = ["Systems thinking", "Modeling", "Interdisciplinary collaboration"],
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
            Topics = ["Strategy", "Change management", "Innovation", "Leadership"],
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
            Topics = ["B2B marketing", "Sales", "Value propositions"],
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
            Topics = ["Entrepreneurship", "Business models", "Market analysis"],
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
            Topics = ["Management accounting", "Budgeting", "KPIs", "Cost analysis"],
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
            Topics = ["Digital transformation", "Change management", "Culture"],
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
            Topics = ["Digital twins", "Collaboration", "Prototyping"],
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
            Topics = ["Project finance", "Investment appraisal", "Risk assessment"],
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
            Topics = ["Research design", "Quantitative methods", "Qualitative methods"],
            Category = "research"
        }
    ];
}
