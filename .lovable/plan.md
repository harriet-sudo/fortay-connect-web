
# Fortay Connect — Full Website Redesign

## Design Direction
Clean, minimal, and professional design with generous whitespace, modern typography, and subtle animations. Light background with dark navy/slate text. Teal/green accent color carried over from your brand. Designed to build trust and convert visitors into leads.

---

## Pages & Structure

### 1. Homepage
- **Hero section**: Bold headline focused on business outcomes (revenue, efficiency), short supporting copy, and a prominent "Book a Walkthrough" CTA button (links to external HubSpot calendar)
- **Social proof bar**: Scrolling logos of clients (Dext, Alcumus, INEOS, Aston Villa, etc.) and technology partners (Zoom, RingCentral, GoTo, Dialpad, NICE)
- **"What we do" section**: 3 clean cards — UC, CX, and AI — each with a short description and icon
- **"What makes us different" section**: 3 differentiators (Beyond surface analysis, Strategic neutrality, Deep technical expertise) with clean icons
- **Process overview**: 4-step horizontal timeline (Advisory → Technology Selection → Deployment → Managed Services)
- **Client testimonials**: Rotating testimonial cards with client names and logos
- **CTA banner**: "Find out what your CX stack is costing you" with link to ROI Calculator or contact
- **Latest insights preview**: 3 most recent blog posts with thumbnails

### 2. About Page
- Company story and mission
- Team section with photo, name, role, and short bio (starting with CEO Mark Taylor)
- Company values / approach
- Accreditations and partnerships

### 3. Services Pages (Our Work)
- **Overview page** with cards linking to detailed service descriptions
- Four service areas: CX & AI Advisory, Technology Selection, Deployment Services, Managed Services
- Each with clear problem/solution framing and a CTA

### 4. Case Studies Page
- Grid of case study cards with client logo, industry tag, headline, and short summary
- Individual case study detail pages with challenge/solution/results format

### 5. Blog / Insights Page
- Clean blog listing with categories/tags, thumbnail images, dates, and excerpts
- Individual blog post pages with clean reading layout
- Backend: Supabase database to store and manage blog posts (title, content, author, date, tags, featured image URL)

### 6. Contact Page
- Contact form (name, email, company, message) with validation
- "Book a Walkthrough" CTA linking to external HubSpot calendar
- Company details (location, email)
- Form submissions stored in Supabase

---

## Interactive Tools

### 7. AI & CX Readiness Assessment (Quiz)
- Multi-step interactive questionnaire (5-7 questions) about the visitor's current comms setup, pain points, and AI readiness
- Questions cover: current platform, number of users, biggest challenges, AI adoption stage, customer experience priorities
- Results page with a readiness score and personalised recommendations
- CTA to book a walkthrough based on results
- Submissions stored in Supabase for lead capture (email collected before showing results)

### 8. ROI Calculator
- Interactive calculator where visitors input: number of agents/users, current monthly cost, number of platforms in use, estimated time spent on manual processes
- Calculates estimated savings and efficiency gains from consolidation and AI adoption
- Visual output with charts showing potential savings
- CTA to "Get a detailed audit" with lead capture
- Results stored in Supabase

---

## Backend (Supabase — Lovable Cloud)
- **Blog posts table**: title, slug, content, excerpt, author, published_at, tags, featured_image_url, status (draft/published)
- **Contact submissions table**: name, email, company, message, created_at
- **Assessment results table**: email, company, answers (JSON), score, created_at
- **ROI calculations table**: email, inputs (JSON), results (JSON), created_at

---

## Navigation
- Sticky top navigation: Logo | Home | About | Services (dropdown) | Case Studies | Insights | Contact
- Mobile: hamburger menu
- Persistent "Book a Walkthrough" button in the nav (accent color)

---

## Key UX Details
- Smooth scroll animations on section entry
- Responsive design (mobile-first)
- All external booking links open HubSpot calendar in new tab
- FAQ section with accordion on homepage
- Lead capture integrated into assessment and calculator tools before showing results
