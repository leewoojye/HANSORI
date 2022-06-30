import React from "react";
import instrument from "../asset/pungmul/instrument.png";

function Board() {
  function handleLogin() {
    const post = {
      query: "SELECT * FROM USER;",
    };
    console.log(post.query);

    fetch("http://localhost:8081/SQL2", {
      method: "post",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(post),
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
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
    </div>
  );
}

export default Board;
