"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
const logo = "/assets/logo.png";

const navLinks = [
{
  label: "What we do",
  to: "/services",
  children: [
    { label: "CX & AI Advisory", to: "/services/cx-ai-advisory" },
    { label: "Technology Selection", to: "/services/technology-selection" },
    { label: "Deployment Services", to: "/services/deployment" },
    { label: "Managed Services", to: "/services/managed-services" },
  ],
},
{
  label: "Technology",
  to: "/technology",
  children: [
    { label: "AI Virtual Agents", to: "/technology/ai-virtual-agents" },
    { label: "Contact Centre", to: "/technology/contact-centre" },
    { label: "AI & Automation", to: "/technology/ai-automation" },
    { label: "Sales Agents", to: "/technology/sales-agents" },
    { label: "Unified Communications", to: "/technology/unified-communications" },
  ],
},
{
  label: "Industries",
  to: "/industries",
  children: [
    { label: "Financial Services", to: "/industries/financial-services" },
    { label: "Retail", to: "/industries/retail" },
    { label: "Manufacturing", to: "/industries/manufacturing" },
    { label: "Legal", to: "/industries/legal" },
  ],
},
{ label: "Customers", to: "/case-studies" },
{
  label: "Insights",
  to: "/insights",
  children: [
    { label: "All Insights", to: "/insights" },
    { label: "Blogs", to: "/insights?category=Blogs" },
    { label: "White Papers", to: "/insights?category=White+Papers" },
  ],
},
{
  label: "Company",
  to: "/about",
  children: [
    { label: "About Us", to: "/about" },
    { label: "Careers", to: "/careers" },
  ],
},
];

const BOOKING_URL = "https://meetings.hubspot.com/fortayconnect";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setHidden(currentY > 80 && currentY > lastScrollY.current);
      lastScrollY.current = currentY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setMobileOpen(false);
    setMobileExpanded(null);
  }, [pathname]);

  // Lock background scrolling while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full border-b border-primary/15 bg-foreground/95 backdrop-blur-lg transition-transform duration-300",
      hidden && !mobileOpen && "-translate-y-full"
    )}>
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex-shrink-0" onClick={closeMobile}>
          <img src={logo} alt="Fortay Connect" className="h-8 w-auto md:h-10" />
        </Link>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-1 md:flex">
          <nav className="flex items-center gap-1">
            {navLinks.map((link) =>
            link.children ?
            <div
              key={link.label}
              className="relative"
              onMouseEnter={() => setOpenDropdown(link.label)}
              onMouseLeave={() => setOpenDropdown(null)}>

                <Link
                  href={link.to}
                  className={cn(
                    "whitespace-nowrap rounded-md px-2 py-2 text-xs font-medium transition-colors hover:text-primary sm:px-3 sm:text-sm",
                    pathname.startsWith(link.to) || link.children.some(c => pathname.startsWith(c.to))
                      ? "text-primary"
                      : "text-background/70"
                  )}>
                  {link.label}
                </Link>
                {openDropdown === link.label &&
                  <div className="absolute right-0 top-full w-56 rounded-xl border border-border/30 bg-foreground/95 p-2 shadow-xl shadow-black/30 backdrop-blur-md">
                    {link.children.map((child) =>
                      <Link
                        key={child.to}
                        href={child.to}
                        className="block rounded-lg px-3 py-2 text-sm text-background/60 transition-colors hover:bg-background/10 hover:text-primary">
                        {child.label}
                      </Link>
                    )}
                  </div>
                }
            </div> :

            <Link
              key={link.to}
              href={link.to}
              className={cn(
                "whitespace-nowrap rounded-md px-2 py-2 text-xs font-medium transition-colors hover:text-primary sm:px-3 sm:text-sm",
                pathname === link.to
                  ? "text-primary"
                  : "text-background/70"
              )}>
              {link.label}
            </Link>
            )}
          </nav>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 inline-flex items-center rounded-full bg-primary px-5 py-2 text-xs font-bold text-primary-foreground shadow-md shadow-primary/30 transition-all hover:brightness-110 hover:shadow-primary/50 sm:ml-4 sm:text-sm"
          >
            Contact Us
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          className="inline-flex items-center justify-center rounded-md p-2 text-background/80 transition-colors hover:text-primary md:hidden"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile navigation panel */}
      {mobileOpen &&
        <div className="absolute inset-x-0 top-full max-h-[calc(100vh-4rem)] overflow-y-auto border-b border-primary/15 bg-foreground shadow-xl shadow-black/30 md:hidden">
          <nav className="container flex flex-col py-2">
            {navLinks.map((link) =>
            link.children ?
            <div key={link.label} className="border-b border-background/10">
              <div className="flex items-center justify-between">
                <Link
                  href={link.to}
                  onClick={closeMobile}
                  className={cn(
                    "flex-1 py-3.5 text-base font-medium transition-colors hover:text-primary",
                    pathname.startsWith(link.to) ? "text-primary" : "text-background/90"
                  )}>
                  {link.label}
                </Link>
                <button
                  type="button"
                  onClick={() => setMobileExpanded((e) => e === link.label ? null : link.label)}
                  aria-label={`Show ${link.label} links`}
                  aria-expanded={mobileExpanded === link.label}
                  className="p-3 text-background/60 transition-colors hover:text-primary">
                  <ChevronDown className={cn("h-5 w-5 transition-transform", mobileExpanded === link.label && "rotate-180")} />
                </button>
              </div>
              {mobileExpanded === link.label &&
                <div className="flex flex-col pb-2 pl-4">
                  {link.children.map((child) =>
                    <Link
                      key={child.to}
                      href={child.to}
                      onClick={closeMobile}
                      className="py-2.5 text-sm text-background/60 transition-colors hover:text-primary">
                      {child.label}
                    </Link>
                  )}
                </div>
              }
            </div> :

            <Link
              key={link.to}
              href={link.to}
              onClick={closeMobile}
              className={cn(
                "border-b border-background/10 py-3.5 text-base font-medium transition-colors hover:text-primary",
                pathname === link.to ? "text-primary" : "text-background/90"
              )}>
              {link.label}
            </Link>
            )}
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMobile}
              className="mt-4 mb-2 inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-bold text-primary-foreground shadow-md shadow-primary/30 transition-all hover:brightness-110"
            >
              Contact Us
            </a>
          </nav>
        </div>
      }
    </header>
  );
};

export default Navbar;
