import React from 'react';
import FlexedVideoCard from './FlexedVideoCard';
import SlidingHeader from './SlidingHeader';

const RelatedVideos = () => {
  const filledArr = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    imgSrc: 'https://i.ytimg.com/vi/s975DyIqq_U/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDnGBV5oiV0CLd4WauJnvAdSxfBEA',
    title: 'PRISON BREAK | SEASON 1 SCENE PACK',
    channel: 'OTZ Media',
    views: '5k views',
    time: '1 month ago',
  }));
  return (
    <div className="">
      <SlidingHeader />
      <div>
        { filledArr.map((item) => {
          const {
            id, imgSrc, title, channel, views, time,
          } = item;
          return (
            <FlexedVideoCard
              key={id}
              imgSrc={imgSrc}
              title={title}
              channel={channel}
              views={views}
              time={time}
              novel
            />
          );
        }) }
      </div>
      <button className="show__btn" type="button">Show more</button>
    </div>
  );
};

export default RelatedVideos;
