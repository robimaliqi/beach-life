import React from "react";
import "./App.css";
import { Home } from "./pages/Home";
import { Results } from "./pages/Results";
import { Register } from "./pages/Register";
import { SignIn } from "./pages/SignIn";
import { Reviews } from "./pages/Reviews";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/" element={<Results />} />
      <Route path="/" element={<Register />} />
      <Route path="/" element={<SignIn />} />
      <Route path="/" element={<Reviews />} />
    </Routes>
  );
}

export default App;
