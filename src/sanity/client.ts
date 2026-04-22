import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId } from "./env";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  // Next.js handles caching via ISR and revalidateTag, so we turn off
  // the Sanity CDN when we want fresh data. For marketing content that
  // changes infrequently, the CDN is fine.
  useCdn: true,
  perspective: "published",
});
