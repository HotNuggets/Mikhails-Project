import express from "express";
import { login, register } from "../../controllers/users/setUser";
import { getUser} from "../../controllers/users/getUser";
import { checkUser } from "../../controllers/middlwares/loginMid";
import { getBoard } from "../../controllers/boards/getBoard";

const router = express.Router();

router.use(checkUser);
router.get("/get-board",checkUser, getBoard);



export default router;