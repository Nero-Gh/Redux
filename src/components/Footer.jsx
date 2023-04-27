import React from "react";
import "./Footer.scss";
import { useSelector } from "react-redux";

const Footer = () => {
  const { name } = useSelector((state) => state.user);
  return (
    <div className="footer">
      <h4>
        Developed by <span className="myname">{name}</span>
      </h4>
    </div>
  );
};

export default Footer;
