namespace Portfolio.Api.Models;

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
