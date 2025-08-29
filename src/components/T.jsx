// src/components/T.jsx
import React, { useEffect, useState } from "react";
import { autoTranslate } from "../lib/translateService";

/**
 * Componente de fallback de tradução:
 * - Se lang === srcLang -> mostra children tal como está.
 * - Se official (tradução oficial) existir -> usa official.
 * - Caso contrário -> tenta tradução automática (cache local).
 *
 * Uso típico:
 * <T lang={lang} srcLang="pt">Texto original em PT</T>
 * <T lang={lang} srcLang="pt" official="English manual translation">Texto PT</T>
 */
export default function T({ children, srcLang = "pt", lang = "pt", official }) {
  const [text, setText] = useState(children);

  useEffect(() => {
    let mounted = true;
    (async () => {
      if (lang === srcLang) {
        if (mounted) setText(children);
        return;
      }
      if (official) {
        if (mounted) setText(official);
        return;
      }
      const t = await autoTranslate(children, srcLang, lang);
      if (mounted) setText(t);
    })();
    return () => { mounted = false; };
  }, [children, srcLang, lang, official]);

  return <>{text}</>;
}
