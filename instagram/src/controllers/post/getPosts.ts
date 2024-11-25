import { Post } from "../../model/posts/postModel";
import { Following } from "../../model/followers/following";
import { User } from "../../model/users/userModel";
import { Request, Response } from 'express';

export async function getPosts(req: Request, res: Response) {
    try {
        // Assuming req.user.id has the logged-in user's ID
        const { userId } = req.cookies;

        // Fetch followed users for the logged-in user
        const following = await Following.findOne({ userId: userId }).populate('followingList', 'username');

        if (!following) {
            return res.status(200).json({ posts: [] }); // No followed users, return empty list
        }

        // Get posts authored by followed users
        const followedUserIds = following.followingList.map(user => user._id);
        const posts = await Post.find({ author: { $in: followedUserIds } }).populate('author', 'username image').sort({ createdAt: -1 });

        res.status(200).json({ posts });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch posts' });
    }
}