/* eslint-disable react/prop-types */
import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [showTray, setShowTray] = useState(true);
  const [showSidemenu, setShowsidemenu] = useState(false);
  const [showSubmenu, setShowsubmenu] = useState(false);
  const [location, setLocation] = useState({});

  const openSubmenu = (coordinates) => {
    setLocation(coordinates);
  };

  return (
    <AppContext.Provider value={
    {
      showTray,
      setShowTray,
      showSidemenu,
      setShowsidemenu,
      showSubmenu,
      setShowsubmenu,
      openSubmenu,
      location,
    }
  }
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => useContext(AppContext);

export { AppProvider, useGlobalContext };
