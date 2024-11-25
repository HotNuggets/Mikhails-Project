"use strict";
exports.__esModule = true;
exports.Column = void 0;
var mongoose_1 = require("mongoose");
var ColumnSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    board: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Board', required: true },
    tasks: [{ type: mongoose_1.Schema.Types.ObjectId, ref: 'Task' }] // Tasks under this column
});
exports.Column = mongoose_1["default"].model('Column', ColumnSchema);
