import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowLeft, Building2, Calendar, Quote, Tag, CheckCircle2 } from "lucide-react";
import { getCaseStudy } from "@/data/caseStudies";
import DecorativeCircle from "@/components/DecorativeCircle";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

const Section = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="space-y-3">
    <h3 className="font-display text-lg font-bold text-foreground">{label}</h3>
    <p className="leading-relaxed text-muted-foreground">{children}</p>
  </motion.div>
);

const CaseStudyDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const cs = getCaseStudy(slug ?? "");

  useEffect(() => {
    if (!cs) navigate("/case-studies", { replace: true });
  }, [cs, navigate]);

  if (!cs) return null;

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-foreground py-24">
          <DecorativeCircle color="teal" variant="ring" className="-top-20 -right-16 opacity-20" size="h-72 w-72" />
          <DecorativeCircle color="purple" variant="disc" className="-bottom-20 -left-10 opacity-10" size="h-60 w-60" />
          <div className="container relative z-10">
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <Link to="/case-studies" className="mb-8 inline-flex items-center gap-2 text-sm text-background/50 transition-colors hover:text-primary">
                <ArrowLeft className="h-4 w-4" /> Back to Case Studies
              </Link>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
              className="max-w-3xl space-y-5"
            >
              {/* Tags */}
              <motion.div variants={fadeUp} className="flex flex-wrap gap-2">
                {cs.tags.map(tag => (
                  <span key={tag} className="inline-flex items-center gap-1 rounded-full border border-background/20 bg-background/10 px-3 py-0.5 text-xs font-medium text-background/70">
                    <Tag className="h-3 w-3" /> {tag}
                  </span>
                ))}
              </motion.div>

              <motion.h1 variants={fadeUp} className="font-display text-3xl font-extrabold leading-tight text-background md:text-4xl lg:text-5xl">
                {cs.headline}
              </motion.h1>

              <motion.p variants={fadeUp} className="text-lg text-background/60">
                {cs.summary}
              </motion.p>

              {/* Meta pills */}
              <motion.div variants={fadeUp} className="flex flex-wrap gap-4 pt-2">
                <div className="flex items-center gap-2 rounded-full border border-background/20 bg-background/10 px-4 py-2 text-sm text-background/70">
                  <Building2 className="h-4 w-4 text-primary" />
                  <span className="font-semibold text-background">{cs.client}</span>
                </div>
                <div className="flex items-center gap-2 rounded-full border border-background/20 bg-background/10 px-4 py-2 text-sm text-background/70">
                  <Calendar className="h-4 w-4 text-primary" />
                  {cs.date}
                </div>
                <div className="flex items-center gap-2 rounded-full border border-primary/30 bg-primary/15 px-4 py-2 text-sm font-semibold text-primary">
                  {cs.partner}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Body */}
        <section className="bg-background py-20">
          <div className="container">
            <div className="mx-auto max-w-3xl space-y-14">

              {/* About */}
              <Section label={`About ${cs.client}`}>{cs.about}</Section>

              {/* Challenge */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="space-y-3">
                <h3 className="font-display text-lg font-bold text-foreground">The Challenge</h3>
                <div className="rounded-2xl border border-purple/20 bg-[hsl(var(--purple)/0.06)] p-6">
                  <p className="leading-relaxed text-muted-foreground">{cs.challenge}</p>
                </div>
              </motion.div>

              {/* Solution */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="space-y-3">
                <h3 className="font-display text-lg font-bold text-foreground">The Solution</h3>
                <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6">
                  <p className="leading-relaxed text-muted-foreground">{cs.solution}</p>
                </div>
              </motion.div>

              {/* Results */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="space-y-3">
                <h3 className="font-display text-lg font-bold text-foreground">The Results</h3>
                <p className="leading-relaxed text-muted-foreground">{cs.results}</p>
              </motion.div>

              {/* Testimonial */}
              {cs.testimonial && (
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                  <blockquote className="relative rounded-2xl border border-border/40 bg-muted/50 p-8">
                    <Quote className="mb-4 h-8 w-8 text-primary/30" />
                    <p className="text-lg font-medium leading-relaxed text-foreground">"{cs.testimonial}"</p>
                    {cs.testimonialAuthor && (
                      <footer className="mt-4 text-sm font-semibold text-primary">{cs.testimonialAuthor}</footer>
                    )}
                  </blockquote>
                </motion.div>
              )}

              {/* CTA */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="rounded-2xl border border-primary/20 bg-primary/5 p-8 text-center"
              >
                <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">Ready to transform?</p>
                <h3 className="mb-4 font-display text-2xl font-bold text-foreground">Let's discuss your requirements</h3>
                <div className="flex flex-wrap justify-center gap-3">
                  <a
                    href="https://meetings.hubspot.com/fortayconnect"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/30 transition-all hover:brightness-110"
                  >
                    Book a Strategy Call
                  </a>
                  <Link
                    to="/case-studies"
                    className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-2.5 text-sm font-semibold text-foreground transition-all hover:bg-muted"
                  >
                    <ArrowLeft className="h-4 w-4" /> More Case Studies
                  </Link>
                </div>
              </motion.div>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default CaseStudyDetail;
