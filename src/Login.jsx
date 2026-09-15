import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [agreed, setAgreed] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.password
    ) {
      setError("Please complete all the fields.");
      return;
    }

    if (!agreed) {
      setError("Please agree to the Terms & Conditions.");
      return;
    }

    setError("Account created successfully!");
  };

  const handleBackToWebsite = () => {
    navigate("/");
  };

  return (
    <div className="login-page">
      <button
        className="back-button"
        onClick={handleBackToWebsite}
      >
        Back to website
      </button>

      <div className="login-image">
        <img
          src="/catering.jpg"
          alt="Catering event"
        />
      </div>

      <div className="login-card">
        <h1>CREATE ACCOUNT</h1>

        <p className="already-account">
          Already have an account?
        </p>

        <form onSubmit={handleSubmit}>
          <div className="name-row">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
            />

            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>

          <input
            className="full-input"
            type="email"
            name="email"
            placeholder="createaccount@gmail.com"
            value={formData.email}
            onChange={handleChange}
          />

          <input
            className="full-input"
            type="password"
            name="password"
            placeholder="Enter password"
            value={formData.password}
            onChange={handleChange}
          />

          <div className="terms">
            <input
              type="checkbox"
              id="terms"
              checked={agreed}
              onChange={(e) => {
                setAgreed(e.target.checked);
                setError("");
              }}
            />

            <label htmlFor="terms">
              I agree to the{" "}
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
              >
                Terms & Conditions
              </a>
            </label>
          </div>

          {error && (
            <p className="error-message">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="create-button"
          >
            CREATE ACCOUNT
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;