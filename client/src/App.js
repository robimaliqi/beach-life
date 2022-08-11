import React, { useEffect, useState } from "react";
import "./App.css";
import { Home } from "./pages/Home";
import { Register } from "./pages/register/Register";
import { SignIn } from "./pages/SignIn/SignIn";
import { Beaches } from "./pages/Beaches";
import { Route, Routes } from "react-router-dom";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    fetch(`/signin/user`, {})
      .then((response) => response.json())
      .then((responseJson) => {
        setIsLoggedIn(responseJson);
      });
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/beaches/:id" element={<Beaches user={isLoggedIn} />} />
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App;
