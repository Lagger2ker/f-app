import "./sidebar.css";
import {
  RssFeed,
  Chat,
  VideoLibrary,
  Bookmark,
  Help,
  WorkOutline,
  Today,
  School,
  AutoAwesome,
} from "@mui/icons-material";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon" />
            <span className="sidebarlistItemText">Feed</span>
          </li>{" "}
          <li className="sidebarListItem">
            <Chat className="sidebarIcon" />
            <span className="sidebarlistItemText">Chats</span>
          </li>{" "}
          <li className="sidebarListItem">
            <VideoLibrary className="sidebarIcon" />
            <span className="sidebarlistItemText">Videos</span>
          </li>{" "}
          <li className="sidebarListItem">
            <Bookmark className="sidebarIcon" />
            <span className="sidebarlistItemText">Bookmarks</span>
          </li>{" "}
          <li className="sidebarListItem">
            <Help className="sidebarIcon" />
            <span className="sidebarlistItemText">Helps</span>
          </li>{" "}
          <li className="sidebarListItem">
            <WorkOutline className="sidebarIcon" />
            <span className="sidebarlistItemText">Jobs</span>
          </li>{" "}
          <li className="sidebarListItem">
            <Today className="sidebarIcon" />
            <span className="sidebarlistItemText">Events</span>
          </li>{" "}
          <li className="sidebarListItem">
            <School className="sidebarIcon" />
            <span className="sidebarlistItemText">Courses</span>
          </li>{" "}
          <li className="sidebarListItem">
            <AutoAwesome className="sidebarIcon" />
            <span className="sidebarlistItemText">Groups</span>
          </li>
        </ul>
        <button className="sidebarButton">Showmore</button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          <li className="sidebarFriend">
            <img
              src="/asset/person/2.jpeg"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">Henry</span>
          </li>
          <li className="sidebarFriend">
            <img
              src="/asset/person/2.jpeg"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">Henry</span>
          </li>
          <li className="sidebarFriend">
            <img
              src="/asset/person/2.jpeg"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">Henry</span>
          </li>
          <li className="sidebarFriend">
            <img
              src="/asset/person/2.jpeg"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">Henry</span>
          </li>
          <li className="sidebarFriend">
            <img
              src="/asset/person/2.jpeg"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">Henry</span>
          </li><li className="sidebarFriend">
            <img
              src="/asset/person/2.jpeg"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">Henry</span>
          </li><li className="sidebarFriend">
            <img
              src="/asset/person/2.jpeg"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">Henry</span>
          </li><li className="sidebarFriend">
            <img
              src="/asset/person/2.jpeg"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">Henry</span>
          </li><li className="sidebarFriend">
            <img
              src="/asset/person/2.jpeg"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">Henry</span>
          </li><li className="sidebarFriend">
            <img
              src="/asset/person/2.jpeg"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">Henry</span>
          </li><li className="sidebarFriend">
            <img
              src="/asset/person/2.jpeg"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">Henry</span>
          </li><li className="sidebarFriend">
            <img
              src="/asset/person/2.jpeg"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">Henry</span>
          </li><li className="sidebarFriend">
            <img
              src="/asset/person/2.jpeg"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">Henry</span>
          </li><li className="sidebarFriend">
            <img
              src="/asset/person/2.jpeg"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">Henry</span>
          </li><li className="sidebarFriend">
            <img
              src="/asset/person/2.jpeg"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">Henry</span>
          </li><li className="sidebarFriend">
            <img
              src="/asset/person/2.jpeg"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">Henry</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
