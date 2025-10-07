import React from "react";
import { HeartHandshake, GraduationCap, Stethoscope, Leaf } from "lucide-react";

export default function AboutUs() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white text-gray-900 py-5 scroll-mt-28 md:scroll-mt-32"
    >
      {/* subtle background pattern */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#e5e7eb_1px,transparent_0)] [background-size:20px_20px] opacity-50" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid gap-12 md:grid-cols-2 items-center">
        {/* Left: copy */}
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold text-cyan-700 border-cyan-200 bg-cyan-50">
            <HeartHandshake className="w-4 h-4" /> About Amar Jessore
          </div>

          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight">
            Empowering Jessore through{" "}
            <span className="bg-gradient-to-r from-lime-500 to-green-500 bg-clip-text text-transparent">
              education, health & environment
            </span>
            .
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            We are a community-driven NGO focused on sustainable change.
            From school support to rural health camps and green initiatives,
            our volunteers and partners work hand-in-hand to build a brighter future.
          </p>

          {/* Pill list */}
          <ul className="mt-6 space-y-3">
            <li className="flex items-start gap-3">
              <GraduationCap className="w-6 h-6 text-cyan-600 mt-1" />
              <div>
                <p className="font-semibold">Education Support</p>
                <p className="text-gray-600 text-sm">
                  Scholarships, tutoring, school kits, community libraries.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Stethoscope className="w-6 h-6 text-cyan-600 mt-1" />
              <div>
                <p className="font-semibold">Healthcare Access</p>
                <p className="text-gray-600 text-sm">
                  Free medical camps, screenings, and health awareness.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Leaf className="w-6 h-6 text-cyan-600 mt-1" />
              <div>
                <p className="font-semibold">Environment Action</p>
                <p className="text-gray-600 text-sm">
                  Tree plantation, clean-ups, and WASH programs.
                </p>
              </div>
            </li>
          </ul>

          {/* Actions */}
         
        </div>

        {/* Right: image collage */}
        <div className="relative">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl ring-1 ring-gray-200">
            <img
              src="https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1600&q=80"
              alt="Children learning together"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>

          {/* floating card */}
          <div className="absolute -bottom-6 -left-6 hidden sm:block">
            <div className="rounded-2xl bg-white shadow-lg p-4 ring-1 ring-gray-200">
              <p className="text-sm font-semibold text-gray-900">
                Community Impact
              </p>
              <p className="text-xs text-gray-600">4,200+ children reached</p>
            </div>
          </div>

          {/* glow */}
          <div className="pointer-events-none absolute -inset-6 rounded-[2rem] bg-gradient-to-r from-cyan-200/30 to-blue-200/30 blur-2xl" />
        </div>
      </div>
    </section>
  );
}
