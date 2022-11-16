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

const Appdrawer = () => (
  <div className="appdrawer">
    <div className="appdrawer-wrapper">
      <div className="appdrawer-tray">
        <div className="appdrawer-link">
          <MdHomeFilled />
          <span className="drawer-text">Home</span>
        </div>
        <div className="appdrawer-link">
          <MdOutlineLocalPlay />
          <span className="drawer-text">Shorts</span>
        </div>
        <div className="appdrawer-link">
          <BsCollectionPlay />
          <span className="drawer-text">Subscriptions</span>
        </div>
      </div>

      <div className="appdrawer-tray">
        <div className="appdrawer-link">
          <AiOutlinePlaySquare />
          <span className="drawer-text">Library</span>
        </div>
        <div className="appdrawer-link">
          <VscHistory />
          <span className="drawer-text">History</span>
        </div>
        <div className="appdrawer-link">
          <BsClock />
          <span className="drawer-text">Watch later</span>
        </div>
        <div className="appdrawer-link">
          <AiOutlineLike />
          <span className="drawer-text">Liked videos</span>
        </div>
      </div>

      <div className="appdrawer-tray">
        <p className="title">Subscriptions</p>
        <div className="appdrawer-link">
          <SiApplemusic />
          <span className="drawer-text">Music</span>
        </div>
        <div className="appdrawer-link">
          <BsTrophyFill />
          <span className="drawer-text">Sports</span>
        </div>
        <div className="appdrawer-link">
          <FaGamepad />
          <span className="drawer-text">Gaming</span>
        </div>
        <div className="appdrawer-link">
          <FaNewspaper />
          <span className="drawer-text">News</span>
        </div>
      </div>

      <div className="appdrawer-tray">
        <p className="title">Explore</p>
        <div className="appdrawer-link">
          <VscFlame />
          <span className="drawer-text">Trending</span>
        </div>
        <div className="appdrawer-link">
          <TfiMusic />
          <span className="drawer-text">Music</span>
        </div>
        <div className="appdrawer-link">
          <TfiGame />
          <span className="drawer-text">Gaming</span>
        </div>
        <div className="appdrawer-link">
          <FaRegNewspaper />
          <span className="drawer-text">News</span>
        </div>
        <div className="appdrawer-link">
          <BsTrophy />
          <span className="drawer-text">Sports</span>
        </div>
      </div>

      <div className="appdrawer-tray">
        <p className="title">More from YouTube</p>
        <div className="appdrawer-link">
          <BsYoutube className="red" />
          <span className="drawer-text">YouTube Premium</span>
        </div>
        <div className="appdrawer-link">
          <MdOutlineLocalPlay className="red" />
          <span className="drawer-text">Creator Studio</span>
        </div>
        <div className="appdrawer-link">
          <SiYoutubemusic className="red" />
          <span className="drawer-text">YouTube Music</span>
        </div>
        <div className="appdrawer-link">
          <BsCollectionPlay className="red" />
          <span className="drawer-text">YouTube Kids</span>
        </div>
        <div className="appdrawer-link">
          <BsCollectionPlay className="red" />
          <span className="drawer-text">YouTube TV</span>
        </div>
      </div>

      <div className="appdrawer-tray">
        <div className="appdrawer-link">
          <CiSettings />
          <span className="drawer-text">Settings</span>
        </div>
        <div className="appdrawer-link">
          <BsFlag />
          <span className="drawer-text">Report history</span>
        </div>
        <div className="appdrawer-link">
          <BsQuestionCircle />
          <span className="drawer-text">Help</span>
        </div>
        <div className="appdrawer-link">
          <BsExclamationSquare />
          <span className="drawer-text">Send feedback</span>
        </div>
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

export default Appdrawer;
