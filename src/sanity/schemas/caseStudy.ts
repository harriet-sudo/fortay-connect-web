import { defineField, defineType } from "sanity";

export const caseStudy = defineType({
  name: "caseStudy",
  title: "Case Study",
  type: "document",
  groups: [
    { name: "content", title: "Content", default: true },
    { name: "meta", title: "Meta & SEO" },
  ],
  fields: [
    defineField({
      name: "client",
      title: "Client name",
      type: "string",
      group: "content",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "URL slug",
      type: "slug",
      group: "content",
      options: { source: "client", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "industry",
      title: "Industry",
      type: "string",
      group: "content",
      description:
        "Plain text industry label, e.g. 'Legal' or 'Engineering'. Can be replaced with an industry reference later.",
    }),
    defineField({
      name: "partner",
      title: "Technology partner",
      type: "string",
      group: "content",
      description:
        "The supplier or platform involved (e.g. Avaya, GoToConnect). Never use the word 'vendor'.",
    }),
    defineField({
      name: "date",
      title: "Publication date",
      type: "date",
      group: "content",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "headline",
      title: "Headline",
      type: "string",
      group: "content",
      description:
        "The case study title shown on the listing page. Lead with the outcome when possible.",
      validation: (rule) => rule.required().max(140),
    }),
    defineField({
      name: "summary",
      title: "Summary",
      type: "text",
      rows: 3,
      group: "content",
      description: "One to two sentences shown on the listing page.",
      validation: (rule) => rule.required().max(300),
    }),
    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" },
      group: "content",
    }),
    defineField({
      name: "featuredImage",
      title: "Featured image",
      type: "image",
      group: "content",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Alt text",
          type: "string",
          validation: (rule) => rule.required(),
        }),
      ],
    }),
    defineField({
      name: "about",
      title: "About the client",
      type: "text",
      rows: 4,
      group: "content",
    }),
    defineField({
      name: "challenge",
      title: "Challenge",
      type: "text",
      rows: 6,
      group: "content",
      description: "What the client was facing before Fortay got involved.",
    }),
    defineField({
      name: "solution",
      title: "Solution",
      type: "text",
      rows: 6,
      group: "content",
      description:
        "What Fortay did. Reference suppliers and technology partners by name. Never use the word 'vendor'.",
    }),
    defineField({
      name: "results",
      title: "Results",
      type: "text",
      rows: 6,
      group: "content",
      description: "The outcomes. Lead with numbers when possible.",
    }),
    defineField({
      name: "testimonial",
      title: "Testimonial",
      type: "object",
      group: "content",
      fields: [
        defineField({ name: "quote", title: "Quote", type: "text", rows: 4 }),
        defineField({ name: "author", title: "Author", type: "string" }),
        defineField({
          name: "authorTitle",
          title: "Author title",
          type: "string",
        }),
        defineField({
          name: "authorCompany",
          title: "Author company",
          type: "string",
        }),
      ],
    }),
    defineField({
      name: "isPublished",
      title: "Published",
      type: "boolean",
      initialValue: true,
      group: "meta",
    }),
    defineField({
      name: "seo",
      title: "SEO",
      type: "seo",
      group: "meta",
    }),
  ],
  preview: {
    select: {
      title: "client",
      subtitle: "headline",
      media: "featuredImage",
    },
  },
  orderings: [
    {
      title: "Newest first",
      name: "dateDesc",
      by: [{ field: "date", direction: "desc" }],
    },
  ],
});
