import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home";
import Login from "./Login";
import TermsAndConditions from "./Terms";
import Signup from "./Signup";
import Aboutus from "./Aboutus";
import Services from "./Services";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* HOME */}
        <Route path="/" element={<Home />} />

        {/* ABOUT CATER SHOT */}
        <Route path="/about" element={<Aboutus />} />

        {/* OUR SERVICES */}
        <Route path="/services" element={<Services />} />

        {/* LOGIN PAGE */}
        {/* Signup.jsx = LOGIN PAGE */}
        <Route path="/login" element={<Signup />} />

        {/* CREATE ACCOUNT PAGE */}
        {/* Login.jsx = CREATE ACCOUNT PAGE */}
        <Route path="/signup" element={<Login />} />

        {/* TERMS & CONDITIONS */}
        <Route path="/terms" element={<TermsAndConditions />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;