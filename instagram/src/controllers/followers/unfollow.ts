import { Request, Response } from 'express';
import { Following } from "../../model/followers/following";

export async function unfollowUser(req: Request, res: Response) {
    try {
        const { currentUserId, unfollowUserId } = req.body;

        // Assuming you have logic to update the 'following' list here
        // Remove the unfollowUserId from the currentUserId's following list
        await Following.updateOne(
            { follower: currentUserId },
            { $pull: { followedUsers: unfollowUserId } }
        );

        res.status(200).send({ success: true });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'Failed to unfollow user' });
    }
}