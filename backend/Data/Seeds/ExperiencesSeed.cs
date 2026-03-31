using Portfolio.Api.Models;

namespace Portfolio.Api.Data.Seeds;

internal static class ExperiencesSeed
{
    public static IReadOnlyList<Experience> Create() =>
    [
        new()
        {
            Id = "bouvet-asa",
            Title = "IT Consultant – Summer Intern (Frontend)",
            Company = "Bouvet ASA",
            Period = "2024-06 – 2024-07",
            Description = "Worked as a frontend developer on a high-profile client project for Bane NOR, based at Bouvet ASA’s Oslo office. Contributed to building accessible, maintainable, and scalable user interfaces using React, React Router, and TypeScript. Collaborated closely with designers and backend developers in an agile environment to ensure a seamless and responsive user experience.",
            Technologies = ["React", "React Router", "TypeScript"],
            Type = "work"
        },
        new()
        {
            Id = "fjordland",
            Title = "Production Assistant",
            Company = "Fjordland AS",
            Period = "2024-06 – 2024-08",
            Description = "Supported large-scale food production by accurately measuring and preparing ingredients in accordance with strict recipes and hygiene standards. Ensured compliance with food safety regulations, maintained a clean and organized workspace, and contributed to efficient production workflows under time constraints.",
            Type = "work"
        },
        new()
        {
            Id = "dinsko",
            Title = "Sales Associate",
            Company = "DinSko",
            Period = "2023-09 – 2024-06",
            Description = "Delivered excellent customer service in a fast-paced retail environment by advising customers on footwear styles and fit. Processed sales transactions, handled returns, and maintained an organized and visually appealing store layout. Assisted in inventory management and restocking to ensure optimal product availability.",
            Type = "work"
        },
        new()
        {
            Id = "homebrands",
            Title = "Warehouse Employee",
            Company = "Home Brands AS",
            Period = "2020-09 – 2022-12",
            Description = "Operated forklifts and other warehouse equipment to efficiently pick, prepare, and dispatch customer orders. Coordinated deliveries to meet tight deadlines, ensured accuracy in order fulfillment, and contributed to maintaining a safe and organized warehouse environment.",
            Type = "work"
        },
        new()
        {
            Id = "varhaug",
            Title = "Farm Worker",
            Company = "Varhaug Samdrift DA",
            Period = "2017-03 – 2020-08",
            Description = "Assisted with daily farm operations including feeding livestock, cleaning facilities, and performing general maintenance. Supported seasonal tasks such as harvesting and equipment upkeep, ensuring smooth farm operations during both weekdays and weekends.",
            Type = "work"
        }
    ];
}
