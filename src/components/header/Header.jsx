import React from "react";
import "./style.css";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import { IoSearchSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="header">
      <ContentWrapper className="headerContentWrapper">
        <div className="logo" onClick={()=>navigate("/")}>
          <img src="logo.png" alt="" />
        </div>
        <div className="menu">
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>
              <IoSearchSharp />
            </li>
          </ul>
        </div>
      </ContentWrapper>
    </header>
  );
};

export default Header;
