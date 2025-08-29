\
// src/lib/translateService.js
const DEFAULT_ENDPOINT = "https://translate.argosopentech.com";
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

export async function autoTranslate(text, srcLang, targetLang) {
  try {
    if (!text || srcLang === targetLang) return text;
    const cache = getCache();
    const k = keyHash(text, srcLang, targetLang);
    if (cache[k]) return cache[k];

    const res = await fetch(`${DEFAULT_ENDPOINT}/translate`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ q: String(text), source: srcLang, target: targetLang, format: "text" }),
    });

    let data = null;
    try { data = await res.json(); }
    catch { data = null; }

    if (!res.ok || !data) {
      console.warn("[translateService] Non-OK or non-JSON response, returning original text.");
      return text;
    }

    const translated = data?.translatedText;
    if (typeof translated === "string" && translated.trim().length > 0) {
      cache[k] = translated;
      setCache(cache);
      return translated;
    }
    return text;
  } catch (e) {
    console.error("[translateService] Error:", e);
    return text;
  }
}
