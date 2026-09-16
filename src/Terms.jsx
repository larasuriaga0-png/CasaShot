import React from "react";
import { Link } from "react-router-dom";
import "./TermsAndConditions.css";

import logoImage from "./assets/logo.jpg";

function TermsAndConditions() {
  return (
    <div className="terms-page">
      {/* navbar - frozen */}
      <nav className="navbar">
        <div className="nav-left">
          <Link to="/">Home</Link>
          <a href="/#about">About Us</a>
          <a href="/#faq">FAQ</a>
        </div>

        <div className="logo">
          <img src={logoImage} alt="CaterShot Logo" />
        </div>

        <div className="nav-right">
          <a href="/#gallery" className="underline-link">
            Customers Gallery
          </a>
          <Link to="/login">Login/Signup</Link>
        </div>
      </nav>

      {/* title banner - also frozen, sits right under navbar */}
      <div className="terms-banner">
        <h1>Terms and Conditions</h1>
      </div>

      {/* scrollable content */}
      <div className="terms-content">
        <section className="terms-section">
          <h3>Booking</h3>
          <p>
            Customers must provide complete and correct information when
            booking, including the event date, time, venue, event type, and
            number of guests (PAX). The customer is responsible for knowing
            the correct number of guests for the event.
          </p>
        </section>

        <section className="terms-section">
          <h3>Venue</h3>
          <p>
            The customer is responsible for providing the venue for the
            event. CaterShot will provide the catering, food arrangement,
            and event design at the customer's chosen location.
          </p>
        </section>

        <section className="terms-section">
          <h3>Catering and Design</h3>
          <p>
            CaterShot will handle all food preparation, catering setup, and
            event design based on the package selected by the customer.
            Menu and design details will be confirmed prior to the event
            date.
          </p>
        </section>

        <section className="terms-section">
          <h3>Add-ons</h3>
          <p>
            Customers may choose additional services such as a photobooth,
            photographer, decorations, or other available services.
            Additional charges may apply depending on the selected add-on.
          </p>
        </section>

        <section className="terms-section">
          <h3>Payment</h3>
          <p>
            Payments will be made online through the available payment
            methods, such as GCash and online banking. A booking will only
            be confirmed once the required payment has been received and
            verified.
          </p>
        </section>

        <section className="terms-section">
          <h3>Changes to Booking</h3>
          <p>
            Customers may request changes to their booking, such as the
            number of guests, catering package, design, or add-ons. Changes
            are subject to availability and may have additional charges.
          </p>
        </section>

        <section className="terms-section">
          <h3>Customer Responsibility</h3>
          <p>
            Customers are responsible for providing accurate booking
            details, selecting the correct number of guests, providing an
            accessible venue, and completing the required payment on time.
          </p>
        </section>

        <section className="terms-section">
          <h3>Agreement</h3>
          <p>
            By submitting a booking through CaterShot, you confirm that you
            have read and agreed to these Terms and Conditions.
          </p>
        </section>
      </div>
    </div>
  );
}


export default TermsAndConditions;