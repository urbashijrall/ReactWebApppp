import Post from "../posts/Post";
import Share from "../share/Share";
import "./feed.scss";
import { Posts } from "../../dummydata";

export default function Feed() {
  return (
    <div className="feed">
      <div className="feedContainer">
        <Share />
        {Posts.map((p) => (
          <Post key={p.id} post={p}/>
        ))}
      </div>
    </div>
  );
}
