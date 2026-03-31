import type { Metadata } from "next";
import { DM_Sans, JetBrains_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import { getNavigation, getPersonalInfo, getSiteConfig } from "@/lib/api";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ThemeProvider } from "@/components/ThemeProvider";
import { fallbackNavigation, fallbackPersonalInfo, fallbackSiteConfig } from "@/lib/portfolioFallback";
import type { NavLink, PersonalInfo } from "@/types/portfolio";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "600"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  weight: ["400", "500"],
});

const FALLBACK_METADATA: Metadata = {
  title: { default: fallbackSiteConfig.name, template: `%s | ${fallbackSiteConfig.name}` },
  description: fallbackSiteConfig.description,
  metadataBase: new URL(fallbackSiteConfig.url),
};

export async function generateMetadata(): Promise<Metadata> {
  try {
    const siteConfig = await getSiteConfig();

    return {
      title: { default: siteConfig.name, template: `%s | ${siteConfig.name}` },
      description: siteConfig.description,
      metadataBase: new URL(siteConfig.url),
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
  let navLinks: NavLink[] = fallbackNavigation;
  let personalInfo: PersonalInfo = fallbackPersonalInfo;

  try {
    const [loadedNavLinks, loadedPersonalInfo] = await Promise.all([
      getNavigation(),
      getPersonalInfo(),
    ]);
    navLinks = loadedNavLinks;
    personalInfo = loadedPersonalInfo;
  } catch (error) {
    console.error("Failed to load layout data", error);
  }

  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={[
          playfair.variable,
          dmSans.variable,
          jetbrainsMono.variable,
          "grain-shell bg-background text-foreground font-sans antialiased",
        ].join(" ")}
      >
        <ThemeProvider>
          <a href="#main-content" className="skip-link">Skip to content</a>
          <Navbar navLinks={navLinks} social={personalInfo.social} />
          <ThemeToggle />
          <main id="main-content" className="min-h-screen pt-16">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
