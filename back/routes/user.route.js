import express from "express";
import { getUserProfileAndRepos } from "../controllers/user.controller.js";
import { explorePopularRepos } from "../controllers/explore.controller.js";

const router = express.Router();

router.get("/profile/:username", getUserProfileAndRepos);
router.get("/explore/", explorePopularRepos);

// TODO => GET likes (who liked our profile)
// TODO => post like a profile

export default router;