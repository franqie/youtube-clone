import React from 'react';

const Player = () => (
  <div className="vidiv">
    <video className="video" width="400px" height="700px" controls>
      <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
      <track src="captions_en.vtt" kind="captions" srcLang="en" label="english_captions" />
    </video>
  </div>
);

export default Player;
