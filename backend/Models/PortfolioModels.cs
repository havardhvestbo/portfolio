namespace Portfolio.Api.Models;

public record SiteConfig
{
    public required string Name { get; init; }
    public required string Description { get; init; }
    public required string Url { get; init; }
    public string? OgImage { get; init; }
    public required SiteColors Colors { get; init; }
    public required Dictionary<string, string> Social { get; init; }
}

public record SiteColors
{
    public required string Primary { get; init; }
    public required string Background { get; init; }
    public required string Foreground { get; init; }
}

public record PersonalInfo
{
    public required string Name { get; init; }
    public required string Title { get; init; }
    public required string Description { get; init; }
    public string? Status { get; init; }
    public string? Image { get; init; }
    public string? ImageAlt { get; init; }
    public required Dictionary<string, SocialLink> Social { get; init; }
    public IReadOnlyList<string> Technologies { get; init; } = Array.Empty<string>();
}

public record SocialLink
{
    public required string Url { get; init; }
    public required string Label { get; init; }
}

public record NavLink
{
    public required string Href { get; init; }
    public required string Label { get; init; }
}

public record Project
{
    public required string Id { get; init; }
    public required string Title { get; init; }
    public required string Description { get; init; }
    public bool Featured { get; init; }
    public IReadOnlyList<string> Technologies { get; init; } = Array.Empty<string>();
    public ProjectLinks? Links { get; init; }
    public string? Image { get; init; }
    public int? Year { get; init; }
}

public record ProjectLinks
{
    public string? Demo { get; init; }
    public string? Github { get; init; }
    public string? Website { get; init; }
}

public record Experience
{
    public required string Id { get; init; }
    public required string Title { get; init; }
    public required string Company { get; init; }
    public required string Period { get; init; }
    public required string Description { get; init; }
    public IReadOnlyList<string> Technologies { get; init; } = Array.Empty<string>();
    public required string Type { get; init; }
}

public record Education
{
    public required string Id { get; init; }
    public required string Degree { get; init; }
    public required string Institution { get; init; }
    public required string Period { get; init; }
    public string? Description { get; init; }
    public string? Gpa { get; init; }
}

public record Skill
{
    public required string Name { get; init; }
    public required string Category { get; init; }
    public string? Level { get; init; }
}

public record Course
{
    public required string Id { get; init; }
    public required string Code { get; init; }
    public required string Title { get; init; }
    public required string Institution { get; init; }
    public required string Level { get; init; }
    public double? Credits { get; init; }
    public string? Grade { get; init; }
    public required string Year { get; init; }
    public string? Semester { get; init; }
    public string? Description { get; init; }
    public IReadOnlyList<string> Topics { get; init; } = Array.Empty<string>();
    public required string Category { get; init; }
}

public record PortfolioSnapshot
{
    public required PersonalInfo PersonalInfo { get; init; }
    public required SiteConfig SiteConfig { get; init; }
    public required IReadOnlyList<NavLink> Navigation { get; init; }
    public required IReadOnlyList<Project> Projects { get; init; }
    public required IReadOnlyList<Project> FeaturedProjects { get; init; }
    public required IReadOnlyList<Experience> Experiences { get; init; }
    public required IReadOnlyList<Education> Education { get; init; }
    public required IReadOnlyList<Skill> Skills { get; init; }
    public required IReadOnlyList<Course> Courses { get; init; }
}
