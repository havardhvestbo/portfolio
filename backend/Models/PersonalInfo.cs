namespace Portfolio.Api.Models;

public record PersonalInfo
{
    public required string Name { get; init; }
    public required string Title { get; init; }
    public required string Description { get; init; }
    public string? Status { get; init; }
    public required string Email { get; init; }
    public required string Location { get; init; }
    public required string AvailabilityLabel { get; init; }
    public string? Image { get; init; }
    public string? ImageAlt { get; init; }
    public required Dictionary<string, SocialLink> Social { get; init; }
    public required HighlightMetric HighlightMetric { get; init; }
    public NextRole? NextRole { get; init; }
    public IReadOnlyList<string> AboutParagraphs { get; init; } = Array.Empty<string>();
    public IReadOnlyList<string> Technologies { get; init; } = Array.Empty<string>();
}

public record HighlightMetric
{
    public required string Value { get; init; }
    public required string Label { get; init; }
}

public record NextRole
{
    public required string Company { get; init; }
    public required string Start { get; init; }
    public required string Label { get; init; }
}

public record SocialLink
{
    public required string Url { get; init; }
    public required string Label { get; init; }
}
