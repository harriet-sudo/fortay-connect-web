import type { Metadata } from "next";
import About from "@/pages/About";

export const metadata: Metadata = {
  title: "About Fortay Connect | Meet the Founders",
  description:
    "Harriet and Mark built Fortay Connect because enterprise transformation needed genuinely independent advice. 200+ organisations. Six years average client retention. Platform neutral, outcome focused.",
};

export default function AboutPage() { return <About />; }
