import type { Metadata } from "next";
import Assessment from "@/pages/Assessment";

export const metadata: Metadata = {
  title: "CX Readiness Assessment | Free Tool | Fortay Connect",
  description:
    "How mature is your CX operation? Seven questions, two minutes. Get a personalised readiness score with actionable recommendations. Completed by 500+ UK operations and CX leaders.",
};

export default function AssessmentPage() { return <Assessment />; }
