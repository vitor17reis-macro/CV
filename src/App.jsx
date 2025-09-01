// src/App.jsx
import { Route, Routes } from "react-router-dom";
import Home from "./Home";         // vamos criar já a seguir
import Post from "./pages/Post";   // rota genérica por slug

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/analises/:slug" element={<Post />} />
      {/* fallback opcional */}
      <Route path="*" element={<Home />} />
    </Routes>
  );
}
