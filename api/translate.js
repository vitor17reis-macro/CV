// api/translate.js
// API Route para Vercel (Edge/Node) a servir de proxy para LibreTranslate.
// Evita problemas de CORS e permite configurar LT_ENDPOINT no Vercel.
export default async function handler(req, res) {
  if (req.method === "OPTIONS") {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    res.status(204).end();
    return;
  }
  try {
    const body = typeof req.body === "string" ? JSON.parse(req.body || "{}") : (req.body || {});
    const { q, source, target, format = "text" } = body;
    const endpoint = (process.env.LT_ENDPOINT || "https://translate.argosopentech.com") + "/translate";

    const r = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ q, source, target, format }),
    });

    const data = await r.json();
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.status(200).json(data);
  } catch (e) {
    res.status(500).json({ error: "proxy_error", detail: String(e) });
  }
}
