// src/Pages/Home/Home.jsx
import Banner from "../../Components/Banner/Banner";
import ImpactStats from "../ImpactStats/ImpactStats";
import ProgramsGrid from "../ProgramsGrid/ProgramsGrid";
import StoriesStrip from "../StoriesStrip/StoriesStrip";
import NewsSection from "../NewsSection/NewsSection";

export default function Home() {
  return (
    <div className="bg-black text-white scroll-smooth">
      {/* HERO / HOME */}
      <section id="home" className="scroll-mt-28 md:scroll-mt-32">
        <Banner />
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="scroll-mt-28 md:scroll-mt-32 bg-white text-gray-900"
      >
        <div className="max-w-6xl mx-auto px-6 py-20">
          <h2 className="text-4xl font-extrabold mb-4">About Us</h2>
          <p className="text-lg text-gray-600">
            Amar Jessore is a nonprofit organization dedicated to empowering
            communities through education, healthcare, and environmental
            sustainability. We work directly with local volunteers to build a
            better future for Jessore.
          </p>
        </div>
      </section>

      {/* PROJECTS / PROGRAMS */}
      <section id="projects" className="scroll-mt-28 md:scroll-mt-32">
        <ProgramsGrid />
      </section>

      {/* IMPACT */}
      <section id="impact" className="scroll-mt-28 md:scroll-mt-32">
        <ImpactStats />
      </section>

      {/* STORIES */}
      <section id="stories" className="scroll-mt-28 md:scroll-mt-32">
        <StoriesStrip />
      </section>
      {/* NEWS */}
      <section id="news" className="scroll-mt-28 md:scroll-mt-32">
        <NewsSection />
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="scroll-mt-28 md:scroll-mt-32 bg-brand-700 text-white py-16"
      >
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <p className="text-brand-50 mb-6">
            Have questions or want to get involved? We’d love to hear from you.
          </p>
          <a
            href="mailto:info@amarjessore.org"
            className="inline-block bg-white text-brand-700 font-semibold px-6 py-3 rounded-full hover:bg-brand-50 transition"
          >
            Email Us
          </a>
        </div>
      </section>
    </div>
  );
}
