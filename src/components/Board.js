import React from "react";
import instrument from "../asset/pungmul/instrument.png";

function Board() {
  return (
    <div
      className="contents"
      style={{
        height: "100vh",
        backgroundColor: "#46BD7B",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div class="container">
        <div class="card">
          <img src={instrument} class="face front" alt="" />
          <img src={instrument} class="face" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Board;
