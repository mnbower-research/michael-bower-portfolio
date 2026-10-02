import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AuthorPortrait } from "@/components/AuthorPortrait";
import { TagList } from "@/components/Primitives";
import { posts } from "@/src/data/writing";
import { absoluteUrl } from "@/src/config/site";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = posts.find((entry) => entry.slug === params.slug);
  if (!post) return {};
  const canonical = absoluteUrl("/writing/" + post.slug);
  return {
    title: post.seoTitle ? { absolute: post.seoTitle } : post.title,
    description: post.description,
    authors: [{ name: post.author }],
    alternates: canonical ? { canonical } : undefined,
    openGraph: {
      title: post.seoTitle || post.title,
      description: post.description,
      type: "article",
      publishedTime: post.draft ? undefined : post.date,
      authors: [post.author],
      url: canonical,
    },
  };
}

export default function WritingPost({ params }: Props) {
  const post = posts.find((entry) => entry.slug === params.slug);
  if (!post) notFound();
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.draft ? undefined : post.date,
    author: { "@type": "Person", name: post.author },
    url: absoluteUrl("/writing/" + post.slug),
  };
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd).replace(/</g, "\\u003c") }} />
      <header className="border-b hairline bg-[#f1eee7]">
        <div className="container-narrow py-20 md:py-28">
          <Link href="/writing" className="eyebrow">Things I Noticed</Link>
          <div className="mt-5 flex flex-wrap items-center gap-3">{post.draft && <span className="research-label">Sample / Draft</span>}<span className="text-xs uppercase tracking-[.12em] text-[#68736e]">Field note</span></div>
          <h1 className="mt-8 font-serif text-5xl font-medium leading-[1.02] tracking-[-.05em] md:text-7xl">{post.title}</h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-[#68736e]">{post.description}</p>
          <div className="mt-8 flex items-center gap-3">
            <AuthorPortrait variant="avatar" decorative />
            <div className="text-sm"><p className="font-semibold text-[#17201d]">{post.author}</p><p className="mt-1 text-[#68736e]"><time dateTime={post.date}>{post.date}</time><span className="mx-2" aria-hidden="true">·</span>Field note</p></div>
          </div>
          <div className="mt-5"><TagList tags={post.tags} /></div>
        </div>
      </header>
      <article className="container-narrow py-16 md:py-24">
        <div className="editorial-prose">{post.body.map((part, index) => <section key={index}>{part.heading && <h2>{part.heading}</h2>}<p>{part.text}</p></section>)}</div>
        {post.relatedResearch && <aside className="mt-20 border-y hairline py-7"><p className="eyebrow mb-4">Related research</p><div className="flex flex-wrap gap-x-6 gap-y-3">{post.relatedResearch.map((item) => <Link className="text-link text-sm text-[#58645e]" href={item.href} key={item.href}>{item.title} →</Link>)}</div></aside>}
        <Link href="/writing" className="text-link mt-12 inline-block text-sm">Back to Things I Noticed →</Link>
      </article>
    </main>
  );
}
