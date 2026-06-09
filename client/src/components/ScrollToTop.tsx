/*
 * NATIVE WISCONSIN — Scroll To Top Button
 * Fixed bottom-right arrow that appears after scrolling 400px
 * Colors: forest green bg, gold arrow
 */
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollUp = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button
      onClick={scrollUp}
      aria-label="Back to top"
      className={`fixed bottom-6 right-6 z-50 w-11 h-11 flex items-center justify-center bg-[#0F2419] border border-[#D4922A]/60 text-[#D4922A] shadow-lg transition-all duration-300 hover:bg-[#D4922A] hover:text-[#0F2419] hover:border-[#D4922A] active:scale-95 ${
        visible ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
      style={{ borderRadius: 0 }}
    >
      <ArrowUp size={16} strokeWidth={2.5} />
    </button>
  );
}
