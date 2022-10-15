import React from "react";
import logo from "@images/logo_dark_ru.svg";
import profileLogo from "@images/profile.svg";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="navbar p-5 border-b-2">
    <div className="flex justify-between w-full container max-w-screen-2xl mx-auto">
      <Link to="/">
        <img
          alt="logo"
          src={logo}
        />
      </Link>

      <Link to="/home">
        <img
          alt="profileLogo"
          src={profileLogo}
        />
      </Link>
    </div>
  </nav>
);

export default Navbar;
