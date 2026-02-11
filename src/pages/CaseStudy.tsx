import { useParams, Link } from "react-router-dom";
import { caseStudies } from "@/data/caseStudies";
import Logo from "@/components/Logo";
import { ArrowLeft, ArrowRight } from "lucide-react";

import caseStudy1Hero from "@/assets/case-study-1-hero.jpg";
import caseStudy2Hero from "@/assets/case-study-2-hero.jpg";
import caseStudy3Hero from "@/assets/case-study-3-hero.jpg";
import caseStudy1 from "@/assets/case-study-1.jpg";
import caseStudy2 from "@/assets/case-study-2.jpg";
import caseStudy3 from "@/assets/case-study-3.jpg";

const heroImages: Record<string, string> = {
  "case-study-1-hero": caseStudy1Hero,
  "case-study-2-hero": caseStudy2Hero,
  "case-study-3-hero": caseStudy3Hero,
};

const cardImages: Record<string, string> = {
  "case-study-1": caseStudy1,
  "case-study-2": caseStudy2,
  "case-study-3": caseStudy3,
};

const CaseStudy = () => {
  const { id } = useParams<{ id: string }>();
  const study = caseStudies.find((s) => s.id === id);
  const currentIndex = caseStudies.findIndex((s) => s.id === id);
  const prevStudy = caseStudies[(currentIndex - 1 + caseStudies.length) % caseStudies.length];
  const nextStudy = caseStudies[(currentIndex + 1) % caseStudies.length];

  if (!study) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p>Case study not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="flex items-center justify-between px-8 md:px-16 py-6">
        <Link to="/">
          <Logo />
        </Link>
        <Link to="/" className="link-underline text-sm font-medium">
          Back to home
        </Link>
      </header>

      {/* Hero */}
      <div className="w-full">
        <img
          src={heroImages[study.heroImage]}
          alt={study.title}
          className="w-full h-[50vh] md:h-[65vh] object-cover"
        />
      </div>

      {/* Content */}
      <div className="mx-auto max-w-3xl px-8 md:px-16 py-16">
        <div className="flex flex-wrap items-baseline gap-4 mb-2">
          <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
            {study.role}
          </span>
          <span className="text-sm text-muted-foreground">— {study.year}</span>
        </div>

        <h1 className="text-4xl md:text-5xl tracking-tight leading-[1.1]">{study.title}</h1>
        <p className="mt-2 text-xl text-muted-foreground font-serif italic">{study.subtitle}</p>

        {/* Overview */}
        <div className="mt-12">
          <h2 className="text-2xl tracking-tight mb-4">Overview</h2>
          <p className="text-base leading-relaxed text-muted-foreground">{study.overview}</p>
        </div>

        {/* Deliverables */}
        <div className="mt-12">
          <h2 className="text-2xl tracking-tight mb-4">Key Deliverables</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {study.deliverables.map((d) => (
              <li key={d} className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-foreground shrink-0" />
                {d}
              </li>
            ))}
          </ul>
        </div>

        {/* Additional Image */}
        <div className="mt-12">
          <img
            src={cardImages[study.cardImage]}
            alt={`${study.title} detail`}
            className="w-full rounded-lg"
          />
        </div>
      </div>

      {/* Prev/Next Navigation */}
      <div className="border-t border-border">
        <div className="mx-auto max-w-3xl px-8 md:px-16 py-12 flex justify-between">
          <Link
            to={`/case-study/${prevStudy.id}`}
            className="group flex items-center gap-3 text-sm font-medium hover:text-muted-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            <div>
              <span className="text-xs text-muted-foreground block">Previous</span>
              {prevStudy.title}
            </div>
          </Link>
          <Link
            to={`/case-study/${nextStudy.id}`}
            className="group flex items-center gap-3 text-sm font-medium text-right hover:text-muted-foreground transition-colors"
          >
            <div>
              <span className="text-xs text-muted-foreground block">Next</span>
              {nextStudy.title}
            </div>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="px-8 md:px-16 py-8 text-sm text-muted-foreground">
        © 2026 Mark Murphy
      </footer>
    </div>
  );
};

export default CaseStudy;
