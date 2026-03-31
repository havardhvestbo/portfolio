import { HomePageContent } from "@/components/HomePageContent";
import { getPortfolioSnapshot } from "@/lib/api";

export default async function HomePage() {
  try {
    const snapshot = await getPortfolioSnapshot();

    return (
      <HomePageContent
        personalInfo={snapshot.personalInfo}
        featuredProjects={snapshot.featuredProjects}
        experiences={snapshot.experiences}
      />
    );
  } catch (error) {
    console.error("Failed to load home page data", error);
    return (
      <div className="space-y-6 text-center py-20">
        <h1 className="text-3xl font-bold">Welcome</h1>
        <p className="text-muted">
          We couldn&apos;t load the latest portfolio data right now.
        </p>
        <a href="/" className="inline-block mt-4 px-5 py-2.5 rounded-xl bg-primary text-primary-contrast font-medium hover:opacity-90 transition">
          Try again
        </a>
      </div>
    );
  }
}
