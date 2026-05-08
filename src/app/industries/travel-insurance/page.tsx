import type { Metadata } from "next";
import TravelInsuranceIndustry from "@/pages/TravelInsuranceIndustry";

export const metadata: Metadata = {
  title: "Travel insurance | AI agents, FNOL triage, peak season cost | Fortay Connect",
  description:
    "Travel insurers running Genesys with one engineer trying to keep up. We move them to Boost AI, Zoom Contact Centre or RingCX, depending on volume. FNOL inside 60 minutes. Peak season cost down 60%.",
};

export default function TravelInsurancePage() {
  return <TravelInsuranceIndustry />;
}
