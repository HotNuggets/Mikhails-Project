import express from "express";

import { followUser } from "../../controllers/followers/addFollow";
import { unfollowUser } from "../../controllers/followers/unfollow";
import { getFollowingList } from "../../controllers/followers/getFollowers";

const router = express.Router();

router.post("/follow", followUser)
router.delete("/unfollow", unfollowUser);
router.get("/getFollowers",getFollowingList);

export default router;