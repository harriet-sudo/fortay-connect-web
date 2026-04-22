import type { Metadata } from "next";
import Contact from "@/pages/Contact";

export const metadata: Metadata = {
  title: "Contact Fortay Connect | Book a Strategy Session",
  description:
    "No sales sequence. No SDR follow-up. Speak directly with a founder about your CX, communications or AI transformation challenge. Book a 30-minute strategy session.",
};

export default function ContactPage() { return <Contact />; }
