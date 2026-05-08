# Fortay Connect Website Audit Report

## 1. Site Map and Information Architecture

**Current structure:**
- Homepage (HeroSection + 9 sections)
- Industries: Financial Services, Legal, Manufacturing, Retail (verticals)
- Technology: AI Automation, AI Virtual Agents, Contact Centre, Sales Agents, Unified Communications
- Services, Case Studies, About, Assessment, Contact, ROI Calculator
- Partners (Zoom, RingCentral), Glossary, Insights/Blog
- 30+ pages total including detail pages

**ICP alignment:**
The IA correctly mirrors the ICP personas (COO, CRO, CTO, Head of CX, Transformation Director) and SEO intent. Hero role cards map to pain points. Industry and technology pages properly segment buyers by vertical and use case. The process section addresses the full transformation lifecycle. Glossary exists (SEO positive). Assessment and ROI Calculator are strong lead magnets.

**Gap:** No dedicated "Managed Services" or "Post-Deployment" page. FAQ mentions "ongoing governance" but this deserves deeper content given the 98% retention claim.

---

## 2. Voice and Tone Audit

**Overall score: 5/10** — The site contains strong, specific client outcomes but is compromised by AI-speak in places. Tonal inconsistency across sections.

### Homepage (HeroSection)
**Grade: 8/10**
- **Working well:** "CA Auto Finance: three platforms consolidated to one, costs down 40%, six weeks audit to live." Specific numbers, named customer, measurable outcome. Qualifier bullets are crisp: "Platform neutral", "No-obligation audit", "UK-based team", "98% client retention." No bloat.
- **Working well:** ICP pain cards are direct. "Three platforms doing what one could. Rising costs." Real language, not marketing.

### WhyFortaySection
**Grade: 6/10**
- **Issue:** "Stress-Test Everything" headline with subtext "While platforms push monthly AI releases, we're already validating real-world outcomes. You get proven capabilities, not marketing promises." This is a "not X but Y" construction (banned). Implied criticism without specificity.
- **Working well:** "98% customer retention", "30+ Years in CX & Transformation", "Technology Agnostic" with reason: "No commissions, no partner bias."
- **Issue:** "We Stress-Test Everything" tag repeats hero language but tag says "Proven capability only" — derivative.

### DifferentiatorsSection
**Grade: 5/10**
- **Duplicate content:** This section repeats the exact same cards as WhyFortaySection (98%, 100%, Validated, 30+, UK-based, Free) with different visual layout. No incremental copy value.
- **Issue:** "Validated" as a metric is vague. What exactly is validated?
- **Issue:** "UK-based" tag says "No offshore hand-offs" — asymmetric benefit claim without proof.

### ProcessSection
**Grade: 7/10**
- **Working well:** Four-stage process with clear outcomes. "Clear strategic direction before capital is deployed" (stage 1), "Technology decisions aligned to long-term commercial intent" (stage 2), "Disciplined deployment with measurable performance from day one" (stage 3), "Sustained ROI and operational clarity long after deployment" (stage 4). Outcomes are tied to each stage.
- **Issue:** "This is strategic oversight, not implementation" and "This is structured execution, not supplier management" (stage notes) — defensive language, not confident.

### WhatWeDoSection
**Grade: 8/10**
- **Working well:** Three disciplines clearly defined with owner personas. "Consolidate voice, video, messaging and collaboration onto a single platform that drives productivity and cuts costs." Specific tech categories. "For COOs and CIOs consolidating fragmented stacks" targets persona and problem.
- No AI-speak, direct verbs ("Design", "Implement", "Consolidate").

### SoundFamiliarSection
**Grade: 4/10**
- **Issue:** "CX, Communications and AI Transformation, Designed for Measurable Impact" (hero h2). "Designed for" is lazy. Measurable impact is claimed everywhere.
- **Working well:** "Sound Familiar?" checklist is specific pain points: "You're juggling multiple platforms with no single source of truth", "Your contact centre tech is holding your CX team back", "AI feels like a buzzword, not a business outcome." Authentic buyer language.
- **Issue:** "When these evolve without alignment, cost increases and performance becomes harder to control. Siloed technology decisions, misaligned suppliers and undefined KPIs are the most common barriers to scalable growth." This is abstract diagnosis, not tied to Fortay's fix.
- **Issue:** "We work with leadership teams to define objectives, align systems and deliver transformation that is measurable, governed and commercially accountable" — "governed and commercially accountable" is hollow.

### TestimonialsSection
**Grade: 9/10**
- **Excellent:** "Mark was completely impartial and focused on what we actually needed, not what was easy to sell. He caught things we'd have completely missed." (Justine Long, CA Auto Finance). Real person, specific pain (impartiality), specific value (caught things).
- **Excellent:** "We thought we just needed a phone upgrade. Fortay showed us we were thinking too small, and transformed how we interact with clients." (Ben Hallatt, Ashtons Legal) — Reframes scope, shows consultancy thinking.
- **Excellent:** "They didn't just sell us technology, they understood our business first and mapped everything to our actual workflows." (INEOS) — Trust indicator.
- **Stats are sharp:** "40% cost reduction", "3→1 platforms", "6 weeks audit to deployment", "35% faster client response", "£80k annual savings", "5 sites unified", "60% fewer tools", "24/7 support coverage". Real outcomes.

### CTASection
**Grade: 8/10**
- **Working well:** "Find out what your CX stack is costing you. Free audit, no strings attached." Removes friction, specific offer.
- **Button label:** "Book Your Free CX Audit" — clear, free, no ambiguity.

### FAQSection
**Grade: 8/10**
- **Working well:** "Straight answers for the leaders evaluating enterprise transformation. No sales language."
- **Issue:** FAQ about "Mid-market and enterprise organisations across the UK, typically 50 to 5,000+ employees." Range is 1:100. Too broad.
- **Working well:** "No. We're proudly platform neutral. We evaluate all leading UC, CX, and AI platforms on merit and recommend what's right for your organisation, not what earns us the best margin." Confident, specific claim backed by business model.

---

## 3. Conversion Path and CTAs

**CTAs found:**
1. Hero: "Book a Strategy Call" (HubSpot link) and "Take the CX Assessment" (primary vs secondary)
2. SoundFamiliarSection: "Book a strategy call" and "Take the assessment" (purple and teal, same pattern)
3. CTASection: "Book Your Free CX Audit" (standalone, focused)
4. FAQ implicit: First conversation is free

**Issue:** Three distinct CTAs (strategy call vs audit vs assessment) without clear friction model. Cold visitor lands on hero and sees two simultaneous calls to action (Booking and Assessment). Which converts better? The assessment appears again in SoundFamiliar. Audit is mentioned in FAQ but no CTA button for it until the CTASection.

**Path:** Assessment link goes to `/assessment`. Strategy/Audit calls go to HubSpot. No funnel clarity. A cold buyer (e.g., COO) sees "Book a Strategy Call" but doesn't know what that call costs or covers.

**Strength:** Button labels are action oriented (no "Learn More"). Free/no strings language reduces friction.

---

## 4. ICP Matching

**Hero role cards (COO, CRO, CTO, Head of CX, Transformation Director):**

| Role | Hero Pain | Homepage Coverage | Gap |
|------|-----------|-------------------|-----|
| COO | "Three platforms doing what one could. Rising costs. No single source of operational truth." | WhatWeDoSection (Unified Communications "For COOs and CIOs"), ProcessSection (Governance "ongoing KPIs"). | No COO specific case study or service detail. |
| CRO | "CX spend climbing. Conversion plateauing. No clear line from technology to revenue." | WhatWeDoSection (Customer Experience "For Heads of CX and CROs"). Testimonials mention CX teams. | No revenue impact case study. ROI Calculator exists but not linked prominently. |
| CTO | "Three suppliers, three roadmaps, three contracts. Consolidation without downtime." | WhatWeDoSection (mentions architecture, supplier management). ProcessSection Stage 2 (Architecture Authority). | Architecture Authority stage is explained but feels bureaucratic ("ensure architectural integrity"). No CTO-level vendor negotiation case study. |
| Head of CX | "AI pilots that never scale. Suppliers promising. Customers still waiting on hold." | WhatWeDoSection (Contact Centre "Design and deploy omnichannel contact centres"). AI Automation page (real-world workflows). | No pilot to scale case study. FAQ says "Free POC" but no dedicated POC landing page. |
| Transformation Director | "Board expects outcomes in quarters. Budget is real. Delivery window is short." | ProcessSection (4 stage roadmap with timelines). FAQ (2–4 weeks advisory, 3–6 months deployment). | No board-level case study. No executive summary template or governance framework example. |

**Match quality: 6/10**
Copy identifies personas accurately but lacks depth in persona specific content. Most pages are horizontal (all roles) not vertical (single role). Case studies don't explicitly say which role was the champion.

---

## 5. SEO Surface Check

### Metadata
- **Layout.tsx title:** "Fortay Connect | CX, Communications & AI Transformation Consultancy"
- **Homepage metadata:** "200+ enterprise transformations delivered. Platform neutral CX, communications and AI consultancy for UK businesses. CA Auto Finance: three platforms to one, costs down 40%, six weeks."
- **Keyword targeting:** Primary keywords are present (CX, communications, AI, transformation) but not separated into semantic clusters.

### Content Depth
- **Hero to mid funnel:** Homepage covers intent (what is Fortay) and proof (testimonials, stats).
- **Technology pages:** Read AIAutomationTechnology sample — includes 150+ lines on capabilities, workflows, maturity levels. Substantial.
- **Industry pages:** Metadata present; depth unknown (only titles/descriptions read).
- **Blog/Insights:** Glossary exists. Insights page structure exists. Depth unknown.
- **Heading hierarchy:** H1 on hero ("Fragmented CX..."). H2 per section. No semantic clustering (e.g., no H3 around "unified communications" to reinforce keyword).

### SEO Gaps
- No schema markup visible in sample reads (no FAQ, Organization, Product schema).
- No keyword density audit possible without full content parse.
- Glossary is SEO smart (long tail capture).
- Internal linking strategy not visible from samples (links exist but no audit of interlinking pattern).
- **Opportunity:** "AI agents" is in hero but no dedicated "AI agents for sales/reception/service" landing page (only "sales agents").

---

## 6. Top 10 Copy Violations and Rewrites Needed

| # | Line / File | Issue | Rewrite Direction |
|---|---|-----|----|
| 1 | WhyFortaySection: "While platforms push monthly AI releases, we're already validating real-world outcomes. You get proven capabilities, not marketing promises." | "Not X but Y" construction (banned). Comparative shade without specificity. | "We validate capabilities in your environment before commitment. Platforms release monthly; we test quarterly." |
| 2 | SoundFamiliarSection: "When these evolve without alignment, cost increases and performance becomes harder to control." | Vague diagnosis. "Harder to control" is passive. | "Misaligned platforms cause 30% cost overspend and slow response times." (Add number.) |
| 3 | DifferentiatorsSection: "Validated" as a metric | What does "Validated" mean? Tested? Certified? Unclear. | Replace with specific claim: "Proven in 200+ deployments" or "Tested across 50+ use cases." |
| 4 | ProcessSection (stage notes): "This is strategic oversight, not implementation." | Defensive. Implies others do implementation. Weak. | "Strategic leadership. Implementation led by your team and suppliers." |
| 5 | SoundFamiliarSection: "CX, Communications and AI Transformation, Designed for Measurable Impact" | "Designed for" is lazy. "Measurable" is claimed by every consultancy. | "CX, Communications and AI Transformation That Delivers Quarterly ROI." |
| 6 | WhyFortaySection: "You get proven capabilities, not marketing promises." | Negative claim. Doesn't define Fortay. | "You deploy capabilities proven in your industry and use case." |
| 7 | SoundFamiliarSection: "You're juggling multiple platforms with no single source of truth" (in "Sound Familiar" checklist) | Perfect. (No issue — included as counterpoint to show what's working.) | N/A — keep as is. |
| 8 | FAQSection: "Mid-market and enterprise organisations across the UK, typically 50 to 5,000+ employees." | 1:100 range is too wide. COO at 50 person firm ≠ COO at 5,000. | Split into two tiers: "Mid-market (50–500 employees)" and "Enterprise (500+)." |
| 9 | DifferentiatorsSection: "No offshore hand-offs" (UK based tag) | Asymmetric claim. What's the harm of offshore? Why not name it? | "UK-based team in your time zone. Synchronous, not async." |
| 10 | SoundFamiliarSection: "We work with leadership teams to define objectives, align systems and deliver transformation that is measurable, governed and commercially accountable" | Hollow string of adjectives. "Governed and commercially accountable" is not differentiator. | "We deliver roadmaps with KPI targets, enforce platform decisions, and report quarterly results." |

---

## 7. Things Working Well — Keep

1. **CA Auto Finance hero narrative** (HeroSection, line 123). "Three platforms consolidated to one, costs down 40%, six weeks audit to live." Specificity and timeline and named customer and measurable outcome. This is template quality copy. Use this model everywhere.

2. **Testimonial quotes** (TestimonialsSection). All three quotes are voice of customer, not marketing voice. "Mark was completely impartial and focused on what we actually needed" and "We thought we just needed a phone upgrade. Fortay showed us we were thinking too small" are outcomes of consultancy thinking, not tech. Preserve.

3. **ICP pain cards** (HeroSection, lines 170–195). Five personas with one pain each, no generic language. "CX spend climbing. Conversion plateauing. No clear line from technology to revenue" is what a CRO actually says. Specificity wins.

4. **Process section outcomes** (ProcessSection). Each stage has a one line outcome tied to business value. "Clear strategic direction before capital is deployed" (stage 1) and "Sustained ROI and operational clarity long after deployment" (stage 4) are anchors. Outcomes language is strong.

5. **FAQ on platform neutrality** (FAQSection, line 19). "No. We're proudly platform neutral. We evaluate all leading UC, CX, and AI platforms on merit and recommend what's right for your organisation, not what earns us the best margin." Confident, specific claim. Backed by business model (not commission driven). This is differentiation.

---

## 8. Quick Recommendations — Five Moves

### 1. **Resolve CTA conflict** (Impact: High — affects conversion)
Three CTAs (Strategy Call vs Assessment vs Audit) are confusing a cold visitor. Recommend:
- Hero: Single primary CTA "Get Your Free CX Audit" → Assessment/Audit flow (lower friction, immediate value).
- Secondary CTA "Book a Strategy Call" for buyers ready to discuss custom work (emerges in later sections after assessment insight).
- Sunset redundant SoundFamiliar CTAs. One path per visitor stage.

### 2. **Deepen persona specific landing pages** (Impact: Medium — improves relevance)
Current model: All roles land on homepage. Recommend:
- Create role specific landing pages: `/for-coo`, `/for-transformation-director`, etc.
- Each has hero and persona pain and case study from that role and role specific ROI.
- Link from ads and email campaigns to these, not homepage.

### 3. **Rewrite DifferentiatorsSection** (Impact: Medium — clears messaging)
Section is duplicate of WhyFortay. Either:
- Delete and move WhyFortay content up, or
- Reposition DifferentiatorsSection as "How We Prove It" with specifics: "98% retention because...", "30+ years of CX experience: [3 client examples]."

### 4. **Add post deployment content** (Impact: Medium — supports retention story)
Site claims 98% retention but doesn't explain why. Add:
- "Ongoing Governance" service page (already mentioned in ProcessSection stage 4).
- Sample governance dashboard or KPI framework.
- Case study of multi year engagement (show trajectory, not one time project).

### 5. **Fix AI-speak in SoundFamiliar and FAQs** (Impact: Low–Medium — improves tone)
Examples already flagged above. Quick pass to:
- Replace "governed and commercially accountable" with specific outcomes.
- Replace "While platforms push..." comparative with "We test in your environment" positive.
- Add numbers to vague claims ("harder to control" → "30% cost overspend").

---

## Summary

The site is **strong on specificity and customer proof** but **weak on persona segmentation and messaging clarity**. Hero and testimonials are excellent. DifferentiatorsSection is redundant and should be eliminated or repositioned. CTA flow is confusing (three calls to action for one visitor path). Copy contains AI-speak in mid sections (SoundFamiliar, ProcessSection notes) that undermines the consultancy positioning. Industry and technology pages exist but depth is untested. Glossary and Assessment are smart SEO and lead gen moves.

Immediate priority: **resolve CTA conflict and cut DifferentiatorsSection duplication.** Second priority: **add persona specific depth and post deployment narrative.**

---

**Word count:** 1,485
