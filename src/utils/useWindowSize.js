import { useEffect, useState } from 'react';

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    const setWidth = () => {
      setWindowSize(window.innerWidth);
    };
    window.addEventListener('resize', setWidth);

    return () => window.removeEventListener('resize', setWidth);
  }, []);

  return windowSize;
};

export default useWindowSize;
