/* eslint-disable react/prop-types */
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
// import home from '../images/home.svg';

const SidebarIcon = ({
  url,
  icon,
  activeIcon,
  title,
}) => {
  const { pathname } = useLocation();
  const match = pathname === url;

  return (
    <NavLink to={url} className="appdrawer-link">
      { match ? activeIcon : icon}
      <span className="drawer-text">{title}</span>
    </NavLink>
  );
};

export default SidebarIcon;
