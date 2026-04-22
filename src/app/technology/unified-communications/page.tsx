import type { Metadata } from "next";
import UnifiedCommunicationsTechnology from "@/pages/UnifiedCommunicationsTechnology";

export const metadata: Metadata = {
  title: "Unified Communications | UCaaS Platforms | Fortay Connect",
  description:
    "Enterprise unified communications selection and deployment. Zoom, RingCentral, Dialpad, Teams and more. Independent evaluation, not reseller bias.",
};

export default function UnifiedCommunicationsPage() { return <UnifiedCommunicationsTechnology />; }
