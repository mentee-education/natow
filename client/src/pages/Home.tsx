/*
 * NATIVE WISCONSIN — Home Page
 * Design: "Living Culture" Cinematic Tourism Portal
 * Sections: Hero, Stats, Experience Categories, Mission, Tribal Nations, Events, Map CTA, Footer
 */
import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { ArrowRight, ChevronDown, MapPin, Calendar, Users, Feather } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Image URLs from CDN
const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663407421710/ResnJz7wuYxVieXdqtq7xE/hero_bg-WccTKyJ6EqU6rA5NWhGrDh.webp";
const HERO_CULTURE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663407421710/ResnJz7wuYxVieXdqtq7xE/hero_culture-YJdJprCZoDvvbebaXvh44f.webp";
const TRIBAL_MAP = "https://d2xsxph8kpxj0f.cloudfront.net/310519663407421710/ResnJz7wuYxVieXdqtq7xE/wisconsin_nations_bg-aVW6MgVUPm8YqDcLSNXhJQ.webp";
const EXP_ARTS = "https://d2xsxph8kpxj0f.cloudfront.net/310519663407421710/ResnJz7wuYxVieXdqtq7xE/experience_arts-a4PErnmjrBsadCVdaUhfdW.webp";
const EXP_NATURE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663407421710/ResnJz7wuYxVieXdqtq7xE/experience_nature-CdiWZws6hNX8ZVpGeBpLVk.webp";
const POWWOW1 = "/images/powwow1_2bd0e553.webp";
const POWWOW2 = "/images/powwow2_8f1a2bc7.jpg";
const POWWOW3 = "/images/powwow3_58c1f393.jpg";
const FOREST = "/images/forest1_a13f36eb.jpg";

// Scroll reveal hook
function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

// Animated counter
function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const duration = 1800;
          const step = (timestamp: number) => {
            if (!start) start = timestamp;
            const progress = Math.min((timestamp - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);
  return <span ref={ref}>{count}{suffix}</span>;
}

const experiences = [
  {
    id: "culture",
    label: "Culture & Heritage",
    title: "Living Traditions",
    desc: "Immerse yourself in ceremonies, storytelling, and cultural practices passed down through generations.",
    img: HERO_CULTURE,
    href: "/experiences#culture",
  },
  {
    id: "powwow",
    label: "Pow Wows",
    title: "Celebrate Together",
    desc: "Experience the vibrant colors, music, and dance of Wisconsin's pow wow celebrations.",
    img: POWWOW2,
    href: "/events",
  },
  {
    id: "nature",
    label: "Nature & Land",
    title: "Sacred Landscapes",
    desc: "Explore the forests, lakes, and waterways that have shaped Indigenous life for millennia.",
    img: EXP_NATURE,
    href: "/experiences#nature",
  },
  {
    id: "arts",
    label: "Arts & Crafts",
    title: "Handcrafted Legacy",
    desc: "Discover authentic Native-made art, jewelry, and crafts that carry generations of meaning.",
    img: EXP_ARTS,
    href: "/experiences#arts",
  },
  {
    id: "history",
    label: "Museums & History",
    title: "Deep Roots",
    desc: "Visit cultural centers and museums that honor the enduring history of Wisconsin's first peoples.",
    img: FOREST,
    href: "/experiences#history",
  },
  {
    id: "gaming",
    label: "Gaming & Resorts",
    title: "Tribal Hospitality",
    desc: "Stay and play at world-class tribal gaming resorts and experience legendary Indigenous hospitality.",
    img: POWWOW3,
    href: "/experiences#gaming",
  },
];

const tribes = [
  { name: "Bad River Band", nation: "Lake Superior Chippewa", region: "Northwest" },
  { name: "Bay Mills Indian Community", nation: "Chippewa", region: "Upper Peninsula" },
  { name: "Forest County Potawatomi", nation: "Potawatomi", region: "Northeast" },
  { name: "Ho-Chunk Nation", nation: "Ho-Chunk", region: "Central" },
  { name: "Keweenaw Bay Indian Community", nation: "Ojibwe", region: "Upper Peninsula" },
  { name: "Lac Courte Oreilles Band", nation: "Lake Superior Chippewa", region: "Northwest" },
  { name: "Lac du Flambeau Band", nation: "Lake Superior Chippewa", region: "North Central" },
  { name: "Menominee Indian Tribe", nation: "Menominee", region: "Northeast" },
  { name: "Oneida Nation", nation: "Oneida", region: "Northeast" },
  { name: "Red Cliff Band", nation: "Lake Superior Chippewa", region: "Northwest" },
  { name: "Sokaogon Chippewa Community", nation: "Mille Lacs Band", region: "North Central" },
  { name: "St. Croix Chippewa Indians", nation: "Chippewa", region: "Northwest" },
  { name: "Stockbridge-Munsee Community", nation: "Mohican", region: "Northeast" },
];

const upcomingEvents = [
  {
    title: "Annual Lac du Flambeau Pow Wow",
    date: "July 2025",
    location: "Lac du Flambeau, WI",
    type: "Pow Wow",
  },
  {
    title: "Oneida Nation Summer Celebration",
    date: "August 2025",
    location: "Oneida, WI",
    type: "Cultural Festival",
  },
  {
    title: "Menominee Nation Contest Pow Wow",
    date: "August 2025",
    location: "Keshena, WI",
    type: "Pow Wow",
  },
];

function ExperienceCard({ exp, index }: { exp: typeof experiences[0]; index: number }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="relative overflow-hidden cursor-pointer group"
      style={{ animationDelay: `${index * 80}ms` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link href={exp.href}>
        <div className="relative h-72 md:h-80 overflow-hidden">
          <img
            src={exp.img}
            alt={exp.title}
            className="w-full h-full object-cover transition-transform duration-700 ease-out"
            style={{ transform: hovered ? "scale(1.06)" : "scale(1)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F2419]/90 via-[#0F2419]/30 to-transparent" />
          <div className="absolute inset-0 p-6 flex flex-col justify-end">
            <div className="section-label mb-2">{exp.label}</div>
            <h3 className="font-display text-white text-2xl font-semibold mb-2">{exp.title}</h3>
            <p
              className="font-body text-white/70 text-sm leading-relaxed transition-all duration-400"
              style={{
                maxHeight: hovered ? "80px" : "0",
                opacity: hovered ? 1 : 0,
                overflow: "hidden",
              }}
            >
              {exp.desc}
            </p>
            <div
              className="flex items-center gap-2 mt-3 transition-all duration-300"
              style={{ opacity: hovered ? 1 : 0, transform: hovered ? "translateX(0)" : "translateX(-8px)" }}
            >
              <span className="font-label text-[#D4922A] text-[0.6rem] tracking-[0.15em] uppercase">Explore</span>
              <ArrowRight size={12} className="text-[#D4922A]" />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default function Home() {
  const statsRef = useReveal();
  const missionRef = useReveal();
  const tribesRef = useReveal();
  const eventsRef = useReveal();
  const ctaRef = useReveal();

  const [heroVisible, setHeroVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setHeroVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="min-h-screen bg-[#F7F0E4]">
      <Navbar />

      {/* ─── HERO ─── */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <img
          src={HERO_BG}
          alt="Wisconsin Northwoods at golden hour"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F2419]/60 via-[#0F2419]/40 to-[#0F2419]/80" />

        <div className="relative z-10 container text-center">
          <div
            className="transition-all duration-700"
            style={{
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? "translateY(0)" : "translateY(20px)",
            }}
          >
            <div className="section-label mb-6 text-[#D4922A]">Native American Tourism of Wisconsin</div>
          </div>
          <h1
            className="font-display text-white font-semibold leading-tight mb-6"
            style={{
              fontSize: "clamp(2.8rem, 7vw, 6rem)",
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? "translateY(0)" : "translateY(30px)",
              transition: "opacity 0.8s 0.2s cubic-bezier(0.23,1,0.32,1), transform 0.8s 0.2s cubic-bezier(0.23,1,0.32,1)",
            }}
          >
            Eleven Nations.<br />
            <em className="font-light italic text-[#D4922A]">One Living Story.</em>
          </h1>
          <p
            className="font-body text-white/75 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
            style={{
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.8s 0.4s cubic-bezier(0.23,1,0.32,1), transform 0.8s 0.4s cubic-bezier(0.23,1,0.32,1)",
            }}
          >
            Discover the living cultures, sacred landscapes, and vibrant traditions of Wisconsin's federally recognized Tribal Nations.
          </p>
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            style={{
              opacity: heroVisible ? 1 : 0,
              transition: "opacity 0.8s 0.6s cubic-bezier(0.23,1,0.32,1)",
            }}
          >
            <Link
              href="/experiences"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#D4922A] text-[#0F2419] font-label text-[0.7rem] tracking-[0.15em] uppercase hover:bg-[#C4821A] transition-colors font-semibold"
            >
              Plan Your Visit <ArrowRight size={14} />
            </Link>
            <Link
              href="/tribes"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/50 text-white font-label text-[0.7rem] tracking-[0.15em] uppercase hover:border-white hover:bg-white/10 transition-colors"
            >
              Meet the Nations
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="font-label text-white/40 text-[0.55rem] tracking-[0.2em] uppercase">Scroll</span>
          <ChevronDown size={16} className="text-white/40" />
        </div>
      </section>

      {/* ─── STATS BAR ─── */}
      <section className="bg-[#0F2419] py-10">
        <div ref={statsRef} className="reveal container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: 11, suffix: "", label: "Federally Recognized Nations" },
              { value: 1994, suffix: "", label: "Year NATOW Was Founded" },
              { value: 6700, suffix: "+", label: "Community Followers" },
              { value: 100, suffix: "+", label: "Cultural Experiences" },
            ].map((stat, i) => (
              <div key={i}>
                <div className="font-display text-[#D4922A] font-semibold mb-1" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
                  <Counter target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="font-label text-white/50 text-[0.6rem] tracking-[0.12em] uppercase">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── EXPERIENCE CATEGORIES ─── */}
      <section className="py-20 bg-[#F7F0E4]">
        <div className="container">
          <div className="mb-12">
            <div className="section-label mb-3">Plan Your Journey</div>
            <h2 className="font-display text-[#0F2419] font-semibold" style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}>
              Choose Your Experience
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {experiences.map((exp, i) => (
              <ExperienceCard key={exp.id} exp={exp} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── MISSION SECTION ─── */}
      <section className="py-24 bg-[#0F2419] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url(${TRIBAL_MAP})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div ref={missionRef} className="reveal container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Feather size={32} className="text-[#D4922A]" />
            </div>
            <div className="section-label mb-4 text-[#D4922A]">Our Mission</div>
            <blockquote className="font-display text-white font-light leading-relaxed mb-8" style={{ fontSize: "clamp(1.5rem, 3vw, 2.4rem)" }}>
              "Tourism provides an excellent tactic for Tribes to diversify their economies, while telling the true story concerning their history and culture."
            </blockquote>
            <div className="gold-rule mx-auto mb-8" />
            <p className="font-body text-white/65 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-10">
              NATOW is an inter-tribal consortium launched in 1994 by the Great Lakes Inter-Tribal Council. We bring together representatives from each Tribal Nation to coordinate a unified strategic tourism plan that honors sovereignty, culture, and economic self-determination.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 font-label text-[0.65rem] tracking-[0.15em] uppercase text-[#D4922A] border-b border-[#D4922A]/50 pb-0.5 hover:border-[#D4922A] transition-colors"
            >
              Learn About NATOW <ArrowRight size={12} />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── TRIBAL NATIONS ─── */}
      <section className="py-20 bg-[#F7F0E4]">
        <div className="container">
          <div ref={tribesRef} className="reveal mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="section-label mb-3">Member Nations</div>
              <h2 className="font-display text-[#0F2419] font-semibold" style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}>
                Wisconsin's Tribal Nations
              </h2>
            </div>
            <Link
              href="/tribes"
              className="inline-flex items-center gap-2 font-label text-[0.65rem] tracking-[0.15em] uppercase text-[#9B3A1A] border-b border-[#9B3A1A]/50 pb-0.5 hover:border-[#9B3A1A] transition-colors whitespace-nowrap"
            >
              View All Nations <ArrowRight size={12} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {tribes.slice(0, 9).map((tribe, i) => (
              <div
                key={tribe.name}
                className="group border border-[#0F2419]/10 bg-white hover:border-[#D4922A]/40 hover:shadow-lg hover:shadow-[#D4922A]/10 transition-all duration-300 p-6 cursor-pointer"
                style={{ transitionDelay: `${i * 40}ms` }}
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-display text-[#0F2419] text-xl font-semibold leading-tight mb-1">
                      {tribe.name}
                    </h3>
                    <div className="font-label text-[#9B3A1A] text-[0.58rem] tracking-[0.12em] uppercase">
                      {tribe.nation}
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-[#D4922A]/60 group-hover:text-[#D4922A] transition-colors">
                    <MapPin size={12} />
                    <span className="font-label text-[0.55rem] tracking-[0.1em] uppercase">{tribe.region}</span>
                  </div>
                </div>
                <div className="gold-rule transition-all duration-300 group-hover:w-full" style={{ width: "40px" }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SPLIT EDITORIAL: Culture Photo + Events ─── */}
      <section className="bg-[#0F2419]">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Photo side */}
          <div className="relative h-80 lg:h-auto min-h-[400px] overflow-hidden">
            <img
              src={POWWOW1}
              alt="Pow wow dancers in traditional regalia"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0F2419]/60 lg:block hidden" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F2419]/70 to-transparent lg:hidden" />
          </div>

          {/* Events side */}
          <div ref={eventsRef} className="reveal p-10 md:p-16 flex flex-col justify-center">
            <div className="section-label mb-4 text-[#D4922A]">Upcoming Events</div>
            <h2 className="font-display text-white font-semibold mb-8" style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)" }}>
              Join the Celebration
            </h2>

            <div className="space-y-6 mb-10">
              {upcomingEvents.map((event, i) => (
                <div key={i} className="border-l-2 border-[#D4922A]/40 pl-5 hover:border-[#D4922A] transition-colors group">
                  <div className="font-label text-[#D4922A] text-[0.6rem] tracking-[0.12em] uppercase mb-1">
                    {event.type}
                  </div>
                  <h3 className="font-display text-white text-xl font-semibold mb-2 group-hover:text-[#D4922A] transition-colors">
                    {event.title}
                  </h3>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1.5 text-white/50">
                      <Calendar size={11} />
                      <span className="font-body text-xs">{event.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-white/50">
                      <MapPin size={11} />
                      <span className="font-body text-xs">{event.location}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/events"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-[#D4922A] text-[#D4922A] font-label text-[0.65rem] tracking-[0.15em] uppercase hover:bg-[#D4922A] hover:text-[#0F2419] transition-all duration-200 self-start"
            >
              View All Events <ArrowRight size={12} />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── MAP CTA ─── */}
      <section className="relative py-28 overflow-hidden">
        <img
          src={TRIBAL_MAP}
          alt="Wisconsin tribal nations map"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#F7F0E4]/85" />
        <div ref={ctaRef} className="reveal container relative z-10 text-center">
          <div className="section-label mb-4">Explore the Territory</div>
          <h2 className="font-display text-[#0F2419] font-semibold mb-6" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
            Find Your Nation
          </h2>
          <p className="font-body text-[#0F2419]/65 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Wisconsin's 11 federally recognized Tribal Nations span the state from the Northwoods to the shores of Lake Michigan. Each has its own sovereign territory, culture, and story to share.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/tribes"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#0F2419] text-white font-label text-[0.7rem] tracking-[0.15em] uppercase hover:bg-[#1a3a2a] transition-colors"
            >
              <Users size={14} /> Explore All Nations
            </Link>
            <Link
              href="/experiences"
              className="inline-flex items-center gap-2 px-8 py-4 border border-[#0F2419] text-[#0F2419] font-label text-[0.7rem] tracking-[0.15em] uppercase hover:bg-[#0F2419] hover:text-white transition-colors"
            >
              Plan Your Experience
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
