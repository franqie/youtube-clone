import React, { useState } from 'react';
import {
  HiOutlineUser,
} from 'react-icons/hi2';
import { Link } from 'react-router-dom';
import BarsIcon from '../images/BarsIcon';
import SearchIcon from '../images/SearchIcon';
import BellIcon from '../images/BellIcon';
import MicIconFilled from '../images/MicIconFilled';
import VideoPlusIcon from '../images/VideoPlusIcon';
import { useGlobalContext } from '../context';
import useWindowSize from '../utils/useWindowSize';

const Navbar = () => {
  const { showTray, setShowTray, setShowsidemenu } = useGlobalContext();
  const windowWidth = useWindowSize();
  const [focused, setFocused] = useState(false);

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    setFocused(false);
  };

  const handleClick = () => {
    if ((windowWidth >= 1300)) {
      setShowTray(!showTray);
    } else {
      setShowsidemenu(true);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-center">
        <div className="left">
          <button type="button" aria-label="menu button" onClick={handleClick} className="bars effect"><BarsIcon className="icon hi-bars" /></button>
          <Link to="/" className="logo">
            <img src="https://www.freeiconspng.com/thumbs/youtube-logo-png/youtube-logo-png-transparent-image-5.png" alt="logo" className="logo-img" />
            <span className="logo-text">NG-</span>
            <span className="clone">Clone</span>
          </Link>
        </div>

        <div className="center">
          <div className="search">
            <form className={`${focused ? 'form has-focus' : 'form'}`}>
              <div className="search-box-container">
                <span className="icon-span">
                  <SearchIcon className="icon tfi-search" />
                </span>
                <div className="search-box">
                  <input type="text" className="input" placeholder="Search" onFocus={handleFocus} onBlur={handleBlur} />
                </div>
              </div>
              <button type="submit" className="search-btn">
                <SearchIcon className="icon tfi-search" />
              </button>
            </form>
          </div>
          <button aria-label="search" type="button" className="srch-btn effect"><SearchIcon className="icon tfi-search" /></button>
          <button aria-label="search" type="button" className="mic effect"><MicIconFilled className="icon" /></button>
        </div>

        <div className="right">
          <div className="right-inner">
            <span className="effect">
              <VideoPlusIcon />
            </span>
            <span className="effect bell">
              <BellIcon className="icon bs-bell" />
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
