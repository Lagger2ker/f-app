import "./post.css";
import { FavoriteBorder, MoreVert, ThumbUpOffAlt } from "@mui/icons-material"
export default function Post() {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img className="postProfileImg" src="/asset/person/1.jpeg" alt="" />
            <span className="postUsername">Varrious</span>
            <span className="postDate"> 5 mins ago </span>
          </div>
          <div className="postTopRight"></div>
          <MoreVert/>
        </div>
        <div className="postCenter">
            <span className="postText">My new post yay </span>
            <img className="postImg" src="asset/post/404.jpeg" alt="" />
        </div>
        <div className="postBottom">
            <div className="postBottomLeft">
                <ThumbUpOffAlt className="likeIcon" /> 
                <FavoriteBorder className="heartIcon"/>
                <span className="postLikeConter">69 people like </span>
            </div>
            <div className="postBottomRight">
                <span className="postCommentText">9 comments</span>
            </div>
        </div>
      </div>
    </div>
  );
}
