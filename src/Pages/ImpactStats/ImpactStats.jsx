import { Heart, Users, MapPin } from "lucide-react"; // lucide-react icons (already available in shadcn setup)

export default function ImpactStats() {
  const stats = [
    { icon: <Heart className="w-8 h-8 text-brand-600 mb-3" />, kpi: "12+", label: "Active Programs" },
    { icon: <Users className="w-8 h-8 text-brand-600 mb-3" />, kpi: "4,200+", label: "Children Reached" },
    { icon: <MapPin className="w-8 h-8 text-brand-600 mb-3" />, kpi: "18", label: "Districts Covered" },
  ];

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-16 relative overflow-hidden">
      {/* subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#e2e8f0_1px,transparent_0)] [background-size:20px_20px] opacity-40"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 relative z-10 px-6">
        {stats.map((s) => (
          <div
            key={s.label}
            className="group relative bg-white/80 backdrop-blur-md border border-brand-100 shadow-md hover:shadow-lg rounded-2xl p-8 text-center transition-all duration-300 hover:-translate-y-1"
          >
            <div className="flex justify-center">{s.icon}</div>
            <div className="text-4xl font-extrabold text-brand-700 mt-2 group-hover:scale-110 transition-transform">
              {s.kpi}
            </div>
            <div className="text-gray-600 mt-1 font-medium">{s.label}</div>

            {/* accent line animation */}
            <div className="absolute bottom-0 left-0 h-1 bg-brand-600 w-0 group-hover:w-full transition-all duration-500 rounded-b-2xl"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
