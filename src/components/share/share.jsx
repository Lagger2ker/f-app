import "./share.css";
import { PermMedia } from "@mui/icons-material"

export default function Share() {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            className="shareProfileImg"
            // src="/asset/person/1.jpeg"
            alt=""
          />
          <input placeholder="Likeeeeee" className="shareInput" />
        </div>
        <hr className="shareHr" />
        
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <PermMedia className="shareIcon" />
              <span className="shareOptionText">Photo or Video</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
