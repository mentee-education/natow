/*
 * NATIVE WISCONSIN — Footer Component
 * Design: Deep forest green background, editorial layout with gold accents
 */
import { Link } from "wouter";
import { Facebook, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0F2419] text-white">
      {/* Main Footer */}
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="font-display text-2xl font-semibold text-white mb-1">Native Wisconsin</div>
            <div className="font-label text-[#D4922A] text-[0.6rem] tracking-[0.2em] uppercase mb-4">
              Native American Tourism of Wisconsin
            </div>
            <p className="font-body text-white/60 text-sm leading-relaxed mb-6">
              An inter-tribal consortium promoting tourism and economic development for Wisconsin's 11 federally recognized Tribal Nations since 1994.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.facebook.com/nativewisconsin"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-[#D4922A] transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Pages */}
          <div>
            <div className="section-label mb-5">Explore</div>
            <ul className="space-y-3">
              {[
                { href: "/tribes", label: "Our Nations" },
                { href: "/experiences", label: "Experiences" },
                { href: "/events", label: "Upcoming Events" },
                { href: "/about", label: "About NATOW" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-white/60 hover:text-[#D4922A] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Experiences */}
          <div>
            <div className="section-label mb-5">Experiences</div>
            <ul className="space-y-3">
              {[
                { href: "/experiences#culture", label: "Culture & Heritage" },
                { href: "/experiences#powwow", label: "Pow Wows" },
                { href: "/experiences#nature", label: "Nature & Land" },
                { href: "/experiences#arts", label: "Arts & Crafts" },
                { href: "/experiences#history", label: "Museums & History" },
                { href: "/experiences#gaming", label: "Gaming & Resorts" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-white/60 hover:text-[#D4922A] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="section-label mb-5">Contact</div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail size={14} className="text-[#D4922A] mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:director@natow.org"
                  className="font-body text-sm text-white/60 hover:text-[#D4922A] transition-colors"
                >
                  director@natow.org
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={14} className="text-[#D4922A] mt-0.5 flex-shrink-0" />
                <span className="font-body text-sm text-white/60">
                  Great Lakes Inter-Tribal Council<br />
                  2932 Highway 47 N, P.O. Box 9<br />
                  Lac du Flambeau, WI 54538
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={14} className="text-[#D4922A] mt-0.5 flex-shrink-0" />
                <a
                  href="tel:+17155883324"
                  className="font-body text-sm text-white/60 hover:text-[#D4922A] transition-colors"
                >
                  715-588-3324
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="font-body text-xs text-white/40">
            © {new Date().getFullYear()} Native American Tourism of Wisconsin (NATOW). All rights reserved.
          </p>
          <p className="font-body text-xs text-white/30">
            A program of the Great Lakes Inter-Tribal Council
          </p>
        </div>
      </div>
    </footer>
  );
}
