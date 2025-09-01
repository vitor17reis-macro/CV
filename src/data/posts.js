// src/data/posts.js

export const posts = [
  {
    slug: "dxy-2025",
    title: {
      pt: "Índice do Dólar Americano (DXY)",
      en: "U.S. Dollar Index (DXY)",
    },
    type: "react",
    component: () => import("../DXY2025"),
  },
  {
    slug: "portfolios-2025",
    title: {
      pt: "Investimento Conservador com Exposição a Tecnologia, IA e Criptomoedas",
      en: "Conservative Investment with Exposure to Technology, AI, and Cryptocurrencies",
    },
    type: "react",
    component: () => import("../Portfolios2025"),
  },
];
