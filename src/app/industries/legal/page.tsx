import type { Metadata } from "next";
import LegalIndustry from "@/pages/LegalIndustry";

export const metadata: Metadata = {
  title: "Legal Sector CX & Communications | Fortay Connect",
  description:
    "SRA-compliant communications infrastructure for law firms. AI client intake, secure telephony, practice management integration. Protect revenue, reputation and compliance.",
};

export default function LegalPage() { return <LegalIndustry />; }
