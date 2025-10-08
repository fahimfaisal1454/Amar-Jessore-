import { BookOpen, HeartPulse, Droplets, Shield } from "lucide-react";

export default function ProgramsGrid() {
  const items = [
    {
      icon: <BookOpen className="w-10 h-10 text-lime-600" />,
      title: "Education",
      blurb: "Scholarships, school kits, and tutoring for children.",
      href: "/projects#education",
    },
    {
      icon: <HeartPulse className="w-10 h-10 text-lime-600" />,
      title: "Healthcare",
      blurb: "Community clinics, screenings, and emergency support.",
      href: "/projects#health",
    },
    {
      icon: <Droplets className="w-10 h-10 text-lime-600" />,
      title: "Water & Sanitation",
      blurb: "Clean wells, hygiene awareness, and safe water access.",
      href: "/projects#wash",
    },
    {
      icon: <Shield className="w-10 h-10 text-lime-600" />,
      title: "Child Protection",
      blurb: "Programs to keep families together and children safe.",
      href: "/projects#protection",
    },
  ];

  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-white py-16 overflow-hidden">
      {/* background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#e2e8f0_1px,transparent_0)] [background-size:22px_22px] opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section title */}
        <div className="text-center mb-12" data-aos="fade-down">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
            Our Programs
          </h2>
          <div className="mx-auto w-24 h-1 bg-lime-600 rounded-full" />
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Building brighter futures through education, health, and protection.
          </p>
        </div>

        {/* Program cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((i, idx) => (
            <a
              key={i.title}
              href={i.href}
              data-aos="fade-up"
              data-aos-delay={idx * 140}      // stagger cards
              className="group relative flex flex-col items-center text-center rounded-2xl bg-white border border-gray-200 p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-lime-300"
            >
              <div className="flex justify-center items-center w-16 h-16 rounded-full bg-lime-50 group-hover:bg-lime-100 transition-colors mb-4">
                {i.icon}
              </div>
              <h3 className="font-semibold text-lg text-gray-900 group-hover:text-lime-700 transition-colors">
                {i.title}
              </h3>
              <p className="text-sm text-gray-600 mt-2">{i.blurb}</p>
              <span className="inline-block mt-4 text-lime-600 font-medium group-hover:translate-x-1 transition-transform">
                Learn more →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
