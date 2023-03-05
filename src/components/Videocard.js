/* eslint-disable react/prop-types */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MenuVIcon from '../images/MenuVIcon';
import { useGlobalContext } from '../context';
import Popoutcard from './Popoutcard';

const Videocard = ({
  imgSrc,
  avatar,
  title,
  channel,
  views,
  time,
}) => {
  // const [popout, setPopout] = useState(false);
  const { handleClick, showSubmenu, setShowsubmenu } = useGlobalContext();
  const navigate = useNavigate();

  // const handleMouseOver = () => {
  //   setPopout(true);
  //   // setTimeout(() => setPopout(true), 100);
  // };
  // const handleMouseLeave = () => {
  //   setTimeout(() => setpopout(false), 10);
  // };

  const handlePress = () => {
    if (showSubmenu) {
      setShowsubmenu(false);
    } else {
      navigate('/watch');
    }
  };

  return (
    <div
      onClick={handlePress}
      onKeyDown={handlePress}
      role="button"
      tabIndex={0}
      className="videocard"
    >
      <div className="img__container">
        <img src={imgSrc} alt="" className="video__img" />
        <span className="hover__text">Keep hovering to play</span>
      </div>
      <div className="video__desc">
        <img src={avatar} alt="video" className="channel__avatar" />
        <div className="channel">
          <div className="desc">
            <h4 className="video__title">{title}</h4>
            <div className="sub__desc">
              <p className="channel__name">{channel}</p>
              <p className="views">
                {views}
                {' '}
                •
                {' '}
                {time}
              </p>
            </div>
          </div>
          <button
            type="button"
            className="channel__btn"
            onClick={(e) => handleClick(e)}
            onKeyDown={(e) => handleClick(e)}
          >
            <MenuVIcon />
          </button>
        </div>
      </div>
      <Popoutcard
        imgSrc={imgSrc}
        avatar={avatar}
        title={title}
        channel={channel}
        views={views}
        time={time}
        // popout={popout}
        // setPopout={setPopout}
      />
    </div>
  );
};

export default Videocard;
