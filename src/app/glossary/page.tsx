import type { Metadata } from "next";
import Glossary from "@/pages/Glossary";

export const metadata: Metadata = {
  title: "CX & AI Glossary | Fortay Connect",
  description:
    "Plain English definitions for CX, AI, UCaaS, CCaaS and enterprise communications terms. No jargon, no fluff.",
};

export default function GlossaryPage() { return <Glossary />; }
