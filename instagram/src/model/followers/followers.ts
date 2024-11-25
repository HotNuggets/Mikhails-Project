import mongoose from "mongoose";

export const followersSchema = new mongoose.Schema({
    email:{
        type:String,
        unique:true
    },
    password:String,
    fullname:String,
    username:{
        type:String,
        unique:true
    },
    image:String
})

export const User = mongoose.model('User',followersSchema);