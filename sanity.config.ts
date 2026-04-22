"use client";

// This file configures Sanity Studio, embedded in the Next.js app at /studio.
// Docs: https://www.sanity.io/docs/configuration

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schema } from "./src/sanity/schemas";
import { structure } from "./src/sanity/structure";
import { apiVersion, dataset, projectId } from "./src/sanity/env";

export default defineConfig({
  name: "fortay-connect",
  title: "Fortay Connect",
  basePath: "/studio",
  projectId,
  dataset,
  schema,
  plugins: [
    structureTool({ structure }),
    // Vision gives a GROQ query playground at /studio/vision
    visionTool({ defaultApiVersion: apiVersion }),
  ],
});
