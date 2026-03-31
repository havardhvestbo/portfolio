using Portfolio.Api.Models;

namespace Portfolio.Api.Data.Seeds;

internal static class SkillsSeed
{
    public static IReadOnlyList<Skill> Create() =>
    [
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
    ];
}
