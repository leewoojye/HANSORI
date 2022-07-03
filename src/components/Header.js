import React, { useEffect } from "react";
import logo_white from "../asset/header/logo_white.png";
import logo from "../asset/header/logo.png";
import profile_white from "../asset/header/profile_white.png";
import profile from "../asset/header/profile.png";
import { NavLink, withRouter } from "react-router-dom";
import "../asset/css/Header.css";
import $ from "jquery";

const Header = ({ location, match, history }) => {
  // let headerVisible = true;
  // let headerReady = true;
  // let isTopPage = true; // 값 구하는 방식이 정확하지 않음

  // $(window).on("mousemove", (e) => {
  //   if (isTopPage === false) {
  //     if (e.pageY < 70) {
  //       if (headerVisible === false) {
  //         $(".styled_header").stop().slideDown(200);
  //         headerVisible = true;
  //       }
  //     }
  //   }
  // });

  // $(document).ready(() => {
  //   $(".styled_header")
  //     .on("mouseenter", () => {})
  //     .on("mouseleave", () => {
  //       if (isTopPage === false) {
  //         $(".styled_header").stop().slideUp(200);
  //         headerVisible = false;
  //       }
  //     });
  // });

  // $(window).on("wheel", (e) => {
  //   if (headerReady === true) {
  //     headerReady = false;
  //     if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
  //       if (isTopPage === false) {
  //         $(".styled_header").stop().slideDown(200);
  //         headerVisible = true;
  //         isTopPage = true;
  //         setTimeout(() => {
  //           headerReady = true;
  //         }, 700);
  //       } else headerReady = true;
  //     } else {
  //       if (isTopPage === true) {
  //         $(".styled_header").stop().slideUp(200);
  //         headerVisible = false;
  //         isTopPage = false;
  //         setTimeout(() => {
  //           headerReady = true;
  //         }, 700);
  //       } else headerReady = true;
  //     }
  //   }
  // });

  // $(document).ready(() => {
  //   $(".dropdown")
  //     .on("mouseenter", function () {
  //       $(this).children(".dropdown-content").stop().slideDown(200);
  //     })
  //     .on("mouseleave", function () {
  //       $(this).children(".dropdown-content").stop().slideUp(200);
  //     });
  // });

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
            <div className="dropdown">
              <NavLink className="Menu" to="/about">
                동아리
              </NavLink>
              <div className="dropdown-content">
                <a href="/about">소개</a>
                <a href="/history">연혁</a>
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
