import React from 'react';
import { HiOutlineUser } from 'react-icons/hi2';
// import { FiThumbsDown, FiThumbsUp } from 'react-icons/fi';

const Comment = () => (
  <div className="comment">
    <span className="avatar">
      <HiOutlineUser className="icon hi-outline-user" />
    </span>
    <div className="message">
      <div className="header">
        <span className="username">Username</span>
        <span className="message__time">3 weeks ago</span>
      </div>
      <p className="msg__text">The first comment made under the video.</p>
      <div className="msg__btn">
        <span className="like">
          <button className="thumb" type="button">
            <span className="material-symbols-outlined">thumb_up</span>
          </button>
          <span className="like__count">12K</span>
        </span>
        <button className="thumb down" type="button">
          <span className="material-symbols-outlined">thumb_down</span>
        </button>
        <button className="reply" type="button">Reply</button>
      </div>
      <button type="button" className="reply__btn">
        <span className="material-symbols-outlined">arrow_drop_down</span>
        <span>152 replies</span>
      </button>
    </div>
    <button type="button" className="btn">
      <span className="material-symbols-outlined">more_vert</span>
    </button>
  </div>
);

export default Comment;
