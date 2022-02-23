import React, { Component } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import memberList from "./memberList.json";

const pbpw = "901829"; //////////////

class Profile extends Component {
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

  // isMember = (email) => {
  //   // let check = false;
  //   // memberList.map((member) => {
  //   //   if (email == member.email) check = true;
  //   // });
  //   // return check;

  //   console.log("ismember");

  // };

  // Google SignIn
  responseGoogleSignIn = (res) => {
    const post = {
      query:
        "SELECT EXISTS (SELECT * FROM USER WHERE Email='" +
        res.profileObj.email +
        "' LIMIT 1) AS SUCCESS;", //mysql로 전송할 쿼리 문
    };

    fetch("http://localhost:8081/SQL1", {
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

    fetch("http://localhost:8081/SQL1", {
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
        className="contents"
        style={{
          height: "100vh",
          backgroundColor: "#c25e5e",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="profile">
          {window.localStorage.getItem("isLogin") ? (
            <div className="googleLogin">
              <GoogleLogout
                clientId="835389304145-pll2ngg9i01e00vajc7svevd555h1g6b.apps.googleusercontent.com"
                buttonText="로그아웃"
                onLogoutSuccess={this.onLogout}
              ></GoogleLogout>
            </div>
          ) : !this.state.signUp ? (
            <div
              style={{
                color: "black",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "30px",
              }}
            >
              <div style={{ fontSize: "40px" }}>환영합니다.</div>
              <div className="googleLogin">
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
                  paddingTop: "15vh",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "15px",
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
          ) : // ) : this.state.signUping ? (
          !this.state.signUping ? (
            <div
              style={{
                color: "black",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "30px",
              }}
            >
              <div style={{ fontSize: "40px" }}>회원가입</div>
              <div className="googleLogin">
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
                  paddingTop: "15vh",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "15px",
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
                color: "black",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "30px",
              }}
            >
              <div style={{ fontSize: "40px" }}>거의 끝났습니다!</div>
              <img
                style={{ borderRadius: "70%" }}
                src={process.env.PUBLIC_URL + this.state.imageUrl}
                className="signUpImg"
                alt=""
              />
              <div className="signUp">풍방 비밀번호를 입력해주세요.</div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <div className="signUpDiv">
                  <input
                    type={this.state.visible}
                    className="signUpInput"
                    onChange={this.onChange}
                  />
                  {this.state.visible === "password" ? (
                    <FaEyeSlash
                      className="eyeSlash"
                      onClick={() => {
                        this.setState({ visible: "text" });
                      }}
                    />
                  ) : (
                    <FaEye
                      className="eye"
                      onClick={() => {
                        this.setState({ visible: "password" });
                      }}
                    />
                  )}
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  color: "black",
                  paddingTop: "2vh",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "15px",
                }}
              >
                <button
                  className="signUpButton"
                  onClick={() => {
                    if (this.state.pbpwInput == pbpw) {
                      const post = {
                        query:
                          "INSERT INTO USER VALUES ('" +
                          this.state.email +
                          "'," +
                          0 +
                          ");",
                      };
                      fetch("http://localhost:8081/SQL1", {
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

export default Profile;
