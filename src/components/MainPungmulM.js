import React from "react";
import inst1 from "../asset/instruments/inst1.png";
import inst2 from "../asset/instruments/inst2.png";
import inst3 from "../asset/instruments/inst3.png";
import inst4 from "../asset/instruments/inst4.png";
import inst5 from "../asset/instruments/inst5.png";
import instEnd from "../asset/instruments/instEnd.png";

import { NavLink } from "react-router-dom";
import DelayLink from "react-delay-link";

function MainPungmul({ scale }) {
  return (
    <>
      <div
        className="contents"
        style={{
          backgroundColor: "transparent",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="instrumentsM">
          <DelayLink delay={300} to="/pungmul/kkwaenggwari">
            <img
              className="inst_black"
              src={inst1}
              alt=""
              style={{ width: `${37 * scale}px`, paddingBottom: "10px" }}
              onClick={() => {
                setTimeout(500);
              }}
            />
          </DelayLink>
          <DelayLink delay={300} to="/pungmul/janggu">
            <img
              className="inst_black"
              src={inst2}
              alt=""
              style={{ width: `${90 * scale}px`, paddingBottom: "10px" }}
            />
          </DelayLink>
          <DelayLink delay={300} to="/pungmul/drum">
            <img
              className="inst_black"
              src={inst3}
              alt=""
              style={{ width: `${69 * scale}px`, paddingBottom: "10px" }}
            />
          </DelayLink>
          <DelayLink delay={300} to="/pungmul/jing">
            <img
              className="inst_black"
              src={inst4}
              alt=""
              style={{ width: `${77 * scale}px`, paddingBottom: "10px" }}
            />
          </DelayLink>
          <DelayLink delay={300} to="/pungmul/sogo">
            <img
              className="inst_black"
              src={inst5}
              alt=""
              style={{ width: `${51 * scale}px`, paddingBottom: "10px" }}
            />
          </DelayLink>
          <NavLink to="/pungmul">
            <img
              className="changeColor"
              backgroundColor="red"
              src={instEnd}
              alt=""
              style={{ width: `${3 * scale}px`, paddingBottom: "10px" }}
            />
          </NavLink>
        </div>
      </div>
    </>
  );
}

MainPungmul.defaultProps = {
  scale: 1.3,
};

export default MainPungmul;
