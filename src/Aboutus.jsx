import React from "react";
import { useNavigate } from "react-router-dom";
import "./Services.css";

import backgroundImage from "./assets/event_background.jpg";

function Services() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div
      className="services-page"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="services-overlay"></div>

      {/* Back to Website */}
      <button className="services-back-button" onClick={handleBack}>
        Back to website
      </button>

      {/* Header */}
      <div className="services-header">
        <p>WE'RE HERE TO SERVE YOU</p>
        <h1>Our Services</h1>
      </div>

      {/* Services */}
      <div className="services-container">

        {/* Wedding */}
        <div className="service-item">
          <h2>Wedding Ceremonies</h2>

          <p>
            Make your wedding day more memorable with
            <br />
            elegant catering, organized event setup, and designs
            <br />
            that match your preferred theme.
          </p>
        </div>

        {/* Debut */}
        <div className="service-item">
          <h2>Debut</h2>

          <p>
            Celebrate your special 18th birthday with beautiful
            <br />
            event styling, delicious catering, and a setup
            <br />
            designed for your dream celebration.
          </p>
        </div>

        {/* Party */}
        <div className="service-item">
          <h2>Party</h2>

          <p>
            Whether it's a birthday, family gathering, or special
            <br />
            celebration, CaterShot provides catering and event
            <br />
            setup to make your party enjoyable and memorable.
          </p>
        </div>

        {/* Kiddie Party */}
        <div className="service-item">
          <h2>Kiddie Party</h2>

          <p>
            Create a fun and colorful celebration for kids with
            <br />
            delicious food, playful decorations, and an event
            <br />
            setup made for a happy party.
          </p>
        </div>

      </div>
    </div>
  );
}

export default Services;