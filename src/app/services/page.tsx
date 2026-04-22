import type { Metadata } from "next";
import Services from "@/pages/Services";

export const metadata: Metadata = {
  title: "Services | End-to-End CX & AI Transformation | Fortay Connect",
  description:
    "From CX advisory through technology selection, deployment and managed services. No gaps, no hand-offs. CA Auto Finance: three platforms to one, six weeks audit to live, 40% cost reduction.",
};

export default function ServicesPage() { return <Services />; }
