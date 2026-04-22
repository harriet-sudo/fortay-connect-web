import type { Metadata } from "next";
import Careers from "@/pages/Careers";

export const metadata: Metadata = {
  title: "Careers at Fortay Connect",
  description:
    "Join the team delivering enterprise CX and AI transformation for UK businesses. See open roles at Fortay Connect.",
};

export default function CareersPage() { return <Careers />; }
