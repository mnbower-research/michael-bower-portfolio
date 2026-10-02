export const siteConfig = {
  name: "Michael Bower",
  title: "Michael Bower — Human Agency Infrastructure",
  description:
    "Research and engineering focused on human agency, AI alignment, delegated authority, agent governance and increasingly capable personal AI systems.",
  author: {
    name: "Michael Bower",
    description:
      "Independent researcher and builder working on human agency, AI systems, delegated authority, memory, alignment and agent governance.",
  },
  // When the portrait is ready, set this to "/images/michael-bower.jpg".
  // One high-resolution vertical image will supply hero, profile, and avatar crops.
  authorImage: null as string | null,
  authorImagePosition: "50% 35%",
  // Set this after a production domain has been purchased. No URL is emitted while null.
  baseUrl: null as string | null,
};

export function absoluteUrl(path: string) {
  if (!siteConfig.baseUrl) return undefined;
  return new URL(path, siteConfig.baseUrl).toString();
}
