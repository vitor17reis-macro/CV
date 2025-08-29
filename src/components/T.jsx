// src/components/T.jsx
import React, { useEffect, useState } from "react";
import { autoTranslate } from "../lib/translateService";

// props:
// - children: string original
// - srcLang: "pt" | "en" (idioma do children)
// - lang: idioma atual do site (pt|en), vindo do teu estado global
// - official?: string (tradução oficial, se existir)
export default function T({ children, srcLang = "pt", lang = "pt", official }) {
  const [text, setText] = useState(children);

  useEffect(() => {
    let mounted = true;
    (async () => {
      if (lang === srcLang) {
        if (mounted) setText(children);
        return;
      }
      // se houver tradução oficial escrita à mão, usa-a
      if (official) {
        if (mounted) setText(official);
        return;
      }
      // fallback automático
      const t = await autoTranslate(children, srcLang, lang);
      if (mounted) setText(t);
    })();
    return () => { mounted = false; };
  }, [children, srcLang, lang, official]);

  return <>{text}</>;
}
