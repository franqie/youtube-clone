import { useGlobalContext } from '../context';
import useWindowSize from '../utils/useWindowSize';
import Mainpage from './Mainpage';
import Sidebar from './Sidebar';
import MiniSidebar from './MiniSidebar';

const Content = () => {
  const { showTray } = useGlobalContext();
  const windowWidth = useWindowSize();
  return (
    <div className="content">
      {showTray && (windowWidth > 1300) ? <Sidebar /> : <MiniSidebar />}
      <Mainpage />
    </div>
  );
};

export default Content;
