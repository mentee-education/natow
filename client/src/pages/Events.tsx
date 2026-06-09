/*
 * NATIVE WISCONSIN — Events Page
 */
import { useEffect, useRef, useState } from "react";
import { Calendar, MapPin, ArrowRight, Filter } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663407421710/ResnJz7wuYxVieXdqtq7xE/hero_bg-WccTKyJ6EqU6rA5NWhGrDh.webp";
const POWWOW1 = "/images/powwow1_2bd0e553.webp";
const POWWOW2 = "/images/powwow2_8f1a2bc7.jpg";
const POWWOW3 = "/images/powwow3_58c1f393.jpg";

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

const events = [
  {
    id: 1,
    title: "Lac du Flambeau Annual Pow Wow",
    type: "Pow Wow",
    month: "July",
    date: "July 2026",
    location: "Lac du Flambeau, WI",
    nation: "Lac du Flambeau Band",
    description: "One of Wisconsin's most celebrated annual pow wows, featuring traditional dance competitions, drum groups, Native food vendors, and craft markets. Public welcome.",
    img: POWWOW1,
    featured: true,
  },
  {
    id: 2,
    title: "Menominee Nation Contest Pow Wow",
    type: "Pow Wow",
    month: "August",
    date: "August 2026",
    location: "Keshena, WI",
    nation: "Menominee Indian Tribe",
    description: "A major contest pow wow drawing dancers and drum groups from across the country to the heart of the Menominee Nation's reservation.",
    img: POWWOW2,
    featured: true,
  },
  {
    id: 3,
    title: "Oneida Nation Summer Celebration",
    type: "Community",
    month: "August",
    date: "August 2026",
    location: "Oneida, WI",
    nation: "Oneida Nation",
    description: "A celebration of Oneida culture and community, featuring traditional foods, arts and crafts, cultural demonstrations, and family activities.",
    img: POWWOW3,
    featured: false,
  },
  {
    id: 4,
    title: "Ho-Chunk Nation Pow Wow",
    type: "Pow Wow",
    month: "September",
    date: "September 2026",
    location: "Black River Falls, WI",
    nation: "Ho-Chunk Nation",
    description: "Experience the vibrant traditions of the Ho-Chunk Nation at their annual pow wow, featuring intertribal dancing, traditional songs, and community celebration.",
    img: POWWOW1,
    featured: false,
  },
  {
    id: 5,
    title: "Red Cliff Band Cultural Days",
    type: "Nature & Land",
    month: "July",
    date: "July 2026",
    location: "Bayfield, WI",
    nation: "Red Cliff Band",
    description: "Celebrate the culture and heritage of the Red Cliff Band of Lake Superior Chippewa on the shores of Lake Superior, with canoe demonstrations, traditional foods, and storytelling.",
    img: POWWOW2,
    featured: false,
  },
  {
    id: 6,
    title: "Bad River Wild Rice Harvest Festival",
    type: "Food & Harvest",
    month: "September",
    date: "September 2026",
    location: "Odanah, WI",
    nation: "Bad River Band",
    description: "Celebrate the sacred wild rice harvest with the Bad River Band. Learn about manoomin (wild rice) and its central role in Ojibwe culture and sustenance.",
    img: POWWOW3,
    featured: false,
  },
];

const types = ["All", "Pow Wow", "Arts & Crafts", "Food & Harvest", "Music & Dance", "Community", "Nature & Land"];
const months = ["All", "June", "July", "August", "September", "October"];

export default function Events() {
  const [selectedType, setSelectedType] = useState("All");
  const [selectedMonth, setSelectedMonth] = useState("All");
  const introRef = useReveal();

  const filtered = events.filter((e) => {
    const typeMatch = selectedType === "All" || e.type === selectedType;
    const monthMatch = selectedMonth === "All" || e.month === selectedMonth;
    return typeMatch && monthMatch;
  });

  const featured = filtered.filter((e) => e.featured);
  const regular = filtered.filter((e) => !e.featured);

  return (
    <div className="min-h-screen bg-[#F7F0E4]">
      <Navbar />

      {/* Hero */}
      <section className="relative h-72 md:h-96 flex items-end pb-12 overflow-hidden">
        <img src={HERO_BG} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F2419]/50 to-[#0F2419]/85" />
        <div className="relative z-10 container">
          <div className="section-label mb-3 text-[#D4922A]">Calendar</div>
          <h1 className="font-display text-white font-semibold" style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)" }}>
            Upcoming Events
          </h1>
        </div>
      </section>

      {/* Intro + Filters */}
      <section className="py-12 bg-white border-b border-[#0F2419]/10">
        <div ref={introRef} className="reveal container">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <p className="font-body text-[#0F2419]/65 text-base max-w-xl">
              Pow wows, cultural festivals, and community celebrations across Wisconsin's Tribal Nations. All events listed are open to the public unless otherwise noted.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-1.5 text-[#0F2419]/40">
                <Filter size={12} />
                <span className="font-label text-[0.58rem] tracking-[0.12em] uppercase">Filter</span>
              </div>
              <div className="flex gap-2">
                {types.map((t) => (
                  <button
                    key={t}
                    onClick={() => setSelectedType(t)}
                    className={`font-label text-[0.58rem] tracking-[0.1em] uppercase px-3 py-1.5 border transition-all duration-200 ${
                      selectedType === t
                        ? "bg-[#0F2419] text-white border-[#0F2419]"
                        : "border-[#0F2419]/20 text-[#0F2419]/60 hover:border-[#0F2419]/50"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
              <div className="flex gap-2">
                {months.map((m) => (
                  <button
                    key={m}
                    onClick={() => setSelectedMonth(m)}
                    className={`font-label text-[0.58rem] tracking-[0.1em] uppercase px-3 py-1.5 border transition-all duration-200 ${
                      selectedMonth === m
                        ? "bg-[#D4922A] text-[#0F2419] border-[#D4922A]"
                        : "border-[#0F2419]/20 text-[#0F2419]/60 hover:border-[#D4922A]/50"
                    }`}
                  >
                    {m}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Events */}
      {featured.length > 0 && (
        <section className="py-16 bg-[#F7F0E4]">
          <div className="container">
            <div className="section-label mb-8">Featured Events</div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {featured.map((event) => (
                <div key={event.id} className="bg-white overflow-hidden group hover:shadow-xl transition-shadow duration-300">
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={event.img}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F2419]/70 to-transparent" />
                    <div className="absolute top-4 left-4 bg-[#D4922A] px-3 py-1">
                      <span className="font-label text-[#0F2419] text-[0.58rem] tracking-[0.12em] uppercase font-semibold">{event.type}</span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="font-display text-white text-2xl font-semibold">{event.title}</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="flex items-center gap-1.5 text-[#0F2419]/50">
                        <Calendar size={12} />
                        <span className="font-body text-xs">{event.date}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-[#0F2419]/50">
                        <MapPin size={12} />
                        <span className="font-body text-xs">{event.location}</span>
                      </div>
                    </div>
                    <div className="font-label text-[#9B3A1A] text-[0.58rem] tracking-[0.1em] uppercase mb-2">{event.nation}</div>
                    <p className="font-body text-[#0F2419]/65 text-sm leading-relaxed">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Events */}
      {regular.length > 0 && (
        <section className="py-10 bg-[#F7F0E4]">
          <div className="container">
            {featured.length > 0 && <div className="section-label mb-8">More Events</div>}
            <div className="space-y-4">
              {regular.map((event) => (
                <div key={event.id} className="bg-white border border-[#0F2419]/10 hover:border-[#D4922A]/40 transition-all duration-300 group">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-48 h-40 md:h-auto overflow-hidden flex-shrink-0">
                      <img
                        src={event.img}
                        alt={event.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6 flex-1">
                      <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                        <div>
                          <div className="flex items-center gap-3 mb-1">
                            <span className="font-label text-[#D4922A] text-[0.58rem] tracking-[0.12em] uppercase">{event.type}</span>
                            <span className="font-label text-[#9B3A1A] text-[0.58rem] tracking-[0.1em] uppercase">{event.nation}</span>
                          </div>
                          <h3 className="font-display text-[#0F2419] text-xl font-semibold">{event.title}</h3>
                        </div>
                        <div className="flex flex-col gap-1 text-right">
                          <div className="flex items-center gap-1.5 text-[#0F2419]/50 justify-end">
                            <Calendar size={11} />
                            <span className="font-body text-xs">{event.date}</span>
                          </div>
                          <div className="flex items-center gap-1.5 text-[#0F2419]/50 justify-end">
                            <MapPin size={11} />
                            <span className="font-body text-xs">{event.location}</span>
                          </div>
                        </div>
                      </div>
                      <p className="font-body text-[#0F2419]/60 text-sm leading-relaxed">{event.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {filtered.length === 0 && (
        <section className="py-24 bg-[#F7F0E4]">
          <div className="container text-center">
            <p className="font-display text-[#0F2419]/40 text-2xl">No events match your filters.</p>
            <button
              onClick={() => { setSelectedType("All"); setSelectedMonth("All"); }}
              className="mt-4 font-label text-[0.65rem] tracking-[0.12em] uppercase text-[#D4922A] border-b border-[#D4922A]/50 pb-0.5"
            >
              Clear Filters
            </button>
          </div>
        </section>
      )}

      {/* Submit Event CTA */}
      <section className="py-16 bg-[#0F2419]">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <div className="section-label mb-2 text-[#D4922A]">Tribal Organizations</div>
              <h2 className="font-display text-white font-semibold text-2xl md:text-3xl">
                Submit Your Event
              </h2>
              <p className="font-body text-white/60 text-sm mt-2">
                Are you a tribal nation or organization with an upcoming event? Contact NATOW to have it listed here.
              </p>
            </div>
            <a
              href="mailto:director@natow.org?subject=Event Submission"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#D4922A] text-[#0F2419] font-label text-[0.7rem] tracking-[0.15em] uppercase hover:bg-[#C4821A] transition-colors font-semibold whitespace-nowrap"
            >
              Contact NATOW <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
