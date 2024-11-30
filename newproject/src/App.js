import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ComparePage from './page/compare';
import DataPage from './page/data';
import MainPage from './page/main';
import MapPage from './page/map';
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="/data" />} />
          <Route path="/data" element={<DataPage />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/compare" element={<ComparePage />}/>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
