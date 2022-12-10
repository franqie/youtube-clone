/* eslint-disable react/prop-types */
import React from 'react';

const SidebarIcon = ({ icon, title }) => (
  <div className="appdrawer-link">
    {icon}
    <span className="drawer-text">{title}</span>
  </div>
);

export default SidebarIcon;
