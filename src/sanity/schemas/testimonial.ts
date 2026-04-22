import { defineField, defineType } from "sanity";

export const testimonial = defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    defineField({
      name: "quote",
      title: "Quote",
      type: "text",
      rows: 4,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "author",
      title: "Author",
      type: "string",
      validation: (rule) => rule.required(),
    }),
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
    defineField({
      name: "companyLogo",
      title: "Company logo",
      type: "image",
      options: { hotspot: false },
      fields: [{ name: "alt", type: "string", title: "Alt text" }],
    }),
    defineField({
      name: "featured",
      title: "Featured",
      type: "boolean",
      description:
        "Show in homepage and high-visibility slots. Only one or two should be featured at a time.",
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: "author",
      subtitle: "authorCompany",
      media: "companyLogo",
    },
  },
});
