import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import LoginPage from "./pages/Login/LoginPage";
import Home from "./pages/Home/homePage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={< Home />} />
      </Routes>
    </BrowserRouter>
  )
}