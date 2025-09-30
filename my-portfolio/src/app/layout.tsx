import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "../components/Navbar";
import { getNavigation, getPersonalInfo, getSiteConfig } from "@/lib/api";
import type { NavLink, PersonalInfo } from "@/types/portfolio";

const FALLBACK_METADATA: Metadata = {
  title: "Håvard - portfolio",
  description: "Projects, education, and contact.",
};

export async function generateMetadata(): Promise<Metadata> {
  try {
    const siteConfig = await getSiteConfig();

    return {
      title: siteConfig.name,
      description: siteConfig.description,
      openGraph: {
        title: siteConfig.name,
        description: siteConfig.description,
        url: siteConfig.url,
        siteName: siteConfig.name,
        type: "website",
        images: siteConfig.ogImage ? [{ url: siteConfig.ogImage }] : undefined,
      },
      twitter: {
        card: "summary_large_image",
        title: siteConfig.name,
        description: siteConfig.description,
      },
    };
  } catch (error) {
    console.error("Failed to load site metadata", error);
    return FALLBACK_METADATA;
  }
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  let navLinks: NavLink[] = [];
  let personalInfo: PersonalInfo | null = null;

  try {
    [navLinks, personalInfo] = await Promise.all([
      getNavigation(),
      getPersonalInfo(),
    ]);
  } catch (error) {
    console.error("Failed to load layout data", error);
  }

  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-background text-foreground font-sans antialiased">
        <Navbar navLinks={navLinks} social={personalInfo?.social ?? {}} />
        <main className="container-page py-10">{children}</main>
      </body>
    </html>
  );
}
