import type {
  Course,
  Education,
  Experience,
  NavLink,
  PersonalInfo,
  PortfolioSnapshot,
  Project,
  SiteConfig,
  Skill
} from "@/entities/portfolio/model/portfolio";

const DEFAULT_LOCAL_API_BASE_URL = "http://localhost:5000";
const DEFAULT_REVALIDATE_SECONDS = 1800;

type FetchArgs = {
  init?: RequestInit;
  revalidate?: number | false;
};

function getApiBaseUrl() {
  const configuredApiBaseUrl = process.env.PORTFOLIO_API_BASE_URL ?? process.env.NEXT_PUBLIC_API_BASE_URL;

  if (configuredApiBaseUrl && configuredApiBaseUrl.trim().length > 0) {
    return configuredApiBaseUrl.replace(/\/$/, "");
  }

  if (process.env.NODE_ENV !== "production") {
    return DEFAULT_LOCAL_API_BASE_URL;
  }

  throw new Error("Portfolio API base URL is not configured. Set PORTFOLIO_API_BASE_URL for production deployments.");
}

function getErrorMessage(error: unknown) {
  return error instanceof Error ? error.message : "Unknown error";
}

function getRevalidateValue(revalidate?: number | false) {
  if (typeof revalidate === "number") {
    return revalidate;
  }

  if (revalidate === false || process.env.NODE_ENV !== "production") {
    return 0;
  }

  return DEFAULT_REVALIDATE_SECONDS;
}

async function fetchFromPortfolio<T>(endpoint: string, { init, revalidate }: FetchArgs = {}) {
  const url = `${getApiBaseUrl()}/api/portfolio${endpoint}`;
  let response: Response;

  try {
    response = await fetch(url, {
      ...init,
      headers: {
        Accept: "application/json",
        ...(init?.headers ?? {})
      },
      next: { revalidate: getRevalidateValue(revalidate) }
    });
  } catch (error) {
    throw new Error(`Failed to reach Portfolio API at ${url}. ${getErrorMessage(error)}`);
  }

  if (!response.ok) {
    const message = await response.text();
    throw new Error(`Request to ${endpoint} failed with ${response.status}: ${message}`);
  }

  return (await response.json()) as T;
}

export const getPortfolioSnapshot = (args?: FetchArgs) =>
  fetchFromPortfolio<PortfolioSnapshot>("", args);

export const getPersonalInfo = (args?: FetchArgs) =>
  fetchFromPortfolio<PersonalInfo>("/personal", args);

export const getSiteConfig = (args?: FetchArgs) =>
  fetchFromPortfolio<SiteConfig>("/config", args);

export const getNavigation = (args?: FetchArgs) =>
  fetchFromPortfolio<NavLink[]>("/navigation", args);

export const getProjects = (args?: FetchArgs) =>
  fetchFromPortfolio<Project[]>("/projects", args);

export const getFeaturedProjects = (args?: FetchArgs) =>
  fetchFromPortfolio<Project[]>("/projects/featured", args);

export const getExperiences = (args?: FetchArgs) =>
  fetchFromPortfolio<Experience[]>("/experiences", args);

export const getEducation = (args?: FetchArgs) =>
  fetchFromPortfolio<Education[]>("/education", args);

export const getSkills = (args?: FetchArgs) =>
  fetchFromPortfolio<Skill[]>("/skills", args);

export const getCourses = (args?: FetchArgs) =>
  fetchFromPortfolio<Course[]>("/courses", args);
