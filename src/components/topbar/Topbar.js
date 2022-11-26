import './topbar.css';
import SearchIcon from '@material-ui/icons/Search';
import { Person, Chat, Notifications } from '@material-ui/icons';
import PersonImg from '../../assets/person/1.jpeg';

function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">Mehedisocial</span>
      </div>

      <div className="topbarCenter">
        <div className="searchbar">
          <SearchIcon className="searchIcon" />
          <input placeholder="Search for friend, post or video" className="searchInput" />
        </div>
      </div>

      <div className="topbarRight">

        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>

        <div className="topbarIcons">
          <div className="topbarItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>

          <div className="topbarItem">
            <Chat />
            <span className="topbarIconBadge">2</span>
          </div>

          <div className="topbarItem">
            <Notifications />
            <span className="topbarIconBadge">1</span>
          </div>

        </div>

        <img src={PersonImg} className="topbarImg" alt="person" />
      </div>
    </div>
  );
}

export default Topbar;
