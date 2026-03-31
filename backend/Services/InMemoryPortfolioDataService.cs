using Portfolio.Api.Data.Seeds;
using Portfolio.Api.Models;
using Portfolio.Api.Options;
using Microsoft.Extensions.Options;

namespace Portfolio.Api.Services;

public sealed class InMemoryPortfolioDataService : IPortfolioDataService
{
    private readonly PortfolioSnapshot _snapshot;

    public InMemoryPortfolioDataService(IOptions<PortfolioSiteOptions> siteOptions)
    {
        var projects = ProjectsSeed.Create();

        _snapshot = new PortfolioSnapshot
        {
            PersonalInfo = PersonalInfoSeed.Create(),
            SiteConfig = SiteConfigSeed.Create(siteOptions.Value.SiteUrl),
            Navigation = NavigationSeed.Create(),
            Projects = projects,
            FeaturedProjects = projects.Where(project => project.Featured).ToArray(),
            Experiences = ExperiencesSeed.Create(),
            Education = EducationSeed.Create(),
            Skills = SkillsSeed.Create(),
            Courses = CoursesSeed.Create()
        };
    }

    public PersonalInfo GetPersonalInfo() => _snapshot.PersonalInfo;

    public SiteConfig GetSiteConfig() => _snapshot.SiteConfig;

    public IReadOnlyList<NavLink> GetNavigation() => _snapshot.Navigation;

    public IReadOnlyList<Project> GetProjects() => _snapshot.Projects;

    public IReadOnlyList<Project> GetFeaturedProjects() => _snapshot.FeaturedProjects;

    public IReadOnlyList<Experience> GetExperiences() => _snapshot.Experiences;

    public IReadOnlyList<Education> GetEducation() => _snapshot.Education;

    public IReadOnlyList<Skill> GetSkills() => _snapshot.Skills;

    public IReadOnlyList<Course> GetCourses() => _snapshot.Courses;

    public PortfolioSnapshot GetSnapshot() => _snapshot;
}
