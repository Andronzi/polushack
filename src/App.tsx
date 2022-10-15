import RegForm from "@Components/Registration/RegForm";
import LoginForm from "@Components/Login/LoginForm";
import { Route, Routes } from "react-router-dom";
import Home from "@Components/Home";

import React from "react";
import Navbar from "@Components/Navbar";

const App = () => (
  <div className="App">
    <Navbar />

    <Routes>
      <Route
        element={<RegForm />}
        path="/register"
      />

      <Route
        element={<LoginForm />}
        path="/login"
      />

      <Route
        element={<Home />}
        path="/home"
      />
    </Routes>
  </div>
);

export default App;
