import React, { useRef, useState } from 'react';
import { TfiAngleLeft, TfiAngleRight } from 'react-icons/tfi';
import Videopage from './Videopage';

const Mainpage = () => {
  const scroll = useRef(null);
  const [hideAngleLeft, setHideAngleLeft] = useState(true);
  const [hideAngleRight, setHideAngleRight] = useState(false);

  const handleClick = (e) => {
    const btnClass = e.currentTarget.classList;
    if (btnClass.contains('angle-left')) {
      scroll.current.scrollBy(-200, 0);
    } else if (btnClass.contains('angle-right')) {
      scroll.current.scrollBy(200, 0);
    }
  };

  const handleScroll = () => {
    const { clientWidth } = scroll.current;
    const { scrollLeft } = scroll.current;
    const { scrollWidth } = scroll.current;
    if (scrollLeft === 0) {
      setHideAngleLeft(true);
      setHideAngleRight(false);
    } else if (scrollLeft > 0) {
      setHideAngleLeft(false);
    }
    if (clientWidth + scrollLeft === scrollWidth) {
      setHideAngleLeft(false);
      setHideAngleRight(true);
    } else if (clientWidth + scrollLeft < scrollWidth) {
      setHideAngleRight(false);
    }
  };

  return (
    <div className="main-page">
      <div className="chip-bar-wrapper">
        <div className={`button-container left ${hideAngleLeft ? 'hide' : null}`}>
          <div className="button-box">
            <button onClick={(e) => handleClick(e)} type="button" aria-label="scroll button" className="bar-button angle-left"><TfiAngleLeft /></button>
          </div>
        </div>
        <div ref={scroll} onScroll={handleScroll} className="chip-bar">
          <a href="bar" className="bar selected">All</a>
          <a href="bar" className="bar">World Cup</a>
          <a href="bar" className="bar">Black Panther</a>
          <a href="bar" className="bar">Ukraine</a>
          <a href="bar" className="bar">Scene</a>
          <a href="bar" className="bar">Music</a>
          <a href="bar" className="bar">Sketch Comedy</a>
          <a href="bar" className="bar">Premier League</a>
          <a href="bar" className="bar">Debate</a>
          <a href="bar" className="bar">News</a>
          <a href="bar" className="bar">Telenovelas</a>
          <a href="bar" className="bar">High-Intensity Training</a>
          <a href="bar" className="bar">Thoughts</a>
          <a href="bar" className="bar">Cristiano Ronaldo</a>
          <a href="bar" className="bar">Weight Training</a>
          <a href="bar" className="bar">Sitcoms</a>
          <a href="bar" className="bar">Recently uploaded</a>
          <a href="bar" className="bar">Watched</a>
          <a href="bar" className="bar">New to you</a>
          <a href="bar" className="bar">Telenovelas</a>
          <a href="bar" className="bar">High-Intensity Training</a>
          <a href="bar" className="bar">Thoughts</a>
          <a href="bar" className="bar">Cristiano Ronaldo</a>
          <a href="bar" className="bar">Weight Training</a>
          <a href="bar" className="bar">Sitcoms</a>
          <a href="bar" className="bar">Recently uploaded</a>
          <a href="bar" className="bar">Watched</a>
          <a href="bar" className="bar">New to you</a>
        </div>
        <div className={`button-container right ${hideAngleRight ? 'hide' : null}`}>
          <div className="button-box">
            <button onClick={(e) => handleClick(e)} type="button" aria-label="scroll button" className="bar-button angle-right"><TfiAngleRight /></button>
          </div>
        </div>

      </div>
      <div className="videos">
        <Videopage />
      </div>
    </div>
  );
};

export default Mainpage;
