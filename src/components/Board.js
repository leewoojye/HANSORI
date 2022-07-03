import React from "react";
import instrument from "../asset/pungmul/instrument.png";
import { useState } from "react";

function Board() {
  const [email, setEmail] = useState("asdf");

  function handleLogin() {
    const post = {
      query: "SELECT * FROM USER;",
    };
    console.log(post.query);

    fetch("http://192.168.35.108:8081/SQL1", {
      method: "post",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(post),
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setEmail(json.Email);
      });
  }

  return (
    <div
      className="contents"
      style={{
        height: "100vh",
        backgroundColor: "#C1B8AF",
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
        <button onClick={handleLogin}>test</button>
      </div>
      <div>{email}</div>
    </div>
  );
}

export default Board;
