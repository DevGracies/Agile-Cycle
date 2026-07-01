import { Router } from "express";
import { authenticate } from "../middlewares/auth";
import {
    confirmEmailVerification,
    deleteAllUsers,
    deleteCurrentUser,
    getAllUsers,
    getCurrentUser,
    requestEmailVerification,
    requestPasswordReset,
    resetPassword,
    setUpProfile,
    subscribeToNewsLetter
} from "../controllers/user";

const router = Router();

// Protected Routes
router.use(authenticate);
router.get("/all", getAllUsers);
router.get("/", getCurrentUser);

router.delete("/delete", deleteCurrentUser);
router.delete("/all/delete", deleteAllUsers);

router.post("/request-password-reset", requestPasswordReset);
router.patch("/reset-password", resetPassword);

router.post("/request-email-verification", requestEmailVerification);
router.patch("/verify-email", confirmEmailVerification);

router.patch("/profile", setUpProfile);

router.patch("/subscribe", subscribeToNewsLetter);

export default router;