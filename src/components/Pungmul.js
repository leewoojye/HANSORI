import React from "react";
import inst1 from "../asset/instruments/inst1.png";
import inst2 from "../asset/instruments/inst2.png";
import inst3 from "../asset/instruments/inst3.png";
import inst4 from "../asset/instruments/inst4.png";
import inst5 from "../asset/instruments/inst5.png";
import instEnd from "../asset/instruments/instEnd.png";

import styled from "styled-components";
import { NavLink } from "react-router-dom";
import DelayLink from "react-delay-link";

function getRandomColor() {
  console.log("random!");
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

const Test = styled.button`
  background-color: ${getRandomColor};
  position: absolute;
  top: 0;
  width: 100vw;
  height: 75px;
`;

function Pungmul() {
  return (
    <>
      <div
        className="contents"
        style={{
          height: "100vh",
          backgroundColor: "#C2A75E",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {window.localStorage.getItem("changeColor") && <Test />}
        <div className="instruments">
          <div className="showName">
            <DelayLink delay={300} to="/pungmul/kkwaenggwari">
              <img
                className="inst"
                src={inst1}
                alt=""
                style={{ width: "46px" }}
                onClick={() => {
                  setTimeout(500);
                }}
              />
            </DelayLink>
            <div className="text">쇠</div>
          </div>
          <div className="showName">
            <DelayLink delay={300} to="/pungmul/janggu">
              <img
                className="inst"
                src={inst2}
                alt=""
                style={{ width: "112px" }}
              />
            </DelayLink>
            <div className="text">장구</div>
          </div>
          <div className="showName">
            <DelayLink delay={300} to="/pungmul/drum">
              <img
                className="inst"
                src={inst3}
                alt=""
                style={{ width: "86px" }}
              />
            </DelayLink>
            <div className="text">북</div>
          </div>
          <div className="showName">
            <DelayLink delay={300} to="/pungmul/jing">
              <img
                className="inst"
                src={inst4}
                alt=""
                style={{ width: "96px" }}
              />
            </DelayLink>
            <div className="text">징</div>
          </div>
          <div className="showName">
            <DelayLink delay={300} to="/pungmul/sogo">
              <img
                className="inst"
                src={inst5}
                alt=""
                style={{ width: "64px" }}
              />
            </DelayLink>
            <div className="text">소고</div>
          </div>
          <NavLink to="/pungmul">
            <img
              className="changeColor"
              backgroundColor="red"
              src={instEnd}
              alt=""
              style={{ width: "5px" }}
              onClick={() => {
                window.localStorage.setItem("changeColor", true);
              }}
            />
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Pungmul;
