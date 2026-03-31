namespace Portfolio.Api.Models;

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
