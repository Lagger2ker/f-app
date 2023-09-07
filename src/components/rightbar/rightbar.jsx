import "./rightbar.css";
import { Cake, } from "@mui/icons-material";

export default function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <Cake className="birthdayIcon" />
          <span className="birthdayText">
            <b>Fake Duck</b> and <b>2other friend </b> birthday today.
          </span>
        </div>
      </div>
    </div>
  );
}
