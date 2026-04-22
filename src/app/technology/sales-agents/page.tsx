import type { Metadata } from "next";
import SalesAgentsTechnology from "@/pages/SalesAgentsTechnology";

export const metadata: Metadata = {
  title: "AI Sales Agents | Revenue Intelligence | Fortay Connect",
  description:
    "AI-powered sales agents and revenue intelligence. Automate outbound, qualify leads, and accelerate pipeline with conversational AI.",
};

export default function SalesAgentsPage() { return <SalesAgentsTechnology />; }
