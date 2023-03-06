import React from 'react';
import SidebarIcon from './SidebarIcon';
import HomeIcon from '../images/HomeIcon';
import HomeIconFilled from '../images/HomeIconFilled';
import ShortsIcon from '../images/ShortsIcon';
import ShortsIconFilled from '../images/ShortsIconFilled';
import SubIcon from '../images/SubIcon';
import SubIconFilled from '../images/SubIconFilled';
import LibraryIcon from '../images/LibraryIcon';
// import LibraryIconFilled from '../images/LibraryIconFilled';
import HistoryIcon from '../images/HistoryIcon';
import LaterIcon from '../images/LaterIcon';
import LikeIcon from '../images/LikeIcon';
import NewsIcon from '../images/NewsIcon';
import SetIcon from '../images/SetIcon';
import FlagIcon from '../images/FlagIcon';
import FeedbackIcon from '../images/FeedbackIcon';
import QuestionIcon from '../images/QuestionIcon';
import GameIcon from '../images/GameIcon';
import FlameIcon from '../images/FlameIcon';
import MusicIcon from '../images/MusicIcon';
import TrophyIcon from '../images/TrophyIcon';
import PremiumIcon from '../images/PremiumIcon';
import StudioIcon from '../images/StudioIcon';
import KidsIcon from '../images/KidsIcon';
import TvIcon from '../images/TvIcon';
import ToneIcon from '../images/ToneIcon';

const Sidebar = () => (
  <div className="appdrawer">
    <div className="appdrawer-wrapper">
      <div className="appdrawer-tray">
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
      </div>

      <div className="appdrawer-tray">
        <SidebarIcon icon={<LibraryIcon />} title="Library" />
        <SidebarIcon icon={<HistoryIcon />} title="History" />
        <SidebarIcon icon={<LaterIcon />} title="Watch later" />
        <SidebarIcon icon={<LikeIcon />} title="Liked videos" />
      </div>

      <div className="appdrawer-tray">
        <p className="title">Subscriptions</p>
        <SidebarIcon icon={<ToneIcon />} title="Music" />
        <SidebarIcon icon={<GameIcon />} title="Gaming" />
        <SidebarIcon icon={<NewsIcon />} title="News" />
      </div>

      <div className="appdrawer-tray">
        <p className="title">Explore</p>
        <SidebarIcon icon={<FlameIcon />} title="Trending" />
        <SidebarIcon icon={<ToneIcon />} title="Music" />
        <SidebarIcon icon={<GameIcon />} title="Gaming" />
        <SidebarIcon icon={<NewsIcon />} title="News" />
        <SidebarIcon icon={<TrophyIcon />} title="Sports" />
      </div>

      <div className="appdrawer-tray">
        <p className="title">More from YouTube</p>
        <SidebarIcon icon={<PremiumIcon />} title="YouTube Premium" />
        <SidebarIcon icon={<StudioIcon />} title="Creator Studio" />
        <SidebarIcon icon={<MusicIcon />} title="YouTube Music" />
        <SidebarIcon icon={<KidsIcon />} title="YouTube Kids" />
        <SidebarIcon icon={<TvIcon />} title="YouTube TV" />
      </div>

      <div className="appdrawer-tray">
        <SidebarIcon icon={<SetIcon />} title="Settings" />
        <SidebarIcon icon={<FlagIcon />} title="Report history" />
        <SidebarIcon icon={<QuestionIcon />} title="Help" />
        <SidebarIcon icon={<FeedbackIcon />} title="Send feedback" />
      </div>

      <div className="appdrawer-tray footer">
        <p>
          <a href="#about">About</a>
          <a href="#press">Press</a>
          <a href="#copyright">Copyright</a>
          <a href="#copyright">Contact us</a>
          <a href="#copyright">Creators</a>
          <a href="#copyright">Advertise</a>
          <a href="#copyright">Developers</a>
        </p>

        <p>
          <a href="#copyright">Terms</a>
          <a href="#copyright">Privacy</a>
          <a href="#copyright">Policy & Safety</a>
          <a href="#copyright">How YouTube works</a>
          <a href="#copyright">Test new features</a>
        </p>
      </div>

    </div>
  </div>
);

export default Sidebar;
