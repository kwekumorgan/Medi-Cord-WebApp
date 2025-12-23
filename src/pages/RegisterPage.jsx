import IllustrationImg from "../assets/Illustration3.png";
import SideDecoration from "../components/SideDecoration";
import "./RegisterPage.css"; 
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function RegisterPage() {
  const navigate = useNavigate();

  // 1. Create a state to hold the form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    username: "",
    password: ""
  });

  // 2. Function to update the state when the user types
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // 3. The logic for the Register button
  async function handleRegister() {
    // Basic validation
    if (!formData.name || !formData.email || !formData.username || !formData.password) {
      alert("Please fill in all fields before registering.");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Registration successful! You can now login.");
        navigate("/"); // Redirect to login page
      } else {
        alert(data.message || "Registration failed");
      }
    } catch (error) {
      console.error("Connection Error:", error);
      alert("Could not connect to server. Check if your backend is running.");
    }
  }

  return (
    <div className="reg-container">
      <div className="reg-leftSide">
        <img src={IllustrationImg} alt="Illustration" className="reg-image" />
        <SideDecoration />
      </div>

      <div className="reg-rightSide">
        <div className="reg-contentWrapper">
          <p className="reg-welcomeTitle">Welcome!</p>
          <p className="reg-welcomeSubtitle">Your Virtual Hospital</p>

          <div className="reg-formSection">
            <label className="reg-label">Full Name</label>
            <input 
              type="text" 
              name="name" // Match the state key
              className="reg-input" 
              value={formData.name} 
              onChange={handleChange} 
            />

            <label className="reg-label">Email</label>
            <input 
              type="email" 
              name="email" 
              className="reg-input" 
              value={formData.email} 
              onChange={handleChange} 
            />

            <label className="reg-label">Username</label>
            <input 
              type="text" 
              name="username" 
              className="reg-input" 
              value={formData.username} 
              onChange={handleChange} 
            />

            <label className="reg-label">Password</label>
            <input 
              type="password" 
              name="password" 
              className="reg-input" 
              value={formData.password} 
              onChange={handleChange} 
            />
          </div>

          {/* 4. Link the function to the button */}
          <button className="reg-loginButton" onClick={handleRegister}>
            REGISTER
          </button>

          <p className="reg-toggleAuthText">
            Already have an account? <span className="reg-authLink" onClick={() => navigate("/")}>Login here</span>
          </p>
        </div>
      </div>
    </div>
  );
}