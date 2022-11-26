/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import { MoreVert } from '@material-ui/icons';
import React, { useState } from 'react';
import likeImg from '../../assets/like.png';
import heartImg from '../../assets/heart.png';
import './post.css';
import { Users } from '../../dummyData';

function Post({ post }) {
  const [like, setLike] = useState(post.like);
  const [isLiked, setisLiked] = useState(false);

  const likeHandle = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setisLiked(!isLiked);
  };

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img className="postProfileImg" src={Users.filter((u) => u.id === post.userId)[0].profilePicture} alt="post" />
            <span className="postUsername">{Users.filter((u) => u.id === post.userId)[0].username}</span>
            <span className="postDate">
              {post.date}
              {' '}
              mins ago
            </span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img src={post.photo} className="postImg" alt="postImage" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src={likeImg} onClick={likeHandle} alt="" />
            <img className="likeIcon" src={heartImg} onClick={likeHandle} alt="" />
            <span className="postLikeCounter">
              {like}
              {' '}
              people like it
            </span>
          </div>
          <div className="postBottomRight">
            <div className="postCommentText">
              {post.comment}
              {' '}
              comments
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
