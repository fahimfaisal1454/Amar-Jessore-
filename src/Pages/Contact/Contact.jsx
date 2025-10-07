import React, { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

export default function Contact() {
  const [status, setStatus] = useState({ ok: false, error: "" });

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus({ ok: false, error: "" });

    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());

    try {
      // TODO: hook up a real endpoint if you want
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

  return (
    <div className="bg-white text-gray-900">
      {/* Hero (centered + reduced bottom padding) */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-white to-blue-50" />
        <div className="relative mx-auto max-w-6xl px-6 pt-14 pb-8 md:pt-16 md:pb-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-white px-3 py-1 text-xs font-semibold text-cyan-700 mx-auto">
            Get in Touch
          </div>
          <h1 className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight">
            Contact{" "}
            <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
              Amar Jessore
            </span>
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-lg text-gray-600">
            Questions, ideas, or want to volunteer? We’d love to hear from you.
          </p>
        </div>
      </section>

      {/* Content (tighter top padding) */}
      <section className="relative pt-6 md:pt-8 pb-12 md:pb-16">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 md:grid-cols-5">
          {/* Left: Contact Info */}
          <aside className="md:col-span-2 space-y-6">
            <div className="rounded-2xl border border-cyan-100 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-bold">Contact Information</h2>
              <p className="mt-1 text-gray-600">
                Reach us via email, phone, or visit our office.
              </p>

              <ul className="mt-6 space-y-4">
                <li className="flex gap-3">
                  <Mail className="mt-1 h-5 w-5 text-cyan-600" />
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <a
                      href="mailto:info@amarjessore.org"
                      className="font-medium text-cyan-700 hover:text-cyan-800"
                    >
                      info@amarjessore.org
                    </a>
                  </div>
                </li>

                <li className="flex gap-3">
                  <Phone className="mt-1 h-5 w-5 text-cyan-600" />
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <a
                      href="tel:+8801XXXXXXXXX"
                      className="font-medium text-cyan-700 hover:text-cyan-800"
                    >
                      +880 1X-XXXX-XXXX
                    </a>
                  </div>
                </li>

                <li className="flex gap-3">
                  <MapPin className="mt-1 h-5 w-5 text-cyan-600" />
                  <div>
                    <p className="text-sm text-gray-500">Address</p>
                    <p className="font-medium">
                      Jessore, Khulna Division, Bangladesh
                    </p>
                  </div>
                </li>

                <li className="flex gap-3">
                  <Clock className="mt-1 h-5 w-5 text-cyan-600" />
                  <div>
                    <p className="text-sm text-gray-500">Hours</p>
                    <p className="font-medium">Sat–Thu: 10:00–18:00</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Map */}
            <div className="overflow-hidden rounded-2xl border border-cyan-100 shadow-sm">
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
          <div className="md:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-cyan-100 bg-white p-6 shadow-sm"
            >
              <h2 className="text-xl font-bold">Send us a message</h2>
              <p className="mt-1 text-gray-600">
                We usually reply within 1–2 business days.
              </p>

              <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="sm:col-span-1">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-gray-700"
                  >
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="mt-1 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none ring-cyan-300 focus:ring-2"
                    placeholder="Your name"
                  />
                </div>

                <div className="sm:col-span-1">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="mt-1 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none ring-cyan-300 focus:ring-2"
                    placeholder="you@example.com"
                  />
                </div>

                <div className="sm:col-span-1">
                  <label
                    htmlFor="phone"
                    className="text-sm font-medium text-gray-700"
                  >
                    Phone (optional)
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="mt-1 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none ring-cyan-300 focus:ring-2"
                    placeholder="+880…"
                  />
                </div>

                <div className="sm:col-span-1">
                  <label
                    htmlFor="subject"
                    className="text-sm font-medium text-gray-700"
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    className="mt-1 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none ring-cyan-300 focus:ring-2"
                    placeholder="How can we help?"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-gray-700"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="mt-1 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none ring-cyan-300 focus:ring-2"
                    placeholder="Write your message here…"
                  />
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between gap-3">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 font-semibold text-white shadow hover:shadow-cyan-400/30 transition-transform hover:scale-105"
                >
                  <Send className="h-4 w-4" />
                  Send Message
                </button>

                {status.ok && (
                  <span className="text-sm font-medium text-cyan-700">
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
    </div>
  );
}
