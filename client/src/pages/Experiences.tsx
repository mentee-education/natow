/*
 * NATIVE WISCONSIN — Experiences Page
 */
import { useEffect, useRef } from "react";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663407421710/ResnJz7wuYxVieXdqtq7xE/hero_bg-WccTKyJ6EqU6rA5NWhGrDh.webp";
const HERO_CULTURE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663407421710/ResnJz7wuYxVieXdqtq7xE/hero_culture-YJdJprCZoDvvbebaXvh44f.webp";
const EXP_ARTS = "https://d2xsxph8kpxj0f.cloudfront.net/310519663407421710/ResnJz7wuYxVieXdqtq7xE/experience_arts-a4PErnmjrBsadCVdaUhfdW.webp";
const EXP_NATURE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663407421710/ResnJz7wuYxVieXdqtq7xE/experience_nature-CdiWZws6hNX8ZVpGeBpLVk.webp";
const POWWOW1 = "/images/powwow1_2bd0e553.webp";
const POWWOW2 = "/images/powwow2_8f1a2bc7.jpg";
const FOREST = "/images/forest1_a13f36eb.jpg";

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

const categories = [
  {
    id: "culture",
    label: "Culture & Heritage",
    title: "Living Traditions",
    img: HERO_CULTURE,
    description: "Wisconsin's Tribal Nations are living cultures — not museum exhibits. From language revitalization programs to traditional ceremonies, visitors are welcomed to learn alongside community members in a spirit of mutual respect.",
    experiences: [
      "Guided cultural tours at tribal cultural centers",
      "Traditional storytelling and oral history sessions",
      "Language learning workshops",
      "Ceremonial demonstrations (where open to the public)",
      "Visits to effigy mounds and sacred sites",
    ],
    highlights: [
      { name: "Oneida Nation Museum", location: "DePere, WI" },
      { name: "George W. Brown Jr. Ojibwe Museum", location: "Lac du Flambeau, WI" },
      { name: "Forest County Potawatomi Museum", location: "Crandon, WI" },
      { name: "Arvid E. Miller Library Museum", location: "Bowler, WI" },
    ],
  },
  {
    id: "nature",
    label: "Nature & Land",
    title: "Sacred Landscapes",
    img: EXP_NATURE,
    description: "The land is not just a backdrop — it is a living relative. Wisconsin's tribal lands encompass some of the most pristine natural environments in the Great Lakes region, from wild rice wetlands to ancient forests and the shores of Lake Superior.",
    experiences: [
      "Guided nature walks on tribal lands",
      "Wild rice harvesting experiences (seasonal)",
      "Fishing and paddling on tribal waters",
      "Frog Bay Tribal National Park hiking",
      "Birding and wildlife observation",
    ],
    highlights: [
      { name: "Frog Bay Tribal National Park", location: "Red Cliff, WI" },
      { name: "Kakagon Sloughs Wild Rice Wetlands", location: "Bad River, WI" },
      { name: "Madeline Island", location: "La Pointe, WI" },
      { name: "Chequamegon-Nicolet National Forest", location: "Northern WI" },
    ],
  },
  {
    id: "powwow",
    label: "Pow Wows",
    title: "Celebrate Together",
    img: POWWOW1,
    description: "Pow wows are among the most vibrant expressions of Native American culture — gatherings of song, dance, community, and celebration. Wisconsin's tribal nations host pow wows throughout the year, and visitors are warmly welcomed to attend.",
    experiences: [
      "Grand entries and intertribal dances",
      "Traditional drum groups and singers",
      "Native food vendors and craft markets",
      "Regalia competitions across dance styles",
      "Community gatherings and family celebrations",
    ],
    highlights: [
      { name: "Lac du Flambeau Annual Pow Wow", location: "Lac du Flambeau, WI" },
      { name: "Menominee Nation Contest Pow Wow", location: "Keshena, WI" },
      { name: "Oneida Pow Wow", location: "Oneida, WI" },
      { name: "Ho-Chunk Nation Pow Wow", location: "Black River Falls, WI" },
    ],
  },
  {
    id: "arts",
    label: "Arts & Crafts",
    title: "Handcrafted Legacy",
    img: EXP_ARTS,
    description: "From intricate beadwork and birch bark baskets to contemporary paintings and sculptures, Native Wisconsin artists create work that bridges tradition and modernity. Every piece carries a story that transcends generations.",
    experiences: [
      "Tribal art galleries and studios",
      "Beadwork and basket-weaving workshops",
      "Native-owned trading posts and gift shops",
      "Contemporary Indigenous art exhibitions",
      "Artist-in-residence programs",
    ],
    highlights: [
      { name: "Lac du Flambeau Woodland Indian Arts Center", location: "Lac du Flambeau, WI" },
      { name: "Parsons Indian Trading Post & Museum", location: "Wisconsin Dells, WI" },
      { name: "Oneida Nation Arts Program", location: "Oneida, WI" },
      { name: "Menominee Tribal Enterprises", location: "Keshena, WI" },
    ],
  },
  {
    id: "history",
    label: "Museums & History",
    title: "Deep Roots",
    img: FOREST,
    description: "Wisconsin's Indigenous history stretches back thousands of years. Effigy mounds, ancient village sites, and world-class museums tell the story of peoples who have shaped this land since time immemorial.",
    experiences: [
      "Effigy mound exploration and interpretation",
      "Tribal museum and archive visits",
      "Historical walking tours",
      "Archaeological site visits",
      "Educational programs for families and schools",
    ],
    highlights: [
      { name: "Aztalan State Park", location: "Lake Mills, WI" },
      { name: "Indian Mound Park", location: "Sheboygan, WI" },
      { name: "Menominee Logging Museum", location: "Keshena, WI" },
      { name: "Forts Folle Avoine Historical Park", location: "Danbury, WI" },
    ],
  },
  {
    id: "gaming",
    label: "Gaming & Resorts",
    title: "Tribal Hospitality",
    img: POWWOW2,
    description: "Wisconsin's tribal gaming resorts offer world-class entertainment, dining, and accommodations while supporting tribal economic development and cultural programs. Experience legendary Indigenous hospitality.",
    experiences: [
      "Casino gaming and entertainment",
      "Resort spa and wellness experiences",
      "Golf courses on tribal lands",
      "Fine dining featuring local and traditional ingredients",
      "Live entertainment and cultural performances",
    ],
    highlights: [
      { name: "Potawatomi Hotel & Casino", location: "Milwaukee, WI" },
      { name: "Oneida Casino", location: "Green Bay, WI" },
      { name: "Lac du Flambeau Casino", location: "Lac du Flambeau, WI" },
      { name: "St. Croix Casino", location: "Turtle Lake, WI" },
    ],
  },
];

export default function Experiences() {
  const introRef = useReveal();

  return (
    <div className="min-h-screen bg-[#F7F0E4]">
      <Navbar />

      {/* Hero */}
      <section className="relative h-72 md:h-96 flex items-end pb-12 overflow-hidden">
        <img src={HERO_BG} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F2419]/50 to-[#0F2419]/85" />
        <div className="relative z-10 container">
          <div className="section-label mb-3 text-[#D4922A]">Plan Your Journey</div>
          <h1 className="font-display text-white font-semibold" style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)" }}>
            Experiences
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-white">
        <div ref={introRef} className="reveal container">
          <div className="max-w-3xl">
            <div className="gold-rule mb-6" />
            <p className="font-body text-[#0F2419]/75 text-lg leading-relaxed">
              When you visit Wisconsin, you're invited to experience the rich heritage of its 11 federally recognized Tribal Nations. The depth of flavors in traditional foods, the rhythm of music, and the beauty of handcrafted art invite families and friends to connect, learn, and celebrate together.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Sections */}
      {categories.map((cat, i) => (
        <section
          key={cat.id}
          id={cat.id}
          className={`py-20 ${i % 2 === 0 ? "bg-[#F7F0E4]" : "bg-white"}`}
        >
          <div className="container">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}>
              {/* Image */}
              <div className={`relative overflow-hidden ${i % 2 !== 0 ? "lg:order-2" : ""}`}>
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={cat.img}
                    alt={cat.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="absolute top-4 left-4 bg-[#0F2419] px-3 py-1.5">
                  <span className="font-label text-[#D4922A] text-[0.58rem] tracking-[0.15em] uppercase">{cat.label}</span>
                </div>
              </div>

              {/* Content */}
              <div className={i % 2 !== 0 ? "lg:order-1" : ""}>
                <div className="section-label mb-3">{cat.label}</div>
                <h2 className="font-display text-[#0F2419] font-semibold mb-4" style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)" }}>
                  {cat.title}
                </h2>
                <div className="gold-rule mb-6" />
                <p className="font-body text-[#0F2419]/70 text-base leading-relaxed mb-6">
                  {cat.description}
                </p>

                <div className="mb-6">
                  <div className="font-label text-[#0F2419] text-[0.6rem] tracking-[0.15em] uppercase mb-3">What to Expect</div>
                  <ul className="space-y-2">
                    {cat.experiences.map((exp) => (
                      <li key={exp} className="flex items-start gap-2">
                        <span className="text-[#D4922A] mt-1 flex-shrink-0">—</span>
                        <span className="font-body text-[#0F2419]/65 text-sm">{exp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="font-label text-[#0F2419] text-[0.6rem] tracking-[0.15em] uppercase mb-3">Featured Destinations</div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {cat.highlights.map((h) => (
                      <div key={h.name} className="bg-[#0F2419]/5 px-3 py-2.5">
                        <div className="font-body text-[#0F2419] text-sm font-medium">{h.name}</div>
                        <div className="font-body text-[#0F2419]/50 text-xs">{h.location}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-16 bg-[#0F2419]">
        <div className="container text-center">
          <div className="section-label mb-4 text-[#D4922A]">Start Planning</div>
          <h2 className="font-display text-white font-semibold mb-6" style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)" }}>
            Your Wisconsin Adventure Awaits
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/events"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#D4922A] text-[#0F2419] font-label text-[0.7rem] tracking-[0.15em] uppercase hover:bg-[#C4821A] transition-colors font-semibold"
            >
              View Upcoming Events <ArrowRight size={14} />
            </Link>
            <Link
              href="/tribes"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/40 text-white font-label text-[0.7rem] tracking-[0.15em] uppercase hover:border-white hover:bg-white/10 transition-colors"
            >
              Explore the Nations
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
