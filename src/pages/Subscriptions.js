import React from 'react';
import { useGlobalContext } from '../context';

const Subscriptions = () => {
  const { showTray, largeSc } = useGlobalContext();
  return (
    <div className={`${showTray && largeSc ? 'content shrink' : 'content'}`}>Subscriptions</div>
  );
};

export default Subscriptions;
