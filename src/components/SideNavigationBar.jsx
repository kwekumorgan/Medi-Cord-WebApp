import "./SideNavigationBar.css";
import HomeCard from "./HomeCard.jsx";
import { FaSignOutAlt  } from "react-icons/fa";

function SideNavigationBar() {
  return (
    <div className="sideNavBarContainer">
      <div>
        <div className="branding">
          <p className="title">
            Medi-<span>Cord</span>
          </p>
          <p className="subtitle">Your Virtual Hospital</p>
        </div>
        <div className="sideNavBar">
          <a href="#" className="navBarItem">
            DashBoard
          </a>
          <a href="#" className="navBarItem">
            Profile
          </a>
          <a href="#" className="navBarItem">
            Records
          </a>
          <a href="#" className="navBarItem">
            Appointment History
          </a>
        </div>
      </div>


      <div>
        <button className='logOutButton'>
          <FaSignOutAlt className='signOutIcon'/>LogOut</button>
      </div>
    </div>
  );
}

export default SideNavigationBar;
