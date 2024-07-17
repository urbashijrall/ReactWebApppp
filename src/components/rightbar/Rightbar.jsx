import "./rightbar.scss";
import { Users } from "../../dummydata";
import Online from "../online/Online";

export default function Rightbar({ profile }) {
  const HomeRightBar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img className="birthdayImg" src="/assets/icons/gift-box.png" alt="" />
          <span className="birthdayText">
            <b>Aryan</b> and <b>6 others</b> have birthday today
          </span>
        </div>
        <img className="rightbarAd" src="/assets/img/ad.jpg" alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightBar = () => {
    return (
      <>
        <h4 className="rightBarTitle">User Information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City: </span>
            <span className="rightbarInfoValue">New York</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From: </span>
            <span className="rightbarInfoValue">Urvashi</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship: </span>
            <span className="rightbarInfoValue">Single </span>
          </div>
        </div>
        <h4 className="rightBarTitle">User Friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img
              src="/assets/people/person-4.jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Urvashi Jrall</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="/assets/people/person-5.jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Urvashi Jrall</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="/assets/people/person-6.jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Urvashi Jrall</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="/assets/people/person-7.jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Urvashi Jrall</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="/assets/people/person-8.jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Urvashi Jrall</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="/assets/people/person-9.jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Urvashi Jrall</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="/assets/people/person-19.jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Urvashi Jrall</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="/assets/people/person-14.jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Urvashi Jrall</span>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightBar /> : <HomeRightBar />}
      </div>
    </div>
  );
}
