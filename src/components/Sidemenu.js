import React from 'react';
import { HiOutlineBars3 } from 'react-icons/hi2';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context';
import Sidebar from './Sidebar';

const Sidemenu = () => {
  const { showSidemenu, setShowsidemenu } = useGlobalContext();

  return (
    <div
      className={`${showSidemenu ? 'sidemenu show' : 'sidemenu'}`}
      onClick={() => setShowsidemenu(!showSidemenu)}
      onKeyDown={() => setShowsidemenu(!showSidemenu)}
      role="button"
      tabIndex={0}
    >
      <div
        className="container"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={(e) => e.stopPropagation()}
        role="button"
        tabIndex={0}
      >
        <div className="header">
          {/* <button type="button" aria-label="menu button"
          onClick={() => setShowTray(!showTray)} className="bars effect">
          <HiOutlineBars3 className="icon hi-bars" />
          </button> */}
          {/* <i className="material-icons md-48">settings</i>
        <i className="material-icons">wifi</i>
        <i className="material-icons">logout</i>
        <i className="material-icons">share</i>
        <i className="material-icons">user</i>
        <span className="material-icons">pie_chart</span>
        <span className="material-symbols-outlined">home</span> */}
          <button
            type="button"
            aria-label="menu button"
            className="bars effect"
            onClick={() => setShowsidemenu(!showSidemenu)}
          >
            <HiOutlineBars3 className="icon hi-bars" />
          </button>
          <Link to="/" className="logo">
            <img src="https://www.freeiconspng.com/thumbs/youtube-logo-png/youtube-logo-png-transparent-image-5.png" alt="logo" className="logo-img" />
            <span className="logo-text">NG</span>
          </Link>
        </div>
        <Sidebar />
      </div>
    </div>
  );
};

export default Sidemenu;
