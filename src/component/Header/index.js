import React from "react";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { IoPersonOutline } from "react-icons/io5";

import "./index.css";
class Header extends React.Component {
  render() {
    return (
      <header className="header-bg-container">
        <img
          src="https://res.cloudinary.com/da52fiag8/image/upload/v1715427300/umouyw5j2emugj1oqyhd.png"
          alt="logo"
          className="header-logo margin-top"
        />
        <div className="header-heading-tag-container">
          <h1 className="header-heading">LOGO</h1>
          <ul className="nav-container">
            <li className="nab-tab-text">SHOP</li>
            <li className="nab-tab-text">SKILLS</li>
            <li className="nab-tab-text">STORIES</li>
            <li className="nab-tab-text">ABOUT</li>
            <li className="nab-tab-text">CONTACT US</li>
          </ul>
        </div>

        <div className="header-icons-container margin-top">
          <CiSearch className="header-icons" />
          <CiHeart className="header-icons" />
          <LiaShoppingBagSolid className="header-icons" />
          <IoPersonOutline className="header-icons" />
          <select className="header-language-option">
            <option className="language">ENG</option>
            <option className="language">HIN</option>
          </select>
        </div>
      </header>
    );
  }
}

export default Header;
