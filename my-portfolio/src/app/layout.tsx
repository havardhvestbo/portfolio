import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "../components/Navbar";

export const metadata: Metadata = {
  title: "Håvard Vestbø — Portfolio",
  description: "Projects, education, and contact.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-background text-foreground font-sans antialiased">
        <Navbar />
        <main className="container-page py-10">{children}</main>
      </body>
    </html>
  );
}