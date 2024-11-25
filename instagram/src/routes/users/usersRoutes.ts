import express from "express";
import { login, logout, register } from "../../controllers/users/setUser";
import { getUser, getUserName } from "../../controllers/users/getUser";

const router = express.Router();

router.post("/login", login).post("/register", register).get("/getUser", getUser).post("/getUserName",getUserName).post("/logout",logout);


export default router;