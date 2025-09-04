// src/pages/PublicDebt2025.jsx
import React, { useState } from "react";
import { ArrowLeft, Moon, Sun, Globe } from "lucide-react";
import T from "../components/T";

const Container = ({ children }) => (
  <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">{children}</div>
);

export default function PublicDebt2025() {
  const [lang, setLang] = useState("pt");
  const [isDarkMode, setIsDarkMode] = useState(false);

  const translations = {
    pt: {
      title: "Análise da Dívida Pública Global: Tendências, Riscos e Sustentabilidade",
      date: "03/09/2025",
      intro: "Estudo sobre a evolução da dívida pública mundial com base no World Economic Outlook (FMI, 2025), abordando tendências, riscos e estratégias de sustentabilidade fiscal.",
      methodology: "Metodologia baseada em dados agregados do FMI, com análise de séries temporais e projeções até 2030.",
      results: "Resultados",
      tableTitle: "Rácio Dívida/PIB por Região (2025, %)",
      global: "Global",
      us: "EUA",
      japan: "Japão",
      eu: "UE",
      discussion: "Discussão",
      discussionText: "A análise evidencia níveis historicamente elevados de endividamento global, com destaque para o Japão (250% do PIB). A União Europeia e os EUA mantêm rácios elevados mas relativamente estáveis, enquanto a média global ultrapassa os 90%, refletindo desafios de sustentabilidade fiscal a médio prazo.",
      conclusion: "Conclusão",
      conclusionText: "A sustentabilidade da dívida pública dependerá de políticas fiscais prudentes, crescimento económico robusto e capacidade de resposta a choques externos. Estratégias de consolidação orçamental e reformas estruturais serão essenciais para evitar riscos de instabilidade financeira.",
      references: "Referências",
      realityCheck: "Nota de Realidade",
      warning: "As projeções do FMI assumem estabilidade macroeconómica, o que pode subestimar riscos futuros.",
      backToAnalyses: "Voltar à página anterior",
    },
    en: {
      title: "Analysis of Global Public Debt: Trends, Risks, and Sustainability",
      date: "09/03/2025",
      intro: "Study on the evolution of global public debt based on the World Economic Outlook (IMF, 2025), addressing trends, risks, and fiscal sustainability strategies.",
      methodology: "Methodology based on aggregated IMF data, with time-series analysis and projections to 2030.",
      results: "Results",
      tableTitle: "Debt-to-GDP Ratio by Region (2025, %)",
      global: "Global",
      us: "US",
      japan: "Japan",
      eu: "EU",
      discussion: "Discussion",
      discussionText: "The analysis highlights historically high levels of global debt, with Japan standing out at 250% of GDP. The EU and the US remain elevated but relatively stable, while the global average surpasses 90%, reflecting medium-term fiscal sustainability challenges.",
      conclusion: "Conclusion",
      conclusionText: "The sustainability of public debt will depend on prudent fiscal policies, robust economic growth, and the ability to respond to external shocks. Fiscal consolidation strategies and structural reforms will be essential to prevent financial instability risks.",
      references: "References",
      realityCheck: "Reality Check",
      warning: "IMF projections assume macroeconomic stability, which may underestimate future risks.",
      backToAnalyses: "Return to previous page",
    },
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDarkMode
          ? "bg-gradient-to-b from-neutral-950 to-neutral-900 dark"
          : "bg-gradient-to-b from-blue-50 to-white"
      } text-neutral-900 dark:text-neutral-100`}
    >
      {/* Navigation */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 dark:supports-[backdrop-filter]:bg-neutral-900/70 border-b border-neutral-200 dark:border-neutral-800">
        <Container>
          <div className="flex items-center justify-between h-16">
            <a href="/#analises" className="inline-flex items-center gap-2 font-semibold">
              <ArrowLeft className="w-4 h-4" aria-hidden />
              <T lang={lang} translations={translations}>{translations[lang].backToAnalyses}</T>
            </a>
            <div className="flex gap-3">
              <button
                onClick={() => setLang("pt")}
                className={`inline-flex items-center gap-2 px-3 py-2 rounded-xl border border-neutral-200 dark:border-neutral-800 font-semibold transition-all ${
                  lang === "pt"
                    ? "bg-blue-600 text-white"
                    : "bg-white dark:bg-neutral-950 text-neutral-700 dark:text-neutral-200 hover:bg-blue-100 dark:hover:bg-blue-900"
                }`}
              >
                <Globe className="w-4 h-4" aria-hidden /> PT
              </button>
              <button
                onClick={() => setLang("en")}
                className={`inline-flex items-center gap-2 px-3 py-2 rounded-xl border border-neutral-200 dark:border-neutral-800 font-semibold transition-all ${
                  lang === "en"
                    ? "bg-blue-600 text-white"
                    : "bg-white dark:bg-neutral-950 text-neutral-700 dark:text-neutral-200 hover:bg-blue-100 dark:hover:bg-blue-900"
                }`}
              >
                <Globe className="w-4 h-4" aria-hidden /> EN
              </button>
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="inline-flex items-center gap-2 px-3 py-2 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all"
              >
                {isDarkMode ? <Sun className="w-4 h-4" aria-hidden /> : <Moon className="w-4 h-4" aria-hidden />}
                {isDarkMode ? "Light" : "Dark"}
              </button>
              <a
                href="/analises/public-debt-2025.pdf"
                download
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all"
              >
                📄 Download PDF
              </a>
            </div>
          </div>
        </Container>
      </header>

      {/* Article content */}
      <section className="py-12">
        <Container>
          <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6 bg-white dark:bg-neutral-950 shadow-md">
            <article
              className="leading-relaxed text-lg text-neutral-900 dark:text-neutral-100"
              style={{ fontFamily: "'Inter', sans-serif", lineHeight: "1.6" }}
            >
              <h1 className="text-4xl font-semibold text-blue-700 dark:text-blue-400 mb-4">
                <T lang={lang} translations={translations}>{translations[lang].title}</T>
              </h1>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-6">
                <T lang={lang} translations={translations}>{translations[lang].date}</T>
              </p>

              <p className="mb-6">
                <T lang={lang} translations={translations}>{translations[lang].intro}</T>
              </p>

              <h2 className="text-2xl font-semibold text-indigo-700 dark:text-indigo-300 mt-10 mb-4">
                Metodologia
              </h2>
              <p className="mb-6">
                <T lang={lang} translations={translations}>{translations[lang].methodology}</T>
              </p>

              <h2 className="text-2xl font-semibold text-indigo-700 dark:text-indigo-300 mt-10 mb-4">
                <T lang={lang} translations={translations}>{translations[lang].results}</T>
              </h2>
              <table className="table-auto border-collapse border border-neutral-200 dark:border-neutral-800 my-6 w-full text-sm">
                <thead>
                  <tr className="bg-neutral-100 dark:bg-neutral-900">
                    <th className="border px-4 py-2"><T lang={lang} translations={translations}>{translations[lang].global}</T></th>
                    <th className="border px-4 py-2"><T lang={lang} translations={translations}>{translations[lang].us}</T></th>
                    <th className="border px-4 py-2"><T lang={lang} translations={translations}>{translations[lang].japan}</T></th>
                    <th className="border px-4 py-2"><T lang={lang} translations={translations}>{translations[lang].eu}</T></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-4 py-2 text-center">93%</td>
                    <td className="border px-4 py-2 text-center">99%</td>
                    <td className="border px-4 py-2 text-center">250%</td>
                    <td className="border px-4 py-2 text-center">85%</td>
                  </tr>
                </tbody>
              </table>

              <h2 className="text-2xl font-semibold text-indigo-700 dark:text-indigo-300 mt-10 mb-4">
                <T lang={lang} translations={translations}>{translations[lang].discussion}</T>
              </h2>
              <p className="mb-6">
                <T lang={lang} translations={translations}>{translations[lang].discussionText}</T>
              </p>

              <h2 className="text-2xl font-semibold text-indigo-700 dark:text-indigo-300 mt-10 mb-4">
                <T lang={lang} translations={translations}>{translations[lang].conclusion}</T>
              </h2>
              <p className="mb-6">
                <T lang={lang} translations={translations}>{translations[lang].conclusionText}</T>
              </p>

              <h2 className="text-2xl font-semibold text-indigo-700 dark:text-indigo-300 mt-10 mb-4">
                <T lang={lang} translations={translations}>{translations[lang].references}</T>
              </h2>
              <ul className="list-disc pl-6 mb-6 text-neutral-900 dark:text-neutral-100">
                <li><a href="https://www.imf.org" className="text-blue-600 dark:text-blue-400 underline">IMF World Economic Outlook (2025)</a></li>
                <li><a href="https://www.worldbank.org" className="text-blue-600 dark:text-blue-400 underline">World Bank Data (2025)</a></li>
              </ul>

              <h2 className="text-2xl font-semibold text-indigo-700 dark:text-indigo-300 mt-10 mb-4">
                <T lang={lang} translations={translations}>{translations[lang].realityCheck}</T>
              </h2>
              <p className="text-red-600 dark:text-red-400">
                <T lang={lang} translations={translations}>{translations[lang].warning}</T>
              </p>
            </article>
          </div>
        </Container>
      </section>
    </div>
  );
}
