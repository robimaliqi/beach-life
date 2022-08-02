import React from "react";
import "./App.css";
import { Home } from "./pages/Home";
import { Results } from "./pages/Results";
import { Register } from "./pages/Register";
import { SignIn } from "./pages/SignIn";
import { Reviews } from "./pages/Reviews";
import { NavBar } from "./components/NavBar";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="main-container">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/results" element={<Results />} />
        <Route path="/register" element={<Register />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/reviews" element={<Reviews />} />
      </Routes>
    </div>
  );
}

export default App;
