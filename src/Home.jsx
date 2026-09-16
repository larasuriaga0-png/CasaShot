import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

import backgroundImage from "./assets/event_background.jpg";
import foodImage from "./assets/event_food.jpg";
import logoImage from "./assets/logo.jpg";

function Home() {
  return (
    <div className="home">
      {/* mavbar */}
      <nav className="navbar">
        <div className="nav-left">
          <a href="#home">Home</a>
          <Link to="/about">About Us</Link>
          <a href="#faq">FAQ</a>
        </div>

        {/* logo */}
        <div className="logo">
          <img src={logoImage} alt="CaterShot Logo" />
        </div>

        <div className="nav-right">
          <a href="#testimonials">Testimonials</a>
          <a href="#feedbacks">Feedbacks</a>

          <Link to="/login">Login/Signup</Link>
        </div>
      </nav>

      {/* main */}
      <section
        className="hero"
        id="home"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <div className="overlay"></div>

        <div className="hero-content">
          <h1>Cater Shot</h1>

          <p>
            Creating beautifully curated celebrations with exquisite details,
            <br />
            delicious moments, and memories you'll cherish forever.
          </p>

          <button className="start-button">Start Planning</button>
        </div>

        {/* image sa gilid */}
        <div className="food-image">
          <img src={foodImage} alt="Beautiful event setup" />
        </div>
      </section>
    </div>
  );
}

export default Home;