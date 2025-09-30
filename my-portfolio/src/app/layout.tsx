// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "../components/Navbar";
import { siteConfig } from "@/data";

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url, // add `url` in your siteConfig for nicer previews
    siteName: siteConfig.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-background text-foreground font-sans antialiased">
        <Navbar />
        <main className="container-page py-10">{children}</main>
      </body>
    </html>
  );
}
