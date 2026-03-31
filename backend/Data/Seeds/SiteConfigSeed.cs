using Portfolio.Api.Models;

namespace Portfolio.Api.Data.Seeds;

internal static class SiteConfigSeed
{
    public static SiteConfig Create(string siteUrl) => new()
    {
        Name = "Håvard",
        Description = "Editorial portfolio for Håvard Vestbø: projects, experience, and contact.",
        Url = NormalizeSiteUrl(siteUrl),
        OgImage = "/og-image.jpg",
        Colors = new SiteColors
        {
            Primary = "#8B6914",
            Background = "#F5F0E8",
            Foreground = "#2C2418"
        },
        Social = new Dictionary<string, string>
        {
            ["github"] = "https://github.com/havardhvestbo",
            ["linkedin"] = "https://www.linkedin.com/in/h%C3%A5vard-hetland-vestb%C3%B8-0a9324151/"
        }
    };

    private static string NormalizeSiteUrl(string siteUrl) =>
        string.IsNullOrWhiteSpace(siteUrl) ? "http://localhost:3000" : siteUrl.TrimEnd('/');
}
