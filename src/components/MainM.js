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
import pungsa from "../asset/pungsa/pungsa_cover.png";
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
                    initialSlide={1}
                  >
                    <SwiperSlide
                      onClick={() => (window.location.href = "/gallery")}
                    >
                      <div className=" mainDiv3M"></div>
                    </SwiperSlide>
                    <SwiperSlide
                      onClick={() => (window.location.href = "/pungmulM")}
                    >
                      <div className="mainDiv1M">
                        <img
                          src={instruments_white}
                          style={{
                            height: "60vh",
                            // filter: "invert(100)",
                          }}
                          alt=""
                        />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide
                      onClick={() => (window.location.href = "/aboutM")}
                    >
                      <div className="mainDiv2M">
                        <div className="mainDiv2MText">
                          동&nbsp;국&nbsp;대 <br />
                          공&nbsp;과&nbsp;대 <br />
                          풍&nbsp;물&nbsp;패
                        </div>
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
