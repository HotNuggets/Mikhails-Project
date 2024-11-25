"use strict";
exports.__esModule = true;
exports.Comment = exports.commentSchema = void 0;
var mongoose_1 = require("mongoose");
exports.commentSchema = new mongoose_1["default"].Schema({
    postId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Post',
        required: true
    },
    userId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    text: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        "default": Date.now
    }
});
exports.Comment = mongoose_1["default"].model('Comment', exports.commentSchema);
