import { defineField, defineType } from "sanity";

export const newsletterSubscriber = defineType({
  name: "newsletterSubscriber",
  title: "Newsletter subscriber",
  type: "document",
  fields: [
    defineField({
      name: "email",
      title: "Email",
      type: "string",
      validation: (rule) =>
        rule
          .required()
          .email()
          .custom((value) =>
            typeof value === "string" && value.length <= 320
              ? true
              : "Email is too long",
          ),
    }),
    defineField({
      name: "subscribedAt",
      title: "Subscribed at",
      type: "datetime",
      readOnly: true,
    }),
    defineField({
      name: "source",
      title: "Source",
      type: "string",
      description:
        "Where the signup came from, e.g. 'article:slug' or 'footer'.",
      readOnly: true,
    }),
    defineField({
      name: "isActive",
      title: "Active",
      type: "boolean",
      description: "Untick to suppress this address from sends.",
      initialValue: true,
    }),
  ],
  preview: {
    select: { title: "email", subtitle: "subscribedAt" },
  },
  orderings: [
    {
      title: "Newest first",
      name: "subscribedAtDesc",
      by: [{ field: "subscribedAt", direction: "desc" }],
    },
  ],
});
