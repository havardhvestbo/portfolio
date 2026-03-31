using Portfolio.Api.Models;

namespace Portfolio.Api.Data.Seeds;

internal static class PersonalInfoSeed
{
    public static PersonalInfo Create() => new()
    {
        Name = "Håvard Hetland Vestbø",
        Title = "Fullstack developer, NTNU graduate, and future consultant at Bouvet",
        Description = "Fullstack developer with a passion for building thoughtful digital experiences. BSc Computer Engineering, MSc Management of Technology at NTNU.",
        Status = "Developer at Bouvet ASA",
        Email = "havardvestbo@icloud.com",
        Location = "Oslo, Norway",
        AvailabilityLabel = "Developer at Bouvet ASA",
        Image = "/me.jpeg",
        ImageAlt = "Portrait of Håvard",
        Social = new Dictionary<string, SocialLink>
        {
            ["github"] = new() { Url = "https://github.com/havardhvestbo", Label = "GitHub" },
            ["linkedin"] = new() { Url = "https://www.linkedin.com/in/h%C3%A5vard-hetland-vestb%C3%B8-0a9324151/", Label = "LinkedIn" }
        },
        HighlightMetric = new HighlightMetric
        {
            Value = "5+",
            Label = "Years building and shipping software"
        },
        NextRole = new NextRole
        {
            Company = "Bouvet",
            Start = "August 2026",
            Label = "Starting at Bouvet consultancy"
        },
        AboutParagraphs =
        [
            "I’m from Varhaug on Norway’s west coast and currently finishing an MSc in Management of Technology after completing a BSc in Computer Engineering at NTNU. I enjoy the overlap between solid engineering practice, product thinking, and the human side of building software.",
            "My most formative recent experience was at Bouvet ASA, where I worked on a client project for Bane NOR and contributed accessible, maintainable frontend features in React, React Router, and TypeScript alongside designers and backend developers.",
            "I’m at my best when I can combine careful implementation with structure, clarity, and momentum; writing good code, collaborating well, and helping ideas move from rough concept to something real and useful."
        ],
        Technologies =
        [
            "React",
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "C# / .NET",
            "Spring Boot",
            "PostgreSQL",
            "React Router",
            "Git",
            "UI / UX"
        ]
    };
}
