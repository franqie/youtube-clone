import React from 'react';
import video from '../images/videoplayback.mp4';
// import img from '../images/soul.jpg';

const ShortVideo = () => (
  <div className="vidiv">
    <div>
      {/* <img src={img} alt="" /> */}
      <video className="video" width="400px" height="500px" controls>
        {/* <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" /> */}
        <source src={video} type="video/mp4" />
        <track src="captions_en.vtt" kind="captions" srcLang="en" label="english_captions" />
      </video>
    </div>
    <div>
      <button type="button">button</button>
    </div>
  </div>
);

export default ShortVideo;
