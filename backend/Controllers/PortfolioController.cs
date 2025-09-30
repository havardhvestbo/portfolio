using Microsoft.AspNetCore.Mvc;
using Portfolio.Api.Models;
using Portfolio.Api.Services;

namespace Portfolio.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class PortfolioController : ControllerBase
{
    private readonly IPortfolioDataService _dataService;

    public PortfolioController(IPortfolioDataService dataService)
    {
        _dataService = dataService;
    }

    [HttpGet]
    public ActionResult<PortfolioSnapshot> GetSnapshot() => Ok(_dataService.GetSnapshot());

    [HttpGet("personal")]
    public ActionResult<PersonalInfo> GetPersonalInfo() => Ok(_dataService.GetPersonalInfo());

    [HttpGet("config")]
    public ActionResult<SiteConfig> GetSiteConfig() => Ok(_dataService.GetSiteConfig());

    [HttpGet("navigation")]
    public ActionResult<IReadOnlyList<NavLink>> GetNavigation() => Ok(_dataService.GetNavigation());

    [HttpGet("projects")]
    public ActionResult<IReadOnlyList<Project>> GetProjects() => Ok(_dataService.GetProjects());

    [HttpGet("projects/featured")]
    public ActionResult<IReadOnlyList<Project>> GetFeaturedProjects() => Ok(_dataService.GetFeaturedProjects());

    [HttpGet("experiences")]
    public ActionResult<IReadOnlyList<Experience>> GetExperiences() => Ok(_dataService.GetExperiences());

    [HttpGet("education")]
    public ActionResult<IReadOnlyList<Education>> GetEducation() => Ok(_dataService.GetEducation());

    [HttpGet("skills")]
    public ActionResult<IReadOnlyList<Skill>> GetSkills() => Ok(_dataService.GetSkills());

    [HttpGet("courses")]
    public ActionResult<IReadOnlyList<Course>> GetCourses() => Ok(_dataService.GetCourses());
}
