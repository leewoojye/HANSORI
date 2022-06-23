import React from "react";
import Calendar from "@ericz1803/react-google-calendar";
import { css } from "@emotion/react";

const API_KEY = "AIzaSyDcnoFRHVqc-Hn9jSIp2fWgXJi2bxLuhpM";
let calendars = [
  {
    calendarId: "sbbp3lj7128ajkcs362lvi76vg@group.calendar.google.com",
    color: "#a46855",
  }, //add a color field to specify the color of a calendar
];

let styles = {
  //you can use object styles (no import required)
  calendar: {
    borderWidth: "0px", //make outer edge of calendar thicker
    color: "black",
  },

  //you can also use emotion's string styles
  today: css`
    /* highlight today by making the text red and giving it a red border */
    color: #005b4a;
    border: 3px solid #005b4a;
    font-size: 15px;
    font-weight: bold;
  `,

  day: css`
    background-color: white;
    border: 3px solid #faf0e6;
    border-radius: 10px;
    font-size: 15px;
    font-weight: bold;
  `,
};

const language = "EN";

class Test extends React.Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: "#FAF0E6",
          height: "100vh",
          borderRight: "10px solid #FAF0E6",
          borderLeft: "10px solid #FAF0E6",
        }}
      >
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
