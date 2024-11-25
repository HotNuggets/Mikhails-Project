import { Request, Response } from 'express';
import { Following } from "../../model/followers/following";


export async function followUser(req: Request, res: Response) {
    try {
        const { currentUserId, followUserId } = req.body;

        await Following.updateOne(
            { userId: currentUserId },
            { $addToSet: { followingList: followUserId } },
            { upsert: true }
        );

        res.status(200).send({ success: true });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'Failed to follow user' });
    }
}