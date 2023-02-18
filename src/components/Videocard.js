/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context';
import dots from '../images/svg-dots.png';
import Popoutcard from './Popoutcard';

const Videocard = ({
  imgSrc,
  avatar,
  title,
  channel,
  views,
  time,
}) => {
  const { openSubmenu, setShowsubmenu } = useGlobalContext();

  const handleClick = (e) => {
    e.stopPropagation();
    setShowsubmenu(false);
    const coords = e.target.getBoundingClientRect();
    const { left, bottom, top } = coords;
    openSubmenu({ left, bottom, top });
    setShowsubmenu(true);
  };

  return (
    <Link to="/watch" className="videocard">
      <img src={imgSrc} alt="" className="video__img" />
      <div className="video__desc">
        <img src={avatar} alt="video" className="channel__avatar" />
        <div className="channel">
          <div className="desc">
            <h4 className="video__title">{title}</h4>
            <div className="sub__desc">
              <p className="channel__name">{channel}</p>
              <p className="views">
                {views}
                {' '}
                •
                {' '}
                {time}
              </p>
            </div>
          </div>
          <button
            type="button"
            className="channel__btn"
            onClick={(e) => handleClick(e)}
            onKeyDown={(e) => handleClick(e)}
          >
            <img src={dots} alt="" className="channel__icon" />
          </button>
        </div>
      </div>
      <Popoutcard
        imgSrc={imgSrc}
        avatar={avatar}
        title={title}
        channel={channel}
        views={views}
        time={time}
      />
    </Link>
  );
};

export default Videocard;
