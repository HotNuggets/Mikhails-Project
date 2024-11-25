"use strict";
exports.__esModule = true;
exports.User = void 0;
var mongoose_1 = require("mongoose");
var UserSchema = new mongoose_1.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, "default": 'user' },
    sharedBoards: [{ type: mongoose_1.Schema.Types.ObjectId, ref: 'Board' }] // Boards this user can access
});
exports.User = mongoose_1["default"].model('User', UserSchema);
