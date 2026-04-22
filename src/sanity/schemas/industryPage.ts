import { defineField, defineType } from "sanity";

export const industryPage = defineType({
  name: "industryPage",
  title: "Industry page",
  type: "document",
  groups: [
    { name: "hero", title: "Hero", default: true },
    { name: "body", title: "Body" },
    { name: "meta", title: "Meta & SEO" },
  ],
  fields: [
    defineField({
      name: "title",
      title: "Industry name",
      type: "string",
      group: "hero",
      description:
        "E.g. 'Financial Services'. British spellings, no 'vendor'.",
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
      description: "Small label above the headline, e.g. 'Industries'.",
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
      name: "outcomes",
      title: "Key outcomes",
      type: "array",
      group: "body",
      description:
        "Three to five outcome-focused bullets shown as stats/pills on the page. Lead with numbers when possible.",
      of: [
        {
          type: "object",
          fields: [
            { name: "label", type: "string", title: "Label" },
            { name: "value", type: "string", title: "Value" },
          ],
          preview: {
            select: { title: "value", subtitle: "label" },
          },
        },
      ],
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "array",
      group: "body",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "featuredCaseStudies",
      title: "Featured case studies",
      type: "array",
      group: "body",
      of: [{ type: "reference", to: [{ type: "caseStudy" }] }],
      validation: (rule) => rule.max(3),
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
