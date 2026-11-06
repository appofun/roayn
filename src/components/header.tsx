"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "@/components/logo";

const links = [
  ["Home", "/"],
  ["About", "/about/"],
  ["Products", "/products/"],
  ["Technology", "/technology/"],
  ["Support", "/support/"],
  ["Contact", "/contact/"],
] as const;

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="shell nav-shell">
        <Logo />
        <nav className={`primary-nav ${open ? "is-open" : ""}`} aria-label="Primary navigation">
          {links.map(([label, href]) => {
            const active = href === "/" ? pathname === "/" : pathname.startsWith(href.slice(0, -1));
            return (
              <Link key={href} className={active ? "is-active" : ""} href={href} aria-current={active ? "page" : undefined} onClick={() => setOpen(false)}>
                {label}
              </Link>
            );
          })}
          <Link className="button button-primary nav-mobile-cta" href="/products/" onClick={() => setOpen(false)}>
            Explore products
          </Link>
        </nav>
        <Link className="button button-primary nav-cta" href="/products/">
          Explore products
        </Link>
        <button
          className="nav-toggle"
          type="button"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>
    </header>
  );
}
