/**
 * Sanity Studio embedded inside the Next.js app.
 *
 * Everything under /studio is served by this route. The NextStudio
 * component reads the config from sanity.config.ts at the repo root.
 */

import { NextStudio } from "next-sanity/studio";
import config from "../../../../sanity.config";

export const dynamic = "force-static";

// We don't want Next.js to try to statically pre-render
// every possible Studio path — Sanity handles routing internally.
export { metadata, viewport } from "next-sanity/studio";

export default function StudioPage() {
  return <NextStudio config={config} />;
}
