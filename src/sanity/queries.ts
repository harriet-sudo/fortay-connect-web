import { groq } from "next-sanity";

// Case studies

export const CASE_STUDIES_LIST_QUERY = groq`
  *[_type == "caseStudy" && isPublished == true] | order(date desc) {
    _id,
    "slug": slug.current,
    client,
    industry,
    partner,
    date,
    headline,
    summary,
    tags,
    featuredImage
  }
`;

export const CASE_STUDY_QUERY = groq`
  *[_type == "caseStudy" && slug.current == $slug && isPublished == true][0] {
    _id,
    "slug": slug.current,
    client,
    industry,
    partner,
    date,
    headline,
    summary,
    about,
    challenge,
    solution,
    results,
    testimonial,
    tags,
    featuredImage,
    seo
  }
`;

export const CASE_STUDY_SLUGS_QUERY = groq`
  *[_type == "caseStudy" && isPublished == true]{ "slug": slug.current }
`;

// Articles (Insights)

export const ARTICLES_LIST_QUERY = groq`
  *[_type == "article" && isPublished == true] | order(date desc) {
    _id,
    "slug": slug.current,
    title,
    date,
    category,
    tags,
    excerpt,
    coverImage,
    "author": author->{name, role}
  }
`;

export const ARTICLE_QUERY = groq`
  *[_type == "article" && slug.current == $slug && isPublished == true][0] {
    _id,
    "slug": slug.current,
    title,
    date,
    category,
    tags,
    excerpt,
    body,
    coverImage,
    "author": author->{name, role, headshot},
    seo
  }
`;

export const ARTICLE_SLUGS_QUERY = groq`
  *[_type == "article" && isPublished == true]{ "slug": slug.current }
`;

// Shared content

export const SITE_SETTINGS_QUERY = groq`
  *[_type == "siteSettings"][0]{
    companyDescription,
    defaultMetaTitle,
    defaultMetaDescription,
    defaultOgImage,
    footerText
  }
`;

export const TRUSTED_BY_LOGOS_QUERY = groq`
  *[_type == "trustedByLogo" && isVisible == true] | order(order asc) {
    _id, companyName, logo
  }
`;

export const TESTIMONIALS_FEATURED_QUERY = groq`
  *[_type == "testimonial" && featured == true] {
    _id, quote, author, authorTitle, authorCompany, companyLogo
  }
`;

export const FAQS_BY_CONTEXT_QUERY = groq`
  *[_type == "faq" && pageContext == $context] | order(order asc) {
    _id, question, answer
  }
`;
