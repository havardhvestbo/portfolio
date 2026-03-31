namespace Portfolio.Api.Models;

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
