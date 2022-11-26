/* eslint-disable arrow-body-style */
/* eslint-disable arrow-spacing */
/* eslint-disable react/function-component-definition */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable object-curly-spacing */
import './rightbar.css';
import birthdayImg from '../../assets/gift.png';
import adImg from '../../assets/ad.png';
import { Users } from '../../dummyData';
import Online from '../online/Online';

function Rightbar({profile}) {
  const HomeRightbar = ()=>{
    return (
      <>
        <div className="birthdayContainer">
          <img className="birthdayImg" src={birthdayImg} alt="" />
          <span className="birthdayText">
            <b>Pola Foster</b>
            {' '}
            and
            {' '}
            <b>3 other firends</b>
            {' '}
            have a birthday today
            {' '}
          </span>
        </div>
        <img className="rightAd" src={adImg} alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightbar = ()=>{
    return (
      <>
        <h4 className="rightbartitle">User informetion</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">New York </span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">Madrid</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">Single </span>
          </div>
        </div>

        <h4 className="rightbartitle">User friends</h4>
        <div className="rightbarFollwings">
          <div className="rightbarFolowing">
            <img src="assets/person/1.jpeg" alt="" className="rightbarFollowingIng" />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFolowing">
            <img src="assets/person/2.jpeg" alt="" className="rightbarFollowingIng" />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFolowing">
            <img src="assets/person/3.jpeg" alt="" className="rightbarFollowingIng" />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFolowing">
            <img src="assets/person/4.jpeg" alt="" className="rightbarFollowingIng" />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFolowing">
            <img src="assets/person/5.jpeg" alt="" className="rightbarFollowingIng" />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFolowing">
            <img src="assets/person/6.jpeg" alt="" className="rightbarFollowingIng" />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="rightbar">
      <div className="rightWrapper">
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}

export default Rightbar;
