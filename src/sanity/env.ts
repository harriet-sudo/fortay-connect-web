// Sanity environment configuration.
// Values come from .env.local. In production, set them in Vercel.

export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-01-01";

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  "Missing environment variable: NEXT_PUBLIC_SANITY_DATASET",
);

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  "Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID",
);

// Read token for previews and server-side privileged queries.
// Leave unset in production if you only need public reads.
export const readToken = process.env.SANITY_API_READ_TOKEN;

// Secret shared between Sanity and the /api/revalidate route.
export const revalidateSecret = process.env.SANITY_REVALIDATE_SECRET;

// Set to true when Sanity has been configured with real IDs.
// Pages fall back to local data files when this is false, so the
// site keeps building before migration has run.
export const isSanityConfigured = Boolean(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID &&
    process.env.NEXT_PUBLIC_SANITY_PROJECT_ID !== "your-project-id",
);

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  // During local dev before Sanity is configured, return a placeholder
  // rather than throwing, so `next dev` still boots.
  if (v === undefined) {
    if (process.env.NODE_ENV === "production") {
      throw new Error(errorMessage);
    }
    return "your-project-id" as unknown as T;
  }
  return v;
}
