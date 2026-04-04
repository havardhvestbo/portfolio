import type { Metadata } from "next";
import { DM_Sans, JetBrains_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/app/providers/ThemeProvider";
import {
  getNavigation,
  getPersonalInfo,
  getSiteConfig,
  loadPortfolioData,
} from "@/entities/portfolio/api/portfolio-api";
import type { NavLink, SocialLink } from "@/entities/portfolio/model/portfolio";
import { ThemeToggle } from "@/features/theme-toggle/ui/ThemeToggle";
import { Footer } from "@/widgets/footer/ui/Footer";
import { Navbar } from "@/widgets/navigation/ui/Navbar";

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
  title: { default: "Portfolio", template: "%s | Portfolio" },
  description: "Frontend for the portfolio website.",
  metadataBase: new URL("https://example.com"),
};

export async function generateMetadata(): Promise<Metadata> {
  const siteConfig = await loadPortfolioData("site metadata", () => getSiteConfig(), null);

  if (!siteConfig) {
    return FALLBACK_METADATA;
  }

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
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const [navLinks, personalInfo] = await Promise.all([
    loadPortfolioData("navigation", () => getNavigation(), [] as NavLink[]),
    loadPortfolioData("personal info", () => getPersonalInfo(), null),
  ]);
  const socialLinks: Record<string, SocialLink> = personalInfo?.social ?? {};

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
          <Navbar navLinks={navLinks} social={socialLinks} />
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
