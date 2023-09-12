import "./rightbar.css";
import { Cake } from "@mui/icons-material";
import Online from "../online/online";
import { Users } from "../../dummyData";

export default function Rightbar({ profile }) {
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <Cake className="birthdayIcon" />
          <span className="birthdayText">
            <b>Fake Duck</b> and <b>2 other friend </b> birthday today.
          </span>
        </div>
        <img src="asset/ads/ad1.jpg" alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Friend Online</h4>
        <ul>
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle">User infomation</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">Viet Nam</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">Han Noi</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Realatioship:</span>
            <span className="rightbarInfoValue">Single</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img
              src="asset/person/5.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">2Unknow</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="asset/person/7.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">2Unknow</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="asset/person/3.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">2Unknow</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="asset/person/4.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">2Unknow</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="asset/person/6.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">2Unknow</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="asset/person/8.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">2Unknow</span>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <ProfileRightbar />
        {profile ? <ProfileRightbar /> : <HomeRightbar/> }
      </div>
    </div>
  );
}
