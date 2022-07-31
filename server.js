// const express = require("express");
// const app = express();

// const port = 8081; // react의 기본값은 3000이니까 3000이 아닌 아무 수
// const cors = require("cors");
// const bodyParser = require("body-parser");
// const mysql = require("mysql"); // mysql 모듈 사용

// const path = require("path");

// const multer = require("multer");

// var connection = mysql.createConnection({
//   host: "125.6.40.93",
//   user: "hansori", //mysql의 id
//   password: "Hansori@901829", //mysql의 password
//   // host: "15.165.68.170",
//   // user: "hansori", //mysql의 id
//   // password: "Hansori@901829", //mysql의 password
//   database: "hansori", //사용할 '데이터베이스'
// });

// connection.connect();

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
// app.use(cors());

// app.get("/", (req, res) => {
//   res.send("hello world!");
// });

// app.post("/SQL1", (req, res) => {
//   const post = req.body.query;

//   connection.query(post, function (err, rows, fields) {
//     if (err) {
//       console.log("전송 실패");
//     } else {
//       console.log("전송 성공");
//       console.log(rows[0]);
//       res.send(rows[0]);
//     }
//   });
// });

// app.post("/SQL2", (req, res) => {
//   const post = req.body.query;

//   connection.query(post, function (err, rows, fields) {
//     if (err) {
//       console.log("전송 실패");
//     } else {
//       console.log("전송 성공");
//       //console.log(rows[0]);
//       res.send(rows);
//     }
//   });
// });

// app.listen(port, () => {
//   console.log(`Connect at http://asdf:${port}`);
// });

const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');
const { urlencoded } = require('body-parser');
const PORT = process.env.port || 3306;

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "skrp89825224",
    database: "simpleboard"
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/get", (req, res)=>{
    const sqlQuery = "SELECT * FROM simpleboard;";
    db.query(sqlQuery, (err, result)=>{
        res.send(result);
    })
})

app.post("/api/insert", (req, res) => {
    const title = req.body.title;
    const content = req.body.content;
    const sqlQuery = "INSERT INTO simpleboard (title, content) VALUES (?,?)";
    db.query(sqlQuery, [title, content], (err, result) => {
        res.send('success!');
    });
});

app.listen(PORT, () => {
    console.log(`running on port ${PORT}`);
});