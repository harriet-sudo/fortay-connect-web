"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
const logo = "/assets/logo.png";

const navLinks = [
{
  label: "Solutions",
  to: "/technology",
  children: [
    { label: "Technology", to: "/technology", children: [
      { label: "AI Virtual Agents", to: "/technology/ai-virtual-agents" },
      { label: "Contact Centre", to: "/technology/contact-centre" },
      { label: "AI & Automation", to: "/technology/ai-automation" },
      { label: "Sales Agents", to: "/technology/sales-agents" },
      { label: "Unified Communications", to: "/technology/unified-communications" },
    ]},
    { label: "Industries", to: "/industries", children: [
      { label: "Financial Services", to: "/industries/financial-services" },
      { label: "Retail", to: "/industries/retail" },
      { label: "Manufacturing", to: "/industries/manufacturing" },
      { label: "Legal", to: "/industries/legal" },
    ]},
  ],
},
{
  label: "Services",
  to: "/services",
  children: [
    { label: "CX & AI Advisory", to: "/services/cx-ai-advisory" },
    { label: "Technology Selection", to: "/services/technology-selection" },
    { label: "Deployment Services", to: "/services/deployment" },
    { label: "Managed Services", to: "/services/managed-services" },
  ],
},
{ label: "Customers", to: "/case-studies" },
{
  label: "Company",
  to: "/about",
  children: [
    { label: "About Us", to: "/about" },
    { label: "Partners", to: "/partners", children: [
      { label: "Zoom", to: "/partners/zoom" },
      { label: "RingCentral", to: "/partners/ringcentral" },
      { label: "GoTo", to: "/partners/goto" },
      { label: "Dialpad", to: "/partners/dialpad" },
    ]},
    { label: "Careers", to: "/careers" },
  ],
},
{
  label: "Insights",
  to: "/insights",
  children: [
    { label: "All Insights", to: "/insights" },
    { label: "Blogs", to: "/insights?category=Blogs" },
    { label: "White Papers", to: "/insights?category=White+Papers" },
  ],
},
];

const BOOKING_URL = "https://meetings.hubspot.com/fortayconnect";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
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

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full border-b border-primary/15 bg-foreground/95 backdrop-blur-lg transition-transform duration-300",
      hidden && "-translate-y-full"
    )}>
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex-shrink-0">
          <img src={logo} alt="Fortay Connect" className="h-8 w-auto md:h-10" />
        </Link>

        <div className="flex items-center gap-1">
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
                      child.children ?
                      <div key={child.to} className="group/sub relative">
                        <Link
                          href={child.to}
                          className="flex items-center justify-between rounded-lg px-3 py-2 text-sm text-background/60 transition-colors hover:bg-background/10 hover:text-primary">
                          {child.label}
                          <span className="text-xs opacity-50">›</span>
                        </Link>
                        <div className="invisible absolute right-full top-0 mr-1 w-56 rounded-xl border border-border/30 bg-foreground/95 p-2 shadow-xl shadow-black/30 backdrop-blur-md group-hover/sub:visible">
                          {child.children.map((sub) =>
                            <Link
                              key={sub.to}
                              href={sub.to}
                              className="block rounded-lg px-3 py-2 text-sm text-background/60 transition-colors hover:bg-background/10 hover:text-primary">
                              {sub.label}
                            </Link>
                          )}
                        </div>
                      </div>
                      :
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
      </div>
    </header>
  );
};

export default Navbar;