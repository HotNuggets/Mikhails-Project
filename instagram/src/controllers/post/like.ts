import { Post } from "../../model/posts/postModel";
import { Request, Response } from 'express';

export async function likePost(req: Request, res: Response) {
    try {
        const { postId, userId } = req.body;
        if (!postId || !userId) {
            return res.status(400).json({ error: "Post ID and User ID are required" });
        }
        const post = await Post.findById(postId);
        

        if (!post) {
            return res.status(404).json({ error: "Post not found" });
        }

        // Create a new post document
        const isLiked = post.likes.includes(userId);

        if (isLiked) {
            // If liked, remove the like (unlike)
            post.likes = post.likes.filter(id => id.toString() !== userId);
        } else {
            // Otherwise, add the like
            post.likes.push(userId);
        }

        // Save the updated post
        await post.save();

        res.status(200).json({ success: true, likesCount: post.likes.length });
    } catch (error) {
        console.error("Error toggling like:", error);
        res.status(500).json({ error: "Server error" });
    }
}