import mongoose, { Schema } from 'mongoose';


const BoardSchema: Schema = new Schema({
    title: { type: String, required: true },
    owner: { type: Schema.Types.ObjectId, ref: 'User', required: true }, // Owner of the board
    columns: [{ type: Schema.Types.ObjectId, ref: 'Column' }], // Columns in the board
    sharedWith: [{ type: Schema.Types.ObjectId, ref: 'User' }] // Users with access to this board
  });
  
  export const Board = mongoose.model('Board', BoardSchema);
  