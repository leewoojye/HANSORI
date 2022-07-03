// [index.js]
const express = require("express");
const app = express();

//메인 페이지
app.get("/", (req, res) => {
  res.send("hello world");
});

//https 서버연결
app.listen(8081);
