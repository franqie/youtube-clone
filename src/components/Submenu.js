/* eslint-disable react/prop-types */
import React, { useEffect, useRef } from 'react';
import queue from '../images/svg-queue.png';
import clock from '../images/svg-clock.png';
import playlist from '../images/svg-playlist.png';
import share from '../images/svg-share.png';
import interest from '../images/svg-not-interested.png';
import recommend from '../images/svg-dont-recommend.png';
import report from '../images/svg-report.png';
import { useGlobalContext } from '../context';

const Submenu = ({ page }) => {
  const { showSubmenu, location } = useGlobalContext();
  const container = useRef(null);

  useEffect(() => {
    const submenu = container.current;
    const perimeter = page.current.getBoundingClientRect();
    const pageRight = perimeter.right;
    // const pageBottom = perimeter.bottom;
    const { left, bottom, top } = location;
    const submenuWidth = submenu.getBoundingClientRect().width;
    const submenuHeight = submenu.getBoundingClientRect().height;
    const rightSpace = pageRight - left;
    // // const bottomSpace = pageBottom - bottom;
    const bottomSpace = (window.innerHeight) - submenuHeight;

    if ((rightSpace < submenuWidth) && !(bottomSpace <= bottom)) {
      submenu.style.top = `${bottom}px`;
      submenu.style.left = `${pageRight - submenuWidth - 15}px`;
    } else if ((bottomSpace <= bottom) && !(rightSpace < submenuWidth)) {
      submenu.style.top = `${top - submenuHeight}px`;
      submenu.style.left = `${left}px`;
    } else if ((rightSpace < submenuWidth) && (bottomSpace <= bottom)) {
      submenu.style.top = `${top - submenuHeight}px`;
      submenu.style.left = `${pageRight - submenuWidth - 15}px`;
    } else {
      submenu.style.top = `${bottom}px`;
      submenu.style.left = `${left}px`;
    }
  }, [showSubmenu, location]);

  return (
    <div className={`${showSubmenu ? 'submenu show' : 'submenu'}`} ref={container}>
      <button type="button" className="btn">
        <img src={queue} alt="" />
        <p>Add to queue</p>
      </button>
      <button type="button" className="btn">
        <img src={clock} alt="" />
        <p>Save to Watch later</p>
      </button>
      <button type="button" className="btn">
        <img src={playlist} alt="" />
        <p>Save to playlist</p>
      </button>
      <button type="button" className="btn">
        <img src={share} alt="" />
        <p>Share</p>
      </button>
      <hr />
      <button type="button" className="btn">
        <img src={interest} alt="" />
        <p>Not interested</p>
      </button>
      <button type="button" className="btn">
        <img src={recommend} alt="" />
        <p>Don&apos;t recommend channel</p>
      </button>
      <button type="button" className="btn">
        <img src={report} alt="" />
        <p>Report</p>
      </button>
    </div>
  );
};

export default Submenu;
