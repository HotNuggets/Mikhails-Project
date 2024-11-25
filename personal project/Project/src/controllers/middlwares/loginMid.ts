import { NextFunction } from "express";
import { User } from "../../model/users/userModel";
import jwt from 'jwt-simple';

export async function checkUser(req: any, res: any, next: NextFunction) {
    try {
        const token = req.cookies.userId;
        if (!token) {
            return res.status(401).send({ error: 'User not authenticated' });
        }

        const decoded = jwt.decode(token, process.env.SECRET as string);
        const user = await User.findById(decoded.userId);
        if (!user) {
            return res.status(401).send({ error: 'User not found' });
        }

        // Adding user to `req` by casting it to `any`
        (req as any).user = user;
        next();
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'Authentication error' });
    }
}