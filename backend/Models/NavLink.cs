namespace Portfolio.Api.Models;

public record NavLink
{
    public required string Href { get; init; }
    public required string Label { get; init; }
    public required string Group { get; init; }
}
