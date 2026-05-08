// Sanity environment configuration.
//
// These values are read by both the Next.js app (where NEXT_PUBLIC_*
// variables are inlined at build time) and by the standalone hosted
// Studio at fortay-connect.sanity.studio (where Sanity's bundler does
// not inline NEXT_PUBLIC_* variables).
//
// To make both bundles work without configuration files we fall back to
// the literal project values. Project id and dataset name are not
// secrets — they appear in every API URL — so embedding them is safe.

const PROJECT_ID_FALLBACK = "jtcahv4e";
const DATASET_FALLBACK = "production";
const API_VERSION_FALLBACK = "2024-01-01";

export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || API_VERSION_FALLBACK;

export const dataset =
  process.env.NEXT_PUBLIC_SANITY_DATASET || DATASET_FALLBACK;

export const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || PROJECT_ID_FALLBACK;

// Read token for previews and server-side privileged queries.
// Leave unset in production if you only need public reads.
export const readToken = process.env.SANITY_API_READ_TOKEN;

// Secret shared between Sanity and the /api/revalidate route.
export const revalidateSecret = process.env.SANITY_REVALIDATE_SECRET;

// Always treat Sanity as configured because we have a real fallback id.
export const isSanityConfigured = Boolean(
  projectId && projectId !== "your-project-id",
);
