import mongoose, { Schema } from "mongoose";


export const commentSchema = new mongoose.Schema({
    postId: {
      type: Schema.Types.ObjectId,
      ref: 'Post',  // References the Post that the comment belongs to
      required: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',  // References the User who made the comment
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  });
  
  export const Comment = mongoose.model('Comment', commentSchema);