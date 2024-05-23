import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import LandingPage from './pages/LandingPage';
import MainPage from './pages/MainPage';
import HomePage from "./pages/HomePage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/*" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
