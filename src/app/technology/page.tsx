import type { Metadata } from "next";
import Technology from "@/pages/Technology";

export const metadata: Metadata = {
  title: "Technology Solutions | CX, UC & AI Platforms | Fortay Connect",
  description:
    "Platform-neutral technology selection across contact centre, unified communications, conversational AI and automation. We evaluate every option against your requirements.",
};

export default function TechnologyPage() { return <Technology />; }
