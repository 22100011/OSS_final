import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
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
          <Route path="/data" element={<DataPage />} /> {/* DataPage에서 CRUD 처리 */}
          <Route path="/main" element={<MainPage />} /> {/* main.js 내용 */}
          <Route path="/map" element={<MapPage />} /> {/* map.js 내용 */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
