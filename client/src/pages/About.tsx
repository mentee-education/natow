/*
 * NATIVE WISCONSIN — About NATOW Page
 */
import { useEffect, useRef } from "react";
import { Link } from "wouter";
import { ArrowRight, Users, Globe, Award, Heart } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663407421710/ResnJz7wuYxVieXdqtq7xE/hero_bg-WccTKyJ6EqU6rA5NWhGrDh.webp";
const TRIBAL_MAP = "https://d2xsxph8kpxj0f.cloudfront.net/310519663407421710/ResnJz7wuYxVieXdqtq7xE/tribal_map_bg-LNPrUxpXutCnnXa2LLCDmJ.webp";
const HERO_CULTURE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663407421710/ResnJz7wuYxVieXdqtq7xE/hero_culture-YJdJprCZoDvvbebaXvh44f.webp";

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add("visible"); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

const values = [
  {
    icon: <Users size={24} className="text-[#D4922A]" />,
    title: "Sovereignty",
    desc: "We honor the sovereign rights of each Tribal Nation and work within a framework of self-determination and tribal governance.",
  },
  {
    icon: <Heart size={24} className="text-[#D4922A]" />,
    title: "Cultural Integrity",
    desc: "Every tourism experience we promote is grounded in authentic cultural representation and community consent.",
  },
  {
    icon: <Globe size={24} className="text-[#D4922A]" />,
    title: "Economic Development",
    desc: "Tourism is a powerful tool for tribal economic diversification, creating sustainable livelihoods for community members.",
  },
  {
    icon: <Award size={24} className="text-[#D4922A]" />,
    title: "Education",
    desc: "We believe tourism is an opportunity to educate visitors about the true history and living cultures of Wisconsin's first peoples.",
  },
];

const timeline = [
  { year: "1994", event: "NATOW founded by the Great Lakes Inter-Tribal Council as an inter-tribal tourism consortium." },
  { year: "1995", event: "First unified tribal tourism marketing campaign launched across Wisconsin." },
  { year: "2000", event: "NATOW expands programming to include cultural tourism training for tribal enterprises." },
  { year: "2005", event: "Partnership established with Wisconsin Department of Tourism for statewide promotion." },
  { year: "2010", event: "Launch of the Native Wisconsin brand identity and digital presence." },
  { year: "2015", event: "NATOW achieves recognition as a model Indigenous tourism organization nationally." },
  { year: "2020", event: "Expanded digital outreach to connect with visitors during the pandemic period." },
  { year: "2024", event: "30th anniversary of NATOW — celebrating three decades of cultural tourism leadership." },
];

export default function About() {
  const missionRef = useReveal();
  const valuesRef = useReveal();
  const timelineRef = useReveal();
  const membershipRef = useReveal();

  return (
    <div className="min-h-screen bg-[#F7F0E4]">
      <Navbar />

      {/* Hero */}
      <section className="relative h-72 md:h-96 flex items-end pb-12 overflow-hidden">
        <img src={HERO_BG} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F2419]/50 to-[#0F2419]/85" />
        <div className="relative z-10 container">
          <div className="section-label mb-3 text-[#D4922A]">Our Story</div>
          <h1 className="font-display text-white font-semibold" style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)" }}>
            About NATOW
          </h1>
        </div>
      </section>

      {/* Mission */}
      <section id="mission" className="py-20 bg-white">
        <div ref={missionRef} className="reveal container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="section-label mb-4">Who We Are</div>
              <h2 className="font-display text-[#0F2419] font-semibold mb-6" style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)" }}>
                Native American Tourism of Wisconsin
              </h2>
              <div className="gold-rule mb-6" />
              <p className="font-body text-[#0F2419]/70 text-base leading-relaxed mb-4">
                NATOW (Native American Tourism of Wisconsin) is an inter-tribal consortium founded in 1994 under the Great Lakes Inter-Tribal Council (GLITC). We bring together representatives from each of Wisconsin's 11 federally recognized Tribal Nations to coordinate a unified strategic tourism plan.
              </p>
              <p className="font-body text-[#0F2419]/70 text-base leading-relaxed mb-4">
                Our work is rooted in the belief that tourism, when done right, is a powerful vehicle for cultural education, economic development, and the preservation of Indigenous heritage. We work to ensure that every visitor experience is authentic, respectful, and community-driven.
              </p>
              <p className="font-body text-[#0F2419]/70 text-base leading-relaxed mb-8">
                Tourism provides an excellent tactic for Tribes to diversify their economies, while telling the true story concerning their history and culture.
              </p>
              <a
                href="mailto:director@natow.org"
                className="inline-flex items-center gap-2 font-label text-[0.65rem] tracking-[0.15em] uppercase text-[#9B3A1A] border-b border-[#9B3A1A]/50 pb-0.5 hover:border-[#9B3A1A] transition-colors"
              >
                Contact Our Director <ArrowRight size={12} />
              </a>
            </div>
            <div className="relative">
              <img
                src={HERO_CULTURE}
                alt="Native Wisconsin cultural celebration"
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="absolute -bottom-4 -left-4 bg-[#0F2419] p-6 max-w-xs">
                <div className="font-display text-[#D4922A] text-4xl font-semibold mb-1">30+</div>
                <div className="font-label text-white text-[0.6rem] tracking-[0.12em] uppercase">Years of Cultural Tourism Leadership</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-[#F7F0E4]">
        <div ref={valuesRef} className="reveal container">
          <div className="text-center mb-12">
            <div className="section-label mb-3">What Guides Us</div>
            <h2 className="font-display text-[#0F2419] font-semibold" style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)" }}>
              Our Core Values
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div
                key={v.title}
                className="bg-white p-8 border border-[#0F2419]/10 hover:border-[#D4922A]/40 hover:shadow-md transition-all duration-300"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="mb-4">{v.icon}</div>
                <h3 className="font-display text-[#0F2419] text-xl font-semibold mb-3">{v.title}</h3>
                <p className="font-body text-[#0F2419]/60 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-[#0F2419] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{ backgroundImage: `url(${TRIBAL_MAP})`, backgroundSize: "cover" }}
        />
        <div ref={timelineRef} className="reveal container relative z-10">
          <div className="text-center mb-12">
            <div className="section-label mb-3 text-[#D4922A]">Our Journey</div>
            <h2 className="font-display text-white font-semibold" style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)" }}>
              Three Decades of Leadership
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute left-16 top-0 bottom-0 w-px bg-[#D4922A]/20" />
              <div className="space-y-8">
                {timeline.map((item, i) => (
                  <div key={item.year} className="flex gap-8 items-start" style={{ transitionDelay: `${i * 60}ms` }}>
                    <div className="w-16 flex-shrink-0 text-right">
                      <span className="font-label text-[#D4922A] text-sm font-semibold">{item.year}</span>
                    </div>
                    <div className="relative flex-1 pb-0">
                      <div className="absolute -left-[1.35rem] top-1.5 w-2.5 h-2.5 rounded-full bg-[#D4922A]" />
                      <p className="font-body text-white/65 text-sm leading-relaxed pl-4">{item.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Membership */}
      <section id="membership" className="py-20 bg-white">
        <div ref={membershipRef} className="reveal container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="section-label mb-4">Join NATOW</div>
              <h2 className="font-display text-[#0F2419] font-semibold mb-6" style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)" }}>
                Membership & Partnerships
              </h2>
              <div className="gold-rule mb-6" />
              <p className="font-body text-[#0F2419]/70 text-base leading-relaxed mb-4">
                NATOW welcomes tribal enterprises, cultural organizations, and tourism businesses that are owned by or affiliated with Wisconsin's Tribal Nations to join our consortium.
              </p>
              <p className="font-body text-[#0F2419]/70 text-base leading-relaxed mb-8">
                We also partner with state and regional tourism organizations, academic institutions, and non-profit organizations that share our commitment to authentic, respectful Indigenous tourism.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  "Tribal enterprises and cultural centers",
                  "Native-owned businesses and artisans",
                  "Tribal gaming and hospitality operations",
                  "Educational and cultural institutions",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="text-[#D4922A]">—</span>
                    <span className="font-body text-[#0F2419]/65 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <a
                href="mailto:director@natow.org?subject=Membership Inquiry"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#0F2419] text-white font-label text-[0.7rem] tracking-[0.15em] uppercase hover:bg-[#1a3a2a] transition-colors"
              >
                Inquire About Membership <ArrowRight size={14} />
              </a>
            </div>
            <div>
              <div className="bg-[#F7F0E4] p-8 border border-[#0F2419]/10">
                <div className="section-label mb-4">Parent Organization</div>
                <h3 className="font-display text-[#0F2419] text-2xl font-semibold mb-3">
                  Great Lakes Inter-Tribal Council
                </h3>
                <div className="gold-rule mb-4" />
                <p className="font-body text-[#0F2419]/65 text-sm leading-relaxed mb-4">
                  NATOW operates as a program of the Great Lakes Inter-Tribal Council (GLITC), a non-profit organization that provides services to the 11 federally recognized Tribal Nations of Wisconsin.
                </p>
                <p className="font-body text-[#0F2419]/65 text-sm leading-relaxed mb-6">
                  GLITC was established in 1963 and serves as a vehicle for inter-tribal cooperation on issues of common concern, including health, education, economic development, and cultural preservation.
                </p>
                <a
                  href="https://www.glitc.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-label text-[0.65rem] tracking-[0.15em] uppercase text-[#9B3A1A] border-b border-[#9B3A1A]/50 pb-0.5 hover:border-[#9B3A1A] transition-colors"
                >
                  Visit GLITC Website <ArrowRight size={12} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Media / Press */}
      <section id="media" className="py-16 bg-[#F7F0E4]">
        <div className="container">
          <div className="max-w-2xl">
            <div className="section-label mb-4">Media & Press</div>
            <h2 className="font-display text-[#0F2419] font-semibold mb-4" style={{ fontSize: "clamp(1.5rem, 2.5vw, 2.2rem)" }}>
              Press & Media Resources
            </h2>
            <p className="font-body text-[#0F2419]/65 text-base leading-relaxed mb-6">
              Journalists, travel writers, and media professionals are welcome to reach out to NATOW for story ideas, interviews, and press materials related to Native Wisconsin tourism and culture.
            </p>
            <a
              href="mailto:director@natow.org?subject=Media Inquiry"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-[#0F2419] text-[#0F2419] font-label text-[0.65rem] tracking-[0.15em] uppercase hover:bg-[#0F2419] hover:text-white transition-colors"
            >
              Media Inquiries <ArrowRight size={12} />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
