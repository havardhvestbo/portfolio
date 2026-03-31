namespace Portfolio.Api.Models;

public record Skill
{
    public required string Name { get; init; }
    public required string Category { get; init; }
    public string? Level { get; init; }
}
