// src/pages/Portfolios2025.jsx
import React, { useState } from "react";
import { ArrowLeft, Moon, Sun, Globe } from "lucide-react";
import T from "../components/T";

const Container = ({ children }) => (
  <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">{children}</div>
);

export default function Portfolios2025() {
  const [lang, setLang] = useState("pt");
  const [isDarkMode, setIsDarkMode] = useState(false);

  const translations = {
    pt: {
      title: "Investimento Conservador com Exposição a Tecnologia, Inteligência Artificial e Criptomoedas",
      date: "31/08/2025",
      intro: "Esta análise comenta a viabilidade de integrar ativos tradicionais de baixo risco com instrumentos de inovação tecnológica e digital em portfólios de investimento com diferentes perfis de risco. São comparados três cenários: um portfólio conservador (Cenário A), um portfólio equilibrado com inclusão moderada de tecnologia e criptomoedas (Cenário B) e um portfólio arriscado com forte exposição a ativos voláteis (Cenário C).",
      summary: "Resumo",
      summaryText: "Utilizando dados históricos de rentabilidade e uma simulação de investimento periódico de 500 euros mensais durante 20 anos, este estudo procura evidenciar como a diversificação e o horizonte temporal de longo prazo moldam o equilíbrio entre preservação de capital e potencial de crescimento. Os resultados demonstram que, embora o cenário conservador assegure maior estabilidade, os cenários equilibrado e arriscado oferecem perspetivas de valorização significativamente superiores.",
      methodology: "Metodologia",
      methodologyText: "O Cenário A (Conservador) privilegia instrumentos de baixo risco, com 60% em depósitos e obrigações, 10% em ações defensivas, 5% em ações tecnológicas, 10% em liquidez e 15% em ETFs de obrigações globais. O Cenário B (Equilibrado) combina 35% em instrumentos conservadores, 20% em ações tecnológicas, 15% em criptomoedas, 10% em ETFs, 10% em ações defensivas e 10% em liquidez. O Cenário C (Arriscado) aloca 25% em obrigações e depósitos, 30% em tecnologia e IA, 25% em criptomoedas, 10% em ações defensivas, 5% em ETFs e 5% em liquidez.",
      fig1Caption: "Figura 1: Cenário A (Conservador)",
      fig2Caption: "Figura 2: Cenário B (Equilibrado)",
      fig3Caption: "Figura 3: Cenário C (Arriscado)",
      fig4Caption: "Figura 4: Rentabilidade Média Anual (%)",
      fig5Caption: "Figura 5: Valor Futuro Acumulado para os Cenários",
      results: "Resultados",
      resultsText: "Os cálculos apontam para retornos esperados de 3,58% no Cenário A, 6,35% no Cenário B e 8,33% no Cenário C, traduzindo-se em 175 mil euros (A), 240 mil euros (B) e 305 mil euros (C) após 20 anos. Ajustados por inflação e custos, os valores reais são cerca de 140 mil euros (A), 190 mil euros (B) e 240 mil euros (C). Os rácios de Sharpe são 0,2796 para A, 0,2821 para B e 0,2827 para C.",
      tableTitle: "Tabela 1: Valor Futuro e Rácio de Sharpe",
      tableScenario: "Cenário",
      tableFutureValue: "Valor Futuro (€)",
      tableSharpeRatio: "Rácio de Sharpe",
      tableRow1Scenario: "A (Conservador)",
      tableRow1FutureValue: "174 883,63",
      tableRow1SharpeRatio: "0,2796",
      tableRow2Scenario: "B (Equilibrado)",
      tableRow2FutureValue: "240 845,61",
      tableRow2SharpeRatio: "0,2821",
      tableRow3Scenario: "C (Arriscado)",
      tableRow3FutureValue: "306 693,60",
      tableRow3SharpeRatio: "0,2827",
      discussion: "Discussão",
      discussionText: "O Cenário A privilegia a segurança, mas com rendimentos modestos. O Cenário B equilibra ativos tradicionais e inovadores, aumentando a rentabilidade sem comprometer excessivamente a estabilidade. O Cenário C oferece o maior potencial de valorização, mas com maior volatilidade. Os rácios de Sharpe semelhantes sugerem que a escolha depende do perfil de risco do investidor.",
      conclusion: "Conclusão",
      conclusionText: "A diversificação entre ativos tradicionais e inovadores é eficaz para investidores de longo prazo. O Cenário A assegura estabilidade, o Cenário B equilibra segurança e valorização, e o Cenário C maximiza retornos com maior risco. A escolha depende do perfil de risco e objetivos do investidor.",
      references: "Referências",
      realityNoteTitle: "Nota de Realidade",
      realityNoteText: "Estes resultados são projeções simplificadas e não garantem desempenhos futuros. Não incluem impostos, comissões, slippage, custos de reequilíbrio nem tracking error de ETFs. As rentabilidades médias assumem distribuição estável e não capturam risco de sequência de retornos (anos negativos no início reduzem fortemente o valor final). A inflação reduz o poder de compra do montante acumulado. As contribuições mensais presumem execução perfeita no último dia útil e ausência de falhas de disciplina de poupança.",
      backToAnalyses: "Voltar à página anterior",
    },
    en: {
      title: "Conservative Investment with Exposure to Technology, Artificial Intelligence, and Cryptocurrencies",
      date: "08/31/2025",
      intro: "This analysis discusses the feasibility of integrating low-risk traditional assets with technological and digital innovation instruments in investment portfolios with different risk profiles. Three scenarios are compared: a conservative portfolio (Scenario A), a balanced portfolio with moderate inclusion of technology and cryptocurrencies (Scenario B), and a risky portfolio with high exposure to volatile assets (Scenario C).",
      summary: "Summary",
      summaryText: "Using historical return data and a simulation of a periodic investment of 500 euros monthly over 20 years, this study aims to demonstrate how diversification and a long-term horizon shape the balance between capital preservation and growth potential. The results show that while the conservative scenario ensures greater stability, the balanced and risky scenarios offer significantly higher appreciation prospects.",
      methodology: "Methodology",
      methodologyText: "Scenario A (Conservative) prioritizes low-risk instruments, with 60% in deposits and bonds, 10% in defensive stocks, 5% in technology stocks, 10% in cash, and 15% in global bond ETFs. Scenario B (Balanced) combines 35% in conservative instruments, 20% in technology stocks, 15% in cryptocurrencies, 10% in ETFs, 10% in defensive stocks, and 10% in cash. Scenario C (Risky) allocates 25% to bonds and deposits, 30% to technology and AI, 25% to cryptocurrencies, 10% to defensive stocks, 5% to ETFs, and 5% to cash.",
      fig1Caption: "Figure 1: Scenario A (Conservative)",
      fig2Caption: "Figure 2: Scenario B (Balanced)",
      fig3Caption: "Figure 3: Scenario C (Risky)",
      fig4Caption: "Figure 4: Average Annual Return (%)",
      fig5Caption: "Figure 5: Accumulated Future Value for the Scenarios",
      results: "Results",
      resultsText: "Calculations indicate expected returns of 3.58% for Scenario A, 6.35% for Scenario B, and 8.33% for Scenario C, translating to 175,000 euros (A), 240,000 euros (B), and 305,000 euros (C) after 20 years. Adjusted for inflation and costs, the real values are approximately 140,000 euros (A), 190,000 euros (B), and 240,000 euros (C). Sharpe ratios are 0.2796 for A, 0.2821 for B, and 0.2827 for C.",
      tableTitle: "Table 1: Future Value and Sharpe Ratio",
      tableScenario: "Scenario",
      tableFutureValue: "Future Value (€)",
      tableSharpeRatio: "Sharpe Ratio",
      tableRow1Scenario: "A (Conservative)",
      tableRow1FutureValue: "174,883.63",
      tableRow1SharpeRatio: "0.2796",
      tableRow2Scenario: "B (Balanced)",
      tableRow2FutureValue: "240,845.61",
      tableRow2SharpeRatio: "0.2821",
      tableRow3Scenario: "C (Risky)",
      tableRow3FutureValue: "306,693.60",
      tableRow3SharpeRatio: "0.2827",
      discussion: "Discussion",
      discussionText: "Scenario A prioritizes safety but yields modest returns. Scenario B balances traditional and innovative assets, enhancing returns without overly compromising stability. Scenario C offers the highest growth potential but with increased volatility. Similar Sharpe ratios suggest that the choice depends on the investor’s risk profile.",
      conclusion: "Conclusion",
      conclusionText: "Diversification between traditional and innovative assets is effective for long-term investors. Scenario A ensures stability, Scenario B balances safety and growth, and Scenario C maximizes returns with higher risk. The choice depends on the investor’s risk profile and objectives.",
      references: "References",
      realityNoteTitle: "Reality Check",
      realityNoteText: "These results are simplified projections and do not guarantee future performance. They exclude taxes, fees, slippage, rebalancing costs, and ETF tracking error. Average returns assume stable distributions and do not capture sequence-of-returns risk (early negative years can materially reduce the final balance). Inflation erodes purchasing power. Monthly contributions assume perfect execution on the last business day and no lapses in savings discipline.",
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
                href="/analises/portfolios-2025.pdf"
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
                <T lang={lang} translations={translations}>{translations[lang].summary}</T>
              </h2>
              <p className="mb-6">
                <T lang={lang} translations={translations}>{translations[lang].summaryText}</T>
              </p>

              <h2 className="text-2xl font-semibold text-indigo-700 dark:text-indigo-300 mt-10 mb-4">
                <T lang={lang} translations={translations}>{translations[lang].methodology}</T>
              </h2>
              <p className="mb-6">
                <T lang={lang} translations={translations}>{translations[lang].methodologyText}</T>
              </p>
              <figure>
                <img src="/images/portfolios/fig1.png" alt={translations[lang].fig1Caption} className="my-6 mx-auto rounded-lg shadow-md" />
                <figcaption className="text-center text-sm text-neutral-500 dark:text-neutral-400">
                  <T lang={lang} translations={translations}>{translations[lang].fig1Caption}</T>
                </figcaption>
              </figure>
              <figure>
                <img src="/images/portfolios/fig2.png" alt={translations[lang].fig2Caption} className="my-6 mx-auto rounded-lg shadow-md" />
                <figcaption className="text-center text-sm text-neutral-500 dark:text-neutral-400">
                  <T lang={lang} translations={translations}>{translations[lang].fig2Caption}</T>
                </figcaption>
              </figure>
              <figure>
                <img src="/images/portfolios/fig3.png" alt={translations[lang].fig3Caption} className="my-6 mx-auto rounded-lg shadow-md" />
                <figcaption className="text-center text-sm text-neutral-500 dark:text-neutral-400">
                  <T lang={lang} translations={translations}>{translations[lang].fig3Caption}</T>
                </figcaption>
              </figure>
              <figure>
                <img src="/images/portfolios/fig4.png" alt={translations[lang].fig4Caption} className="my-6 mx-auto rounded-lg shadow-md" />
                <figcaption className="text-center text-sm text-neutral-500 dark:text-neutral-400">
                  <T lang={lang} translations={translations}>{translations[lang].fig4Caption}</T>
                </figcaption>
              </figure>

              <h2 className="text-2xl font-semibold text-indigo-700 dark:text-indigo-300 mt-10 mb-4">
                <T lang={lang} translations={translations}>{translations[lang].results}</T>
              </h2>
              <p className="mb-6">
                <T lang={lang} translations={translations}>{translations[lang].resultsText}</T>
              </p>
              <figure>
                <img src="/images/portfolios/fig5.png" alt={translations[lang].fig5Caption} className="my-6 mx-auto rounded-lg shadow-md" />
                <figcaption className="text-center text-sm text-neutral-500 dark:text-neutral-400">
                  <T lang={lang} translations={translations}>{translations[lang].fig5Caption}</T>
                </figcaption>
              </figure>

              <table className="table-auto border-collapse border border-neutral-200 dark:border-neutral-800 my-12 w-full text-sm">
                <thead>
                  <tr className="bg-neutral-100 dark:bg-neutral-900">
                    <th className="border border-neutral-200 dark:border-neutral-800 px-4 py-2">
                      <T lang={lang} translations={translations}>{translations[lang].tableScenario}</T>
                    </th>
                    <th className="border border-neutral-200 dark:border-neutral-800 px-4 py-2">
                      <T lang={lang} translations={translations}>{translations[lang].tableFutureValue}</T>
                    </th>
                    <th className="border border-neutral-200 dark:border-neutral-800 px-4 py-2">
                      <T lang={lang} translations={translations}>{translations[lang].tableSharpeRatio}</T>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-4 py-2"><T lang={lang} translations={translations}>{translations[lang].tableRow1Scenario}</T></td>
                    <td className="border px-4 py-2 text-center"><T lang={lang} translations={translations}>{translations[lang].tableRow1FutureValue}</T></td>
                    <td className="border px-4 py-2 text-center"><T lang={lang} translations={translations}>{translations[lang].tableRow1SharpeRatio}</T></td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2"><T lang={lang} translations={translations}>{translations[lang].tableRow2Scenario}</T></td>
                    <td className="border px-4 py-2 text-center"><T lang={lang} translations={translations}>{translations[lang].tableRow2FutureValue}</T></td>
                    <td className="border px-4 py-2 text-center"><T lang={lang} translations={translations}>{translations[lang].tableRow2SharpeRatio}</T></td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2"><T lang={lang} translations={translations}>{translations[lang].tableRow3Scenario}</T></td>
                    <td className="border px-4 py-2 text-center"><T lang={lang} translations={translations}>{translations[lang].tableRow3FutureValue}</T></td>
                    <td className="border px-4 py-2 text-center"><T lang={lang} translations={translations}>{translations[lang].tableRow3SharpeRatio}</T></td>
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
              <ul className="list-disc pl-6 mb-6">
                <li>Baur, D. G., Hong, K., & Lee, A. D. (2018). Bitcoin: Medium of exchange or speculative assets? Journal of International Financial Markets, Institutions and Money, 54, 177–189.</li>
                <li>BlackRock (2025). 2025 Midyear Investment Outlook.</li>
                <li>Markowitz, H. (1952). Portfolio Selection. The Journal of Finance, 7(1), 77–91.</li>
                <li>Sharpe, W. (1966). Mutual Fund Performance. The Journal of Business, 39(1), 119–138.</li>
              </ul>

              <h2 className="text-2xl font-semibold text-indigo-700 dark:text-indigo-300 mt-10 mb-4">
                <T lang={lang} translations={translations}>{translations[lang].realityNoteTitle}</T>
              </h2>
              <p className="text-red-600 dark:text-red-400">
                <T lang={lang} translations={translations}>{translations[lang].realityNoteText}</T>
              </p>
            </article>
          </div>
        </Container>
      </section>
    </div>
  );
}
