import type { Metadata } from "next";
import ROICalculator from "@/pages/ROICalculator";

export const metadata: Metadata = {
  title: "ROI Calculator | CX Transformation | Fortay Connect",
  description:
    "Model the return on investment for your CX and communications transformation. See projected savings before you commit budget.",
};

export default function ROICalculatorPage() { return <ROICalculator />; }
