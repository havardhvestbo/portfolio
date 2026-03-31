import { afterEach, describe, expect, it, vi } from "vitest";
import { getNavigation, getPersonalInfo, getProjects, getSiteConfig } from "@/entities/portfolio/api/portfolio-api";

describe("portfolio api client", () => {
  afterEach(() => {
    vi.unstubAllEnvs();
    vi.unstubAllGlobals();
    vi.restoreAllMocks();
  });

  it("uses the local backend with no revalidation in development", async () => {
    vi.stubEnv("NODE_ENV", "development");
    const fetchMock = vi.fn().mockResolvedValue(
      new Response(JSON.stringify([]), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }),
    );

    vi.stubGlobal("fetch", fetchMock);

    await getNavigation();

    expect(fetchMock).toHaveBeenCalledWith(
      "http://localhost:5000/api/portfolio/navigation",
      expect.objectContaining({
        headers: expect.objectContaining({ Accept: "application/json" }),
        next: { revalidate: 0 },
      }),
    );
  });

  it("uses the configured production backend URL and trims trailing slashes", async () => {
    vi.stubEnv("NODE_ENV", "production");
    vi.stubEnv("PORTFOLIO_API_BASE_URL", "https://api.example.com/");
    const fetchMock = vi.fn().mockResolvedValue(
      new Response(JSON.stringify({ name: "Havard" }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }),
    );

    vi.stubGlobal("fetch", fetchMock);

    await getSiteConfig();

    expect(fetchMock).toHaveBeenCalledWith(
      "https://api.example.com/api/portfolio/config",
      expect.objectContaining({
        next: { revalidate: 1800 },
      }),
    );
  });

  it("fails fast in production when the backend URL is missing", async () => {
    vi.stubEnv("NODE_ENV", "production");
    vi.stubEnv("PORTFOLIO_API_BASE_URL", "");
    vi.stubEnv("NEXT_PUBLIC_API_BASE_URL", "");
    const fetchMock = vi.fn();

    vi.stubGlobal("fetch", fetchMock);

    await expect(getPersonalInfo()).rejects.toThrow(
      "Portfolio API base URL is not configured. Set PORTFOLIO_API_BASE_URL for production deployments.",
    );
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("surfaces non-ok responses with endpoint context", async () => {
    vi.stubEnv("NODE_ENV", "development");
    const fetchMock = vi.fn().mockResolvedValue(
      new Response("backend exploded", {
        status: 500,
        headers: { "Content-Type": "text/plain" },
      }),
    );

    vi.stubGlobal("fetch", fetchMock);

    await expect(getProjects()).rejects.toThrow(
      "Request to /projects failed with 500: backend exploded",
    );
  });
});
