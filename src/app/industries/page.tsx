import type { Metadata } from "next";
import Industries from "@/pages/Industries";

export const metadata: Metadata = {
  title: "Industries We Serve | Fortay Connect",
  description:
    "Sector-specific CX and AI transformation for financial services, retail, manufacturing and legal. We understand your regulatory, operational and commercial context.",
};

export default function IndustriesPage() { return <Industries />; }
