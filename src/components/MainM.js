import React, { Component } from "react";
import ReactFullpage from "@fullpage/react-fullpage";

import MainPungmul from "./MainPungmul";
import GoogleCalendar from "./GoogleCalendar";

import mainImg from "../asset/main/main1.jpg";
import seal from "../asset/main/seal.png";
import instruments from "../asset/mainM/instruments.png";
import AboutM from "./AboutM";

export default class MainM extends Component {
  render() {
    return (
      <ReactFullpage>
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
              <img
                src={instruments}
                style={{
                  width: "70vw",
                }}
              ></img>
              <div class="arrow" onClick={() => fullpageApi.moveSectionDown()}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            {/* <div className="section">
              <AboutM />
            </div> */}
            <div className="section">
              <GoogleCalendar />
            </div>
          </div>
        )}
      </ReactFullpage>
    );
  }
}