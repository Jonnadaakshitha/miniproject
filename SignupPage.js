import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignupPage.css";

const SignupPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSignup = () => {
    if (username && password && confirmPassword) {
      if (password === confirmPassword) {
        
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
        
        
        navigate("/login-page"); 
      } else {
        setError("Passwords do not match.");
      }
    } else {
      setError("Please fill in all fields.");
    }
  };

  return (
    <div className="signup-page">
      <div className="signup-container">
        <h2>Signup</h2>
        {error && <p className="error">{error}</p>}
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="signup-input"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="signup-input"
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="signup-input"
        />
        <button onClick={handleSignup} className="signup-button">
          Signup
        </button>
      </div>
    </div>
  );
};

export default SignupPage;
