import React, { Component } from "react";
import { GoogleLogin } from "react-google-login";
import styled from "styled-components";
import profile_white from "../asset/header/profile_white.png";
import profile from "../asset/header/profile.png";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "qwer",
      name: "asdf",
      imageUrl: "ddd",
    };
  }

  // Google Login
  responseGoogle = (res) => {
    console.log(res);
    this.setState({
      id: res.googleId,
      name: res.profileObj.name,
      imageUrl: res.profileObj.imageUrl,
    });
  };

  // Login Fail
  responseFail = (err) => {
    console.error(err);
  };

  render() {
    return (
      <>
        <GoogleLogin
          clientId="835389304145-pll2ngg9i01e00vajc7svevd555h1g6b.apps.googleusercontent.com"
          buttonText="Google"
          onSuccess={this.responseGoogle}
          onFailure={this.responseFail}
        />
        <br />
        <br />
        <div style={{ color: "white" }}>
          {this.state.imageUrl === "ddd" ? (
            <img src={profile} height="35" alt="" />
          ) : (
            <img
              src={process.env.PUBLIC_URL + this.state.imageUrl}
              height="35"
              alt=""
            />
          )}
        </div>
      </>
    );
  }
}

const Container = styled.div`
  display: flex;
  flex-flow: column wrap;
`;

export default Login;
