import React from 'react';
import { useGlobalContext } from '../context';
// import Player from '../components/Player';
// import ShortVideo from '../components/ShortVideo';

const Shorts = () => {
  const { showTray, largeSc } = useGlobalContext();
  return (
    <div className={`${showTray && largeSc ? 'shorts content shrink' : 'shorts content'}`}>
      Shorts
      {/* <ShortVideo /> */}
      {/* <Player /> */}
    </div>
  );
};

export default Shorts;
