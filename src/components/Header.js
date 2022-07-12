import React, { useEffect } from "react";
import logo from "../asset/header/logo.png";
import profile from "../asset/header/profile.png";
import { NavLink, withRouter } from "react-router-dom";
import "../asset/css/Header.css";

const Header = ({ location, match, history }) => {
  return (
    <>
      <div className="styled_header">
        <div className="wrap">
          <div className="styled_logo">
            <NavLink
              className="Menu"
              to="/"
              onClick={() => {
                if (location.pathname === "/") window.location.reload();
              }}
            >
              <img
                src={logo}
                height="35"
                alt=""
                onClick={() => {
                  window.localStorage.removeItem("changeColor");
                }}
              />
            </NavLink>
          </div>
          <div className="styled_menu">
            <NavLink className="Menu" to="/about">
              동아리
            </NavLink>
            <NavLink className="Menu" to="/gallery">
              갤러리
            </NavLink>
            <NavLink className="Menu" to="/board">
              풍사
            </NavLink>
            <NavLink className="Menu" to="/pungmul">
              <div
                onClick={() => {
                  window.localStorage.removeItem("changeColor");
                }}
              >
                풍물
              </div>
            </NavLink>
          </div>
          <div className="styled_profile">
            <NavLink className="Menu" to="/profile">
              <div style={{ color: "white" }}>
                {window.localStorage.getItem("isLogin") == null ? (
                  <img
                    style={{ borderRadius: "70%" }}
                    src={profile}
                    height="35"
                    alt=""
                  />
                ) : (
                  <img
                    style={{ borderRadius: "70%" }}
                    src={
                      process.env.PUBLIC_URL +
                      window.localStorage.getItem("imageUrl")
                    }
                    height="35"
                    alt=""
                  />
                )}
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default withRouter(Header);
