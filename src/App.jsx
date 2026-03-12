import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import Gallery from "./pages/Gallery/Gallery";
import ContactUs from "./pages/ContactUs/ContactUs";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/framd/home" />} />
      <Route path="/framd/home" element={<Home />} />
      <Route path="/framd/gallery" element={<Gallery />} />
      <Route path="/framd/contact-us" element={<ContactUs />} />
    </Routes>
  );
}
