import "./HomeCard.css";
import doctorImage from "../assets/womanDoctor.png";

function Homecard() {
  return (
    <div className="homeCard">
      <div className="homeCardText">
        <p>Welcome back, Samira</p>
      </div>
      <div className="imageContainer">
        <img src={doctorImage} alt="doctor image" className="doctorImage" />
      </div>
    </div>
  );
}

export default Homecard;
