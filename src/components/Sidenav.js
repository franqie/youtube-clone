import { useLocation } from 'react-router-dom';
import { useGlobalContext } from '../context';
import useWindowSize from '../utils/useWindowSize';
import Sidebar from './Sidebar';
import MiniSidebar from './MiniSidebar';

const Sidenav = () => {
  const { showTray } = useGlobalContext();
  const windowWidth = useWindowSize();
  const { pathname } = useLocation();

  if (pathname === '/watch') {
    return null;
  }

  return (
    <div className="sidenav">
      {showTray && (windowWidth > 1300) ? <Sidebar /> : <MiniSidebar />}
    </div>
  );
};

export default Sidenav;
