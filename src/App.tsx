import RegForm from "@Components/Registration/RegForm";
import LoginForm from "@Components/Login/LoginForm";
import { Route, Routes } from "react-router-dom";
import Home from "@Components/Home";

import React from "react";
import Navbar from "@Components/Navbar";
import Request from "@Components/Request/Request";
import RequestInfo from "@Components/Request/RequestInfo";
import TransportInfo from "@Components/TransportInfo/TransportInfo";

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

      <Route
        element={<Request />}
        path="/request"
      />

      <Route
        element={<RequestInfo />}
        path="/request-info"
      />

      <Route
        element={<TransportInfo />}
        path="/transport-info"
      />
    </Routes>
  </div>
);

export default App;
