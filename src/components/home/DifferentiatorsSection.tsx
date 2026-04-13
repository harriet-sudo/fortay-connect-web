import { motion } from "framer-motion";
import { ShieldCheck, Scale, FlaskConical, Clock, MapPin, Puzzle } from "lucide-react";
import DecorativeCircle from "@/components/DecorativeCircle";

const cards = [
  { metric: "98%",       title: "Client Retention",            tag: "Measured beyond go-live.",    icon: ShieldCheck,  color: "teal" },
  { metric: "100%",      title: "Architecturally Independent", tag: "No vendor allegiance.",        icon: Scale,        color: "purple" },
  { metric: "Validated", title: "Stress-Tested Everything",    tag: "Proven capability only.",      icon: FlaskConical, color: "teal" },
  { metric: "30+",       title: "Years CX & Transformation",   tag: "Enterprise scale.",            icon: Clock,        color: "purple" },
  { metric: "UK‑Based",  title: "Accessible & Accountable",    tag: "No offshore hand-offs.",       icon: MapPin,       color: "teal" },
  { metric: "Free",      title: "Proof of Concept",            tag: "Risk-reversed commitment.",    icon: Puzzle,       color: "purple" },
];

const DifferentiatorsSection = () => (
  <section className="relative overflow-hidden bg-muted py-20">
    <DecorativeCircle color="purple" variant="ring" className="-bottom-20 -right-10 opacity-20" size="h-40 w-40 md:h-56 md:w-56" />
    <DecorativeCircle color="teal" variant="disc" className="-top-16 -left-10 opacity-10" size="h-40 w-40 md:h-56 md:w-56" />

    <div className="container relative z-10">
      <motion.div
        className="mx-auto mb-12 max-w-2xl text-center"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="mb-3 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-widest text-primary">
          Why Fortay Connect
        </p>
        <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
          Structural Authority.{" "}
          <span className="font-medium text-foreground/40">Measurable Accountability.</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
        {cards.map((card, i) => {
          const Icon = card.icon;
          const isTeal = card.color === "teal";
          return (
            <motion.div
              key={card.title}
              className={`group flex flex-col rounded-2xl border px-5 py-7 transition-all duration-200 hover:scale-[1.02] ${
                isTeal
                  ? "border-primary/20 bg-primary/10 hover:bg-primary/15"
                  : "border-purple/20 bg-purple/10 hover:bg-purple/15"
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <Icon
                className={`mb-4 h-8 w-8 ${isTeal ? "text-primary" : "text-purple"}`}
                strokeWidth={1.5}
              />
              <span className={`font-display text-4xl font-black leading-none tracking-tight ${isTeal ? "text-primary" : "text-purple"}`}>
                {card.metric}
              </span>
              <h3 className="mt-3 text-sm font-bold leading-snug text-foreground">
                {card.title}
              </h3>
              <span className="mt-1.5 text-xs text-muted-foreground">{card.tag}</span>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default DifferentiatorsSection;
