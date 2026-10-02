import Image from "next/image";
import { siteConfig } from "@/src/config/site";

type PortraitVariant = "hero" | "profile" | "avatar";

const variantClasses: Record<PortraitVariant, string> = {
  hero: "aspect-[4/5] w-full max-w-[25rem]",
  profile: "aspect-[4/5] w-full max-w-[25rem]",
  avatar: "h-11 w-11 shrink-0 rounded-full",
};

export function AuthorPortrait({ variant = "profile", decorative = false, className = "" }: { variant?: PortraitVariant; decorative?: boolean; className?: string }) {
  const image = siteConfig.authorImage;
  const isAvatar = variant === "avatar";
  const sizes = isAvatar ? "44px" : variant === "hero" ? "(min-width: 1024px) 34vw, 340px" : "(min-width: 1024px) 32vw, 360px";

  return (
    <div className={variantClasses[variant] + " relative overflow-hidden border border-[#c4cdc6] bg-[#eef1ed] " + className}>
      {image ? (
        <Image
          src={image}
          alt={decorative ? "" : "Michael Bower"}
          fill
          sizes={sizes}
          className="object-cover"
          style={{ objectPosition: siteConfig.authorImagePosition }}
          priority={variant === "hero"}
        />
      ) : isAvatar ? (
        <span className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
          <span className="absolute h-px w-6 bg-[#9ca8a1]" />
          <span className="relative h-2.5 w-2.5 rounded-full border-2 border-[#eef1ed] bg-[#a94f2d] ring-1 ring-[#a94f2d]" />
        </span>
      ) : (
        <div className="signal-paper absolute inset-0" aria-hidden="true">
          <span className="absolute bottom-[15%] left-[14%] right-[14%] top-[15%] border border-[#aeb9b1]" />
          <span className="absolute left-[14%] top-[42%] h-px w-[72%] bg-[#aeb9b1]" />
          <span className="absolute left-[13%] top-[40.7%] h-3 w-3 rounded-full border-2 border-[#eef1ed] bg-[#a94f2d] ring-1 ring-[#a94f2d]" />
          <span className="absolute bottom-[15%] left-[36%] top-[42%] w-px bg-[#aeb9b1]" />
        </div>
      )}
    </div>
  );
}
