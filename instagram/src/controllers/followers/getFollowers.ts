import { Request, Response } from 'express';
import { Following } from "../../model/followers/following";


 export async function getFollowingList(req: Request, res: Response) {
    try {
        const userId=req.body;
        const followingDoc = await Following.findOne({ userId }).populate('followingList', 'username fullname'); 
        if(followingDoc)
            res.status(200).send({ success: true })
        else
            res.status(400).send('bad user ID')
       
    } catch (error) {
        console.error("Error fetching following list:", error);
    }
}