"use strict";

exports.__esModule = true;

var express_1 = require("express");

var usersRoutes_1 = require("./routes/users/usersRoutes");

var app = express_1["default"]();

var cookie_parser_1 = require("cookie-parser");

var port = 3000; //connection to db

var mongoose = require('mongoose');

mongoose.connect('mongodb+srv://HotNuggets:ieoBkUDlsayOqaoT@cluster0.z25jn.mongodb.net/instagram').then(function () {
  console.log('connected to db');
})["catch"](function (err) {
  console.log(err);
});
app.use(express_1["default"].json());
app.use(cookie_parser_1["default"]());
app.use(express_1["default"]["static"]('public'));
app.use('/users', usersRoutes_1["default"]);
app.get('/', function (req, res) {
  res.send('Hello World!');
});
app.listen(port, function () {
  console.log("Example app listening on port " + port);
});