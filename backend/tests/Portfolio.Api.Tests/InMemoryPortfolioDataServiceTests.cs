using Microsoft.Extensions.Options;
using Portfolio.Api.Options;
using Portfolio.Api.Services;
using Xunit;

namespace Portfolio.Api.Tests;

public class InMemoryPortfolioDataServiceTests
{
    [Fact]
    public void GetFeaturedProjects_ReturnsOnlyFeaturedProjects_AndMatchesSnapshot()
    {
        var service = CreateService("https://portfolio.example.com/");

        var projects = service.GetProjects();
        var featuredProjects = service.GetFeaturedProjects();
        var snapshot = service.GetSnapshot();

        Assert.NotEmpty(projects);
        Assert.NotEmpty(featuredProjects);
        Assert.All(featuredProjects, project => Assert.True(project.Featured));
        Assert.Equal(
            projects.Where(project => project.Featured).Select(project => project.Id),
            featuredProjects.Select(project => project.Id));
        Assert.Equal(
            featuredProjects.Select(project => project.Id),
            snapshot.FeaturedProjects.Select(project => project.Id));
    }

    [Theory]
    [InlineData("https://portfolio.example.com/", "https://portfolio.example.com")]
    [InlineData("https://portfolio.example.com", "https://portfolio.example.com")]
    public void GetSiteConfig_UsesNormalizedConfiguredSiteUrl(string configuredSiteUrl, string expectedSiteUrl)
    {
        var service = CreateService(configuredSiteUrl);

        var siteConfig = service.GetSiteConfig();

        Assert.Equal(expectedSiteUrl, siteConfig.Url);
    }

    [Fact]
    public void GetSnapshot_ReusesTheDomainDataExposedByDirectAccessors()
    {
        var service = CreateService("https://portfolio.example.com");

        var snapshot = service.GetSnapshot();

        Assert.Same(service.GetPersonalInfo(), snapshot.PersonalInfo);
        Assert.Same(service.GetSiteConfig(), snapshot.SiteConfig);
        Assert.Same(service.GetNavigation(), snapshot.Navigation);
        Assert.Same(service.GetProjects(), snapshot.Projects);
        Assert.Same(service.GetExperiences(), snapshot.Experiences);
        Assert.Same(service.GetEducation(), snapshot.Education);
        Assert.Same(service.GetSkills(), snapshot.Skills);
        Assert.Same(service.GetCourses(), snapshot.Courses);
    }

    private static InMemoryPortfolioDataService CreateService(string siteUrl) =>
        new(Microsoft.Extensions.Options.Options.Create(new PortfolioSiteOptions { SiteUrl = siteUrl }));
}
