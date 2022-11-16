import { useGlobalContext } from '../context';
import Mainpage from './Mainpage';
import Appdrawer from './Appdrawer';
import Minidrawer from './Minidrawer';

const Content = () => {
  const { showTray } = useGlobalContext();
  return (
    <div className="content">
      {showTray ? <Appdrawer /> : <Minidrawer />}
      <Mainpage />
    </div>
  );
};

export default Content;
