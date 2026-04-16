"use client";

import { motion } from "framer-motion";

const alcumusLogo = "/assets/logos/alcumus.webp";
const ashtonsLogo = "/assets/logos/ashtons-legal.webp";
const astonVillaLogo = "/assets/logos/aston-villa.webp";
const caAutoFinanceLogo = "/assets/logos/ca-auto-finance.webp";
const dextLogo = "/assets/logos/dext.webp";
const ineos = "/assets/logos/ineos.webp";
const nottinghamForestLogo = "/assets/logos/nottingham-forest.png";
const pkfLogo = "/assets/logos/pkf.png";
const gardenCourtLogo = "/assets/logos/garden-court-chambers.svg";

const clients: { name: string; src: string }[] = [
  { name: "Alcumus", src: alcumusLogo },
  { name: "Ashtons Legal", src: ashtonsLogo },
  { name: "Aston Villa FC", src: astonVillaLogo },
  { name: "CA Auto Finance", src: caAutoFinanceLogo },
  { name: "Dext", src: dextLogo },
  { name: "INEOS", src: ineos },
  { name: "Nottingham Forest", src: nottinghamForestLogo },
  { name: "PKF", src: pkfLogo },
  { name: "Garden Court Chambers", src: gardenCourtLogo },
];

const TrustedBySection = () => (
  <section className="border-y border-border bg-[#F7F9FC] py-10">
    <div className="container">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <p className="mb-6 text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          Trusted by
        </p>
        <div className="relative overflow-hidden">
          {/* fade edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#F7F9FC] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#F7F9FC] to-transparent" />
          <div className="flex w-max animate-logo-scroll items-center gap-16">
            {[...clients, ...clients].map((client, i) => (
              <img
                key={`${client.name}-${i}`}
                src={client.src}
                alt={client.name}
                className="h-8 w-auto shrink-0 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300 md:h-10"
              />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default TrustedBySection;
