// src/lib/translateService.js
// Fallback de tradução automática via LibreTranslate.
// Usa um proxy local (/api/translate) por omissão para evitar CORS.
// Se preferires apontar diretamente para uma instância pública ou self-hosted,
// define VITE_LT_ENDPOINT no Vercel (ex.: https://translate.argosopentech.com).

const DEFAULT_ENDPOINT = import.meta.env.VITE_LT_ENDPOINT || "/api";

const CACHE_KEY = "autoTranslations_v1";

function getCache() {
  try { return JSON.parse(localStorage.getItem(CACHE_KEY) || "{}"); }
  catch { return {}; }
}

function setCache(obj) {
  try { localStorage.setItem(CACHE_KEY, JSON.stringify(obj)); } catch {}
}

function keyHash(text, src, tgt) {
  return `${src}::${tgt}::${text}`;
}

/**
 * autoTranslate(text, srcLang, targetLang)
 * - Devolve o próprio texto se já estiver no idioma alvo ou em caso de erro.
 * - Cacheia resultados em localStorage para poupar chamadas.
 */
export async function autoTranslate(text, srcLang, targetLang) {
  if (!text || srcLang === targetLang) return text;

  const cache = getCache();
  const k = keyHash(text, srcLang, targetLang);
  if (cache[k]) return cache[k];

  try {
    const res = await fetch(`${DEFAULT_ENDPOINT}/translate`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ q: text, source: srcLang, target: targetLang, format: "text" }),
    });
    if (!res.ok) throw new Error("Translation error");
    const data = await res.json();
    const translated = data?.translatedText || text;
    cache[k] = translated;
    setCache(cache);
    return translated;
  } catch {
    // Falha silenciosa -> devolve original
    return text;
  }
}
