// src/App.tsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { initializeIcons } from '@uifabric/icons';
import HomePage from './pages/HomePage';
import BattleSimulationPage from './pages/BattleSimulationPage';
import ResultsPage from './pages/ResultsPage';
import './App.css';

initializeIcons();

const App: React.FC = () => {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/battle-simulation" element={<BattleSimulationPage />} />
          <Route path="/results" element={<ResultsPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
