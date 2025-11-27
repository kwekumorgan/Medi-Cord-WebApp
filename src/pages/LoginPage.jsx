import { BiBorderRadius } from "react-icons/bi";
import IllustrationImg from "../assets/Illustration3.png";
import SideDecoration from "../components/SideDecoration";
import "./LoginPage.css";
import { useNavigate } from "react-router-dom";

/* Login page: left shows illustration/decoration, right contains the login form */
export default function LoginPage() {
  const navigate = useNavigate();

  function handleLogin() {
    navigate("/home");
  }
  return (
    <div className="container">
      {/* Left: illustration with decorative element */}
      <div className="leftSide">
        <img src={IllustrationImg} alt="Illustration" className="image" />
        <SideDecoration />
      </div>

      {/* Right: login form and primary action */}
      <div className="rightSide">
        <div className="contentWrapper">
          <p className="welcomeTitle">Welcome!</p>
          <p className="welcomeSubtitle">Your Virtual Hospital</p>

          <div className="formSection">
            <label className="label">Password</label>
            <input type="password" className="input" />

            <label className="label">ID Number</label>
            <input type="text" className="input" />
          </div>

          <button className="loginButton" onClick={handleLogin}>
            LOGIN
          </button>
        </div>
      </div>
    </div>
  );
}
