import type { Metadata } from "next";
import { Suspense } from "react";
import Insights from "@/pages/Insights";

export const metadata: Metadata = {
  title: "Insights | CX, AI & Communications | Fortay Connect",
  description:
    "Expert perspectives on enterprise CX transformation, AI deployment, communications strategy and technology selection from the Fortay Connect team.",
};

export default function InsightsPage() {
  return (
    <Suspense>
      <Insights />
    </Suspense>
  );
}
