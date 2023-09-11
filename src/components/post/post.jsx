import "./post.css";
import { FavoriteBorder, MoreVert, ThumbUpOffAlt } from "@mui/icons-material";
import { Users } from "../../dummyData";
import {useState} from "react";

export default function Post({ post }) {
  const [like,setLike] = useState(post.like)
  const [isLiked,setIsLiked] = useState(false)

  const likeHandler =()=>{
    setLike(isLiked ? like-1 : like+1)
    setIsLiked(!isLiked)
  }
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src={Users.filter((u) => u.id === post.id)[0].profilePicture}
              alt=""
            />
            <span className="postUsername">
              {Users.filter((u) => u.id === post.id)[0].username}
            </span>
            <span className="postDate"> {post.date}</span>
          </div>
          <div className="postTopRight"></div>
          <MoreVert />
        </div>
        <div className="postCenter">
          <span className="postText">{post.desc}</span>
          <img className="postImg" src={post.photo} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <ThumbUpOffAlt className="likeIcon" onClick={likeHandler} />
            <FavoriteBorder className="heartIcon" onClick={likeHandler} />
            <span className="postLikeConter">{like} people like </span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
