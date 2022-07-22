import React, { Component } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectCards, Navigation, Pagination } from "swiper";
import "swiper/swiper.scss";
import "swiper/modules/effect-cards/effect-cards.scss";

import "./MainMStyle.css"

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
        <br />
        <br />
        <br />
        <br />
        <div>
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
          >
            <SwiperSlide>
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
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={mainImg}
                alt=""
                className="mainImg"
                onClick={() => (window.location.href = "/gallery")}
              />
            </SwiperSlide>
            <SwiperSlide>
              동국대학교 공과대 풍물패
            </SwiperSlide>
          </Swiper>
        </div>
      </>
    );
  }
}
