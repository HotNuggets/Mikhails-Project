import { Request, Response } from 'express';
import { User } from '../../model/users/userModel'

export async function login(req: Request, res: Response) {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email, password });
       

        if (user) {
            res.cookie('userId', user._id, { httpOnly: true, maxAge: 1000 * 60 * 60 * 24 * 1 });
            res.status(200).send({ ok:true });
        } else {
            res.status(401).send({ error: 'Invalid email or password' });
        }

    } catch (error) {
        console.error(error)
        res.status(500).send(error);

    }
}
export async function logout(req: Request, res: Response) {
    try {
        const { userId } = req.body;

        if(userId){
            res.clearCookie('userId', { path: '/' });
            res.status(200).send({ ok:true });
        }
        else {
            res.status(401).send({ error: 'Invalid email or password' });
        }

    } catch (error) {
        console.error(error)
        res.status(500).send(error);

    }
}

export async function register(req: Request, res: Response) {
    try {
        const { email, password, fullname ,username} = req.body;
        const image='../../../public/images/defaultProfile.png';
        //save username and password to database
        const user = new User({ email, password, fullname, username,image });


        let existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).send({ error: 'User already exists' })
        }
        existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).send({ error: 'Username already exists' })
        }
        await user.save()
        //@ts-ignore


        res.status(200).send({ ok: true });

    } catch (error) {
        console.error(error)
        res.status(500).send(error);

    }
}