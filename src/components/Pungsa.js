import React from "react";
import pungsa_cover from "../asset/pungsa/pungsa_cover.png";

function Pungsa() {
  return (
    <div className="contents">
      <img
        className="ptest"
        src={pungsa_cover}
        alt=""
        style={{ height: "100vh" }}
      />
    </div>
  );
}

export default Pungsa;
