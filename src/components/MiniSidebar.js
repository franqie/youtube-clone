import React from 'react';
import SidebarIcon from './SidebarIcon';
import HomeIcon from '../images/HomeIcon';
import HomeIconFilled from '../images/HomeIconFilled';
import ShortsIcon from '../images/ShortsIcon';
import ShortsIconFilled from '../images/ShortsIconFilled';
import SubIcon from '../images/SubIcon';
import SubIconFilled from '../images/SubIconFilled';
import LibraryIcon from '../images/LibraryIcon';
import LibraryIconFilled from '../images/LibraryIconFilled';

const MiniSidebar = () => (
  <div className="wrapper">
    <div className="mini-drawer">
      <div className="mini-drawer-wrapper">
        <SidebarIcon
          url="/"
          icon={<HomeIcon />}
          activeIcon={<HomeIconFilled />}
          title="Home"
        />
        <SidebarIcon
          url="/shorts"
          icon={<ShortsIcon />}
          activeIcon={<ShortsIconFilled />}
          title="Shorts"
        />
        <SidebarIcon
          url="/subscriptions"
          icon={<SubIcon />}
          activeIcon={<SubIconFilled />}
          title="Subscriptions"
        />
        <SidebarIcon
          url="/library"
          icon={<LibraryIcon />}
          activeIcon={<LibraryIconFilled />}
          title="Library"
        />
      </div>
    </div>
  </div>
);

export default MiniSidebar;
