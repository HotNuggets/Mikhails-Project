"use strict";
exports.__esModule = true;
exports.Post = void 0;
var mongoose_1 = require("mongoose");
var commentModel_1 = require("./commentModel");
var postSchema = new mongoose_1["default"].Schema({
    author: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    content: {
        type: String,
        required: true
    },
    imageURL: {
        type: String,
        required: true
    },
    likes: [{
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'User'
        }],
    comments: [commentModel_1.commentSchema],
    createdAt: {
        type: Date,
        "default": Date.now
    }
});
exports.Post = mongoose_1["default"].model('Post', postSchema);
