import React from "react";
import MainPungmul from "./MainPungmul";
import janggu from "../asset/pungmul/janggu.png";
import { IoIosHelp } from "react-icons/io";

function Janggu() {
  return (
    <div
      className="contents"
      style={{
        backgroundColor: "#eec26f",
        display: "flex",
        alignItems: "center",
        height: "100vh",
        color: "black",
      }}
    >
      <div className="leftPungmul">
        <MainPungmul scale="0.7" />
      </div>
      <div className="rightPungmul">
        <div className="note">
          <div className="noteCell">덩</div>
          <div className="noteCell"></div>
          <div className="noteCell"></div>
          <div className="noteCell">덩</div>
          <div className="noteCell"></div>
          <div className="noteCell"></div>
          <div className="noteCell">궁</div>
          <div className="noteCell"></div>
          <div className="noteCell">덕</div>
          <div className="noteCell">궁</div>
          <div className="noteCell"></div>
          <div className="noteCell"></div>
        </div>
        <img src={janggu} className="instImg" alt="" />
        <IoIosHelp className="help" />
      </div>
    </div>
  );
}

export default Janggu;
