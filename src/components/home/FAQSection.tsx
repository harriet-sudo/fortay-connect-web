"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import DecorativeCircle from "@/components/DecorativeCircle";

const faqs = [
  {
    q: "What types of organisations do you work with?",
    a: "Commercial mid market through enterprise, typically 200 to 5,000 employees, in financial services, legal, professional services, retail and manufacturing. We do not work with public sector. If your contact centre or comms estate has more than one moving piece and a transformation lead with a board mandate, you are in scope.",
  },
  {
    q: "Are you tied to any specific technology providers?",
    a: "No. We are platform neutral. We carry SPIFF arrangements with every major UC, CX and AI provider, which removes the bias to push one over another. We recommend what is right for the way your organisation actually runs, then we tell you why.",
  },
  {
    q: "How quickly can you mobilise, and what does a typical engagement look like?",
    a: "Advisory and platform selection runs 2 to 4 weeks. Full deployment programmes run 3 to 6 months depending on user count, sites and integrations. You get a fixed timeline with named milestones before any work starts. The G.Network engagement we ran was five days from kick off to a written platform recommendation.",
  },
  {
    q: "Do you cover strategy, platform selection, deployment and ongoing optimisation, or just one?",
    a: "All four under one accountable team. You can pick us up at any stage and we will pick you up at any stage. The 98% retention number is because most clients run all four with us across multiple years.",
  },
  {
    q: "What is the cost of an initial conversation?",
    a: "Nothing. The first call is free and we will tell you in that call whether you are a fit for what we do. If you are, we will propose an engagement that fits the scope. If you are not, we will tell you who is and why.",
  },
  {
    q: "What happens if we do not pick a platform you partner with?",
    a: "Then we tell you that, in writing, and you make the call. Our SPIFF arrangements span every major UC, CX and AI provider, so the bias is to recommend the right fit. The two times we have ever recommended a platform we do not partner with, we still ran the procurement for the client because the relationship was worth more than the commission.",
  },
];

const FAQSection = () => (
  <section
    className="relative overflow-hidden pb-0 pt-24"
    style={{ background: "linear-gradient(170deg, hsl(271 88% 18%) 0%, hsl(var(--navy)) 55%, hsl(var(--navy)) 100%)" }}
  >
    <DecorativeCircle color="teal" className="-bottom-24 -right-12 opacity-20" size="h-72 w-72 md:h-96 md:w-96" />
    <DecorativeCircle color="purple" variant="ring" className="-top-20 -left-10 opacity-20" size="h-56 w-56 md:h-72 md:w-72" />
    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,hsl(var(--purple)/0.15),transparent_50%),radial-gradient(ellipse_at_bottom_right,hsl(var(--teal)/0.10),transparent_50%)]" />

    <div className="container relative z-10 max-w-5xl">
      {/* Header */}
      <motion.div
        className="mb-14 grid gap-6 md:grid-cols-[1fr_2fr] md:items-end"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div>
          <p className="mb-3 inline-block rounded-full border border-teal/40 bg-teal/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-teal">
            FAQ
          </p>
          <h2 className="font-display text-3xl font-bold leading-tight text-white md:text-4xl">
            Questions leaders<br />actually ask us.
          </h2>
        </div>
        <p className="text-base leading-relaxed text-white/50 md:text-lg md:pb-1">
          Straight answers for the leaders evaluating enterprise transformation. No sales language.
        </p>
      </motion.div>

      {/* Accordion */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Accordion type="single" collapsible className="flex w-full flex-col divide-y divide-white/10">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="border-none py-1"
            >
              <AccordionTrigger className="group py-5 text-left text-base font-semibold text-white hover:no-underline hover:text-primary [&>svg]:text-white/40 [&>svg]:group-hover:text-primary md:text-lg">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="pb-6 text-sm leading-relaxed text-white/60 md:text-base md:max-w-3xl">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </div>
  </section>
);

export default FAQSection;
