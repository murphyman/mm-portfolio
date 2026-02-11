import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { caseStudies } from "@/data/caseStudies";

import caseStudy1 from "@/assets/case-study-1.jpg";
import caseStudy2 from "@/assets/case-study-2.jpg";
import caseStudy3 from "@/assets/case-study-3.jpg";

const images: Record<string, string> = {
  "case-study-1": caseStudy1,
  "case-study-2": caseStudy2,
  "case-study-3": caseStudy3,
};

const InfiniteCarousel = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [scrollOffset, setScrollOffset] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientY);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const diff = touchStart - e.touches[0].clientY;
    setScrollOffset((prev) => prev + diff);
    setTouchStart(e.touches[0].clientY);
  };

  const handleTouchEnd = () => {
    setTouchStart(null);
  };

  // Double the cards for seamless loop
  const cards = [...caseStudies, ...caseStudies];

  return (
    <div
      ref={containerRef}
      className="carousel-wrapper relative h-full w-full overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className={isMobile ? "" : "animate-scroll-up"}
        style={isMobile ? { transform: `translateY(${-scrollOffset}px)` } : undefined}
      >
        {cards.map((study, i) => (
          <Link
            key={`${study.id}-${i}`}
            to={`/case-study/${study.id}`}
            className="case-card group relative mb-6 block overflow-hidden rounded-lg"
          >
            <img
              src={images[study.cardImage]}
              alt={study.title}
              className="h-auto w-full object-cover"
              loading="lazy"
            />
            <div className="case-badge absolute bottom-4 left-4 rounded-full bg-foreground px-4 py-2 text-sm font-medium text-primary-foreground">
              View Case Study →
            </div>
            <div className="absolute bottom-4 right-4 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-sm font-medium text-primary-foreground bg-foreground/60 backdrop-blur-sm rounded-full px-3 py-1">
                {study.title}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default InfiniteCarousel;
