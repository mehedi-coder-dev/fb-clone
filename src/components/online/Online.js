/* eslint-disable react/prop-types */
import './online.css';

function Online({ user }) {
  return (
    <li className="rightbarFriend">
      <div className="rightbarProfileImgContainer">
        <img className="rightbarProfileImg" src={user.profilePicture} alt="" />
        <span className="rightbarOnline" />
      </div>
      <span className="rightUsername">{user.username}</span>
    </li>
  );
}

export default Online;
