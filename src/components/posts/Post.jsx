import { MoreVert } from "@mui/icons-material";
import "./post.scss";
import { Users } from "../../dummydata";
import { useState } from "react";

export default function Post({post}) {

  const [like,setLike] = useState(post.like);
  const [isLiked,setIsLiked] = useState(false);

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  }

  return (
    <div className="post">
      <div className="postContainer">
        <div className="postTop">
          <div className="postTopLeft">
            <img src={Users.filter((u) => u.id === post?.userId)[0].profilepicture} className="postProfileImg" alt="" />
            <span className="postUserName">{Users.filter((u) => u.id === post?.userId)[0].username}</span>
            <span className="postDate"> {post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert/>
          </div>
        </div>
        <div className="postCenter">
            <span className="postText">{post?.desc}</span>
            <img src={post.photo} className="postImg" alt="" />
        </div>
        <div className="postBottom">
            <div className="postBottomLeft">
                <img className="reactIcon" src="/assets/icons/like.png" onClick={likeHandler} alt="" />
                <img className="reactIcon" src="/assets/icons/love.png" onClick={likeHandler} alt="" />
                <span className="postLikeCounter">{like} people liked it</span>
            </div>
            <div className="postBottomRight">
                <span className="postCommentText">{post.comment} comments</span>
            </div>
        </div>
      </div>
    </div>
  );
}
