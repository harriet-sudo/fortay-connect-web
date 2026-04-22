import { defineField, defineType } from "sanity";

export const technologyPage = defineType({
  name: "technologyPage",
  title: "Technology page",
  type: "document",
  groups: [
    { name: "hero", title: "Hero", default: true },
    { name: "body", title: "Body" },
    { name: "meta", title: "Meta & SEO" },
  ],
  fields: [
    defineField({
      name: "title",
      title: "Technology name",
      type: "string",
      group: "hero",
      description:
        "E.g. 'Unified Communications' or 'AI Automation'. British spellings.",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "URL slug",
      type: "slug",
      group: "hero",
      options: { source: "title", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "heroEyebrow",
      title: "Hero eyebrow",
      type: "string",
      group: "hero",
    }),
    defineField({
      name: "heroHeadline",
      title: "Hero headline",
      type: "string",
      group: "hero",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "heroSubheadline",
      title: "Hero subheadline",
      type: "text",
      rows: 3,
      group: "hero",
    }),
    defineField({
      name: "whatItDoes",
      title: "What it does",
      type: "array",
      group: "body",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "capabilities",
      title: "Capabilities",
      type: "array",
      group: "body",
      description: "Up to six capability cards.",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", type: "string", title: "Title" },
            { name: "description", type: "text", rows: 3, title: "Description" },
          ],
          preview: { select: { title: "title", subtitle: "description" } },
        },
      ],
      validation: (rule) => rule.max(6),
    }),
    defineField({
      name: "partners",
      title: "Partners covering this technology",
      type: "array",
      group: "body",
      of: [{ type: "reference", to: [{ type: "partnerPage" }] }],
    }),
    defineField({
      name: "relatedCaseStudies",
      title: "Related case studies",
      type: "array",
      group: "body",
      of: [{ type: "reference", to: [{ type: "caseStudy" }] }],
    }),
    defineField({
      name: "faqs",
      title: "Page FAQs",
      type: "array",
      group: "body",
      of: [{ type: "reference", to: [{ type: "faq" }] }],
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
    select: { title: "title", subtitle: "heroHeadline" },
  },
});
