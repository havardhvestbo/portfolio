namespace Portfolio.Api.Models;

public record Education
{
    public required string Id { get; init; }
    public required string Degree { get; init; }
    public required string Institution { get; init; }
    public required string Period { get; init; }
    public string? Description { get; init; }
    public string? Gpa { get; init; }
}
