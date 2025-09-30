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
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Welcome</h1>
        <p className="text-white/70">
          We couldn’t load the latest portfolio data right now. Please try again later.
        </p>
      </div>
    );
  }
}
