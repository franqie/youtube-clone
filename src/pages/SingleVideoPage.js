import React, { useState } from 'react';
import { HiOutlineUser } from 'react-icons/hi2';
import Comment from '../components/Comment';
import RelatedVideos from '../components/RelatedVideos';
import LikeIcon from '../images/LikeIcon';
import DislikeIcon from '../images/DislikeIcon';
import ShareIcon from '../images/ShareIcon';
import CutIcon from '../images/CutIcon';
import SaveIcon from '../images/SaveIcon';
import SortIcon from '../images/SortIcon';

const SingleVideoPage = () => {
  const [showless, setShowless] = useState(true);
  return (
    <div className="singlevideopage">
      <div className="videopage__inner">
        <div className="singlevideo">
          <div className="container">
            <div className="iframe__container">
              <iframe
                src="https://www.youtube.com/embed/E3sbo6LoB30"
                title="YouTube video"
                allow="clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; accelerometer; autoplay"
                allowFullScreen
              />
              <h1>You won&apos;t believe how good mateo messi has become!</h1>
            </div>
            <div className="channel__action">
              <div className="action__left">
                <div className="channel">
                  <img src="https://yt3.ggpht.com/ytc/AMLnZu97ieA_QMgiEbBSxTS5TSkybv993EkdJun-VRLZW4A=s48-c-k-c0x00ffffff-no-rj" alt="" />
                  <div className="channel__desc">
                    <h4>J9Studios</h4>
                    <p>65.7K subscribers</p>
                  </div>
                </div>
                <button type="button" className="subscribe">subscribe</button>
              </div>
              <div className="action__right">
                <div className="span thumb">
                  <button type="button" className="like">
                    <LikeIcon />
                    <span className="like__count">107K</span>
                  </button>
                  <button type="button" className="dislike">
                    <DislikeIcon />
                  </button>
                </div>
                <button type="button" className="span">
                  <ShareIcon />
                  <span className="">share</span>
                </button>
                <button type="button" className="span">
                  <CutIcon />
                  <span className="">clip</span>
                </button>
                <button type="button" className="span">
                  <SaveIcon />
                  <span className="">save</span>
                </button>
                <button type="button" className="span more">
                  <span className="material-symbols-outlined">more_horiz</span>
                </button>
              </div>
            </div>
            <div
              role="button"
              onClick={() => setShowless(!showless)}
              className={`${showless ? 'description closed' : 'description'}`}
              onKeyDown={() => setShowless(!showless)}
              tabIndex={0}
            >
              <div className="head">
                <span className="views">6.9M views</span>
                <span>3 weeks ago</span>
              </div>
              <div className="info">
                <p>Thanks for watching! Remember to subscribe for the best content!</p>
                <p>
                  Copyright Disclaimer Under Section 107 of the Copyright Act 1976,
                  allowance is made for &apos;fair use&apos; for purposes such as criticism,
                  comment, news reporting, teaching, scholarship,
                  and research. Fair use is a use permitted by copyright
                  statute that might otherwise be infringing.
                  Non-profit, educational or personal use tips the balance in favor of fair use.
                </p>
                <p>
                  Copyright Disclaimer Under Section 107 of the Copyright Act 1976,
                  allowance is made for &apos;fair use&apos; for purposes such as criticism,
                  comment, news reporting, teaching, scholarship, and research.
                  Fair use is a use permitted by copyright statute that might
                  otherwise be infringing. Non-profit, educational or personal use tips
                  the balance in favor of fair use.
                </p>
              </div>
              <button type="button" className="show__more" onClick={() => setShowless(!showless)}>
                {showless ? 'Show more' : 'Show less'}
              </button>
            </div>
          </div>
        </div>
        <div className="related">
          <RelatedVideos />
        </div>
        <div className="comments__container">
          <div className="comments__header">
            <span className="comments__count">2,617 Comments</span>
            <span className="sort">
              <SortIcon />
              <span className="">Sort by</span>
            </span>
          </div>
          <div className="comment__box">
            <span><HiOutlineUser className="icon hi-outline-user" /></span>
            <form>
              <input type="text" placeholder="Add a comment..." />
            </form>
          </div>
          <div className="">
            <Comment />
            <Comment />
            <Comment />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleVideoPage;
