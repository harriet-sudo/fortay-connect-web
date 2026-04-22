import type { Metadata } from "next";
import CaseStudies from "@/pages/CaseStudies";

export const metadata: Metadata = {
  title: "Case Studies | Enterprise CX Transformation Results | Fortay Connect",
  description:
    "200+ enterprise transformations. Seven sectors. Real outcomes, real numbers. See how organisations like CA Auto Finance achieved 40% cost reduction with Fortay Connect.",
};

export default function CaseStudiesPage() { return <CaseStudies />; }
