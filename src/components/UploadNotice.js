import React, { useState } from "react";

function UploadNotice() {
  const [inputs, setInputs] = useState({
    title: "",
    content: "",
  });

  const { title, content } = inputs;

  const onChange = (e) => {
    const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
    setInputs({
      ...inputs, // 기존의 input 객체를 복사한 뒤
      [name]: value, // name 키를 가진 값을 value 로 설정
    });
  };

  function Upload() {
    if (title == "" || content == "") alert("글/내용을 작성해주세요.");
    else {
      const post = {
        query:
          "INSERT INTO NOTICE VALUES (" +
          0 +
          ",'" +
          title +
          "','" +
          content +
          "', NOW());",
      };
      console.log(post.query);

      fetch("http://localhost:8081/SQL1", {
        method: "post",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(post),
      });

      alert("작성 완료");
      window.location.href = "/board/notice";
    }
  }

  console.log(inputs);

  return (
    <div
      className="contents"
      style={{
        height: "100vh",
        backgroundColor: "#BFA5A4",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="uploadDiv">
        <div style={{ fontSize: "40px" }}>공지사항 작성</div>
        <input
          className="write_title"
          placeholder="제목"
          name="title"
          value={title}
          onChange={onChange}
        />
        <textarea
          className="write_content"
          placeholder="내용"
          name="content"
          value={content}
          onChange={onChange}
        />
        <br />
        <button className="signUpButton" onClick={Upload}>
          완료
        </button>
      </div>
    </div>
  );
}

export default UploadNotice;
