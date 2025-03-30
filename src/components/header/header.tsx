import React from "react";
import logo from "../../assets/Logo.svg";
import "./header.scss";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={logo} alt="Aviasales Logo" className="header__logo-image" />
      </div>
    </header>
  );
};

export default Header;
