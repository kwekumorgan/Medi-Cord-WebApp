// pages/LoginPage.jsx
import { BiBorderRadius } from "react-icons/bi";
import IllustrationImg from "./assets/Illustration3.png";
import SideDecoration from "./components/SideDecoration";
import "./LoginPage.css";

export default function LoginPage() {
  return (
    //Left Side
    <div className="container">
      <div className="leftSide">
        <img src={IllustrationImg} alt="Illustration" className="image" />
        <SideDecoration />
      </div>

      <div className="rightSide">
        <div className="contentWrapper">
          <p className="welcomeTitle">Welcome!</p>
          <p className="welcomeSubtitle">Your Virtual Hospital</p>

          <div className="formSection">
            <label className="label">Password</label>
            <input type="password" className="input"></input>

            <label className="label">ID Number</label>
            <input type="text" className="input"></input>
          </div>

          <button className="loginButton">LOGIN</button>
        </div>
      </div>
    </div>
  );
}


