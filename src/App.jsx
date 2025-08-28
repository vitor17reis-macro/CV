import React from "react";
import { Routes, Route } from "react-router-dom";
import EconomistaSiteBase from "./EconomistaSiteBase"; // a tua homepage
import DXY2025 from "./pages/DXY2025";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<EconomistaSiteBase />} />
      <Route path="/analises/dxy-2025" element={<DXY2025 />} />
    </Routes>
  );
}
