import { defineField, defineType } from "sanity";

export const trustedByLogo = defineType({
  name: "trustedByLogo",
  title: "Trusted By logo",
  type: "document",
  fields: [
    defineField({
      name: "companyName",
      title: "Company name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      description:
        "SVG or transparent PNG. Will be displayed in the logo carousel at reduced opacity.",
      options: { hotspot: false },
      fields: [{ name: "alt", type: "string", title: "Alt text" }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "order",
      title: "Sort order",
      type: "number",
      description: "Lower numbers appear first.",
      initialValue: 0,
    }),
    defineField({
      name: "isVisible",
      title: "Visible",
      type: "boolean",
      initialValue: true,
    }),
  ],
  preview: {
    select: { title: "companyName", media: "logo" },
  },
  orderings: [
    {
      title: "Display order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
});
