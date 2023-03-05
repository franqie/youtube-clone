// import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './css/style.css';
import Navbar from './components/Navbar';
import Sidenav from './components/Sidenav';
import { useGlobalContext } from './context';
import SingleVideoPage from './pages/SingleVideoPage';
import Sidemenu from './components/Sidemenu';
import Shorts from './pages/Shorts';
import Mainpage from './components/Mainpage';
import Subscriptions from './pages/Subscriptions';
import Library from './pages/Library';
// import useWindowSize from './utils/useWindowSize';

function App() {
  const { setShowsubmenu } = useGlobalContext();
  // const windowWidth = useWindowSize();
  // const largeSc = windowWidth > 1300;

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
        <Sidenav />
        {/* <div>
        </div> */}
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/watch" element={<SingleVideoPage />} />
          <Route path="/shorts" element={<Shorts />} />
          <Route path="/subscriptions" element={<Subscriptions />} />
          <Route path="/library" element={<Library />} />
        </Routes>
        {/* <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="watch" element={<SingleVideoPage />} />
        </Routes> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
