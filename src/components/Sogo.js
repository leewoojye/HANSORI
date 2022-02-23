import React, { Component } from "react";

class Sogo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "123",
    };
  }

  requestAsset = () => {
    console.log("qwer");
    const post = {
      query: "SELECT * FROM MEMBER;", //mysql로 전송할 쿼리 문
    };

    fetch("http://localhost:8081/SQL1", {
      //mysql fetch 서버 주소
      method: "post", // 통신방법
      headers: { "content-type": "application/json" },
      body: JSON.stringify(post),
    })
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          email: json.Email,
        });
      });
  };

  render() {
    return (
      <div style={{ backgroundColor: "#c25e5e" }}>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <button onClick={this.requestAsset}>버튼</button>
        <br />
        <br />
        <br />
        <h1>{this.state.email}</h1>
      </div>
    );
  }
}

export default Sogo;
