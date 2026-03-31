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
} from "@/types/portfolio";
import {
  normalizeNavigation,
  normalizePersonalInfo,
  normalizePortfolioSnapshot,
  normalizeSiteConfig,
} from "@/lib/portfolioFallback";

const API_BASE_URL = (process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:5000").replace(/\/$/, "");
const PORTFOLIO_API_ROOT = `${API_BASE_URL}/api/portfolio`;
const DEFAULT_REVALIDATE_SECONDS = 1800;

type FetchArgs = {
  init?: RequestInit;
  revalidate?: number | false;
};

async function fetchFromPortfolio<T>(endpoint: string, { init, revalidate }: FetchArgs = {}) {
  const url = `${PORTFOLIO_API_ROOT}${endpoint}`;
  const response = await fetch(url, {
    ...init,
    headers: {
      Accept: "application/json",
      ...(init?.headers ?? {})
    },
    next: typeof revalidate === "number" ? { revalidate } : revalidate === false ? { revalidate: 0 } : { revalidate: DEFAULT_REVALIDATE_SECONDS }
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(`Request to ${endpoint} failed with ${response.status}: ${message}`);
  }

  return (await response.json()) as T;
}

export const getPortfolioSnapshot = (args?: FetchArgs) =>
  fetchFromPortfolio<unknown>("", args).then(normalizePortfolioSnapshot);

export const getPersonalInfo = (args?: FetchArgs) =>
  fetchFromPortfolio<unknown>("/personal", args).then(normalizePersonalInfo);

export const getSiteConfig = (args?: FetchArgs) =>
  fetchFromPortfolio<unknown>("/config", args).then(normalizeSiteConfig);

export const getNavigation = (args?: FetchArgs) =>
  fetchFromPortfolio<unknown>("/navigation", args).then(normalizeNavigation);

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
