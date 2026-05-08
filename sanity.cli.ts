import { defineCliConfig } from "sanity/cli";

// Used by the `sanity` CLI for `sanity deploy`, `sanity typegen`, etc.
// Values come from .env.local.
export default defineCliConfig({
  api: {
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  },
  // Enables auto-updates of Studio when running `sanity dev`.
  autoUpdates: true,
  deployment: {
    // Pinned so `sanity deploy` does not re-prompt for the application id.
    appId: "oret814k7q2kfip63slvoqi8",
  },
});
