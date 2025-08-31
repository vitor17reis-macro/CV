// src/App.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EconomistaSiteBase from './EconomistaSiteBase';
import DXY2025 from './DXY2025';
import Portfolios2025 from './Portfolios2025';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EconomistaSiteBase />} />
        <Route path="/analises/dxy-2025" element={<DXY2025 />} />
        <Route path="/analises/portfolios-2025" element={<Portfolios2025 />} />
      </Routes>
    </Router>
  );
}

export default App;