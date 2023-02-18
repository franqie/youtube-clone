// import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './css/style.css';
import Navbar from './Navbar';
import Content from './components/Content';
import { useGlobalContext } from './context';
import SingleVideoPage from './components/SingleVideoPage';
import Sidemenu from './components/Sidemenu';

function App() {
  const { setShowsubmenu } = useGlobalContext();

  const closeSubmenu = (e) => {
    if (!e.target.classList.contains('submenu')) {
      setShowsubmenu(false);
    }
  };

  return (
    <div
      className="app"
      onClick={closeSubmenu}
      onKeyDown={closeSubmenu}
      role="button"
      tabIndex={0}
    >
      <BrowserRouter>
        <Navbar />
        <Sidemenu />
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/watch" element={<SingleVideoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
