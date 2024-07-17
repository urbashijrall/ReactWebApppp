import "./closefriends.scss";

export default function Closefriends( {user} ) {
  return (
    <li className="sidebarFriend">
      <img alt="Friend" className="sidebarFriendImage" src={user.profilepicture}  />
      <span className="sidebarFriendName">{user.username}</span>
    </li>
  );
}
