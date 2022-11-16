/* eslint-disable react/prop-types */
import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [showTray, setShowTray] = useState(true);

  return (
    <AppContext.Provider value={
    {
      showTray,
      setShowTray,
    }
  }
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => useContext(AppContext);

export { AppProvider, useGlobalContext };
