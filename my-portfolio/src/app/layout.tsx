import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { ThemeProvider } from "../components/ThemeProvider";
import { getNavigation, getPersonalInfo, getSiteConfig } from "@/lib/api";
import type { NavLink, PersonalInfo } from "@/types/portfolio";

const FALLBACK_METADATA: Metadata = {
  title: { default: "Håvard - Portfolio", template: "%s | Håvard" },
  description: "Projects, education, and contact.",
};

export async function generateMetadata(): Promise<Metadata> {
  try {
    const siteConfig = await getSiteConfig();

    return {
      title: { default: siteConfig.name, template: `%s | ${siteConfig.name}` },
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
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${GeistSans.variable} bg-background text-foreground font-sans antialiased`}>
        <ThemeProvider>
          <a href="#main-content" className="skip-link">Skip to content</a>
          <Navbar navLinks={navLinks} social={personalInfo?.social ?? {}} />
          <main id="main-content" className="container-page py-10 min-h-[calc(100vh-8rem)]">{children}</main>
          <Footer social={personalInfo?.social ?? {}} />
        </ThemeProvider>
      </body>
    </html>
  );
}
