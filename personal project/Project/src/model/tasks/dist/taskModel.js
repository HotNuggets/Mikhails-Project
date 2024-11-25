"use strict";
exports.__esModule = true;
exports.Task = void 0;
var mongoose_1 = require("mongoose");
var TaskSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    description: { type: String },
    dueDate: { type: Date },
    status: { type: String, "enum": ['new', 'in progress', 'done'], "default": 'new' },
    column: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Column', required: true },
    assignedTo: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User' } // User the task is assigned to
});
exports.Task = mongoose_1["default"].model('Task', TaskSchema);
