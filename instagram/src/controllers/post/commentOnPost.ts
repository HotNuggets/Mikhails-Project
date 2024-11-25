import { Request, Response } from 'express';
import { Comment } from '../../model/posts/commentModel';

export async function createComment(req: Request, res: Response) {
    try {
        const { postId, content, userId } = req.body;

        if (!postId || !content || !userId) {
            return res.status(400).json({ error: 'Post ID, content, and user ID are required' });
        }

        // Create a new comment document
        const newComment = new Comment({
            postId,
            userId,
            content,
        });

        await newComment.save();

        res.status(201).json({ message: 'Comment added successfully', comment: newComment });
    } catch (error) {
        console.error('Error adding comment:', error);
        res.status(500).json({ error: 'Server error' });
    }
}