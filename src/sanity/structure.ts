import type { StructureResolver } from "sanity/structure";

// Custom Studio structure: pins siteSettings as a singleton at the top
// and groups the rest of the content types.
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Site settings")
        .id("siteSettings")
        .child(
          S.document()
            .schemaType("siteSettings")
            .documentId("siteSettings")
            .title("Site settings"),
        ),
      S.divider(),
      S.listItem()
        .title("Case studies")
        .schemaType("caseStudy")
        .child(S.documentTypeList("caseStudy").title("Case studies")),
      S.listItem()
        .title("Articles")
        .schemaType("article")
        .child(S.documentTypeList("article").title("Articles")),
      S.divider(),
      S.listItem()
        .title("Industry pages")
        .schemaType("industryPage")
        .child(S.documentTypeList("industryPage").title("Industry pages")),
      S.listItem()
        .title("Technology pages")
        .schemaType("technologyPage")
        .child(S.documentTypeList("technologyPage").title("Technology pages")),
      S.listItem()
        .title("Partner pages")
        .schemaType("partnerPage")
        .child(S.documentTypeList("partnerPage").title("Partner pages")),
      S.divider(),
      S.listItem()
        .title("FAQs")
        .schemaType("faq")
        .child(S.documentTypeList("faq").title("FAQs")),
      S.listItem()
        .title("Testimonials")
        .schemaType("testimonial")
        .child(S.documentTypeList("testimonial").title("Testimonials")),
      S.listItem()
        .title("Trusted By logos")
        .schemaType("trustedByLogo")
        .child(S.documentTypeList("trustedByLogo").title("Trusted By logos")),
      S.listItem()
        .title("Team")
        .schemaType("teamMember")
        .child(S.documentTypeList("teamMember").title("Team")),
    ]);
