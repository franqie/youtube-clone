import React, { useEffect, useRef, useState } from 'react';
import { TfiAngleLeft, TfiAngleRight } from 'react-icons/tfi';
import { useGlobalContext } from '../context';
import CompassIcon from '../images/CompassIcon';
import useWindowSize from '../utils/useWindowSize';
import Videospage from './Videopage';

const Mainpage = () => {
  const { showTray, largeSc, notSmallSc } = useGlobalContext();
  const windowWidth = useWindowSize();
  const [hideAngleLeft, setHideAngleLeft] = useState(true);
  const [hideAngleRight, setHideAngleRight] = useState(false);
  const page = useRef(null);
  const bar = useRef(null);
  const scroll = useRef(null);

  useEffect(() => {
    const pageWidth = page.current.getBoundingClientRect().width;
    bar.current.style.width = `${pageWidth}px`;
  }, [windowWidth, showTray]);

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
    <div ref={page} className={`${showTray && largeSc ? 'main-page content shrink' : 'main-page content'}`}>
      <div ref={bar} className="chip-bar-wrapper">
        { notSmallSc && (
        <div className={`button-container left ${hideAngleLeft ? 'hide' : null}`}>
          <div className="button-box">
            <button onClick={(e) => handleClick(e)} type="button" aria-label="scroll button" className="bar-button angle-left"><TfiAngleLeft /></button>
          </div>
        </div>
        )}
        <div ref={scroll} onScroll={handleScroll} className="chip-bar">
          <div className="explore">
            <span className="compass">
              <CompassIcon />
              <span>Explore</span>
            </span>
          </div>
          <div className="bar selected">All</div>
          <div className="bar">World Cup</div>
          <div className="bar">Black Panther</div>
          <div className="bar">Ukraine</div>
          <div className="bar">Scene</div>
          <div className="bar">Music</div>
          <div className="bar">Sketch Comedy</div>
          <div className="bar">Premier League</div>
          <div className="bar">Debate</div>
          <div className="bar">News</div>
          <div className="bar">Telenovelas</div>
          <div className="bar">High-Intensity Training</div>
          <div className="bar">Thoughts</div>
          <div className="bar">Cristiano Ronaldo</div>
          <div className="bar">Weight Training</div>
          <div className="bar">Sitcoms</div>
          <div className="bar">Recently uploaded</div>
          <div className="bar">Watched</div>
          <div className="bar">New to you</div>
          <div className="bar">Telenovelas</div>
          <div className="bar">High-Intensity Training</div>
          <div className="bar">Thoughts</div>
          <div className="bar">Cristiano Ronaldo</div>
          <div className="bar">Weight Training</div>
          <div className="bar">Sitcoms</div>
          <div className="bar">Recently uploaded</div>
          <div className="bar">Watched</div>
          <div className="bar">New to you</div>
        </div>
        { notSmallSc && (
        <div className={`button-container right ${hideAngleRight ? 'hide' : null}`}>
          <div className="button-box">
            <button onClick={(e) => handleClick(e)} type="button" aria-label="scroll button" className="bar-button angle-right"><TfiAngleRight /></button>
          </div>
        </div>
        )}

      </div>
      <div className="videos">
        <Videospage />
      </div>
    </div>
  );
};

export default Mainpage;
