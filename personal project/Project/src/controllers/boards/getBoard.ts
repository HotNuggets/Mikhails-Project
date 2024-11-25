import { Board } from "../../model/boards/boardModel";
import { Request, Response } from 'express';
import { checkUser } from "../middlwares/loginMid";


export async function getBoard(req: Request, res: Response) {
    try {
        const userId = (req as any).user._id;

        const userBoard = await Board.findOne({ owner: userId }).populate('columns.tasks');
        if (!userBoard) {
            return res.status(404).send({ error: 'Board not found' });
        }

        res.status(200).send(userBoard);
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'Internal server error' });
    }
}