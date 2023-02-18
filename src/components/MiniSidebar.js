import React from 'react';
import { MdHomeFilled, MdOutlineLocalPlay } from 'react-icons/md';
import { BsCollectionPlay } from 'react-icons/bs';
import { AiOutlinePlaySquare } from 'react-icons/ai';
import SidebarIcon from './SidebarIcon';

const MiniSidebar = () => (
  <div className="wrapper">
    <div className="mini-drawer">
      <div className="mini-drawer-wrapper">
        <SidebarIcon url="/" icon={<MdHomeFilled />} title="Home" />
        {/* <SidebarIcon
          url="/"
          icon={<span className="material-symbols-outlined">home</span>}
          title="Home" /> */}
        <SidebarIcon icon={<MdOutlineLocalPlay />} title="Shorts" />
        <SidebarIcon icon={<BsCollectionPlay />} title="Subscriptions" />
        <SidebarIcon icon={<AiOutlinePlaySquare />} title="Library" />
      </div>
    </div>
  </div>
);

export default MiniSidebar;
