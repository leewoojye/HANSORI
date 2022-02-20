import React, { Component } from "react";

import slide1 from "../asset/main/slide1.png";
import slide3 from "../asset/main/slide3.jpg";

import main1 from "../asset/main/main1.jpg";
import main2 from "../asset/main/main2.jpg";

import ReactFullpage from "@fullpage/react-fullpage";
import Test from "./Test";

export default class Main2 extends Component {
  render() {
    return (
      <ReactFullpage
        scrollOverflow={true}
        render={({ state, fullpageApi }) => (
          <div id="fullpage-wrapper">
            <div className="section" style={{ backgroundColor: "#c25e5e" }}>
              <div className="section1">
                <div className="mainDiv1">
                  <img
                    src={main1}
                    alt=""
                    className="mainImg1"
                    onClick={() => (window.location.href = "/gallery")}
                  />
                  <div className="mainDiv3">
                    동국대학교 공과대 풍물패
                    <br />
                  </div>
                </div>
                <div className="mainDiv2"></div>
              </div>
              <div class="arrow">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>

            <div className="section">
              <Test />
            </div>
          </div>
        )}
      />
    );
  }
}
