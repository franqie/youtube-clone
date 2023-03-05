import React from 'react';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context';
import Sidebar from './Sidebar';
import BarsIcon from '../images/BarsIcon';

const Sidemenu = () => {
  const { showSidemenu, setShowsidemenu } = useGlobalContext();

  React.useEffect(() => {
    if (showSidemenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [showSidemenu]);

  return (
    <div
      className={`${showSidemenu ? 'sidemenu show' : 'sidemenu'}`}
      onClick={() => setShowsidemenu(!showSidemenu)}
      onKeyDown={() => setShowsidemenu(!showSidemenu)}
      role="button"
      tabIndex={0}
    >
      <div
        className="container"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={(e) => e.stopPropagation()}
        role="button"
        tabIndex={0}
      >
        <div className="header">
          <button
            type="button"
            aria-label="menu button"
            className="bars effect"
            onClick={() => setShowsidemenu(!showSidemenu)}
          >
            <BarsIcon className="icon hi-bars" />
          </button>
          <Link to="/" className="logo">
            <img src="https://www.freeiconspng.com/thumbs/youtube-logo-png/youtube-logo-png-transparent-image-5.png" alt="logo" className="logo-img" />
            <span className="logo-text">NG</span>
          </Link>
        </div>
        <Sidebar />
      </div>
    </div>
  );
};

export default Sidemenu;
