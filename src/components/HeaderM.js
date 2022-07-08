import React, { useEffect } from "react";
import logoM from "../asset/headerM/logo.png";
import profile from "../asset/header/profile.png";
import { NavLink, withRouter } from "react-router-dom";
import "../asset/css/Header.css";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { useState } from "react";

const HeaderM = ({ location, match, history }) => {
  const [open, setOpen] = useState(false);
  const onToggle = () => setOpen(!open);
  return (
    <>
      <div className="styled_headerM">
        <div className="wrap">
          <div className="styled_profile">
            {open ? (
              <MdClose size="30" onClick={onToggle} />
            ) : (
              <HiOutlineMenuAlt4 size="30" onClick={onToggle} />
            )}
          </div>
          <div className="styled_logo">
            <NavLink
              className="Menu"
              to="/"
              onClick={() => {
                if (location.pathname === "/") window.location.reload();
              }}
            >
              <img src={logoM} height="35" alt="" />
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
      {open && (
        <div className="menuM">
          <NavLink
            to="/aboutM"
            onClick={() => {
              onToggle();
            }}
          >
            동아리 소개
          </NavLink>
          <br />
          <br />
          <NavLink
            to="/gallery"
            onClick={() => {
              onToggle();
            }}
          >
            갤러리
          </NavLink>
        </div>
      )}
    </>
  );
};

export default withRouter(HeaderM);
