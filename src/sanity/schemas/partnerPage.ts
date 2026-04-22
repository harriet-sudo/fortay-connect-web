import { defineField, defineType } from "sanity";

export const partnerPage = defineType({
  name: "partnerPage",
  title: "Partner page",
  type: "document",
  groups: [
    { name: "hero", title: "Hero", default: true },
    { name: "body", title: "Body" },
    { name: "meta", title: "Meta & SEO" },
  ],
  fields: [
    defineField({
      name: "name",
      title: "Partner name",
      type: "string",
      group: "hero",
      description: "E.g. 'RingCentral', 'Avaya', 'GoTo'. Never use 'vendor'.",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "URL slug",
      type: "slug",
      group: "hero",
      options: { source: "name", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "logo",
      title: "Partner logo",
      type: "image",
      group: "hero",
      description: "SVG or transparent PNG. Shown at reduced opacity on dark.",
      options: { hotspot: false },
      fields: [
        { name: "alt", type: "string", title: "Alt text" },
      ],
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
      name: "overview",
      title: "Overview",
      type: "array",
      group: "body",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "whyFortayFor",
      title: "Why Fortay for this partner",
      type: "array",
      group: "body",
      description:
        "Three to five reasons Fortay is a strong delivery choice for this platform. Direct, outcome-focused.",
      of: [{ type: "string" }],
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
    select: { title: "name", subtitle: "heroHeadline", media: "logo" },
  },
});
