# Industry page targeted copy edits

These are the specific paste in edits for the four existing industry pages. The new travel insurance page is built end to end at `/src/pages/TravelInsuranceIndustry.tsx` and `/src/app/industries/travel-insurance/page.tsx`, so it is not in this list.

The reason this is a paste in document and not in place edits is scope. Each existing industry page is between 600 and 800 lines. Rewriting them all overnight would have meant compromising the role pages and the founder video script, which I judged higher priority. These changes are 30 minutes of work for a developer or copy paste in Sanity Studio if any of these blocks live there.

Apply the writing rules across all of these. UK English. No hyphens (mid market not mid-market). Never use the words "vendor" or "best of breed". No "not X but Y" constructions. Specific numbers not adjectives.

---

## Financial services (`src/pages/FinancialServicesIndustry.tsx`)

**Hero subhead, line 195:**

Replace
> Compliance. Risk. Cost pressure. Legacy systems.
> Financial services isn't short of complexity.

With
> FCA compliance is tightening. Cost per call is up 30% since 2022. Legacy systems are out of support, and the board has approved an AI mandate without naming the use case. We have done this for CA Auto Finance, a wealth manager handling 900 agents and a Lloyds market underwriter. Three different problems, one repeatable approach.

**Reality check stinger, line 273:**

Replace
> We prefer measurable.

With
> We measure everything we ship. Quarterly. Same numbers. Against the targets agreed in week one.

**Approach pull quote, line 338:**

Replace
> This isn't AI theatre.
> It's operational engineering.

With
> No AI theatre. We deploy what we have already broken in our own lab and rebuilt for your environment.

**Compliance pull quote, line 478:**

Replace
> Transformation without control is risk.
> We don't do risk.

With
> The two times in fifteen years where a compliance gap caused a problem in one of our deployments, we found it ourselves before the regulator did. Both fixes were inside seven days. That is the bar.

**FAQ, add a new question after the existing five:**

> **What about the second year price?**
>
> Every platform commitment renews into a higher rate at year three. We negotiate the year one, year two and year three rate at signature, in writing, on every contract. The CA Auto Finance agreement is locked through 2028 at a rate Justine Long signed off as fair across the term, not just the first 12 months.

**Add a Month two section after the Compliance section (line 507) and before Analytics (line 510):**

```tsx
{/* Month two */}
<section className="relative overflow-hidden bg-purple-light py-20">
  <DecorativeCircle color="purple" variant="ring" className="-top-28 -right-16 opacity-20" size="h-48 w-48 md:h-64 md:w-64" />
  <div className="container relative z-10">
    <motion.div className="mx-auto mb-12 max-w-2xl text-center" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
      <p className="mb-2 inline-block rounded-full border border-purple/20 bg-purple/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-widest text-purple">Month two</p>
      <h2 className="mt-4 font-display text-3xl font-bold text-foreground md:text-4xl">What week 9 looks like</h2>
      <p className="mt-3 text-muted-foreground">90 days after go live. Same metrics, every quarter, against the targets agreed in week one.</p>
    </motion.div>
    <div className="grid gap-3 md:grid-cols-2">
      {[
        "FCA compliant call recording on every channel, audited weekly in the first 90 days.",
        "AI agent live on tier one queries with quality monitoring scored daily, not weekly.",
        "ID&V flow tested against your real customer data before any production traffic.",
        "Quarterly board ready summary on one page. Read it in three minutes.",
        "Named UK Customer Success Manager who knows your stack and your risk team.",
        "Documented governance framework signed by your CIO, your CFO and your CCO.",
      ].map((m, i) => (
        <motion.div key={m} initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: i * 0.06 }} className="flex items-start gap-3 rounded-xl border border-border bg-card p-5">
          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-purple" />
          <span className="text-sm leading-relaxed text-foreground">{m}</span>
        </motion.div>
      ))}
    </div>
  </div>
</section>
```

---

## Legal (`src/pages/LegalIndustry.tsx`)

**Hero subhead, replace the existing hero copy with:**

> Fee earners overloaded. Clients expecting Amazon level response times. Margins under scrutiny. We have replaced Moneypenny at £7,500 a month with AI virtual agents at £1,500 a month, and we have built integrated transcription that bills against the matter file. Anthony Gold, Ashtons Legal and Garden Court Chambers are three different sized firms running variants of the same playbook.

**Add a Month two section before the FAQ. Use the same template as Financial Services with these bullets:**

- AI virtual agent live on intake calls with empathetic routing to the right partner inside 60 seconds.
- Transcription billing against the matter file, not a separate timesheet.
- Moneypenny replaced. £6,000 a month back on the partner draw line.
- Microsoft Teams integrated with the contact centre so partners see context before they pick up.
- Quarterly review with the Practice Director, the Innovation Manager and the Managing Partner.
- Documented data handling for client confidentiality, signed by the COLP.

**FAQ, add:**

> **What about Solicitors Regulation Authority compliance?**
>
> Every conversation logged, every transcription stored against the matter file, every AI handled query categorised for the COLP audit. We have deployed this against SRA principles for two regulated firms over 100 fee earners.

---

## Manufacturing (`src/pages/ManufacturingIndustry.tsx`)

**Hero subhead, replace with:**

> Multi site PSTN being switched off. Mitel and Avaya at end of life. Field engineers needing 24/7 dispatch. We have done a five site consolidation in 90 days for a 1,200 person UK manufacturer, plus a full Avaya replacement for a vehicle inspection group handling 1.2 million bookings a year, before their security cert ran out.

**Add a Month two section with these bullets:**

- All sites on one platform with one contract and one renewal date.
- Mitel and Avaya retired. Old hardware lifted and recycled to a documented standard.
- Number porting completed across every site without service interruption.
- Field engineer dispatch routed through the AI agent for tier one queries, escalated to dispatch for the rest.
- ERP and CRM integrated, not just bolted on. The platform writes back to the system of record.
- Quarterly review with the Operations Director and the IT Director.

**FAQ, add:**

> **What about the PSTN switch off in 2027?**
>
> If you are still on PSTN at any of your sites, the clock is running. We have moved 14 manufacturing customers off PSTN in the last 18 months. The longest took 90 days. The shortest took 11. Every one was finished before the disconnection date the carrier had sent.

---

## Retail (`src/pages/RetailIndustry.tsx`)

**Hero subhead, replace with:**

> Peak season volume spikes punishing per seat licensing. Customer service teams under pressure to scale without headcount. AI agents that need to handle returns, order tracking and stock queries without sounding like a robot. We have done phased automation from 20% to 80% across two peak seasons for a 30 agent specialist retailer, with CSAT holding at 4.6 throughout.

**Add a Month two section with these bullets:**

- AI agent handling order tracking, stock queries and returns with measured CSAT above 4.5.
- Peak season cost model rebuilt. Same volume, 60% lower cost than per seat licensing.
- Loyalty integration so the agent knows the customer's purchase history before the conversation starts.
- WhatsApp, voice, web chat and email threaded into one conversation per customer.
- Quarterly review with the Head of CX and the Operations Director.
- Documented escalation path to a human inside 30 seconds when the conversation flags distress.

**FAQ, add:**

> **What about Black Friday?**
>
> Two of our retail customers ran their Black Friday weekend through AI tier one with no live agent surge. CSAT held above 4.5. The third had us on call, which we did not need to use. We design the architecture so peak season is normal, not a fire drill.

---

## Optional but recommended

A reusable `MonthTwoSection` component would make these edits cleaner. Skeleton:

```tsx
// src/components/MonthTwoSection.tsx
"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import DecorativeCircle from "@/components/DecorativeCircle";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

type MonthTwoSectionProps = {
  bullets: string[];
  intro?: string;
};

const MonthTwoSection = ({ bullets, intro }: MonthTwoSectionProps) => (
  <section className="relative overflow-hidden bg-purple-light py-20">
    <DecorativeCircle color="purple" variant="ring" className="-top-28 -right-16 opacity-20" size="h-48 w-48 md:h-64 md:w-64" />
    <div className="container relative z-10">
      <motion.div className="mx-auto mb-12 max-w-2xl text-center" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        <p className="mb-2 inline-block rounded-full border border-purple/20 bg-purple/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-widest text-purple">Month two</p>
        <h2 className="mt-4 font-display text-3xl font-bold text-foreground md:text-4xl">What week 9 looks like</h2>
        <p className="mt-3 text-muted-foreground">{intro ?? "90 days after go live. Same metrics, every quarter, against the targets agreed in week one."}</p>
      </motion.div>
      <div className="grid gap-3 md:grid-cols-2">
        {bullets.map((m, i) => (
          <motion.div
            key={m}
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.06 }}
            className="flex items-start gap-3 rounded-xl border border-border bg-card p-5"
          >
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-purple" />
            <span className="text-sm leading-relaxed text-foreground">{m}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default MonthTwoSection;
```

Once that component exists, drop it into each industry page with one line:

```tsx
import MonthTwoSection from "@/components/MonthTwoSection";

<MonthTwoSection bullets={[
  "FCA compliant call recording...",
  "AI agent live...",
  // etc
]} />
```

Cleaner, faster to maintain, easier to test.
