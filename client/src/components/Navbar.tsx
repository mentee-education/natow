/*
 * NATIVE WISCONSIN — Navbar Component
 * Design: Transparent over hero, solid forest green on scroll
 * Brand: NATOW logo (compass star) + full org name
 * Typography: Cinzel for nav labels, Cormorant Garamond for brand name
 */
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Facebook } from "lucide-react";

const LOGO = "https://d2xsxph8kpxj0f.cloudfront.net/310519663407421710/ResnJz7wuYxVieXdqtq7xE/natow_logo_v2-expXLpBa8kNhXQgB4gDjm3.webp";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/tribes", label: "Nations" },
  { href: "/experiences", label: "Experiences" },
  { href: "/events", label: "Events" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [location]);

  const isHome = location === "/";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          "bg-[#0F2419] shadow-lg shadow-black/30"
        }`}
      >
        <div className="container flex items-center justify-between h-16 md:h-20">

          {/* Brand — text only */}
          <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
            <div className="flex flex-col leading-none">
              <div className="font-display text-white font-semibold text-sm md:text-base leading-snug">
                Native American Tourism of Wisconsin
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-5 lg:gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-label text-[0.72rem] font-semibold tracking-[0.12em] uppercase transition-colors duration-200 ${
                  location === link.href ? "text-[#D4922A]" : "text-white/80 hover:text-[#D4922A]"
                }`}
              >
                {link.label}
              </Link>
            ))}

            <a
              href="mailto:director@natow.org"
              className="font-label text-[0.72rem] font-semibold tracking-[0.12em] uppercase px-4 py-2 border border-[#D4922A] text-[#D4922A] hover:bg-[#D4922A] hover:text-[#0F2419] transition-all duration-200 whitespace-nowrap"
            >
              Contact
            </a>

            {/* Facebook icon in theme gold — right of Contact */}
            <a
              href="https://www.facebook.com/nativewisconsin"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D4922A] hover:text-[#C4821A] transition-colors"
              aria-label="Native Wisconsin on Facebook"
            >
              <Facebook size={16} />
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white p-2 flex-shrink-0"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-[#0F2419] flex flex-col justify-center items-center gap-8 transition-all duration-400 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >

        {navLinks.map((link, i) => (
          <Link
            key={link.href}
            href={link.href}
            className={`font-display text-3xl font-light transition-colors duration-200 ${
              location === link.href ? "text-[#D4922A]" : "text-white hover:text-[#D4922A]"
            }`}
            style={{ transitionDelay: menuOpen ? `${i * 60}ms` : "0ms" }}
          >
            {link.label}
          </Link>
        ))}
        <div className="flex items-center gap-6 mt-2">
          <a
            href="https://www.facebook.com/nativewisconsin"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#D4922A] hover:text-[#C4821A] transition-colors"
          >
            <Facebook size={22} />
          </a>
        </div>
        <a
          href="mailto:director@natow.org"
          className="font-label text-[0.7rem] tracking-[0.15em] uppercase px-6 py-3 border border-[#D4922A] text-[#D4922A] mt-4"
        >
          Contact Us
        </a>
      </div>
    </>
  );
}
