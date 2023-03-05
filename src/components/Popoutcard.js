/* eslint-disable react/prop-types */
import React from 'react';
import dots from '../images/svg-dots.png';
import clock from '../images/svg-clock.png';
import queue from '../images/svg-queue.png';
import { useGlobalContext } from '../context';

const Popoutcard = ({
  imgSrc,
  avatar,
  title,
  channel,
  views,
  time,
  // popout,
  // setPopout,
}) => {
  const { handleClick } = useGlobalContext();

  // const handleMouseLeave = () => {
  //   setPopout(false);
  //   // setTimeout(() => setPopout(false), 10);
  // };

  return (
    <div
      // className={`${popout ? 'popoutcard popout' : 'popoutcard'}`}
      className="popoutcard"
    >
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
            className="pop__btn"
            onClick={(e) => handleClick(e)}
            onKeyDown={(e) => handleClick(e)}
          >
            <img src={dots} alt="" className="pop__icon" />
            {/* <img src={dots} alt="" className="channel__icon" /> */}
          </button>
        </div>
      </div>
      <div className="btn__group">
        <button type="button" className="video__btn">
          <img src={clock} alt="" />
          <h4>Watch later</h4>
        </button>
        <button type="button" className="video__btn">
          <img src={queue} alt="" />
          <h4>Add to queue</h4>
        </button>
      </div>
    </div>
  );
};

export default Popoutcard;
