import { Search, Person, Chat, Notifications } from "@mui/icons-material";
import "./navbar.scss";

export default function Navbar() {
  return (
    <div className="navbarContainer">
      <div className="navbarLeft">
        <span className="navbarLogo">ReactJS Web APP</span>
      </div>
      <div className="navbarCenter">
        <div className="searchBar">
          <Search className="searchIcon" />
        </div>
        <input
          type="text"
          placeholder="Search for friends, post or video"
          className="searchInput"
        />
      </div>
      <div className="navbarRight">
        <div className="navbarLinks">
          <span className="navbarLink">Homepage</span>
          <span className="navbarLink">Timeline</span>
        </div>
        <div className="navbarIcons">
          <div className="navbarIconItem">
            <Person />
            <span className="navbarIconBadge">5</span>
          </div>
          <div className="navbarIconItem">
            <Chat />
            <span className="navbarIconBadge">2</span>
          </div>
          <div className="navbarIconItem">
            <Notifications />
            <span className="navbarIconBadge">4</span>
          </div>
        </div>
        <img
          src="/assets/people/person-6.jpg"
          alt="Profile pic"
          className="navbarImage"
        />
      </div>
    </div>
  );
}
