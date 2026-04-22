import type { Metadata } from "next";
import FinancialServicesIndustry from "@/pages/FinancialServicesIndustry";

export const metadata: Metadata = {
  title: "Financial Services CX & AI Transformation | Fortay Connect",
  description:
    "AI-powered CX and communications for FCA-regulated environments. CA Auto Finance: 40% cost reduction, three platforms to one, six weeks. Compliance built in, not bolted on.",
};

export default function FinancialServicesPage() { return <FinancialServicesIndustry />; }
