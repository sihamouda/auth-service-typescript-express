import { Router } from "express";
import { signupController } from "../controllers/userControlller";

const router = Router();

// signup route
router.post("/signup", signupController);

export default router;
