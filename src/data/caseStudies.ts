export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  role: string;
  year: string;
  overview: string;
  deliverables: string[];
  cardImage: string;
  heroImage: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: "finflow",
    title: "FinFlow Dashboard",
    subtitle: "Reimagining financial analytics for modern teams",
    role: "Design Lead",
    year: "2024",
    overview:
      "FinFlow needed a complete redesign of their analytics platform to serve a growing enterprise customer base. I led a cross-functional team of 6 designers and engineers to deliver a comprehensive dashboard experience that increased user engagement by 40% and reduced time-to-insight by 60%.",
    deliverables: [
      "Design system & component library",
      "Interactive data visualization framework",
      "User research & persona development",
      "Responsive dashboard layouts",
      "Onboarding flow optimization",
      "Accessibility audit & remediation",
    ],
    cardImage: "case-study-1",
    heroImage: "case-study-1-hero",
  },
  {
    id: "shopwise",
    title: "ShopWise Commerce",
    subtitle: "A mobile-first shopping experience",
    role: "Product Designer",
    year: "2023",
    overview:
      "ShopWise was a greenfield project to build a premium mobile commerce platform from scratch. Working closely with product and engineering, I designed the end-to-end shopping experience — from discovery through checkout — resulting in a 25% higher conversion rate than industry benchmarks.",
    deliverables: [
      "End-to-end mobile UX design",
      "Checkout flow optimization",
      "Product discovery & search experience",
      "Brand identity & visual language",
      "Motion design & micro-interactions",
      "A/B testing framework",
    ],
    cardImage: "case-study-2",
    heroImage: "case-study-2-hero",
  },
  {
    id: "medconnect",
    title: "MedConnect Platform",
    subtitle: "Humanizing healthcare through thoughtful design",
    role: "Senior Product Designer",
    year: "2023",
    overview:
      "MedConnect needed to transform their legacy patient management system into a modern, intuitive platform that both clinicians and patients would love. I led the design effort to create a unified experience that reduced administrative burden by 35% and improved patient satisfaction scores by 50%.",
    deliverables: [
      "Patient portal redesign",
      "Clinician dashboard & workflow tools",
      "Appointment scheduling system",
      "Secure messaging interface",
      "Data visualization for health metrics",
      "HIPAA-compliant design patterns",
    ],
    cardImage: "case-study-3",
    heroImage: "case-study-3-hero",
  },
];
