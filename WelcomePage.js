import React from "react";
import { useNavigate } from "react-router-dom";
import "./WelcomePage.css"; 

const WelcomePage = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login-page"); 
  };

  return (
    <div className="welcome-container">
      <div className="content">
        <h1>Lung Cancer Detection</h1>
        <button className="welcome-button" onClick={handleLoginClick}>
          &#9654; Lung Cancer
        </button>
      </div>
    </div>
  );
};

export default WelcomePage;
