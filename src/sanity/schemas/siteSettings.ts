import { defineField, defineType } from "sanity";

// Singleton — only one document of this type should ever exist.
// The structure.ts config enforces this in the Studio UI.
export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site settings",
  type: "document",
  fields: [
    defineField({
      name: "companyDescription",
      title: "Company description",
      type: "text",
      rows: 3,
      description:
        "One-line description of Fortay Connect used in meta fallbacks and the footer.",
    }),
    defineField({
      name: "defaultMetaTitle",
      title: "Default meta title",
      type: "string",
      description:
        "Fallback <title> tag when a page has no SEO override. Example: 'Fortay Connect | Outcome focused, technology neutral CX'.",
    }),
    defineField({
      name: "defaultMetaDescription",
      title: "Default meta description",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "defaultOgImage",
      title: "Default Open Graph image",
      type: "image",
      options: { hotspot: true },
      description:
        "1200x630px. Used for social unfurls when a page has no OG image override.",
    }),
    defineField({
      name: "footerText",
      title: "Footer text",
      type: "text",
      rows: 2,
      description: "Plain text shown in the site footer.",
    }),
  ],
  preview: {
    prepare: () => ({ title: "Site settings" }),
  },
});
