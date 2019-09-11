// Importing Modules
const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");
const fs = require("fs");
const Joi = require("joi");

app.use(bodyParser.json());

app.use("/", express.static(path.join(__dirname, "static")));

function Poster(postRequest, postResponse) {
  postResponse.json(postRequest.body);
  console.log(postRequest.body);
}

app.post("/", (req, res) => {
  Poster(req, res);
});
app.post("/index.html", (postRequest, postResponse) => {
  Poster(postRequest, postResponse);
});

app.get("/*", (req, res) => {
  res.send(`
  <h1>${
    req.params.name
  } is not a website</h1>\n<a href="http://localhost:8000/">Go back</a>
    `);
});

app.listen(8000);
