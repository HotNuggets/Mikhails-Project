import express from "express";
import { createPost } from "../../controllers/post/createPost";
import { createComment } from "../../controllers/post/commentOnPost";
import { getPosts } from "../../controllers/post/getPosts";
import { likePost } from "../../controllers/post/like";
import { getProfilePosts } from "../../controllers/post/profilePosts";


const router = express.Router();

router.post('/createPost', createPost).post('/addComment' , createComment).get('/getPosts',getPosts).post('/like',likePost).get('/profile/:userId', getProfilePosts);


export default router;