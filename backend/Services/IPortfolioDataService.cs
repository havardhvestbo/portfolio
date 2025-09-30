using Portfolio.Api.Models;

namespace Portfolio.Api.Services;

public interface IPortfolioDataService
{
    PersonalInfo GetPersonalInfo();
    SiteConfig GetSiteConfig();
    IReadOnlyList<NavLink> GetNavigation();
    IReadOnlyList<Project> GetProjects();
    IReadOnlyList<Project> GetFeaturedProjects();
    IReadOnlyList<Experience> GetExperiences();
    IReadOnlyList<Education> GetEducation();
    IReadOnlyList<Skill> GetSkills();
    IReadOnlyList<Course> GetCourses();
    PortfolioSnapshot GetSnapshot();
}
