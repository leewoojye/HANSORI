import React, { Component } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectCards, Navigation, Pagination } from "swiper";
import "swiper/swiper.scss";
import "swiper/modules/effect-cards/effect-cards.scss";

import "./MainMStyle.css";

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
      <>
        <div>
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
                  <Swiper
                    effect={"cards"}
                    grabCursor={true}
                    modules={[EffectCards]}
                  >
                    <SwiperSlide
                      onClick={() => (window.location.href = "/pungmul")}
                    >
                      <img
                        src={instruments_white}
                        style={{
                          height: "65vh",
                          // filter: "invert(100)",
                        }}
                      ></img>
                    </SwiperSlide>
                    <SwiperSlide style={{ backgroundColor: "black" }}>
                      <img
                        src={mainImg}
                        alt=""
                        className="mainImg"
                        onClick={() => (window.location.href = "/gallery")}
                        style={{ width: "100%" }}
                      />
                    </SwiperSlide>
                    <SwiperSlide
                      onClick={() => (window.location.href = "/aboutM")}
                    >
                      <div className="mainDiv2M">
                        동국대학교 <br />
                        공과대 <br />
                        풍물패
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
                <div
                  class="arrowM"
                  onClick={() => fullpageApi.moveSectionDown()}
                >
                  <span></span>
                  <span></span>
                </div>
                <div className="section">
                  <GoogleCalendar />
                </div>
              </div>
            )}
          />
        </div>
      </>
    );
  }
}
