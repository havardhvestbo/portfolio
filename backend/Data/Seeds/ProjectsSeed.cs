using Portfolio.Api.Models;

namespace Portfolio.Api.Data.Seeds;

internal static class ProjectsSeed
{
    public static IReadOnlyList<Project> Create() =>
    [
        new()
        {
            Id = "bane-nor-client-project",
            Title = "Bane NOR – Client Project via Bouvet ASA",
            Description = "Frontend-utvikler i et Bouvet-team på kundeprosjekt hos Bane NOR. Bygget moderne UI med React Router og TypeScript, med fokus på tilgjengelige, vedlikeholdbare og skalerbare komponenter.",
            Featured = true,
            Technologies = ["React", "React Router", "TypeScript"],
            Year = 2024
        },
        new()
        {
            Id = "bachelor-thesis",
            Title = "Bachelor Thesis – Collecting Service for Mobile App Data",
            Description = "Utviklet en innsamlingstjeneste for data fra mobilapplikasjoner med full-stack integrasjon og sikre API-er.",
            Featured = true,
            Technologies =
            [
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
            Year = 2024
        },
        new()
        {
            Id = "mobile-stock-app",
            Title = "Mobile Stock Application",
            Description = "Lagerstyringsapp for mobil med autentisering, API-integrasjon og sikker backend.",
            Featured = false,
            Technologies =
            [
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
            Year = 2023
        },
        new()
        {
            Id = "online-webshop",
            Title = "Online Web Shop Application",
            Description = "Full-stack nettbutikk med autentisering, sikker REST-API og produksjonsoppsett.",
            Featured = false,
            Technologies =
            [
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
            Year = 2022
        },
        new()
        {
            Id = "movemento-game",
            Title = "Movemento Game (Windows/MacOS/Web)",
            Description = "Fysikkbasert spill i Unity med kryssplattform-støtte og optimalisert ytelse.",
            Featured = false,
            Technologies =
            [
                "Unity",
                "C#",
                "Physics Simulation",
                "Game Mechanics",
                "Game Design",
                "Animation",
                "Performance Optimization"
            ],
            Year = 2021
        }
    ];
}
