// pages/LoginPage.jsx
import { BiBorderRadius } from "react-icons/bi";
import IllustrationImg from "./assets/Illustration.jpg";
import { RxFontStyle } from "react-icons/rx";

export default function LoginPage() {
  return (
    <div style={container}>
      <div style={leftSideStyle}>
        <img
          src={IllustrationImg}
          alt="Illustration"
          style={{ width: "100%", justifyContent: "Left", height: "75%" }}
        />
      </div>

      <div style={rightSideStyle}>
        <div style={contentWrapper}>
          <p style={{ margin: -5, fontSize: "29px", letterSpacing: "-1px" }}>
            Welcome!
          </p>
          <p style={{ margin: 0, color: "grey", fontSize: "14px" }}>
            Your Virtual Hospital
          </p>

          <div style={{ marginTop: "85px" }}>
            <label style={labelStyle}>Password</label>
            <input type="password" style={inputStyle}></input>

            <label style={labelStyle}>ID Number</label>
            <input type="text" style={inputStyle}></input>
          </div>

          <button style={buttonStyle}>LOGIN</button>
        </div>
      </div>
    </div>
  );
}

const container = {
  display: "flex",
  height: "100vh",
  marginTop: "30px",
};
const inputStyle = {
  width: "300px",
  padding: "10px",
  borderRadius: "4px",
  border: "1.5px solid #8f7dd6ff",
  backgroundColor: "white",
  marginBottom: "25px",
};

const buttonStyle = {
  width: "320px",
  padding: "10px",
  color: "white",
  backgroundColor: "#4e3ec7ff",
  border: "none",
  borderRadius: "4px",
  marginTop: "90px",
  cursor: "pointer",
};

const formStyle = {
  marginLeft: "40px",
  display: "block",
};

const leftSideStyle = {
  flex: "0 0 65%",
  alignItems: "center",
  display: "flex",
  justifyContent: "flex-start",
  marginLeft: "-90px",
};
const rightSideStyle = {
  flex: "0 0 40%",
  display: "flex",
  margin: "20px",
};

const contentWrapper = {
  width: "80%",
  textAlign: "left",
  marginLeft: "100px",
};

const labelStyle = {
  display: "block",
  marginBottom: "5px",
  fontSize: "14px",
};
