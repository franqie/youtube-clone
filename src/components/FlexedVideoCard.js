/* eslint-disable react/prop-types */
import React from 'react';
import { BsClock } from 'react-icons/bs';
import { RiPlayList2Fill } from 'react-icons/ri';
import { useGlobalContext } from '../context';

const FlexedVideoCard = ({
  imgSrc,
  title,
  channel,
  views,
  time,
  novel,
}) => {
  const { openSubmenu, setShowsubmenu } = useGlobalContext();

  const handleClick = (e) => {
    // e.stopPropagation();
    setShowsubmenu(false);
    const coords = e.target.getBoundingClientRect();
    const { left, bottom, top } = coords;
    openSubmenu({ left, bottom, top });
    setShowsubmenu(true);
  };

  return (
    <div className="f-card">
      <div className="f-image">
        <img src={imgSrc} alt="" />
        <div className="ctrl">
          <BsClock />
          <RiPlayList2Fill />
        </div>
      </div>
      <div className="f-desc">
        <div className="desc-text">
          <h5 className="">{title}</h5>
          <div className="">
            <p className="">{channel}</p>
            <p className="">
              {views}
              {' '}
              •
              {' '}
              {time}
            </p>
            {novel && <p>New</p>}
          </div>
        </div>
        <button
          type="button"
          className="f-btn"
          onClick={(e) => handleClick(e)}
          onKeyDown={(e) => handleClick(e)}
        >
          <span className="material-symbols-outlined">more_vert</span>
        </button>
      </div>
    </div>
  );
};

export default FlexedVideoCard;
