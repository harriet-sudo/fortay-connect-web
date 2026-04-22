import type { Metadata } from "next";
import Partners from "@/pages/Partners";

export const metadata: Metadata = {
  title: "Technology Partners | Fortay Connect",
  description:
    "Accredited partners with Zoom, RingCentral, Dialpad, NICE, GoTo and more. Our recommendations are always independent. Platform neutral, outcome focused.",
};

export default function PartnersPage() { return <Partners />; }
