"use strict";

exports.__esModule = true;
exports.Post = exports.Comment = exports.commentSchema = void 0;

var mongoose_1 = require("mongoose");

exports.commentSchema = new mongoose_1["default"].Schema({
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
exports.Comment = mongoose_1["default"].model('Comment', exports.commentSchema); // Post Schema

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
  likes: [{
    type: mongoose_1.Schema.Types.ObjectId,
    ref: 'User'
  }],
  comments: [exports.commentSchema],
  createdAt: {
    type: Date,
    "default": Date.now
  }
});
exports.Post = mongoose_1["default"].model('Post', postSchema);