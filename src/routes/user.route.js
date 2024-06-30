import { Router } from "express";
import { validation } from "../middlewares/validation.middleware.js";
import { userZod } from "../controllers/validation/user.validation.js";
import { user } from "../controllers/user.controller.js";

const router = Router();

router.post("/user", validation(userZod), user);

export default router;
