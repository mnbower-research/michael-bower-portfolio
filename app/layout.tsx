import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { SiteFooter } from "@/components/SiteFooter";
import { PersonStructuredData } from "@/components/PersonStructuredData";
import { siteConfig } from "@/src/config/site";

export const metadata: Metadata = {
  metadataBase: siteConfig.baseUrl ? new URL(siteConfig.baseUrl) : undefined,
  title: { default: siteConfig.title, template: "%s — " + siteConfig.name },
  description: siteConfig.description,
  authors: [{ name: siteConfig.author.name }],
  creator: siteConfig.author.name,
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <PersonStructuredData />
        <Header />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
