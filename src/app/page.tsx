import type { Metadata } from "next";
import Index from "@/pages/Index";

export const metadata: Metadata = {
  title: "Fortay Connect | CX, Communications & AI Transformation Consultancy",
  description:
    "200+ enterprise transformations delivered. Platform neutral CX, communications and AI consultancy for UK businesses. CA Auto Finance: three platforms to one, costs down 40%, six weeks.",
};

export default function HomePage() { return <Index />; }
