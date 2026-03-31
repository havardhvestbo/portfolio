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
