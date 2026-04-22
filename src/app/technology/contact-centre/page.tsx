import type { Metadata } from "next";
import ContactCentreTechnology from "@/pages/ContactCentreTechnology";

export const metadata: Metadata = {
  title: "Contact Centre Solutions | CCaaS Platforms | Fortay Connect",
  description:
    "Platform-neutral contact centre selection and deployment. We evaluate every CCaaS option against your requirements. Omnichannel, AI-powered, compliance-ready.",
};

export default function ContactCentrePage() { return <ContactCentreTechnology />; }
