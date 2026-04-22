import { defineField, defineType } from "sanity";

export const faq = defineType({
  name: "faq",
  title: "FAQ",
  type: "document",
  fields: [
    defineField({
      name: "pageContext",
      title: "Page context",
      type: "string",
      description:
        "Where this FAQ appears. E.g. 'homepage', 'financial-services', 'ai-automation'.",
      options: {
        list: [
          { title: "Homepage", value: "homepage" },
          { title: "About", value: "about" },
          { title: "Services", value: "services" },
          { title: "Assessment", value: "assessment" },
          { title: "Financial Services", value: "financial-services" },
          { title: "Legal", value: "legal" },
          { title: "Manufacturing", value: "manufacturing" },
          { title: "Retail", value: "retail" },
          { title: "AI Automation", value: "ai-automation" },
          { title: "Conversational Intelligence", value: "conversational-intelligence" },
          { title: "Unified Communications", value: "unified-communications" },
          { title: "Contact Centre", value: "contact-centre" },
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "question",
      title: "Question",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "answer",
      title: "Answer",
      type: "array",
      of: [{ type: "block" }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "order",
      title: "Sort order",
      type: "number",
      description: "Lower numbers appear first.",
      initialValue: 0,
    }),
  ],
  preview: {
    select: { title: "question", subtitle: "pageContext" },
  },
  orderings: [
    {
      title: "Order within context",
      name: "orderAsc",
      by: [
        { field: "pageContext", direction: "asc" },
        { field: "order", direction: "asc" },
      ],
    },
  ],
});
