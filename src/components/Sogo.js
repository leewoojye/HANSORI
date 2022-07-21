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
      query: "SELECT * FROM USER;", //mysql로 전송할 쿼리 문
    };

    // fetch("https://127.0.0.1:8443/SQL1", {
    fetch("https://hansori.net:8443/SQL1", {
      // fetch("https://3.35.150.77:3306/SQL1", {
      //mysql fetch 서버 주소
      method: "post", // 통신방법
      withCredentials: true, // 쿠키 cors 통신 설정
      headers: {
        "content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
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
