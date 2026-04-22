import type { Metadata } from "next";
import ManufacturingIndustry from "@/pages/ManufacturingIndustry";

export const metadata: Metadata = {
  title: "Manufacturing Communications & AI | Fortay Connect",
  description:
    "Multi-site communications infrastructure for manufacturers. ERP integration, shift routing, AI virtual agents. Designed for operational efficiency, not digital buzzwords.",
};

export default function ManufacturingPage() { return <ManufacturingIndustry />; }
