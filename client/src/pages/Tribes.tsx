/*
 * NATIVE WISCONSIN — Tribes / Our Nations Page
 */
import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { MapPin, ArrowRight, ExternalLink } from "lucide-react";
import { MapView } from "@/components/Map";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663407421710/ResnJz7wuYxVieXdqtq7xE/hero_bg-WccTKyJ6EqU6rA5NWhGrDh.webp";
const NATIONS_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663407421710/ResnJz7wuYxVieXdqtq7xE/wisconsin_nations_bg-aVW6MgVUPm8YqDcLSNXhJQ.webp";

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

const tribes = [
  {
    name: "Bad River Band of the Lake Superior Tribe of Chippewa Indians",
    shortName: "Bad River Band",
    nation: "Lake Superior Chippewa (Ojibwe)",
    region: "Northwest Wisconsin",
    location: "Odanah, WI",
    description: "The Bad River Band's reservation encompasses the Kakagon Sloughs, a nationally significant wild rice wetland and one of the largest undisturbed wetland complexes in the Great Lakes region.",
    website: "https://badriver-nsn.gov",
  },
  {
    name: "Forest County Potawatomi Community",
    shortName: "Forest County Potawatomi",
    nation: "Potawatomi",
    region: "Northeast Wisconsin",
    location: "Crandon, WI",
    description: "The Forest County Potawatomi maintain a deep connection to the land and operate the Potawatomi Hotel & Casino in Milwaukee, supporting tribal economic development and cultural preservation.",
    website: "https://fcpotawatomi.com",
  },
  {
    name: "Ho-Chunk Nation",
    shortName: "Ho-Chunk Nation",
    nation: "Ho-Chunk (Winnebago)",
    region: "Central Wisconsin",
    location: "Black River Falls, WI",
    description: "One of Wisconsin's original nations, the Ho-Chunk have an oral history placing their origin at Móogašuc (Red Banks). Their language, culture, and traditions remain vibrant today.",
    website: "https://ho-chunknation.com",
  },
  {
    name: "Lac Courte Oreilles Band of Lake Superior Chippewa Indians",
    shortName: "Lac Courte Oreilles Band",
    nation: "Lake Superior Chippewa (Ojibwe)",
    region: "Northwest Wisconsin",
    location: "Hayward, WI",
    description: "The Lac Courte Oreilles Band is known for their wild rice harvesting traditions and operate the Lac Courte Oreilles Casino Lodge & Convention Center in the heart of Wisconsin's Northwoods.",
    website: "https://lco-nsn.gov",
  },
  {
    name: "Lac du Flambeau Band of Lake Superior Chippewa Indians",
    shortName: "Lac du Flambeau Band",
    nation: "Lake Superior Chippewa (Ojibwe)",
    region: "North Central Wisconsin",
    location: "Lac du Flambeau, WI",
    description: "Named for the torchlight fishing practices of the Ojibwe people, Lac du Flambeau is home to the George W. Brown Jr. Ojibwe Museum and the annual Lac du Flambeau Pow Wow.",
    website: "https://ldftribe.com",
  },
  {
    name: "Menominee Indian Tribe of Wisconsin",
    shortName: "Menominee Indian Tribe",
    nation: "Menominee",
    region: "Northeast Wisconsin",
    location: "Keshena, WI",
    description: "The Menominee are among the oldest continuous residents of the Great Lakes region. Their sustainably managed forest is a model of Indigenous environmental stewardship recognized worldwide.",
    website: "https://menominee-nsn.gov",
  },
  {
    name: "Oneida Nation",
    shortName: "Oneida Nation",
    nation: "Oneida (Haudenosaunee)",
    region: "Northeast Wisconsin",
    location: "Oneida, WI",
    description: "The Oneida Nation relocated to Wisconsin in the 1820s from their ancestral homeland in New York. They operate the Oneida Casino and the Oneida Nation Museum, celebrating Haudenosaunee heritage.",
    website: "https://oneida-nsn.gov",
  },
  {
    name: "Red Cliff Band of Lake Superior Chippewa",
    shortName: "Red Cliff Band",
    nation: "Lake Superior Chippewa (Ojibwe)",
    region: "Northwest Wisconsin",
    location: "Bayfield, WI",
    description: "Located on the shores of Lake Superior near Bayfield, the Red Cliff Band is home to Frog Bay Tribal National Park — the nation's first Tribal National Park — offering stunning coastal trails.",
    website: "https://redcliff-nsn.gov",
  },
  {
    name: "Sokaogon Chippewa Community (Mole Lake Band)",
    shortName: "Sokaogon Chippewa",
    nation: "Lake Superior Chippewa (Ojibwe)",
    region: "North Central Wisconsin",
    location: "Crandon, WI",
    description: "The Sokaogon Chippewa Community has successfully defended their wild rice lakes and natural resources, and their story of environmental advocacy is an inspiring chapter in Wisconsin history.",
    website: "https://sokaogon.com",
  },
  {
    name: "St. Croix Chippewa Indians of Wisconsin",
    shortName: "St. Croix Chippewa",
    nation: "Lake Superior Chippewa (Ojibwe)",
    region: "Northwest Wisconsin",
    location: "Hertel, WI",
    description: "The St. Croix Chippewa Indians operate multiple community sites across northwest Wisconsin and are known for their cultural programs and the St. Croix Casino.",
    website: "https://stcroixojibwe-nsn.gov",
  },
  {
    name: "Stockbridge-Munsee Community",
    shortName: "Stockbridge-Munsee",
    nation: "Mohican",
    region: "Northeast Wisconsin",
    location: "Bowler, WI",
    description: "The Stockbridge-Munsee Community are descendants of the Mohican people who relocated to Wisconsin in the 1820s. They operate the Mohican North Star Casino and the Arvid E. Miller Library Museum.",
    website: "https://mohican.com",
  },
];

export default function Tribes() {
  const introRef = useReveal();

  return (
    <div className="min-h-screen bg-[#F7F0E4]">
      <Navbar />

      {/* Hero */}
      <section className="relative h-72 md:h-96 flex items-end pb-12 overflow-hidden">
        <img src={HERO_BG} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F2419]/50 to-[#0F2419]/85" />
        <div className="relative z-10 container">
          <div className="section-label mb-3 text-[#D4922A]">Member Nations</div>
          <h1 className="font-display text-white font-semibold" style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)" }}>
            Wisconsin's Tribal Nations
          </h1>
        </div>
      </section>

            {/* Intro + Map side-by-side */}
      <section className="py-16 bg-white">
        <div ref={introRef} className="reveal container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
            {/* Left: Intro text */}
            <div className="flex flex-col justify-center">
              <div className="gold-rule mb-6" />
              <p className="font-body text-[#0F2419]/75 text-lg leading-relaxed mb-4">
                Wisconsin is home to <strong>11 federally recognized Tribal Nations</strong>, each with a distinct language, history, and cultural identity. These sovereign nations have called this land home since time immemorial, and their traditions, governance, and connection to the natural world continue to shape Wisconsin's identity today.
              </p>
              <p className="font-body text-[#0F2419]/65 text-base leading-relaxed">
                NATOW works in partnership with each of these nations to promote authentic tourism experiences that honor tribal sovereignty and support economic self-determination.
              </p>
            </div>
            {/* Right: Interactive Google Map */}
            <div className="w-full h-[420px] lg:h-[480px] rounded-sm shadow-xl overflow-hidden border border-[#0F2419]/10">
                  <MapView
                    onMapReady={(map) => {
                      const bounds = new google.maps.LatLngBounds();
                      const infoWindow = new google.maps.InfoWindow();
                      const locations = [
                        { name: "Bad River Band", lat: 46.5065, lng: -90.6543, url: "https://badriver-nsn.gov" },
                        { name: "Forest County Potawatomi", lat: 45.5580, lng: -88.9282, url: "https://fcpotawatomi.com" },
                        { name: "Ho-Chunk Nation", lat: 44.2955, lng: -90.8507, url: "https://ho-chunknation.com" },
                        { name: "Lac Courte Oreilles Band", lat: 45.9227, lng: -91.1485, url: "https://lco-nsn.gov" },
                        { name: "Lac du Flambeau Band", lat: 45.9660, lng: -89.8956, url: "https://ldftribe.com" },
                        { name: "Menominee Indian Tribe", lat: 44.8788, lng: -88.7093, url: "https://menominee-nsn.gov" },
                        { name: "Oneida Nation", lat: 44.5133, lng: -88.1926, url: "https://oneida-nsn.gov" },
                        { name: "Red Cliff Band", lat: 46.8605, lng: -90.8015, url: "https://redcliff-nsn.gov" },
                        { name: "Sokaogon Chippewa", lat: 45.5785, lng: -88.7026, url: "https://sokaogon.com" },
                        { name: "St. Croix Chippewa", lat: 45.6271, lng: -92.0760, url: "https://stcroixojibwe-nsn.gov" },
                        { name: "Stockbridge-Munsee", lat: 44.8596, lng: -88.9768, url: "https://mohican.com" },
                      ];
                      locations.forEach((loc) => {
                        const marker = new google.maps.Marker({
                          position: { lat: loc.lat, lng: loc.lng },
                          map,
                          title: loc.name,
                          icon: {
                            path: google.maps.SymbolPath.CIRCLE,
                            scale: 9,
                            fillColor: "#D4922A",
                            fillOpacity: 1,
                            strokeColor: "#0F2419",
                            strokeWeight: 2,
                          },
                        });
                        bounds.extend(marker.getPosition()!);
                        marker.addListener("click", () => {
                          infoWindow.setContent(
                            `<div style="font-family:serif;padding:4px 2px">
                              <strong style="color:#0F2419;font-size:13px">${loc.name}</strong><br/>
                              <a href="${loc.url}" target="_blank" style="color:#D4922A;font-size:11px;text-decoration:none">Visit Website →</a>
                            </div>`
                          );
                          infoWindow.open(map, marker);
                        });
                      });
                      map.fitBounds(bounds);
                      map.setOptions({
                        styles: [
                          { elementType: "geometry", stylers: [{ color: "#e8e0d0" }] },
                          { elementType: "labels.text.fill", stylers: [{ color: "#0F2419" }] },
                          { featureType: "water", elementType: "geometry", stylers: [{ color: "#a8c8d8" }] },
                          { featureType: "road", stylers: [{ visibility: "simplified" }] },
                          { featureType: "poi", stylers: [{ visibility: "off" }] },
                          { featureType: "administrative.locality", elementType: "labels", stylers: [{ visibility: "simplified" }] },
                        ],
                      });
                    }}
                  />
            </div>
            <p className="font-body text-[#0F2419]/50 text-xs mt-3 text-center col-span-full">
              Click any marker to learn about each Tribal Nation
            </p>
          </div>
        </div>
      </section>
      {/* Nation Cards — full width below */}
      <section className="py-16 bg-[#F7F0E4]">
        <div className="container">
          <div className="section-label mb-8 text-[#D4922A] text-center">All 11 Nations</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {tribes.map((tribe, i) => (
                <div
                  key={tribe.name}
                  className="bg-white border border-[#0F2419]/10 hover:border-[#D4922A]/40 hover:shadow-md transition-all duration-300 p-6 md:p-8 group"
                  style={{ animationDelay: `${i * 50}ms` }}
                >
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <div className="font-label text-[#9B3A1A] text-[0.58rem] tracking-[0.12em] uppercase">
                          {tribe.nation}
                        </div>
                      </div>
                      <h2 className="font-display text-[#0F2419] text-2xl font-semibold mb-1">
                        {tribe.shortName}
                      </h2>
                      <div className="flex items-center gap-1.5 text-[#0F2419]/40 mb-4">
                        <MapPin size={11} />
                        <span className="font-body text-xs">{tribe.location} · {tribe.region}</span>
                      </div>
                      <p className="font-body text-[#0F2419]/65 text-sm leading-relaxed">
                        {tribe.description}
                      </p>
                    </div>
                    <a
                      href={tribe.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 font-label text-[0.58rem] tracking-[0.12em] uppercase text-[#D4922A] border border-[#D4922A]/40 px-4 py-2 hover:bg-[#D4922A] hover:text-[#0F2419] transition-all duration-200 self-start whitespace-nowrap"
                    >
                      Visit Website <ExternalLink size={10} />
                    </a>
                  </div>
                </div>
                            ))}
          </div>
        </div>
      </section>
      {/* CTA */}
      <section className="py-16 bg-[#0F2419]">
        <div className="container text-center">
          <div className="section-label mb-4 text-[#D4922A]">Ready to Explore?</div>
          <h2 className="font-display text-white font-semibold mb-6" style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)" }}>
            Plan Your Cultural Journey
          </h2>
          <p className="font-body text-white/60 text-base max-w-xl mx-auto mb-8">
            Each Tribal Nation offers unique experiences — from pow wows and cultural centers to natural landscapes and tribal gaming resorts.
          </p>
          <Link
            href="/experiences"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#D4922A] text-[#0F2419] font-label text-[0.7rem] tracking-[0.15em] uppercase hover:bg-[#C4821A] transition-colors font-semibold"
          >
            Discover Experiences <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
