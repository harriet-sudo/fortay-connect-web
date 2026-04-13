"use client";

import { motion } from "framer-motion";

const zoomLogo = "/assets/logos/zoom.png";
const ringcentralLogo = "/assets/logos/ringcentral.png";
const polyaiLogo = "/assets/logos/polyai.svg";
const niceLogo = "/assets/logos/nice.png";
const gotoLogo = "/assets/logos/goto.svg";
const boostaiLogo = "/assets/logos/boostai.svg";
const ujetLogo = "/assets/logos/ujet.svg";
const dialpadLogo = "/assets/logos/dialpad.svg";

const defaultPartners: { name: string; src: string }[] = [
  { name: "Zoom", src: zoomLogo },
  { name: "RingCentral", src: ringcentralLogo },
  { name: "Dialpad", src: dialpadLogo },
  { name: "NICE", src: niceLogo },
  { name: "GoTo", src: gotoLogo },
  { name: "PolyAI", src: polyaiLogo },
  { name: "Boost.ai", src: boostaiLogo },
  { name: "UJET", src: ujetLogo },
];

const SocialProofSection = ({ partners = defaultPartners }: { partners?: { name: string; src: string }[] }) => (
  <section className="border-y border-border bg-muted/30 py-14">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="mb-8 flex justify-center"
      >
        <span className="rounded-full border border-primary/30 bg-primary/10 px-6 py-2 text-sm font-semibold uppercase tracking-widest text-primary">
          Our Technology Partners
        </span>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="relative overflow-hidden">
          {/* fade edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent" />
          <div className="flex w-max animate-logo-scroll items-center gap-16">
            {[...partners, ...partners].map((partner, i) => (
              <img
                key={`${partner.name}-${i}`}
                src={partner.src}
                alt={partner.name}
                className="h-8 w-auto shrink-0 md:h-10"
              />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default SocialProofSection;
