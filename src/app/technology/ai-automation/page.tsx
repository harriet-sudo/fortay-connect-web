import type { Metadata } from "next";
import AIAutomationTechnology from "@/pages/AIAutomationTechnology";

export const metadata: Metadata = {
  title: "AI & Automation for CX | Fortay Connect",
  description:
    "Enterprise AI automation that delivers measurable outcomes. Conversational AI, workflow automation, intelligent routing. Deployed with governance, not hype.",
};

export default function AIAutomationPage() { return <AIAutomationTechnology />; }
