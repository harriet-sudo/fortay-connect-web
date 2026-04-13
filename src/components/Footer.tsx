import Link from "next/link";
const logo = "/assets/logo.png";
const certsStrip = "/assets/certs-strip.png";
const zoomLogo = "/assets/logos/zoom.png";
const ringcentralLogo = "/assets/logos/ringcentral.png";
const gotoLogo = "/assets/logos/goto.png";
const dialpadLogo = "/assets/logos/dialpad.png";
const niceLogo = "/assets/logos/nice.png";
const msTeamsLogo = "/assets/logos/ms-teams.svg";

const BOOKING_URL = "https://meetings.hubspot.com/fortayconnect";

const Footer = () => (
  <footer className="bg-foreground text-background">
    <div className="container py-16">
      <div className="grid gap-12 md:grid-cols-4">
        <div className="md:col-span-1">
          <img src={logo} alt="Fortay Connect" className="h-8 w-auto brightness-0 invert" />
          <p className="mt-4 text-sm text-background/60">
            Specialist AI & CX consultancy helping businesses transform their customer experience and communications.
          </p>
        </div>

        <div>
          <h4 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-background/40">Services</h4>
          <ul className="space-y-2 text-sm text-background/60">
            <li><Link href="/services/cx-ai-advisory" className="hover:text-primary transition-colors">CX & AI Advisory</Link></li>
            <li><Link href="/services/technology-selection" className="hover:text-primary transition-colors">Technology Selection</Link></li>
            <li><Link href="/services/deployment" className="hover:text-primary transition-colors">Deployment Services</Link></li>
            <li><Link href="/services/managed-services" className="hover:text-primary transition-colors">Managed Services</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-background/40">Industries</h4>
          <ul className="space-y-2 text-sm text-background/60">
            <li><Link href="/industries/financial-services" className="hover:text-primary transition-colors">Financial Services</Link></li>
            <li><Link href="/industries/retail" className="hover:text-primary transition-colors">Retail</Link></li>
            <li><Link href="/industries/manufacturing" className="hover:text-primary transition-colors">Manufacturing</Link></li>
            <li><Link href="/industries/legal" className="hover:text-primary transition-colors">Legal</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-background/40">Company</h4>
          <ul className="space-y-2 text-sm text-background/60">
            <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
            <li><Link href="/case-studies" className="hover:text-primary transition-colors">Case Studies</Link></li>
            <li><Link href="/insights" className="hover:text-primary transition-colors">Insights</Link></li>
            <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            <li><Link href="/careers" className="hover:text-primary transition-colors">Careers</Link></li>
            
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-background/40">Tools</h4>
          <ul className="space-y-2 text-sm text-background/60">
            <li><Link href="/assessment" className="hover:text-primary transition-colors">CX Readiness Assessment</Link></li>
            <li><Link href="/roi-calculator" className="hover:text-primary transition-colors">ROI Calculator</Link></li>
            <li><a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Book a Walkthrough</a></li>
            <li><Link href="/glossary" className="hover:text-primary transition-colors">Glossary</Link></li>
          </ul>
        </div>
      </div>

      {/* Certifications strip */}
      <div className="mt-12 border-t border-background/10 pt-10">
        <p className="mb-5 text-center text-xs font-semibold uppercase tracking-widest text-background/30">
          Our Certifications &amp; Partner Accreditations
        </p>
        <div className="flex items-center justify-center">
          <img
            src={certsStrip}
            alt="Zoom Platinum Partner, Dialpad Certified Deployment Partner, Avaya Cloud Office Certified Delivery Partner, RingCentral Certified Delivery Partner"
            className="max-h-28 w-full max-w-3xl object-contain"
          />
        </div>
      </div>

      {/* Partner logo strip */}
      <div className="mt-10 border-t border-background/10 pt-8">
        <p className="mb-5 text-center text-xs font-semibold uppercase tracking-widest text-background/30">
          Certified Partner — Technology Alliances
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8">
          {[
            { src: zoomLogo, alt: "Zoom" },
            { src: ringcentralLogo, alt: "RingCentral" },
            { src: gotoLogo, alt: "GoTo" },
            { src: dialpadLogo, alt: "Dialpad" },
            { src: niceLogo, alt: "NICE" },
            { src: msTeamsLogo, alt: "Microsoft Teams" },
          ].map(({ src, alt }) => (
            <img
              key={alt}
              src={src}
              alt={alt}
              className="h-6 w-auto opacity-30 brightness-0 invert transition-opacity hover:opacity-60"
            />
          ))}
        </div>
        <div className="mt-8 text-center text-sm text-background/40">
          © {new Date().getFullYear()} Fortay Connect. All rights reserved.
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
