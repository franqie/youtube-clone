import React from 'react';
import { useGlobalContext } from '../context';

const Library = () => {
  const { showTray, largeSc } = useGlobalContext();
  return (
    <div className={`${showTray && largeSc ? 'content shrink' : 'content'}`}>Library</div>
  );
};

export default Library;
