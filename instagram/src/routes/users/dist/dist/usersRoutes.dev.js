"use strict";

exports.__esModule = true;

var express_1 = require("express");

var setUser_1 = require("../../controllers/users/setUser");

var getUser_1 = require("../../controllers/users/getUser");

var router = express_1["default"].Router();
router.post("/login", setUser_1.login).post("/register", setUser_1.register).get("/getUser", getUser_1.getUser);
exports["default"] = router;