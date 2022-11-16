import React from 'react';
import { MdHomeFilled, MdOutlineLocalPlay } from 'react-icons/md';
import { BsCollectionPlay } from 'react-icons/bs';
import { AiOutlinePlaySquare } from 'react-icons/ai';

const Minidrawer = () => (
  <div className="wrapper">
    <div className="mini-drawer">
      <div className="mini-drawer-wrapper">
        <div className="drawer-link">
          <MdHomeFilled />
          <span className="icon-text">Home</span>
        </div>
        <div className="drawer-link">
          <MdOutlineLocalPlay />
          <span className="icon-text">Shorts</span>
        </div>
        <div className="drawer-link">
          <BsCollectionPlay />
          <span className="icon-text">Subscriptions</span>
        </div>
        <div className="drawer-link">
          <AiOutlinePlaySquare />
          <span className="icon-text">Library</span>
        </div>
      </div>
    </div>
  </div>
);

export default Minidrawer;
