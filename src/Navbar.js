import React, { useState } from 'react';
import {
  FaBars,
  FaEllipsisV,
  FaMicrophone,
  FaRegUserCircle,
  FaSearch,
} from 'react-icons/fa';

const Navbar = () => {
  const [focused, setFocused] = useState(false);

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    setFocused(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-center">
        <div className="left">
          <FaBars className="icon" />
          <img src="https://www.freeiconspng.com/thumbs/youtube-logo-png/youtube-logo-png-transparent-image-5.png" alt="logo" className="logo" />
        </div>

        <div className="center">
          <div className="search">
            <form className={`${focused ? 'form has-focus' : 'form'}`}>
              <div className="search-box-container">
                <span className="icon-span">
                  <FaSearch className="icon" />
                </span>
                <div className="search-box">
                  <input type="text" className="input" placeholder="Search" onFocus={handleFocus} onBlur={handleBlur} />
                </div>
              </div>
              <button type="submit" className="search-btn">
                <FaSearch className="icon" />
              </button>
            </form>
          </div>
          <button aria-label="search" type="button" className="mic srch-btn"><FaSearch className="icon" /></button>
          <button aria-label="search" type="button" className="mic"><FaMicrophone className="icon" /></button>
        </div>

        <div className="right">
          <span className="menu-icon"><FaEllipsisV className="icon" /></span>
          <div className="sign-in">
            <FaRegUserCircle className="icon" />
            <p>Sign in</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
