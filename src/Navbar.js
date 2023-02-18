import React, { useState } from 'react';

import {
  TfiSearch,
} from 'react-icons/tfi';

import {
  HiMicrophone,
  HiOutlineBars3,
  HiOutlineUser,
} from 'react-icons/hi2';

import {
  BsBell,
} from 'react-icons/bs';
import { Link, useLocation } from 'react-router-dom';
import { useGlobalContext } from './context';
import useWindowSize from './utils/useWindowSize';

const Navbar = () => {
  const { showTray, setShowTray, setShowsidemenu } = useGlobalContext();
  const windowWidth = useWindowSize();
  const [focused, setFocused] = useState(false);
  const { pathname } = useLocation();

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    setFocused(false);
  };

  const handleClick = () => {
    if ((windowWidth >= 1300) && (pathname === '/')) {
      setShowTray(!showTray);
    } else {
      setShowsidemenu(true);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-center">
        <div className="left">
          <button type="button" aria-label="menu button" onClick={handleClick} className="bars effect"><HiOutlineBars3 className="icon hi-bars" /></button>
          <Link to="/" className="logo">
            <img src="https://www.freeiconspng.com/thumbs/youtube-logo-png/youtube-logo-png-transparent-image-5.png" alt="logo" className="logo-img" />
            <span className="logo-text">NG</span>
          </Link>
        </div>

        <div className="center">
          <div className="search">
            <form className={`${focused ? 'form has-focus' : 'form'}`}>
              <div className="search-box-container">
                <span className="icon-span">
                  <TfiSearch className="icon tfi-search" />
                </span>
                <div className="search-box">
                  <input type="text" className="input" placeholder="Search" onFocus={handleFocus} onBlur={handleBlur} />
                </div>
              </div>
              <button type="submit" className="search-btn">
                <TfiSearch className="icon tfi-search" />
              </button>
            </form>
          </div>
          <button aria-label="search" type="button" className="srch-btn effect"><TfiSearch className="icon tfi-search" /></button>
          <button aria-label="search" type="button" className="mic effect"><HiMicrophone className="icon" /></button>
        </div>

        <div className="right">
          <div className="right-inner">
            <span className="effect">
              <span className="material-symbols-outlined">video_call</span>
            </span>
            <span className="effect bell">
              <BsBell className="icon bs-bell" />
            </span>
            <span className="login">
              <HiOutlineUser className="icon hi-outline-user" />
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
