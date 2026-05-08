"use client";

/**
 * Renders Sanity Portable Text using brand styled serializers.
 *
 * The class names mirror the ones used by the local markdown renderer
 * in src/pages/ArticleDetail.tsx so an article authored in Studio looks
 * identical to one still served from src/data/articles.ts.
 */

import Link from "next/link";
import { PortableText, type PortableTextComponents } from "@portabletext/react";
import { urlFor } from "@/sanity/image";

const components: PortableTextComponents = {
  block: {
    h2: ({ children }) => (
      <h2 className="mt-10 mb-4 font-display text-2xl font-bold text-foreground">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-8 mb-3 font-display text-xl font-bold text-foreground">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="mt-6 mb-2 font-display text-lg font-semibold text-foreground">
        {children}
      </h4>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-8 border-l-4 border-primary bg-muted/40 px-6 py-4 italic text-muted-foreground">
        {children}
      </blockquote>
    ),
    normal: ({ children }) => (
      <p className="my-4 leading-relaxed text-muted-foreground">{children}</p>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="my-4 ml-6 list-disc space-y-2 text-muted-foreground">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="my-4 ml-6 list-decimal space-y-2 text-muted-foreground">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li>{children}</li>,
    number: ({ children }) => <li>{children}</li>,
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-semibold text-foreground">{children}</strong>
    ),
    em: ({ children }) => <em className="italic">{children}</em>,
    link: ({ value, children }) => {
      const href: string = value?.href ?? "#";
      const newTab: boolean = Boolean(value?.openInNewTab);
      const isExternal = /^https?:\/\//i.test(href);
      const target = newTab || isExternal ? "_blank" : undefined;
      const rel = target === "_blank" ? "noopener noreferrer" : undefined;

      // Use Next Link for internal hrefs only.
      if (!isExternal && href.startsWith("/")) {
        return (
          <Link
            href={href}
            className="font-semibold text-primary underline-offset-4 hover:underline"
          >
            {children}
          </Link>
        );
      }
      return (
        <a
          href={href}
          target={target}
          rel={rel}
          className="font-semibold text-primary underline-offset-4 hover:underline"
        >
          {children}
        </a>
      );
    },
  },
  types: {
    image: ({ value }) => {
      if (!value?.asset) return null;
      const url = urlFor(value).width(1600).fit("max").auto("format").url();
      return (
        <figure className="my-10">
          <div className="overflow-hidden rounded-2xl">
            <img
              src={url}
              alt={value.alt ?? ""}
              className="h-auto w-full object-cover"
              loading="lazy"
            />
          </div>
          {value.caption && (
            <figcaption className="mt-3 text-center text-sm text-muted-foreground">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
    callout: ({ value }) => {
      const styleClass: Record<string, string> = {
        info: "border-primary bg-muted/30 text-foreground",
        quote: "border-primary bg-muted/30 italic text-muted-foreground",
        stat: "border-primary bg-card font-display text-2xl text-foreground",
      };
      const cls = styleClass[value?.style ?? "info"] ?? styleClass.info;
      return (
        <aside
          className={`my-8 rounded-2xl border-l-4 px-6 py-5 ${cls}`}
        >
          <p className="leading-relaxed">{value?.body}</p>
        </aside>
      );
    },
  },
};

export type PortableTextBodyProps = {
  value: unknown;
};

export default function PortableTextBody({ value }: PortableTextBodyProps) {
  if (!value) return null;
  // value may arrive as a JSON string (from the data normaliser) or as an
  // already parsed Portable Text array.
  const blocks =
    typeof value === "string"
      ? safeParse(value)
      : (value as unknown[]);

  if (!Array.isArray(blocks) || blocks.length === 0) return null;

  return <PortableText value={blocks as any} components={components} />;
}

function safeParse(input: string): unknown[] | null {
  try {
    const parsed = JSON.parse(input);
    return Array.isArray(parsed) ? parsed : null;
  } catch {
    return null;
  }
}
