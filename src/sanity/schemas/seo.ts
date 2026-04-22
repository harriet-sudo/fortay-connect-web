import { defineField, defineType } from "sanity";

// Shared SEO object used across content types. Not a document,
// only embedded inside other documents.
export const seo = defineType({
  name: "seo",
  title: "SEO",
  type: "object",
  fields: [
    defineField({
      name: "metaTitle",
      title: "Meta title",
      type: "string",
      description:
        "Overrides the page title tag. Keep under 60 characters. Leave blank to use the default.",
      validation: (rule) => rule.max(70),
    }),
    defineField({
      name: "metaDescription",
      title: "Meta description",
      type: "text",
      rows: 3,
      description:
        "Shown in search results and social unfurls. Keep under 160 characters.",
      validation: (rule) => rule.max(180),
    }),
    defineField({
      name: "ogImage",
      title: "Open Graph image",
      type: "image",
      description:
        "1200x630px recommended. Falls back to the default site OG image if empty.",
      options: { hotspot: true },
    }),
    defineField({
      name: "noIndex",
      title: "Hide from search engines",
      type: "boolean",
      initialValue: false,
      description: "Tick to emit a noindex robots meta tag for this page.",
    }),
  ],
});
