import React, { Component } from "react";
import ReactFullpage from "@fullpage/react-fullpage";

import MainPungmulM from "./MainPungmulM";
import GoogleCalendar from "./GoogleCalendar";

import mainImg from "../asset/main/main1.jpg";
import seal from "../asset/main/seal.png";
import instruments from "../asset/mainM/instruments.png";
import instruments_white from "../asset/mainM/instruments_white.png";
import AboutM from "./AboutM";

export default class MainM extends Component {
  render() {
    return (
      <ReactFullpage
        scrollOverflow={true}
        render={({ state, fullpageApi }) => (
          <div id="fullpage-wrapper">
            <div
              className="section "
              style={{
                backgroundColor: "white",
                textAlign: "center",
                marginTop: "5vh",
              }}
            >
              {/* <MainPungmulM /> */}
              <img
                src={instruments_white}
                style={{
                  height: "65vh",
                  filter: "invert(100)",
                }}
              ></img>
              <div class="arrowM" onClick={() => fullpageApi.moveSectionDown()}>
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
