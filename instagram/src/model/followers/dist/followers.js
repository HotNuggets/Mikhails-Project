"use strict";
exports.__esModule = true;
exports.User = exports.followersSchema = void 0;
var mongoose_1 = require("mongoose");
exports.followersSchema = new mongoose_1["default"].Schema({
    email: {
        type: String,
        unique: true
    },
    password: String,
    fullname: String,
    username: {
        type: String,
        unique: true
    },
    image: String
});
exports.User = mongoose_1["default"].model('User', exports.followersSchema);
