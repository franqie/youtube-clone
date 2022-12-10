/* eslint-disable react/prop-types */
import React from 'react';
import dots from '../images/svg-dots.png';

const Videocard = ({
  imgSrc,
  avatar,
  title,
  channel,
  views,
  time,
}) => (
  <div className="videocard">
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
        <img src={dots} alt="" className="channel__icon" />
      </div>
    </div>
  </div>
);

export default Videocard;
