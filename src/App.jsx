import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home";
import Login from "./Login";
import TermsAndConditions from "./Terms";
import Signup from "./Signup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Signup.jsx = LOGIN PAGE */}
        <Route path="/login" element={<Signup />} />

        {/* Login.jsx = CREATE ACCOUNT PAGE */}
        <Route path="/signup" element={<Login />} />

        <Route path="/terms" element={<TermsAndConditions />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;