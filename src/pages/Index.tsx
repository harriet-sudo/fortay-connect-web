"use client";

import HeroSection from "@/components/home/HeroSection";
import SoundFamiliarSection from "@/components/home/SoundFamiliarSection";
import SocialProofSection from "@/components/home/SocialProofSection";
import WhatWeDoSection from "@/components/home/WhatWeDoSection";
import DifferentiatorsSection from "@/components/home/DifferentiatorsSection";
import ProcessSection from "@/components/home/ProcessSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CTASection from "@/components/home/CTASection";
import FAQSection from "@/components/home/FAQSection";
import AssessmentTeaser from "@/components/home/AssessmentTeaser";
import SectionBridge from "@/components/home/SectionBridge";

const Index = () => (
  <>
    <main>
      <HeroSection />
      <SectionBridge from="dark" to="softPurple" />
      <SoundFamiliarSection />
      <TestimonialsSection />
      <WhatWeDoSection />
      <DifferentiatorsSection />
      <ProcessSection />
      <SocialProofSection />
      <SectionBridge from="light" to="dark" />
      <AssessmentTeaser />
      <CTASection />
      <FAQSection />
    </main>
  </>
);

export default Index;
