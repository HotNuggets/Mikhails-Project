import mongoose, { Schema } from 'mongoose';

const UserSchema: Schema = new Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, default: 'user' }, // "user" or "admin"
    sharedBoards: [{ type: Schema.Types.ObjectId, ref: 'Board' }] // Boards this user can access
  });
  
  export const User = mongoose.model('User', UserSchema);
  