import { useEffect, useState } from "react";
import AxiosInstance from "../../Components/AxiosInstance/AxiosInstance";

export default function AboutCMS() {
  const [about, setAbout] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const res = await AxiosInstance.get("about/"); // http://127.0.0.1:8000/api/about/
        setAbout(res.data || null);
      } catch (e) {
        console.error("Failed to fetch About:", e);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) return <div>Loading…</div>;
  if (!about) return <div>No About content yet. Add one in Django Admin.</div>;

  return (
    <div className="max-w-3xl space-y-3">
      <h1 className="text-2xl font-bold">{about.title}</h1>
      {about.subtitle && <p className="text-gray-600">{about.subtitle}</p>}
      {about.image && <img src={about.image} alt="About" className="w-full max-w-lg rounded" />}
      <p className="leading-7 whitespace-pre-line">{about.description}</p>

      {Array.isArray(about.features) && about.features.length > 0 && (
        <div className="mt-4">
          <h2 className="font-semibold mb-2">Features</h2>
          <ul className="list-disc ml-6 space-y-1">
            {about.features.map((f, i) => (
              <li key={i}><strong>{f.title}</strong>{f.detail ? ` — ${f.detail}` : ""}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
