const express = require("express");
const path = require("path");
const http = require("http");

const bodyParser = require("body-parser");

const app = express();

app.set("port", process.env.PORT || 3001);

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

http.createServer(app).listen(app.get("port"), function () {
    console.log("Express server start : " + app.get("port"));
});
