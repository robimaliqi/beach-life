import React from "react";
import "./App.css";
import { Home } from "./pages/Home";
import { Register } from "./pages/register/Register";
import { SignIn } from "./pages/SignIn/SignIn";
import { Beaches } from "./pages/Beaches";
import { NavBar } from "./components/NavBar/NavBar";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/beaches/:id" element={<Beaches />} />
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App;
