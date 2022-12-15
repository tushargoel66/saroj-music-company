let express = require("express");
let path = require("path");
var sha512 = require("js-sha512").sha512;

const app = express();

var port = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/html/index.html"));
});

app.get("/admin", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/html/admin.html"));
});

app.post("/verify", (req, res) => {
  //console.log(sha512('smc2312'))
  //console.log(sha512('smcXYC3234'))
  var uname = `5b7a6912a55358fcbd033fde169a5e3abfc7a6639dd65d99a9a58a4022c4a1543a480a328482377f211d853ea3186275a19321f99a525f5c82b455f65841613e`;
  var pass = `406f4cc83c107d055db20b1fb36a037982ed805c2b39bf321d0a8ab4eaa95d0d529785f6adc7e2dfddcd279d237dd3ba39afb6829bf112eaa54cc6072befc307`;
  if (sha512(req.body.uname) == uname && sha512(req.body.psw) == pass) {
    res.sendFile(path.join(__dirname, "/public/html/adminHome.html"));
  } else {
    res.sendFile(path.join(__dirname, "/public/html/admin.html"));
  }
});

app.get("/music", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/html/music.html"));
});

app.listen(port, (res, req) => {
  console.log("Server running at " + port);
});

//https://git.heroku.com/saroj-music-company.git || https://saroj-music-company.herokuapp.com/
