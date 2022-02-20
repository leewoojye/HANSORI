import React, { useEffect } from "react";
import logo_white from "../asset/header/logo_white.png";
import profile_white from "../asset/header/profile_white.png";
import { NavLink, withRouter } from "react-router-dom";
import "../asset/css/Header.css";
import $ from "jquery";

const Header = ({ location, match, history }) => {
  useEffect(() => {
    $(document).ready(() => {
      $(".dropdown")
        .on("mouseenter", function () {
          $(this).children(".dropdown-content").stop().slideDown(200);
        })
        .on("mouseleave", function () {
          $(this).children(".dropdown-content").stop().slideUp(200);
        });
    });
  }, []);

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
                src={logo_white}
                height="35"
                alt=""
                onClick={() => {
                  window.localStorage.removeItem("changeColor");
                }}
              />
            </NavLink>
          </div>
          <div className="styled_menu">
            <div className="dropdown">
              <NavLink className="Menu" to="/about">
                동아리
              </NavLink>
              <div className="dropdown-content">
                <a href="#">소개</a>
                <a href="#">연혁</a>
                <a href="#">집부</a>
              </div>
            </div>
            <NavLink className="Menu" to="/gallery">
              갤러리
            </NavLink>
            <div className="dropdown">
              <NavLink className="Menu" to="/board">
                게시판
              </NavLink>
              <div className="dropdown-content">
                <a href="#">공지사항</a>
                <a href="#">자유게시판</a>
                <a href="#">정보게시판</a>
                <a href="#">질문게시판</a>
              </div>
            </div>
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
                    src={profile_white}
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
