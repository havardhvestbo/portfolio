using Portfolio.Api.Models;

namespace Portfolio.Api.Data.Seeds;

internal static class EducationSeed
{
    public static IReadOnlyList<Education> Create() =>
    [
        new()
        {
            Id = "msc-ntnu",
            Degree = "Master’s Degree in Management of Technology",
            Institution = "Norwegian University of Science and Technology (NTNU)",
            Period = "2024-08 – 2026-06",
            Description = "Fokus på teknologi- og forretningsutvikling, strategi og innovasjon."
        },
        new()
        {
            Id = "bsc-ntnu",
            Degree = "Bachelor’s Degree in Computer Engineering – Application Development",
            Institution = "Norwegian University of Science and Technology (NTNU)",
            Period = "2021-08 – 2024-06",
            Description = "Full‑stack fokus med frontend, backend og databaser."
        }
    ];
}
