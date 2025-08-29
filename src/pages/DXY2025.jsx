import React, { useState } from "react";

export default function DXY2025() {
  const [lang, setLang] = useState("pt");

  return (
    <main className="py-12 px-6 max-w-4xl mx-auto">
      {/* Controlo de idioma e download */}
      <div className="flex items-center justify-between mb-10">
        <div className="flex gap-2">
          <button
            onClick={() => setLang("pt")}
            className={`px-3 py-1 rounded font-semibold ${
              lang === "pt" ? "bg-blue-600 text-white" : "border border-neutral-400"
            }`}
          >
            PT
          </button>
          <button
            onClick={() => setLang("en")}
            className={`px-3 py-1 rounded font-semibold ${
              lang === "en" ? "bg-blue-600 text-white" : "border border-neutral-400"
            }`}
          >
            EN
          </button>
        </div>
        <a
          href="/analises/dxy-2025.pdf"
          download
          className="px-4 py-2 rounded bg-green-600 text-white hover:bg-green-700"
        >
          📄 Download PDF
        </a>
      </div>

      {lang === "pt" && (
        <article
          className="leading-relaxed text-lg text-neutral-800 dark:text-neutral-200"
          style={{ fontFamily: "Georgia, serif", lineHeight: "1.5" }}
        >
          <h1 className="text-3xl font-bold text-blue-700 dark:text-blue-400 mb-6">
            Índice do Dólar Americano (DXY)
          </h1>

          <p>
            O Índice do Dólar Americano — <strong>DXY</strong> — oferece uma medida
            fundamental para compreender a força relativa da moeda norte-americana
            face a uma cesta ponderada de moedas estrangeiras. Criado em 1973 no
            pós-Bretton Woods, corresponde a um valor médio ponderado do dólar
            relativamente ao euro, iene, libra, dólar canadiano, coroa sueca e
            franco suíço, sendo amplamente utilizado em análises cambiais e na
            avaliação da moeda enquanto ativo de reserva. Rogoff (1985) e Lothian
            (2006) discutem o seu papel histórico e limitam-se a considerar mudanças
            na composição do índice como eventos raros, mas relevantes para a
            interpretação dos movimentos no longo prazo.
          </p>

          <h2 className="text-2xl font-bold text-purple-700 dark:text-purple-300 mt-10 mb-4">
            Panorama Histórico e Tendências de Fundo
          </h2>
          <p>
            O gráfico histórico de longo prazo (Figura 1) evidencia os principais
            ciclos do DXY desde os anos 1970, com máximos significativos em 1985
            (cerca de 160 pontos) e 2002 (~120 pontos), refletindo políticas
            monetárias restritivas e um fortalecimento económico dos EUA. O mínimo
            de 2008 (~70 pontos) ilustra o impacto da crise financeira global,
            seguido por uma estratégia monetária ultra-expansionista. Mais
            recentemente, nota-se um canal ascendente iniciado após 2011, indicando
            uma tendência estrutural de apreciação gradual do dólar, apesar da
            volatilidade conjuntural.
          </p>
          <img
            src="/images/dxy/fig1.png"
            alt="Gráfico histórico trimestral do DXY (1967–2025)"
            className="my-12 mx-auto"
          />

          <h2 className="text-2xl font-bold text-purple-700 dark:text-purple-300 mt-10 mb-4">
            Avaliação Técnica Atual
          </h2>
          <p>
            No presente, para além da trajetória de longo prazo, é crucial observar
            os movimentos no curto e médio prazo. O gráfico semanal (Figura 2), com
            médias móveis de 20, 50, 100 e 200 períodos, revela que o DXY tem
            oscilado dentro de um canal ascendente, com suporte firme na zona dos
            97–98 pontos e a principal resistência em torno dos 120 pontos. Apesar
            da pressão descendente de curto prazo indicada pelas médias móveis, o
            canal permanece intacto, sugerindo que a tendência estrutural permanece
            válida.
          </p>
          <img
            src="/images/dxy/fig2.png"
            alt="Gráfico semanal do DXY com médias móveis (2020–2025)"
            className="my-12 mx-auto"
          />

          <p>
            O gráfico diário (Figura 3) permite observar com mais detalhe a
            proximidade do suporte estrutural e a dinâmica dos indicadores técnicos.
            O Stochastic RSI encontra-se em zona neutra (cerca de 45), apontando
            para ausência clara de sobrecompra ou sobrevenda, enquanto o MACD indica
            um enfraquecimento ligeiro do momentum. No seu conjunto, os dados
            sugerem uma fase de consolidação, sem sinais inequívocos de reversão
            imediata ou aceleração.
          </p>
          <img
            src="/images/dxy/fig3.png"
            alt="Gráfico diário do DXY com Stochastic RSI e MACD (2025)"
            className="my-12 mx-auto"
          />

          <h2 className="text-2xl font-bold text-purple-700 dark:text-purple-300 mt-10 mb-4">
            Correlações com Ativos de Refúgio
          </h2>
          <p>
            As relações entre o DXY e outros ativos ajudam a compreender o
            comportamento do dólar em contextos de procura por segurança. O gráfico
            comparativo com o ouro (Figura 4) confirma uma correlação inversa
            clássica: períodos de apreciação significativa do ouro (2024–2025)
            coincidiram com movimentos descendentes ou estabilização do DXY, o que
            está de acordo com a literatura económica sobre a concorrência entre
            ativos de reserva (Zhang e Wei, 2010).
          </p>
          <img
            src="/images/dxy/fig4.png"
            alt="Correlação entre DXY e ouro (2022–2025)"
            className="my-12 mx-auto"
          />

          <p>
            A correlação com o índice de volatilidade VIX (Figura 5) mostra o
            comportamento esperado do dólar enquanto “porto seguro”: em fases de
            stress global, onde o VIX eleva-se, o DXY tende a beneficiar devido à
            procura por ativos mais seguros (Habib e Stracca, 2012).
          </p>
          <img
            src="/images/dxy/fig5.png"
            alt="Correlação entre DXY e VIX (2022–2025)"
            className="my-12 mx-auto"
          />

          <h2 className="text-2xl font-bold text-purple-700 dark:text-purple-300 mt-10 mb-4">
            Fatores Fundamentais em Contexto
          </h2>
          <p>
            Para além da análise técnica e das correlações, é essencial cruzar os
            dados com variáveis macroeconómicas e monetárias que moldam a trajetória
            do DXY. A política monetária do Fed (subidas ou cortes nas taxas de
            juro) continua a ser um dos principais motores de valorização ou
            enfraquecimento do índice. Engel e West (2005) destacam que os
            fundamentos como diferencial de taxas, inflação ou crescimento
            económico influenciam significativamente os movimentos cambiais, ainda
            que muitas vezes os preços pareçam evoluir de forma quase aleatória
            dentro de modelos de valor presente. Georgiadis (2016) evidencia que os
            impactos globais das políticas norte-americanas dependem fortemente da
            integração comercial e financeira, regime cambial e desenvolvimento de
            mercado dos países-recetores, o que pode reforçar ou mitigar os efeitos
            sobre o dólar. Por fim, Habib e Stracca (2012) dedicaram-se a
            identificar os fundamentos que conferem estatuto de “safe-haven” às
            moedas, concluindo que a posição de ativos líquidos externos e tamanho
            do mercado acionista são determinantes robustas, mais do que simples
            spreads de juros.
          </p>

          <h2 className="text-2xl font-bold text-purple-700 dark:text-purple-300 mt-10 mb-4">
            Preocupações e Riscos Futuros
          </h2>
          <p>
            Em 2025, o DXY enfrenta incertezas que podem moldar a sua trajetória a
            médio e longo prazo. A política monetária do Fed permanece um fator
            crítico, com expectativas de cortes adicionais nas taxas de juro, numa
            altura em que o crescimento económico dos EUA desacelera. Tal cenário
            pode intensificar a pressão descendente sobre o índice, que já registou
            a pior performance semestral desde 1991, testando suportes próximos de
            98 pontos. Além disso, políticas comerciais agressivas, como tarifas
            impostas pelos EUA, podem reduzir o PIB e enfraquecer a confiança no
            dólar, enquanto a crescente desdolarização, com bancos centrais a
            diversificarem reservas para euros ou ouro, ameaça o estatuto de "porto
            seguro" do dólar num contexto global multipolar. A volatilidade
            geopolítica, incluindo tensões comerciais EUA-China e eventos
            imprevisíveis como eleições ou crises regionais, amplifica os riscos.
          </p>

          <table className="table-auto border-collapse border border-neutral-400 my-12 w-full text-sm">
            <thead>
              <tr className="bg-neutral-200 dark:bg-neutral-800">
                <th className="border px-4 py-2">Preocupação</th>
                <th className="border px-4 py-2">Impacto Potencial no DXY</th>
                <th className="border px-4 py-2">Probabilidade Estimada</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">Cortes agressivos nas taxas do Fed</td>
                <td className="border px-4 py-2">Enfraquecimento para &lt;95 pontos</td>
                <td className="border px-4 py-2">Alta (crescimento US lento)</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Políticas comerciais e tarifas</td>
                <td className="border px-4 py-2">Pressão descendente contínua</td>
                <td className="border px-4 py-2">Média-Alta</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Desdolarização global</td>
                <td className="border px-4 py-2">Perda de estatuto a longo prazo</td>
                <td className="border px-4 py-2">Média</td>
              </tr>
            </tbody>
          </table>

          <h2 className="text-2xl font-bold text-purple-700 dark:text-purple-300 mt-10 mb-4">
            Conclusão Integrada
          </h2>
          <p>
            Em 2025, o DXY encontra-se num ponto crítico. Estruturalmente, continua
            a mover-se dentro de um canal ascendente; tecnicamente, aproxima-se do
            suporte forte em 97–98 pontos; fundamentalmente, enfrenta pressões
            contrárias — cortes possíveis nas taxas do Fed tendem a enfraquecê-lo,
            enquanto a instabilidade externa e o comportamento de refúgio
            fortalecem-no. A sua correlação com ouro e VIX reforça o papel de
            porto-seguro do dólar. Para o curto prazo, o valor de 97–98 pontos é
            decisivo: uma quebra sustentável pode indicar novo ciclo de fraqueza; a
            manutenção acima pode sinalizar retomada de valorização em direção a
            105–110 pontos.
          </p>

          <h2 className="text-2xl font-bold text-purple-700 dark:text-purple-300 mt-10 mb-4">
            Referências
          </h2>
          <ul className="list-disc pl-6">
            <li>
              Engel, C., & West, K. D. (2005).{" "}
              <a href="https://doi.org/10.1086/429137" className="text-blue-600 underline">
                Exchange Rates and Fundamentals
              </a>.
            </li>
            <li>
              Georgiadis, G. (2016).{" "}
              <a
                href="https://doi.org/10.1016/j.jimonfin.2015.06.010"
                className="text-blue-600 underline"
              >
                Determinants of global spillovers from US monetary policy
              </a>
              .
            </li>
            <li>
              Habib, M. M., & Stracca, L. (2012).{" "}
              <a
                href="https://doi.org/10.1016/j.jinteco.2011.12.005"
                className="text-blue-600 underline"
              >
                Getting beyond carry trade: What makes a safe haven currency?
              </a>
              .
            </li>
            <li>
              Zhang, Y. J., & Wei, Y. M. (2010).{" "}
              <a
                href="https://doi.org/10.1016/j.resourpol.2010.05.003"
                className="text-blue-600 underline"
              >
                The crude oil market and the gold market
              </a>
              .
            </li>
            <li>
              Rogoff, K. (1985).{" "}
              <a
                href="https://doi.org/10.1016/0022-1996(85)90052-2"
                className="text-blue-600 underline"
              >
                Can international monetary policy cooperation be counterproductive?
              </a>
              .
            </li>
            <li>
              Lothian, J. R. (2006).{" "}
              <a
                href="https://research.library.fordham.edu/cgi/viewcontent.cgi?article=1011&context=crif_working_papers"
                className="text-blue-600 underline"
              >
                The internationalization of money and finance
              </a>
              .
            </li>
          </ul>
        </article>
      )}
    </main>
  );
}
