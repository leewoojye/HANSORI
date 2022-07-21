import React, { useState } from "react";
import { BsCheck } from "react-icons/bs";

import { NavLink } from "react-router-dom";
//게시글 작성 함수
function Write() {
  const [inputs, setInputs] = useState({
    content: "",
  });

  const { content } = inputs;

  const onChange = (e) => {
    const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
    setInputs({
      ...inputs, // 기존의 input 객체를 복사한 뒤
      [name]: value, // name 키를 가진 값을 value 로 설정
    });
  };

  function write() {
    const post = {
      query: "INSERT INTO BOARD (Content) VALUES ('" + content + ");",
    };
    console.log(post.query);

    fetch("https://hansori.net:8443/SQL1", {
      method: "post",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(post),
    });
  }

  console.log(inputs);

  return (
    <div className="writeDiv">
      <input
        className="writeContent"
        placeholder="여기에 작성하세요."
        name="content"
        value={content}
        onChange={onChange}
      />
      <div style={{ textAlign: "right" }}>
        <BsCheck className="completeButton" onClick={write} size="5vh" />
      </div>
    </div>
  );
}

export default Write;
