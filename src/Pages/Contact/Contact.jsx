import React, { useMemo } from "react";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

export default function Contact() {
  const [status, setStatus] = React.useState({ ok: false, error: "" });

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus({ ok: false, error: "" });

    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());

    try {
      const body = encodeURIComponent(
        `Name: ${payload.name}\nEmail: ${payload.email}\nPhone: ${payload.phone || "-"}\nSubject: ${payload.subject}\n\n${payload.message}`
      );
      window.location.href = `mailto:info@amarjessore.org?subject=${encodeURIComponent(
        payload.subject || "Contact from website"
      )}&body=${body}`;

      setStatus({ ok: true, error: "" });
      e.currentTarget.reset();
    } catch (err) {
      setStatus({ ok: false, error: "Something went wrong. Please try again." });
    }
  }

  // Stagger delays for the contact info list items
  const infoItems = useMemo(
    () => [
      {
        icon: <Mail className="mt-1 h-5 w-5 text-lime-600" />,
        label: "Email",
        content: (
          <a href="mailto:info@amarjessore.org" className="font-medium text-lime-700 hover:text-lime-800">
            info@amarjessore.org
          </a>
        ),
      },
      {
        icon: <Phone className="mt-1 h-5 w-5 text-lime-600" />,
        label: "Phone",
        content: (
          <a href="tel:+8801XXXXXXXXX" className="font-medium text-lime-700 hover:text-lime-800">
            +880 1X-XXXX-XXXX
          </a>
        ),
      },
      {
        icon: <MapPin className="mt-1 h-5 w-5 text-lime-600" />,
        label: "Address",
        content: <p className="font-medium">Jessore, Khulna Division, Bangladesh</p>,
      },
      {
        icon: <Clock className="mt-1 h-5 w-5 text-lime-600" />,
        label: "Hours",
        content: <p className="font-medium">Sat–Thu: 10:00–18:00</p>,
      },
    ],
    []
  );

  return (
    <section id="contact" className="scroll-mt-28 md:scroll-mt-32 bg-white text-gray-900">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-lime-50 via-white to-blue-50" />
        <div
          className="relative mx-auto max-w-6xl px-6 pt-10 pb-2 md:pt-1 md:pb-2 text-center"
          data-aos="fade-down"
          data-aos-duration="800"
          data-aos-once="false"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-lime-200 bg-white px-3 py-1 text-xs font-semibold text-lime-700 mx-auto"
               data-aos="zoom-in" data-aos-delay="120" data-aos-once="false">
            Get in Touch
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mt-2">
            Contact{" "}
            <span className="bg-gradient-to-r from-lime-500 to-green-500 bg-clip-text text-transparent">
              Amar Jessore
            </span>
          </h1>
          <p className="mt-2 max-w-2xl mx-auto text-lg text-gray-600">
            Questions, ideas, or want to volunteer? We’d love to hear from you.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="relative pt-3 md:pt-4 pb-12 md:pb-14">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 md:grid-cols-5">
          {/* Left: Contact Info */}
          <aside
            className="md:col-span-2 space-y-6"
            data-aos="fade-right"
            data-aos-anchor-placement="top-bottom"
            data-aos-once="false"
          >
            <div className="rounded-2xl border border-lime-100 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-bold">Contact Information</h2>
              <p className="mt-1 text-gray-600">
                Reach us via email, phone, or visit our office.
              </p>

              <ul className="mt-6 space-y-4">
                {infoItems.map((it, idx) => (
                  <li
                    key={it.label}
                    className="flex gap-3"
                    data-aos="fade-up"
                    data-aos-delay={120 + idx * 120}   // stagger each row
                    data-aos-once="false"
                  >
                    {it.icon}
                    <div>
                      <p className="text-sm text-gray-500">{it.label}</p>
                      {it.content}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Map */}
            <div
              className="overflow-hidden rounded-2xl border border-lime-100 shadow-sm"
              data-aos="zoom-in-up"
              data-aos-delay="120"
              data-aos-once="false"
            >
              <iframe
                title="Amar Jessore Map"
                className="h-56 w-full"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=Jessore,Bangladesh&z=12&output=embed"
              />
            </div>
          </aside>

          {/* Right: Form */}
          <div
            className="md:col-span-3"
            data-aos="fade-left"
            data-aos-anchor-placement="top-bottom"
            data-aos-once="false"
          >
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-lime-100 bg-white p-4 md:p-5 shadow-sm"
            >
              <h2 className="text-xl font-bold">Send us a message</h2>
              <p className="mt-1 text-gray-600">We usually reply within 1–2 business days.</p>

              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="sm:col-span-1" data-aos="fade-up" data-aos-delay="80" data-aos-once="false">
                  <label htmlFor="name" className="text-sm font-medium text-gray-700">Full Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="mt-0.5 w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 outline-none ring-lime-300 focus:ring-2 transition-shadow"
                    placeholder="Your name"
                  />
                </div>

                <div className="sm:col-span-1" data-aos="fade-up" data-aos-delay="120" data-aos-once="false">
                  <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="mt-0.5 w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 outline-none ring-lime-300 focus:ring-2 transition-shadow"
                    placeholder="you@example.com"
                  />
                </div>

                <div className="sm:col-span-1" data-aos="fade-up" data-aos-delay="160" data-aos-once="false">
                  <label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone (optional)</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="mt-0.5 w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 outline-none ring-lime-300 focus:ring-2 transition-shadow"
                    placeholder="+880…"
                  />
                </div>

                <div className="sm:col-span-1" data-aos="fade-up" data-aos-delay="200" data-aos-once="false">
                  <label htmlFor="subject" className="text-sm font-medium text-gray-700">Subject</label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    className="mt-0.5 w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 outline-none ring-lime-300 focus:ring-2 transition-shadow"
                    placeholder="How can we help?"
                  />
                </div>

                <div className="sm:col-span-2" data-aos="fade-up" data-aos-delay="240" data-aos-once="false">
                  <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="mt-0.5 w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 outline-none ring-lime-300 focus:ring-2 transition-shadow"
                    placeholder="Write your message here…"
                  />
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between gap-3" data-aos="fade-up" data-aos-delay="280" data-aos-once="false">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-lime-500 to-blue-500 px-5 py-2.5 font-semibold text-white shadow hover:shadow-lime-400/30 transition-transform hover:scale-105"
                >
                  <Send className="h-4 w-4" />
                  Send Message
                </button>

                {status.ok && (
                  <span className="text-sm font-medium text-lime-700">
                    Thanks! Your message is ready in your email app.
                  </span>
                )}
                {status.error && (
                  <span className="text-sm font-medium text-red-600">
                    {status.error}
                  </span>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>
    </section>
  );
}
