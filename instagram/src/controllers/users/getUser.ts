import { User } from "../../model/users/userModel";

export async function getUser(req: any, res: any) {
    try {
        const { userId } = req.cookies;
        const user = await User.findById(userId);
        if(user){
            res.status(200).send({user:user});
        }
        else{
            res.status(401).send({error:'User not found'});
        }
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
}
export async function getUserName(req: any, res: any) {
    try {
        const { username } = req.body;
        const user = await User.findOne({username});
        if (user) {
            res.status(200).send({
                ok: true, 
                user: user,
            });
        } else {
            res.status(401).send({
                ok: false,
                error: 'User not found',
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send({
            ok: false,
            error: 'Internal Server Error',
        });
    }
}