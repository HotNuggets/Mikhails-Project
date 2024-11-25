import mongoose, { Schema } from 'mongoose';



const TaskSchema: Schema = new Schema({
    title: { type: String, required: true },
    description: { type: String },
    dueDate: { type: Date },
    status: { type: String, enum: ['new', 'in progress', 'done'], default: 'new' },
    column: { type: Schema.Types.ObjectId, ref: 'Column', required: true }, // Parent column
  });
  
  export const Task = mongoose.model('Task', TaskSchema);