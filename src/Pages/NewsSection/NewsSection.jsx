import React from "react";

export default function NewsSection() {
  const news = [
    {
      id: 1,
      title: "Blood Donation Drive Brings Hope",
      image:
        "https://images.unsplash.com/photo-1603398938378-e54eab446dde?auto=format&fit=crop&w=1600&q=80",
      date: "2025-09-21",
      summary:
        "Over 200 volunteers participated in our recent blood donation campaign, helping save countless lives across Jessore.",
    },
    {
      id: 2,
      title: "Tree Plantation Day 2025",
      image:
        "https://images.unsplash.com/photo-1552089123-2d26226fc2d0?auto=format&fit=crop&w=1600&q=80",
      date: "2025-08-17",
      summary:
        "More than 500 trees were planted in collaboration with local schools and volunteers to promote a greener Jessore.",
    },
    {
      id: 3,
      title: "Environmental Clean-Up Campaign",
      image:
        "https://images.unsplash.com/photo-1598515213693-d8c5e6d3f15b?auto=format&fit=crop&w=1600&q=80",
      date: "2025-07-10",
      summary:
        "Our youth teams came together to clean public areas and raise awareness about waste management.",
    },
    {
      id: 4,
      title: "Healthcare Camp for Rural Families",
      image:
        "https://images.unsplash.com/photo-1580281657521-6d8a8b8c6a2d?auto=format&fit=crop&w=1600&q=80",
      date: "2025-06-02",
      summary:
        "Free medical check-ups and medicine distribution helped hundreds of families in rural Jessore.",
    },
  ];

  return (
    <section
      id="news"
      className="scroll-mt-28 md:scroll-mt-32 bg-gray-50 text-gray-900 py-1"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900">
            Latest News & Updates
          </h2>
          <p className="text-lg text-gray-600 mt-3">
            Stay informed about our latest initiatives and events happening in
            Jessore.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {news.map((item) => (
            <article
              key={item.id}
              className="group rounded-2xl overflow-hidden bg-white border hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-56 w-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 space-y-3">
                <div className="text-sm text-lime-600 font-semibold">
                  {new Date(item.date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-lime-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.summary}</p>
                <a
                  href="#"
                  className="inline-block text-lime-600 font-semibold hover:text-lime-700 transition-all"
                >
                  Read More →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
