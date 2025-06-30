import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = () => {
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");

    if (username && password) {
      if (username === storedUsername && password === storedPassword) {
        localStorage.setItem("isLoggedIn", "true");
        navigate("/home"); 
      } else {
        setError("Invalid username or password.");
      }
    } else {
      setError("Please enter a valid username and password.");
    }
  };

  const handleSignupRedirect = () => {
    navigate("/signup"); 
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Login</h2>
        {error && <p className="error">{error}</p>}
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="login-input"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="login-input"
        />
        <button onClick={handleLogin} className="login-button">
          Login
        </button>
        <p className="signup-redirect">
          Don't have an account?{" "}
          <span onClick={handleSignupRedirect} className="signup-link">
            Signup here
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
