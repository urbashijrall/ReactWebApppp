import "./profile.scss";
import Feed from "../../components/feed/Feed";
import Navbar from "../../components/navbar/Navbar";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";

export default function Profile() {
  return (
    <>
      <Navbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
            <div className="profileRightTop">
                <div className="profileCover">
                <img src="/assets/posts/post-1.jpg" className="profileCoverImg" alt="" />
                <img src="/assets/people/person-17.jpg" className="profileUserImg" alt="" />
                </div>
                <div className="profileInfo">
                    <h4 className="profileInfoName">Urvashi Jrall</h4>
                    <span className="profileDescription">Hello my friends</span>
                </div>
            </div>
            <div className="profileRightBottom">
                <Feed/>
                <Rightbar profile/>
            </div>
          <Feed />
          <Rightbar />
        </div>
      </div>
    </>
  );
}
