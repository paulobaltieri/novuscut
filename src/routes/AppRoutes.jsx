import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "../pages/Login/LoginPage";
import HomePage from"../pages/Home/homePage"
import Barber from "../pages/Barber/BarberPage"
import Clients from "../pages/Clients/ClientsPage"

export default function appRouter() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/barber" element={<Barber />} />
          <Route path="/clients" element={<Clients/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
