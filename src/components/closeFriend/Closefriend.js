/* eslint-disable react/prop-types */
import './closefriend.css';

function Closefriend({ user }) {
  return (
    <li className="sidebarFriend">
      <img src={user.profilePicture} className="sidebarFriendImg" alt="friend" />
      <span className="sidebarFriendName">{user.username}</span>
    </li>
  );
}

export default Closefriend;
