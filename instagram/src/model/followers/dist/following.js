"use strict";
exports.__esModule = true;
exports.Following = void 0;
var mongoose_1 = require("mongoose");
var followingSchema = new mongoose_1["default"].Schema({
    userId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    followingList: [{
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'User'
        }]
});
exports.Following = mongoose_1["default"].model('Following', followingSchema);
