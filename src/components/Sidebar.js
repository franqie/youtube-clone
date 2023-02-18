import React from 'react';
import { MdHomeFilled, MdOutlineLocalPlay } from 'react-icons/md';
import {
  BsClock,
  BsCollectionPlay,
  BsExclamationSquare,
  BsFlag,
  BsQuestionCircle,
  BsTrophy,
  BsTrophyFill,
  BsYoutube,
} from 'react-icons/bs';
import { AiOutlineLike, AiOutlinePlaySquare } from 'react-icons/ai';
import { VscFlame, VscHistory } from 'react-icons/vsc';
import { SiApplemusic, SiYoutubemusic } from 'react-icons/si';
import { FaGamepad, FaNewspaper, FaRegNewspaper } from 'react-icons/fa';
import { TfiGame, TfiMusic } from 'react-icons/tfi';
import { CiSettings } from 'react-icons/ci';
import SidebarIcon from './SidebarIcon';

const Sidebar = () => (
  <div className="appdrawer">
    <div className="appdrawer-wrapper">
      <div className="appdrawer-tray">
        <SidebarIcon url="/" icon={<MdHomeFilled />} title="Home" />
        <SidebarIcon icon={<MdOutlineLocalPlay />} title="Shorts" />
        <SidebarIcon icon={<BsCollectionPlay />} title="Subscriptions" />
      </div>

      <div className="appdrawer-tray">
        <SidebarIcon icon={<AiOutlinePlaySquare />} title="Library" />
        <SidebarIcon icon={<VscHistory />} title="History" />
        <SidebarIcon icon={<BsClock />} title="Watch later" />
        <SidebarIcon icon={<AiOutlineLike />} title="Liked videos" />
      </div>

      <div className="appdrawer-tray">
        <p className="title">Subscriptions</p>
        <SidebarIcon icon={<SiApplemusic />} title="Music" />
        <SidebarIcon icon={<BsTrophyFill />} title="Sports" />
        <SidebarIcon icon={<FaGamepad />} title="Gaming" />
        <SidebarIcon icon={<FaNewspaper />} title="News" />
      </div>

      <div className="appdrawer-tray">
        <p className="title">Explore</p>
        <SidebarIcon icon={<VscFlame />} title="Trending" />
        <SidebarIcon icon={<TfiMusic />} title="Music" />
        <SidebarIcon icon={<TfiGame />} title="Gaming" />
        <SidebarIcon icon={<FaRegNewspaper />} title="News" />
        <SidebarIcon icon={<BsTrophy />} title="Sports" />
      </div>

      <div className="appdrawer-tray">
        <p className="title">More from YouTube</p>
        <SidebarIcon icon={<BsYoutube className="red" />} title="YouTube Premium" />
        <SidebarIcon icon={<MdOutlineLocalPlay className="red" />} title="Creator Studio" />
        <SidebarIcon icon={<SiYoutubemusic className="red" />} title="YouTube Music" />
        <SidebarIcon icon={<BsCollectionPlay className="red" />} title="YouTube Kids" />
        <SidebarIcon icon={<BsCollectionPlay className="red" />} title="YouTube TV" />
      </div>

      <div className="appdrawer-tray">
        <SidebarIcon icon={<CiSettings />} title="Settings" />
        <SidebarIcon icon={<BsFlag />} title="Report history" />
        <SidebarIcon icon={<BsQuestionCircle />} title="Help" />
        <SidebarIcon icon={<BsExclamationSquare />} title="Send feedback" />
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
