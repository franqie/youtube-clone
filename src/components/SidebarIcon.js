/* eslint-disable react/prop-types */
import React from 'react';
import { NavLink } from 'react-router-dom';

const SidebarIcon = ({ url, icon, title }) => (
  <NavLink to={url} className="appdrawer-link">
    {icon}
    <span className="drawer-text">{title}</span>
  </NavLink>
);

export default SidebarIcon;
