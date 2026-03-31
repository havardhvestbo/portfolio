namespace Portfolio.Api.Models;

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
