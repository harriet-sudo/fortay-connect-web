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

const Index = () => (
  <>
    <main>
      <HeroSection />
      <SoundFamiliarSection />
      <TestimonialsSection />
      <WhatWeDoSection />
      <ProcessSection />
      <SocialProofSection />
      <DifferentiatorsSection />
      <AssessmentTeaser />
      <CTASection />
      <FAQSection />
    </main>
  </>
);

export default Index;
