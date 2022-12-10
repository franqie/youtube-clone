import { useGlobalContext } from '../context';
import Mainpage from './Mainpage';
import Sidebar from './Sidebar';
import MiniSidebar from './MiniSidebar';

const Content = () => {
  const { showTray } = useGlobalContext();
  return (
    <div className="content">
      {showTray ? <Sidebar /> : <MiniSidebar />}
      <Mainpage />
    </div>
  );
};

export default Content;
