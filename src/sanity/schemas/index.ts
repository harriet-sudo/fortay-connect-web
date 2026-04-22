import type { SchemaTypeDefinition } from "sanity";

import { seo } from "./seo";
import { caseStudy } from "./caseStudy";
import { article } from "./article";
import { industryPage } from "./industryPage";
import { technologyPage } from "./technologyPage";
import { partnerPage } from "./partnerPage";
import { faq } from "./faq";
import { testimonial } from "./testimonial";
import { trustedByLogo } from "./trustedByLogo";
import { teamMember } from "./teamMember";
import { siteSettings } from "./siteSettings";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // Shared objects
    seo,
    // Documents
    caseStudy,
    article,
    industryPage,
    technologyPage,
    partnerPage,
    faq,
    testimonial,
    trustedByLogo,
    teamMember,
    siteSettings,
  ],
};
