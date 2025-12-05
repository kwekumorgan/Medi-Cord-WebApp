import "./HomeCard.css";
import doctorImage from "../assets/womanDoctor.png";
import VerticalRectangle from "../components/VerticalRectangle.jsx";

function Homecard() {
  return (
    <div className="homeCard">
      <div className="homeCardText">
        <p
          style={{ fontSize: "17px", color: "#aca7a7ff", marginBottom: "50px" }}
        >
          Welcome Back, Samira
        </p>

        <div style={{ marginBottom: "110px", marginLeft: "30px" }}>
          <p>
            How do you feel today?Book an appointment with us and
            <br />
            get yourself checked.
          </p>

          <p style={{ padding: "0px", margin: "0px", fontWeight: "bold" }}>
            Schedule an Appointment
          </p>
        </div>

        <p style={{fontWeight:'600'}}>
          Departments <span style={{ color: "white ", fontSize:'25px', marginLeft:'75px',fontWeight:'520' }}> Schedule</span>
        </p>
      </div>
      <div className="imageContainer">
        <img src={doctorImage} alt="doctor image" className="doctorImage" />
      </div>
      <VerticalRectangle/>
    </div>
  );
}

export default Homecard;
