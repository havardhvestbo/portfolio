using Portfolio.Api.Models;

namespace Portfolio.Api.Data.Seeds;

internal static class NavigationSeed
{
    public static IReadOnlyList<NavLink> Create() =>
    [
        new() { Href = "/#about", Label = "About", Group = "primary" },
        new() { Href = "/#projects", Label = "Projects", Group = "primary" },
        new() { Href = "/#experience", Label = "Experience", Group = "primary" },
        new() { Href = "/#contact", Label = "Contact", Group = "primary" },
        new() { Href = "/cv", Label = "CV", Group = "secondary" },
        new() { Href = "/courses", Label = "Courses", Group = "secondary" }
    ];
}
