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
    a: "Mid-market and enterprise organisations across the UK — typically 50 to 5,000+ employees. We specialise in financial services, manufacturing, retail, professional services, and sport. If you're evaluating or modernising your communications stack, we'll know your landscape.",
  },
  {
    q: "Are you tied to any specific technology vendors?",
    a: "No. We're proudly vendor-neutral. We evaluate all leading UC, CX, and AI platforms on merit and recommend what's right for your organisation — not what earns us the best margin.",
  },
  {
    q: "How quickly can you mobilise, and what does a typical engagement look like?",
    a: "Advisory and technology selection typically runs 2–4 weeks. Full deployment programmes span 3–6 months depending on scope and complexity. You'll get a clear timeline and milestones before any work begins.",
  },
  {
    q: "Do you cover strategy, vendor selection, and implementation — or just one?",
    a: "End-to-end. From initial discovery and business case through vendor selection, commercial negotiation, deployment, and ongoing managed services. You can engage us at any stage.",
  },
  {
    q: "What's the cost of an initial consultation?",
    a: "The first conversation is free. We'll listen, assess, and be straight with you about whether and how we can add value. If there's a fit, we'll propose an engagement model that's proportionate to your challenge.",
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
          Straight answers for COOs, CIOs, and CTOs evaluating communications transformation. No sales language.
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
