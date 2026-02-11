import Logo from "@/components/Logo";
import InfiniteCarousel from "@/components/InfiniteCarousel";
import ExperienceItem from "@/components/ExperienceItem";
import portrait from "@/assets/portrait.jpg";

const capabilities = {
  Strategy: [
    "Product Vision",
    "Market Research",
    "Competitive Analysis",
    "Roadmap Planning",
    "Stakeholder Alignment",
    "OKR Definition",
    "Growth Strategy",
  ],
  Execution: [
    "Design Systems",
    "Prototyping",
    "User Research",
    "Interaction Design",
    "Visual Design",
    "Design Sprints",
    "Agile Delivery",
  ],
  Leadership: [
    "Team Building",
    "Mentorship",
    "Cross-functional",
    "Culture Building",
    "Hiring & Onboarding",
    "Process Design",
    "Executive Comms",
  ],
};

const experience = [
  { company: "Stripe", role: "Head of Product Design", year: "2024", icon: "💳" },
  { company: "Figma", role: "Senior Design Manager", year: "2022", icon: "🎨" },
  { company: "Airbnb", role: "Staff Product Designer", year: "2020", icon: "🏠" },
  { company: "Google", role: "Senior UX Designer", year: "2018", icon: "🔍" },
  { company: "Spotify", role: "Product Designer", year: "2016", icon: "🎵" },
  { company: "Dropbox", role: "UX Designer", year: "2015", icon: "📦" },
  { company: "IDEO", role: "Design Researcher", year: "2014", icon: "💡" },
  { company: "Frog Design", role: "Junior Designer", year: "2012", icon: "🐸" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Left Column */}
        <div className="w-full lg:w-1/2 px-8 md:px-12 lg:px-16 py-12 lg:py-16 overflow-y-auto">
          <div className="max-w-lg mx-auto lg:mx-0">
            {/* Logo */}
            <Logo />

            {/* Name & Title */}
            <div className="mt-10">
              <h1 className="text-5xl md:text-6xl leading-[1.1] tracking-tight">
                Mark Murphy
              </h1>
              <p className="mt-3 text-lg text-muted-foreground font-medium">
                Product & Design Leader
              </p>
            </div>

            {/* Bio */}
            <div className="mt-10 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                I'm a product and design leader with over 12 years of experience building
                digital products that people love. I specialize in taking complex problems
                and turning them into simple, elegant solutions that drive real business outcomes.
              </p>
              <p>
                Currently exploring new opportunities where I can help teams build exceptional
                products at scale. If you're working on something interesting,{" "}
                <a
                  href="mailto:mark@example.com"
                  className="link-underline text-foreground font-medium"
                >
                  reach out and let's chat!
                </a>
              </p>
            </div>

            {/* Capabilities */}
            <div className="mt-14">
              <h2 className="text-2xl tracking-tight mb-6">Capabilities</h2>
              <div className="grid grid-cols-3 gap-6">
                {Object.entries(capabilities).map(([category, items]) => (
                  <div key={category}>
                    <h3 className="text-sm font-semibold uppercase tracking-wider mb-3 font-sans">
                      {category}
                    </h3>
                    <ul className="space-y-2">
                      {items.map((item) => (
                        <li key={item} className="text-sm text-muted-foreground">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div className="mt-14">
              <h2 className="text-2xl tracking-tight mb-6">Experience</h2>
              <div>
                {experience.map((exp) => (
                  <ExperienceItem key={exp.company} {...exp} />
                ))}
              </div>
            </div>

            {/* Portrait + CTA */}
            <div className="mt-14">
              <img
                src={portrait}
                alt="Mark Murphy portrait"
                className="w-full max-w-sm rounded-lg object-cover aspect-[4/5]"
              />
              <p className="mt-6 text-lg">
                <span className="font-serif italic text-xl">Interested in working together?</span>
                <br />
                <a
                  href="mailto:mark@example.com"
                  className="link-underline mt-2 inline-block text-base font-medium"
                >
                  Get in touch →
                </a>
              </p>
            </div>

            {/* Footer */}
            <footer className="mt-16 pb-8 text-sm text-muted-foreground">
              © 2026 Mark Murphy
            </footer>
          </div>
        </div>

        {/* Right Column — Infinite Carousel */}
        <div className="w-full lg:w-1/2 lg:h-screen lg:sticky lg:top-0 px-6 lg:px-8 py-8 lg:py-8 overflow-hidden bg-secondary/30">
          <InfiniteCarousel />
        </div>
      </div>
    </div>
  );
};

export default Index;
