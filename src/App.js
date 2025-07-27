import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import LowStockDetailPage from './pages/LowStockDetailPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/lowstock/:id" element={<LowStockDetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
