import { Post } from "../../model/posts/postModel";
import { Request, Response } from 'express';

export async function getProfilePosts(req: Request, res: Response) {
    try {
        const userId = req.params.userId;
        console.log(userId);
        // Fetch all posts where the author is the current user
        const userPosts = await Post.find({ author: userId }).populate('author', 'username');

        res.status(200).json({ posts: userPosts });
    } catch (error) {
        console.error('Error fetching user posts:', error);
        res.status(500).json({ error: 'Error fetching posts' });
    }
}