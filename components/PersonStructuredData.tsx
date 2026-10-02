import { siteConfig } from "@/src/config/site";

export function PersonStructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.author.name,
    description: siteConfig.author.description,
    url: siteConfig.baseUrl || undefined,
    image: siteConfig.authorImage && siteConfig.baseUrl
      ? new URL(siteConfig.authorImage, siteConfig.baseUrl).toString()
      : undefined,
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}
