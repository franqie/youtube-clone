/* eslint-disable react/prop-types */
import React, { useEffect, useRef } from 'react';
import PlaylistIcon from '../images/PlaylistIcon';
import { useGlobalContext } from '../context';
import LaterIcon from '../images/LaterIcon';
import SaveIcon from '../images/SaveIcon';
import ShareIcon from '../images/ShareIcon';
import FlagIcon from '../images/FlagIcon';
import CautionIcon from '../images/CautionIcon';
import MinusCircleIcon from '../images/MinusCircleIcon';

const Submenu = ({ page }) => {
  const { showSubmenu, location } = useGlobalContext();
  const container = useRef(null);

  if (showSubmenu) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }

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
      if ((top < submenuHeight)) {
        submenu.style.top = `${bottom}px`;
      } else {
        submenu.style.top = `${top - submenuHeight}px`;
      }
      submenu.style.left = `${pageRight - submenuWidth - 15}px`;
    } else if ((rightSpace < submenuWidth) && (bottomSpace <= bottom)) {
      submenu.style.top = `${top - submenuHeight}px`;
      submenu.style.left = `${pageRight - submenuWidth - 15}px`;
    } else if ((top < submenuHeight)) {
      submenu.style.top = `${bottom}px`;
      submenu.style.left = `${left}px`;
    } else {
      submenu.style.top = `${top - submenuHeight}px`;
      submenu.style.left = `${left}px`;
    }
  }, [showSubmenu, location]);

  return (
    <div className={`${showSubmenu ? 'submenu show' : 'submenu'}`} ref={container}>
      <button type="button" className="btn h-icon">
        <PlaylistIcon />
        <p>Add to queue</p>
      </button>
      <button type="button" className="btn">
        <LaterIcon />
        <p>Save to Watch later</p>
      </button>
      <button type="button" className="btn h-icon">
        <SaveIcon />
        <p>Save to playlist</p>
      </button>
      <button type="button" className="btn h-icon">
        <ShareIcon />
        <p>Share</p>
      </button>
      <div className="divider h-icon" />
      {/* <hr /> */}
      <button type="button" className="btn">
        <CautionIcon />
        <p>Not interested</p>
      </button>
      <button type="button" className="btn">
        <MinusCircleIcon />
        <p>Don&apos;t recommend channel</p>
      </button>
      <button type="button" className="btn h-icon">
        <FlagIcon />
        <p>Report</p>
      </button>
    </div>
  );
};

export default Submenu;
