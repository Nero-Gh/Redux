import React, { useState } from "react";
import "./Navbar.scss";
import store from "../redux/store";
import { changeName } from "../redux/userSlice";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
  const { name } = useSelector((state) => state.user);
  console.log(name);

  return (
    <div className="navbar-container">
      <div className="logo">NeroTest</div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      <div className="myname">
        <h2>{name}</h2>
      </div>
    </div>
  );
};

export default Navbar;
