import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    setError("");

    // Check if an account has been created
    const savedAccount = localStorage.getItem("caterShotAccount");

    if (!savedAccount) {
      setError("No account found. Please create an account first.");
      return;
    }

    const account = JSON.parse(savedAccount);

    // Check username and password
    if (
      username !== account.username ||
      password !== account.password
    ) {
      setError("Incorrect username or password.");
      return;
    }

    // Save logged-in status
    localStorage.setItem("isLoggedIn", "true");

    // Optional remember me
    if (rememberMe) {
      localStorage.setItem("rememberMe", "true");
    } else {
      localStorage.removeItem("rememberMe");
    }

    // Go to Home
    navigate("/");
  };

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div className="login-page">

      {/* Back to Website */}
      <button
        className="back-button"
        onClick={handleBack}
      >
        Back to website
      </button>

      {/* Login Card */}
      <div className="login-card">

        <h1>LOGIN</h1>

        <form onSubmit={handleLogin}>

          {/* Username */}
          <input
            className="login-input"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
              setError("");
            }}
          />

          {/* Password */}
          <input
            className="login-input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError("");
            }}
          />

          {/* Remember Me */}
          <div className="remember-container">

            <input
              type="checkbox"
              id="remember"
              checked={rememberMe}
              onChange={(e) =>
                setRememberMe(e.target.checked)
              }
            />

            <label htmlFor="remember">
              Remember me
            </label>

          </div>

          {/* Error Message */}
          {error && (
            <p className="login-error">
              {error}
            </p>
          )}

          {/* Login Button */}
          <button
            type="submit"
            className="login-button"
          >
            LOGIN
          </button>

        </form>

        {/* Create Account */}
        <p className="create-account-text">
          Don't have an account?{" "}
          <Link to="/signup">
            Create Account
          </Link>
        </p>

      </div>

    </div>
  );
}

export default Login;