import React from "react";
import { BsCheck } from "react-icons/bs";
import { BsX } from "react-icons/bs";
import { BsPlus } from "react-icons/bs";
import { Component } from "react/cjs/react.production.min";
import Write from "./Write";

function createData(content) {
  return { content };
}

class PungsaM extends Component {
  constructor(props) {
    super(props);
    this.state = {
      article: [{ content: "" }],
      modalVisible: false,
      writeContent: "",
    };

    this.getContent();
  }

  showContent = () =>
    this.state.article.map((atc) => {
      return (
        <div>
          {atc.content} <br /> <br />
        </div>
      );
    });

  getContent = () => {
    const post = {
      query: "SELECT * FROM pungsa ORDER BY contentNum DESC;",
    };

    console.log(post.query);
    fetch("https://hansori.net:8443/SQL2", {
      // fetch("http://3.35.150.77:3306/SQL2", {
      method: "post",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(post),
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        for (let i = 0; i < json.length; ++i) {
          this.setState({
            article: this.state.article.concat(createData(json[i].content)),
          });
        }
      });
  };

  handleInput = (e) => {
    this.setState({
      search: e.target.value,
    });
  };

  handleModal = () => {
    console.log("sssss");
    this.setState({
      modalVisible: !this.state.modalVisible,
    });
  };

  write = () => {
    const post = {
      query:
        "INSERT INTO pungsa (content) VALUES ('" +
        this.state.writeContent +
        "');",
    };
    console.log(post.query);

    fetch("https://hansori.net:8443/SQL1", {
      method: "post",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(post),
    }).then(() => {
      window.location.reload();
    });
  };

  onChange = (e) => {
    const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
    this.setState({
      writeContent: value,
    });
  };

  render() {
    console.log(this.state.writeContent);
    return (
      <>
        <div className="pungsa">{this.showContent()}</div>
        {this.state.modalVisible && (
          <div
            visible={this.state.modalVisible}
            closable={true}
            maskClosable={true}
            onClose={this.handleModal}
          >
            <div className="writeDiv">
              <textarea
                className="writeContent"
                placeholder="여기에 작성하세요."
                name="content"
                value={this.state.writeContent}
                onChange={this.onChange}
              />
              <div className="buttons">
                <BsX
                  onClick={this.handleModal}
                  size="5vh"
                  className="completeButton"
                />
                {this.state.writeContent != "" && (
                  <BsCheck
                    className="completeButton"
                    onClick={this.write}
                    size="5vh"
                  />
                )}
              </div>
            </div>
          </div>
        )}

        {window.localStorage.getItem("isLogin") && !this.state.modalVisible && (
          <div className="writeButtonDiv">
            <button className="writeButton" onClick={this.handleModal}>
              <BsPlus
                onClick={this.handleModal}
                size="5vh"
                className="bsPlus"
              />
            </button>
          </div>
        )}
      </>
    );
  }
}

export default PungsaM;
