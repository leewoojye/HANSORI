import React from "react";
import { Component } from "react/cjs/react.production.min";

function createData(content) {
  return { content };
}

class Pungsa extends Component {
  constructor(props) {
    super(props);
    this.state = {
      article: [{ content: "" }],
    };

    this.getContent();
  }

  showContent = () =>
    this.state.article.map((atc) => {
      return (
        <div className="pungsaContent">
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

  render() {
    return (
      <>
        <div className="pungsa">{this.showContent()}</div>
      </>
    );
  }
}

export default Pungsa;
