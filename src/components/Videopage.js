import React, { useRef } from 'react';
import Submenu from './Submenu';
import Videocard from './Videocard';

const Videopage = () => {
  const page = useRef(null);
  // const perimeter = container.current.getBoundingClientRect();

  return (
    <div className="videopage" ref={page}>
      <Submenu page={page} />
      <Videocard
        imgSrc="https://i.ytimg.com/vi/s975DyIqq_U/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDnGBV5oiV0CLd4WauJnvAdSxfBEA"
        title="PRISON BREAK | SEASON 1 SCENE PACK"
        channel="OTZ Media"
        views="5k views"
        time="1 month ago"
        avatar="https://yt3.ggpht.com/j5AbQt634TGo_fCEmSVUWcompQRbrbYqrnoUqV84KLQ3l0ZCWt4oCSuvgzrcyQiMgWjIQjGprnc=s68-c-k-c0x00ffffff-no-rj"
      />
      <Videocard
        imgSrc="https://i.ytimg.com/vi/btHF84xXIDQ/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBbpRd0Fl4nAXt2nL2EUa4zLYtjUw"
        title="The Vampire Diaries casts funny momments"
        channel="OTZ Media"
        views="2k views"
        time="1 month ago"
        avatar="https://yt3.ggpht.com/ytc/AMLnZu8FFjyPVUkjAOCSKilmbRE9lphkh3LOJjqT4ZFBCW8=s68-c-k-c0x00ffffff-no-rj"
      />
      <Videocard
        imgSrc="https://i.ytimg.com/vi/2mDEfbBb48k/hq720.jpg?sqp=-oaymwE2COgCEMoBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhGIFYoZTAP&rs=AOn4CLBo4AsqtQ9UogUqofhhCNQhPjG89w"
        title="THE LAST KINGDOM"
        channel="Star Media"
        views="10k views"
        time="6 months ago"
        avatar="https://yt3.ggpht.com/j5AbQt634TGo_fCEmSVUWcompQRbrbYqrnoUqV84KLQ3l0ZCWt4oCSuvgzrcyQiMgWjIQjGprnc=s68-c-k-c0x00ffffff-no-rj"
      />
      <Videocard
        imgSrc="https://i.ytimg.com/vi/phWxA89Dy94/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLBFRFEMRwCj9-LW-Z8tnuDvdLF00g"
        title="THE LAST KINGDOM"
        channel="Star Media"
        views="10k views"
        time="6 months ago"
        avatar="https://yt3.ggpht.com/ytc/AL5GRJXi2jT3Xqz7k5eT73gYxh989BJV5AabJ0rcV5z1=s68-c-k-c0x00ffffff-no-rj"
      />
      <Videocard
        imgSrc="https://i.ytimg.com/vi/B_Nv8qw6aRQ/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBIfHa3S3bEUDcTsKr5FWoshsb_Sw"
        avatar="https://yt3.ggpht.com/SJWdZMBfEjZoA0Qn8eIZYnaqnkDJmQNWP6hqlB7z7UaLU6UH6wAOshSbv_GPgHa4MbuywP-k0A=s68-c-k-c0x00ffffff-no-rj"
        title="The making of: Prison Break - Season 3"
        channel="Max"
        views="50k views"
        time="2 years ago"
      />
      <Videocard
        imgSrc="https://i.ytimg.com/vi/SNDpXCEyFNc/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBQfWzprE0qmd9z_G1IodUgfOCczw"
        avatar="https://yt3.ggpht.com/ytc/AMLnZu-5_xU54ZA2TEQQzlbhIW_bf33EVtoOCql4p1w17g=s68-c-k-c0x00ffffff-no-rj"
        title="You're definitely fluent in English if you can understand these"
        channel="English fluency journey"
        views="448k views"
        time="4 days ago"
      />
      <Videocard
        imgSrc="https://i.ytimg.com/vi/s975DyIqq_U/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDnGBV5oiV0CLd4WauJnvAdSxfBEA"
        title="PRISON BREAK | SEASON 1 SCENE PACK"
        channel="OTZ Media"
        views="5k views"
        time="1 month ago"
        avatar="https://yt3.ggpht.com/j5AbQt634TGo_fCEmSVUWcompQRbrbYqrnoUqV84KLQ3l0ZCWt4oCSuvgzrcyQiMgWjIQjGprnc=s68-c-k-c0x00ffffff-no-rj"
      />
      <Videocard
        imgSrc="https://i.ytimg.com/vi/2mDEfbBb48k/hq720.jpg?sqp=-oaymwE2COgCEMoBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhGIFYoZTAP&rs=AOn4CLBo4AsqtQ9UogUqofhhCNQhPjG89w"
        title="THE LAST KINGDOM"
        channel="Star Media"
        views="10k views"
        time="6 months ago"
        avatar="https://yt3.ggpht.com/j5AbQt634TGo_fCEmSVUWcompQRbrbYqrnoUqV84KLQ3l0ZCWt4oCSuvgzrcyQiMgWjIQjGprnc=s68-c-k-c0x00ffffff-no-rj"
      />
      <Videocard
        imgSrc="https://i.ytimg.com/vi/phWxA89Dy94/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLBFRFEMRwCj9-LW-Z8tnuDvdLF00g"
        title="THE LAST KINGDOM"
        channel="Star Media"
        views="10k views"
        time="6 months ago"
        avatar="https://yt3.ggpht.com/ytc/AL5GRJXi2jT3Xqz7k5eT73gYxh989BJV5AabJ0rcV5z1=s68-c-k-c0x00ffffff-no-rj"
      />
      <Videocard
        imgSrc="https://i.ytimg.com/vi/B_Nv8qw6aRQ/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBIfHa3S3bEUDcTsKr5FWoshsb_Sw"
        avatar="https://yt3.ggpht.com/SJWdZMBfEjZoA0Qn8eIZYnaqnkDJmQNWP6hqlB7z7UaLU6UH6wAOshSbv_GPgHa4MbuywP-k0A=s68-c-k-c0x00ffffff-no-rj"
        title="The making of: Prison Break - Season 3"
        channel="Entertainment Arena"
        views="50k views"
        time="2 years ago"
      />
      <Videocard
        imgSrc="https://i.ytimg.com/vi/SNDpXCEyFNc/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBQfWzprE0qmd9z_G1IodUgfOCczw"
        avatar="https://yt3.ggpht.com/ytc/AMLnZu-5_xU54ZA2TEQQzlbhIW_bf33EVtoOCql4p1w17g=s68-c-k-c0x00ffffff-no-rj"
        title="You're definitely fluent in English if you can understand these"
        channel="English fluency journey"
        views="448k views"
        time="4 days ago"
      />
      <Videocard
        imgSrc="https://i.ytimg.com/vi/qO--hy6Q-LA/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBbQaMXW39wwbR-_6f6Wafu9drpKA"
        avatar="https://yt3.ggpht.com/ytc/AMLnZu97ieA_QMgiEbBSxTS5TSkybv993EkdJun-VRLZW4A=s68-c-k-c0x00ffffff-no-rj"
        title="You're definitely fluent in English if you can understand these"
        channel="English fluency journey"
        views="448k views"
        time="4 days ago"
      />
      <Videocard
        imgSrc="https://i.ytimg.com/vi/s975DyIqq_U/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDnGBV5oiV0CLd4WauJnvAdSxfBEA"
        title="PRISON BREAK | SEASON 1 SCENE PACK"
        channel="OTZ Media"
        views="5k views"
        time="1 month ago"
        avatar="https://yt3.ggpht.com/j5AbQt634TGo_fCEmSVUWcompQRbrbYqrnoUqV84KLQ3l0ZCWt4oCSuvgzrcyQiMgWjIQjGprnc=s68-c-k-c0x00ffffff-no-rj"
      />
      <Videocard
        imgSrc="https://i.ytimg.com/vi/btHF84xXIDQ/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBbpRd0Fl4nAXt2nL2EUa4zLYtjUw"
        title="The Vampire Diaries casts funny momments"
        channel="OTZ Media"
        views="2k views"
        time="1 month ago"
        avatar="https://yt3.ggpht.com/ytc/AMLnZu8FFjyPVUkjAOCSKilmbRE9lphkh3LOJjqT4ZFBCW8=s68-c-k-c0x00ffffff-no-rj"
      />
      <Videocard
        imgSrc="https://i.ytimg.com/vi/2mDEfbBb48k/hq720.jpg?sqp=-oaymwE2COgCEMoBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhGIFYoZTAP&rs=AOn4CLBo4AsqtQ9UogUqofhhCNQhPjG89w"
        title="THE LAST KINGDOM"
        channel="Star Media"
        views="10k views"
        time="6 months ago"
        avatar="https://yt3.ggpht.com/j5AbQt634TGo_fCEmSVUWcompQRbrbYqrnoUqV84KLQ3l0ZCWt4oCSuvgzrcyQiMgWjIQjGprnc=s68-c-k-c0x00ffffff-no-rj"
      />
      <Videocard
        imgSrc="https://i.ytimg.com/vi/phWxA89Dy94/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLBFRFEMRwCj9-LW-Z8tnuDvdLF00g"
        title="THE LAST KINGDOM"
        channel="Star Media"
        views="10k views"
        time="6 months ago"
        avatar="https://yt3.ggpht.com/ytc/AL5GRJXi2jT3Xqz7k5eT73gYxh989BJV5AabJ0rcV5z1=s68-c-k-c0x00ffffff-no-rj"
      />
      <Videocard
        imgSrc="https://i.ytimg.com/vi/2mDEfbBb48k/hq720.jpg?sqp=-oaymwE2COgCEMoBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhGIFYoZTAP&rs=AOn4CLBo4AsqtQ9UogUqofhhCNQhPjG89w"
        title="THE LAST KINGDOM"
        channel="Star Media"
        views="10k views"
        time="6 months ago"
        avatar="https://yt3.ggpht.com/j5AbQt634TGo_fCEmSVUWcompQRbrbYqrnoUqV84KLQ3l0ZCWt4oCSuvgzrcyQiMgWjIQjGprnc=s68-c-k-c0x00ffffff-no-rj"
      />
      <Videocard
        imgSrc="https://i.ytimg.com/vi/phWxA89Dy94/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLBFRFEMRwCj9-LW-Z8tnuDvdLF00g"
        title="THE LAST KINGDOM"
        channel="Star Media"
        views="10k views"
        time="6 months ago"
        avatar="https://yt3.ggpht.com/ytc/AL5GRJXi2jT3Xqz7k5eT73gYxh989BJV5AabJ0rcV5z1=s68-c-k-c0x00ffffff-no-rj"
      />
    </div>
  );
};

export default Videopage;
