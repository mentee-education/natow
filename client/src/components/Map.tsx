import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { cn } from "@/lib/utils";

interface Location {
  name: string;
  lat: number;
  lng: number;
  url: string;
}

interface MapViewProps {
  className?: string;
  locations: Location[];
}

export function MapView({ className, locations }: MapViewProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    const map = L.map(containerRef.current, {
      scrollWheelZoom: false,
    }).setView([45.0, -89.5], 7);

    L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/">CARTO</a>',
      maxZoom: 19,
    }).addTo(map);

    const bounds = L.latLngBounds([]);

    locations.forEach((loc) => {
      const marker = L.circleMarker([loc.lat, loc.lng], {
        radius: 9,
        fillColor: "#D4922A",
        fillOpacity: 1,
        color: "#0F2419",
        weight: 2,
      }).addTo(map);

      marker.bindPopup(
        `<div style="font-family:serif;padding:4px 2px">
          <strong style="color:#0F2419;font-size:13px">${loc.name}</strong><br/>
          <a href="${loc.url}" target="_blank" rel="noopener noreferrer" style="color:#D4922A;font-size:11px;text-decoration:none">Visit Website →</a>
        </div>`
      );

      bounds.extend([loc.lat, loc.lng]);
    });

    if (bounds.isValid()) {
      map.fitBounds(bounds, { padding: [30, 30] });
    }

    mapRef.current = map;

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, [locations]);

  return <div ref={containerRef} className={cn("w-full h-[500px]", className)} />;
}
