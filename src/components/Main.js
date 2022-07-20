import React, { Component } from "react";
import ReactFullpage from "@fullpage/react-fullpage";

import MainPungmul from "./MainPungmul";
import GoogleCalendar from "./GoogleCalendar";

import mainImg from "../asset/main/main1.jpg";
import seal from "../asset/main/seal.png";

export default class Main extends Component {
  render() {
    return (
      <ReactFullpage
        scrollOverflow={true}
        render={({ state, fullpageApi }) => (
          <div id="fullpage-wrapper">
            <div className="section " style={{ backgroundColor: "white" }}>
              <div className="section1 ">
                <div className="mainDiv1 ">
                  <img
                    src={mainImg}
                    alt=""
                    className="mainImg"
                    onClick={() => (window.location.href = "/gallery")}
                  />
                  <div className="mainDiv2">
                    동국대학교 공과대 풍물패
                    <br />
                  </div>
                </div>
                <div className="mainDiv3">
                  <MainPungmul />
                  <div className="sealDiv">
                    <img
                      src={seal}
                      className="seal"
                      alt=""
                      onClick={() => {
                        window.location.href = "./about";
                      }}
                    />
                  </div>
                </div>
              </div>
              <div class="arrow" onClick={() => fullpageApi.moveSectionDown()}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <div className="section">
              <GoogleCalendar />
            </div>
          </div>
        )}
      />
    );
  }
}
