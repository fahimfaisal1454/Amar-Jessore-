// src/Components/StoriesStrip/StoriesStrip.jsx
// Stylish stories/news strip with demo fallback posts for Amar Jessore

export default function StoriesStrip({ posts = [] }) {
  // Fallback demo posts if none provided
  const demoPosts = [
    {
      id: "blood-donation-camp",
      slug: "blood-donation-camp-jessore",
      title: "Community Blood Donation Camp",
      date: "2025-01-15",
      image: "/images/demo/blood-donation.jpg", // put a local image or keep placeholder
      tag: "Health",
      excerpt:
        "Volunteers and youth groups came together to collect 120+ units of blood for patients in need.",
    },
    {
      id: "tree-plantation-drive",
      slug: "tree-plantation-drive-schools",
      title: "Tree Plantation Drive in Schools",
      date: "2025-02-04",
      image: "/images/demo/tree-plantation.jpg",
      tag: "Environment",
      excerpt:
        "We planted 500 saplings across 6 schools to create greener, cooler campuses for students.",
    },
    {
      id: "cleanliness-campaign",
      slug: "environment-cleaning-town",
      title: "Environment Cleaning Campaign",
      date: "2025-02-20",
      image: "/images/demo/environment-cleaning.jpg",
      tag: "Community",
      excerpt:
        "Local residents joined our teams to clean streets and spread awareness on waste segregation.",
    },
  ];

  const list = (posts && posts.length > 0 ? posts : demoPosts).slice(0, 3);

  return (
    <section id="stories" className="relative bg-gradient-to-b from-white to-gray-50 py-16 overflow-hidden">
      {/* subtle pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#e5e7eb_1px,transparent_0)] [background-size:22px_22px] opacity-30"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center">
              Our Stories
            </h2>
            <div className="mt-3 w-24 h-1 bg-brand-600 rounded-full mx-auto"></div>
          </div>
          <a
            href="/resources"
            className="text-brand-700 font-medium hover:underline"
          >
            All stories →
          </a>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {list.map((p) => (
            <a
              key={p.id || p.slug}
              href={`/resources/${p.slug}`}
              className="group relative rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src={p.image || "/images/demo/placeholder.jpg"}
                  alt={p.title}
                  className="h-full w-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                {/* gradient overlay */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
                {/* tag pill */}
                {p.tag && (
                  <span className="absolute left-3 top-3 inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-brand-700 shadow">
                    {p.tag}
                  </span>
                )}
              </div>

              <div className="p-5">
                <div className="text-xs text-gray-500">
                  {p.date ? new Date(p.date).toLocaleDateString() : ""}
                </div>
                <h3 className="mt-1 text-lg font-semibold text-gray-900 group-hover:text-brand-700 transition-colors">
                  {p.title}
                </h3>
                {p.excerpt && (
                  <p className="mt-2 line-clamp-2 text-sm text-gray-600">
                    {p.excerpt}
                  </p>
                )}
                <div className="mt-4 inline-flex items-center text-brand-700 font-medium group-hover:translate-x-1 transition-transform">
                  Read more →
                </div>
              </div>

              {/* bottom accent on hover */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-brand-600 group-hover:w-full transition-all duration-500"></div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
