"use strict";
exports.__esModule = true;
exports.Board = void 0;
var mongoose_1 = require("mongoose");
var BoardSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    owner: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User', required: true },
    columns: [{ type: mongoose_1.Schema.Types.ObjectId, ref: 'Column' }],
    sharedWith: [{ type: mongoose_1.Schema.Types.ObjectId, ref: 'User' }] // Users with access to this board
});
exports.Board = mongoose_1["default"].model('Board', BoardSchema);
