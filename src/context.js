/* eslint-disable react/prop-types */
import React, { createContext, useContext, useState } from 'react';
import useWindowSize from './utils/useWindowSize';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [showTray, setShowTray] = useState(true);
  const [showSidemenu, setShowsidemenu] = useState(false);
  const [showSubmenu, setShowsubmenu] = useState(false);
  const [location, setLocation] = useState({});
  const windowWidth = useWindowSize();
  const largeSc = windowWidth > 1300;
  const notSmallSc = windowWidth > 657;

  const openSubmenu = (coordinates) => {
    setLocation(coordinates);
  };

  const handleClick = (e) => {
    e.stopPropagation();
    const coords = e.target.getBoundingClientRect();
    const { left, bottom, top } = coords;
    setShowsubmenu(false);
    openSubmenu({ left, bottom, top });
    setShowsubmenu(true);
  };

  return (
    <AppContext.Provider value={
    {
      showTray,
      setShowTray,
      showSidemenu,
      setShowsidemenu,
      handleClick,
      showSubmenu,
      setShowsubmenu,
      openSubmenu,
      location,
      largeSc,
      notSmallSc,
    }
  }
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => useContext(AppContext);

export { AppProvider, useGlobalContext };
