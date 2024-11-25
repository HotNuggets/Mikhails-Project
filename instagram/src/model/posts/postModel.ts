import mongoose, { Schema } from "mongoose";
import { commentSchema } from "./commentModel";
  
  
  const postSchema = new mongoose.Schema({
    author: {
      type: Schema.Types.ObjectId,
      ref: 'User', 
      required: true,
    },
    content: {
      type: String, 
      required: true,
    },
    imageURL: {
        type: String,
        required: true,
    },
    likes: [{
      type: Schema.Types.ObjectId,
      ref: 'User', 
    }],
    comments: [commentSchema], 
    createdAt: {
      type: Date,
      default: Date.now,
    },
  });

export const Post = mongoose.model('Post',postSchema);