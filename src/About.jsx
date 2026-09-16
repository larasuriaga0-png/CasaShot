import React from "react";
import { useNavigate } from "react-router-dom";
import "./About.css";

import backgroundImage from "./assets/event_food.jpg";

function About() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  const handleViewMore = () => {
    navigate("/about-more");
  };

  return (
    <div
      className="about-page"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="about-overlay"></div>

      {/* Back to Website */}
      <button
        className="about-back-button"
        onClick={handleBack}
      >
        Back to website
      </button>

      {/* Main Content */}
      <div className="about-content">

        {/* Left Section */}
        <div className="about-box">
          <h1>
            About
            <br />
            CaterShot
          </h1>

          <p>
            CaterShot is a catering and event styling service created to make
            planning and celebrating special events easier and more convenient.
            We provide delicious food, organized catering arrangements, and
            event setup based on the customer's chosen theme and preferences.
            Customers can choose their event type, venue, number of guests
            (PAX), catering package, and preferred design for their special
            occasion.
          </p>

          <p>
            We also offer optional services such as photobooths, photographers,
            decorations, and other event add-ons to make the celebration more
            memorable. With CaterShot, you provide the venue, and we take care
            of the food and event setup so you can enjoy your special day with
            your guests.
          </p>
        </div>

        {/* Right Section */}
        <div className="what-we-do-box">
          <h2>What We Do</h2>

          <div className="service">
            <h3>➤ &nbsp; Designing Your Event</h3>

            <p>
              We help create a beautiful and organized event setup based on
              your preferred theme, style, and design.
            </p>
          </div>

          <div className="service">
            <h3>➤ &nbsp; Catering Your Event</h3>

            <p>
              We prepare and arrange the food based on your chosen catering
              package and number of guests (PAX), then cater directly to your
              provided venue.
            </p>
          </div>

          <div className="service">
            <h3>➤ &nbsp; Adding Special Services</h3>

            <p>
              Make your event more memorable with optional add-ons such as a
              photobooth, photographer, decorations, and other available
              services.
            </p>
          </div>
        </div>

      </div>

      {/* View More */}
      <button
        className="view-more-button"
        onClick={handleViewMore}
      >
        VIEW MORE
      </button>
    </div>
  );
}

export default About;