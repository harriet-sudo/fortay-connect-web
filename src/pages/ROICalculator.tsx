"use client";

import { motion } from "framer-motion";

const ROICalculator = () => (
  <>
    <main className="py-24">
      <div className="container">
        <motion.div className="mx-auto max-w-2xl text-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">Free tool</p>
          <h1 className="font-display text-4xl font-bold text-foreground md:text-5xl">ROI Calculator</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            See how much you could save by consolidating your UC & CX platforms and introducing AI automation.
          </p>
          <div className="mt-10">
            <p className="text-muted-foreground">Coming soon — the interactive calculator is being built.</p>
          </div>
        </motion.div>
      </div>
    </main>
  </>
);

export default ROICalculator;
