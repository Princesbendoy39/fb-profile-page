import React from "react";
import "../styles/Header.css";
import { FaArrowLeft, FaSearch,  } from "react-icons/fa";

function Header() {
  return (
    <div className="header">
      {/* Back Arrow */}
      <div className="header-left">
        <FaArrowLeft size={20} />
      </div>

      {/* Name Center */}
      <div className="header-title">Princes Bendoy</div>

      {/* Icons Right */}
      <div className="header-right">
        <FaSearch size={20} />
      </div>
    </div>
  );
}

export default Header;
