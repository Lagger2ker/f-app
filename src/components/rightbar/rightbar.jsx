import "./rightbar.css";
import { Cake } from "@mui/icons-material";
import Online from "../online/online";
import {Users} from "../../dummyData"

export default function Rightbar() {
  return (
    <>
      <div className="rightbar">
        <div className="rightbarWrapper">
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
        </div>
      </div>
    </>
  );
}
