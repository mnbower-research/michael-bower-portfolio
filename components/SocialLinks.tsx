import { siteConfig } from "@/src/config/site";

const profiles = [
  ["GitHub", siteConfig.social.github],
  ["LinkedIn", siteConfig.social.linkedin],
] as const;

export function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <div className={"flex flex-wrap gap-x-6 gap-y-3 text-sm " + className}>
      {profiles.map(([label, href]) => (
        <a
          className="text-link inline-flex items-center gap-1.5"
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={"Michael Bower on " + label + " (opens in a new tab)"}
          key={label}
        >
          {label}<span aria-hidden="true">↗</span>
        </a>
      ))}
    </div>
  );
}
