import React, { useEffect } from "react";
import logoM from "../asset/header/logo6.png";
import profile from "../asset/header/profile.png";
import dots from "../asset/headerM/ryb4.png";
import menuIcon from "../asset/headerM/ryb5.png";
import { NavLink, withRouter } from "react-router-dom";
import "../asset/css/Header.css";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

const HeaderM = ({ location, match, history }) => {
  const [open, setOpen] = useState(false);
  const onToggle = () => {
    if (!open) {
    }
    setOpen(!open);
  };
  return (
    <>
      <div className="styled_headerM">
        <div className="wrap">
          <div className="styled_profile">
            {open ? (
              <IoClose size="30" onClick={onToggle} />
            ) : (
              <img
                onClick={onToggle}
                src={menuIcon}
                style={{ width: "25px" }}
                alt=""
              />
            )}
          </div>
          <div className="styled_logo">
            <NavLink
              to="/"
              onClick={() => {
                if (location.pathname === "/") window.location.reload();
              }}
            >
              <img src={logoM} height="65" alt="" />
            </NavLink>
          </div>
          <div className="styled_profile">
            {/* <NavLink to="/pungmul/sogo"> */}
            <NavLink className="Menu" to="/profileM">
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
      {open && (
        <div className="menuM">
          <NavLink
            className="menuMN"
            to="/aboutM"
            onClick={() => {
              onToggle();
            }}
          >
            동아리
          </NavLink>
          <br />
          <br />
          <NavLink
            className="menuMN"
            to="/gallery"
            onClick={() => {
              onToggle();
            }}
          >
            갤러리
          </NavLink>
          <br />
          <br />
          <NavLink
            className="menuMN"
            to="/pungsaM"
            onClick={() => {
              onToggle();
            }}
          >
            풍사
          </NavLink>
          <br />
          <br />
          <NavLink
            className="menuMN"
            to="/pungmulM"
            onClick={() => {
              onToggle();
            }}
          >
            풍물
          </NavLink>
          <br />
          <br />
          <img src={dots} className="headerDotsM" alt="" />
        </div>
      )}
    </>
  );
};

export default withRouter(HeaderM);
