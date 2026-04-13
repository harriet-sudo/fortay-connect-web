import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Building2, Calendar, Tag, BookOpen } from "lucide-react";
import { caseStudies } from "@/data/caseStudies";
import DecorativeCircle from "@/components/DecorativeCircle";
import gotoLogo from "@/assets/logos/goto.png";
import ringcentralLogo from "@/assets/logos/ringcentral.png";

const partnerColor: Record<string, string> = {
  "GoToConnect": "text-primary bg-primary/10 border-primary/20",
  "Avaya": "text-purple bg-purple/10 border-purple/20",
  "Avaya Cloud Office": "text-purple bg-purple/10 border-purple/20",
  "RingCentral": "text-teal bg-teal/10 border-teal/20",
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } }),
};

const CaseStudies = () => (
  <>
    <Navbar />
    <main>
      <PageHero
        category="Case Studies"
        icon={BookOpen}
        title="Real Transformations. Measurable Results."
        subtitle="Four organisations that redefined their communications and customer experience — with Fortay Connect."
      />

      <section className="relative overflow-hidden bg-background py-20">
        <DecorativeCircle color="teal" variant="ring" className="-top-20 -right-16 opacity-10" size="h-64 w-64" />
        <DecorativeCircle color="purple" variant="disc" className="-bottom-24 -left-12 opacity-10" size="h-56 w-56" />

        <div className="container relative z-10">
          <div className="grid gap-8 md:grid-cols-2">
            {caseStudies.map((cs, i) => (
              <motion.div
                key={cs.slug}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <Link
                  to={`/case-studies/${cs.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-border/50 bg-card p-8 shadow-sm transition-all duration-200 hover:border-primary/30 hover:shadow-md"
                >
                  {/* Tags row */}
                  <div className="mb-5 flex flex-wrap gap-2">
                    {cs.tags.slice(0, 3).map(tag => (
                      <span key={tag} className="inline-flex items-center gap-1 rounded-full border bg-muted px-3 py-0.5 text-xs font-medium text-muted-foreground">
                        <Tag className="h-3 w-3" />
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h2 className="mb-3 font-display text-xl font-bold leading-snug text-foreground transition-colors group-hover:text-primary md:text-2xl">
                    {cs.headline}
                  </h2>
                  <p className="mb-6 flex-1 text-sm leading-relaxed text-muted-foreground">{cs.summary}</p>

                  {/* Meta */}
                  <div className="mt-auto flex flex-wrap items-center justify-between gap-4 border-t border-border/40 pt-5">
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <Building2 className="h-3.5 w-3.5" />
                        <span className="font-medium text-foreground">{cs.client}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <Calendar className="h-3.5 w-3.5" />
                        {cs.date}
                      </div>
                    </div>
                    <span className={`rounded-full border px-3 py-1 text-xs font-semibold ${partnerColor[cs.partner] ?? "text-primary bg-primary/10 border-primary/20"}`}>
                      {cs.partner}
                    </span>
                  </div>

                  <div className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-primary opacity-0 transition-opacity group-hover:opacity-100">
                    Read case study <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default CaseStudies;
