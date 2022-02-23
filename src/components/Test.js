import React from "react";
import Calendar from "@ericz1803/react-google-calendar";
import { css } from "@emotion/react";

const API_KEY = "AIzaSyDcnoFRHVqc-Hn9jSIp2fWgXJi2bxLuhpM";
let calendars = [
  {
    calendarId: "sbbp3lj7128ajkcs362lvi76vg@group.calendar.google.com",
    color: "#CA8291",
  }, //add a color field to specify the color of a calendar
];

let styles = {
  //you can use object styles (no import required)
  calendar: {
    borderWidth: "0px", //make outer edge of calendar thicker
  },

  //you can also use emotion's string styles
  today: css`
    /* highlight today by making the text red and giving it a red border */
    color: #c25e5e;
    border: 3px solid #c25e5e;
  `,

  day: css`
    background-color: #fff5f4;
    border: 3px solid #bfa5a4;
  `,
};

const language = "EN";

class Test extends React.Component {
  render() {
    return (
      <div style={{ backgroundColor: "#BFA5A4", height: "100vh" }}>
        <Calendar
          apiKey={API_KEY}
          calendars={calendars}
          styles={styles}
          language={language}
        />
      </div>
    );
  }
}

export default Test;
