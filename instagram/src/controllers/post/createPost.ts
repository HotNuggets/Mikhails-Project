import { Post } from "../../model/posts/postModel";
import { Request, Response } from 'express';

export async function createPost(req: Request, res: Response) {
    try {
        const { content, userId ,imageURL} = req.body;
       
        if (!content || !userId || !imageURL) {
            return res.status(400).json({ error: 'Content userId and imageURL are required' });
        }

        // Create a new post document
        const newPost = new Post({
            author: userId,
            content,
            imageURL
        });

        await newPost.save();

        res.status(201).json({ message: 'Post created successfully', post: newPost });
    } catch (error) {
        console.error('Error creating post:', error);
        res.status(500).json({ error: 'Server error' });
    }
}