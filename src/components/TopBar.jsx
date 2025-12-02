import "./TopBar.css";
import { FaSearch, FaSlidersH } from "react-icons/fa";


function TopBar() {
  return (
    <div className="topBarLayout">
      <div className="searchBarContainer">
        <FaSearch className="searchIcon" />
        <input className="searchInput" type="text" placeholder="Search..."/>
        <button className='filterButton'>
        <FaSlidersH className="filterIcon" />
        </button>
      </div>

      <FaBell className='notificationIcon'/>

    
    </div>
  );
}

export default TopBar;
