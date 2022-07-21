import React, { Component } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

class ProfileM extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "name",
      email: "example@gmail.com",
      imageUrl: "",
      signUp: false,
      signUping: false,
      visible: "password",
      pbpwInput: "",
    };
  }

  // Google SignIn
  responseGoogleSignIn = (res) => {
    const post = {
      query:
        "SELECT EXISTS (SELECT * FROM USER WHERE Email='" +
        res.profileObj.email +
        "' LIMIT 1) AS SUCCESS;", //mysql로 전송할 쿼리 문
    };

    fetch("https://hansori.net:8443/SQL1", {
      //mysql fetch 서버 주소
      method: "post", // 통신방법
      headers: { "content-type": "application/json" },
      body: JSON.stringify(post),
    })
      .then((res) => res.json())
      .then((json) => {
        if (json.SUCCESS) {
          this.setState({
            id: res.googleId,
            name: res.profileObj.name,
            email: res.profileObj.email,
            imageUrl: res.profileObj.imageUrl,
          });

          window.localStorage.setItem("imageUrl", this.state.imageUrl);
          window.localStorage.setItem("isLogin", true);
          window.location.reload();
        } else {
          this.setState({ signUp: true });
          alert("등록된 회원이 아닙니다. 회원가입을 진행해주세요.");
        }
      });
  };

  // Google SignUp
  responseGoogleSignUp = (res) => {
    const post = {
      query:
        "SELECT EXISTS (SELECT * FROM USER WHERE Email='" +
        res.profileObj.email +
        "' LIMIT 1) AS SUCCESS;", //mysql로 전송할 쿼리 문
    };

    fetch("https://hansori.net:8443/SQL1", {
      //mysql fetch 서버 주소
      method: "post", // 통신방법
      headers: { "content-type": "application/json" },
      body: JSON.stringify(post),
    })
      .then((res) => res.json())
      .then((json) => {
        if (json.SUCCESS) {
          alert("이미 등록된 회원입니다.");
          this.setState({ signUp: false });
        } else {
          this.setState({
            id: res.googleId,
            name: res.profileObj.name,
            email: res.profileObj.email,
            imageUrl: res.profileObj.imageUrl,
            signUping: true,
          });

          window.localStorage.setItem("imageUrl", this.state.imageUrl);
        }
      });
  };

  // Login Fail
  responseFail = (err) => {
    console.error(err);
  };

  // Logout Func
  onLogout = () => {
    console.log("로그아웃");
    window.localStorage.clear();
    window.location.reload();
  };

  onChange = (e) => {
    this.setState({
      pbpwInput: e.target.value,
    });
  };

  render() {
    return (
      <div
        className="profile_contents"
        style={{
          height: "100vh",
          backgroundColor: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="profileM">
          {window.localStorage.getItem("isLogin") ? (
            <div className="googleLoginM">
              <GoogleLogout
                clientId="835389304145-pll2ngg9i01e00vajc7svevd555h1g6b.apps.googleusercontent.com"
                buttonText="로그아웃"
                onLogoutSuccess={this.onLogout}
              ></GoogleLogout>
            </div>
          ) : !this.state.signUp ? (
            <div
              style={{
                color: "white",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "30px",
              }}
            >
              환영합니다.
              <div className="googleLoginM">
                <GoogleLogin
                  clientId="835389304145-pll2ngg9i01e00vajc7svevd555h1g6b.apps.googleusercontent.com"
                  buttonText="Google로 로그인"
                  onSuccess={this.responseGoogleSignIn}
                  onFailure={this.responseFail}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  color: "black",
                  paddingTop: "7vh",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "10px",
                }}
              >
                <div
                  style={{
                    paddingRight: "1vw",
                  }}
                >
                  계정이 없으신가요?
                </div>
                <button
                  className="loginButton"
                  onClick={() => {
                    this.setState({ signUp: true });
                  }}
                >
                  회원가입
                </button>
              </div>
            </div>
          ) : !this.state.signUping ? (
            <div
              style={{
                color: "white",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "30px",
              }}
            >
              회원가입
              <div className="googleLoginM">
                <GoogleLogin
                  clientId="835389304145-pll2ngg9i01e00vajc7svevd555h1g6b.apps.googleusercontent.com"
                  buttonText="Google로 회원가입"
                  onSuccess={this.responseGoogleSignUp}
                  onFailure={this.responseFail}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  color: "black",
                  paddingTop: "7vh",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "10px",
                }}
              >
                <div
                  style={{
                    paddingRight: "1vw",
                  }}
                >
                  이미 계정이 있으신가요?
                </div>
                <button
                  className="loginButton"
                  onClick={() => {
                    this.setState({ signUp: false });
                  }}
                >
                  로그인
                </button>
              </div>
            </div>
          ) : (
            <div
              style={{
                color: "white",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "30px",
              }}
            >
              거의 끝났습니다!
              <br />
              <img
                style={{ borderRadius: "70%" }}
                src={process.env.PUBLIC_URL + this.state.imageUrl}
                className="signUpImgM"
                alt=""
              />
              <div className="signUpM">풍방 비밀번호를 입력해주세요.</div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <div className="signUpDivM">
                  <input
                    type={this.state.visible}
                    className="signUpInputM"
                    onChange={this.onChange}
                  />
                  {this.state.visible === "password" ? (
                    <FaEyeSlash
                      className="eyeSlash"
                      onClick={() => {
                        this.setState({ visible: "text" });
                      }}
                      size="15"
                    />
                  ) : (
                    <FaEye
                      className="eye"
                      onClick={() => {
                        this.setState({ visible: "password" });
                      }}
                      size="15"
                    />
                  )}
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  color: "black",
                  paddingTop: "1vh",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "10px",
                }}
              >
                <button
                  className="signUpButtonM"
                  onClick={() => {
                    const post = {
                      query: "SELECT * FROM PBPW;",
                    };
                    console.log(post.query);

                    fetch("https://hansori.net:8443/SQL1", {
                      method: "post",
                      headers: { "content-type": "application/json" },
                      body: JSON.stringify(post),
                    })
                      .then((res) => res.json())
                      .then((json) => {
                        console.log(json);
                        if (this.state.pbpwInput == json.Pw) {
                          const post = {
                            query:
                              "INSERT INTO USER VALUES ('" +
                              this.state.email +
                              "'," +
                              0 +
                              ");",
                          };
                          fetch("https://hansori.net:8443/SQL1", {
                            method: "post",
                            headers: { "content-type": "application/json" },
                            body: JSON.stringify(post),
                          });
                          alert("회원가입이 완료되었습니다.");
                          window.localStorage.clear();
                          window.location.reload();
                        } else {
                          alert("비밀번호를 다시 확인해주세요.");
                        }
                      });
                  }}
                >
                  계정 생성
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default ProfileM;
