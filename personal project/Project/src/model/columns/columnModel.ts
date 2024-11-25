import mongoose, { Schema } from 'mongoose';


const ColumnSchema: Schema = new Schema({
    title: { type: String, required: true },
    board: { type: Schema.Types.ObjectId, ref: 'Board', required: true }, // Parent board
    tasks: [{ type: Schema.Types.ObjectId, ref: 'Task' }] // Tasks under this column
  });
  
  export const Column = mongoose.model('Column', ColumnSchema);