import { Router } from "express";
import { adminOnly, authenticate } from "../middlewares/auth";
import {
    confirmEmailVerification,
    deleteAllUsers,
    deleteCurrentUser,
    getAllUsers,
    getCurrentUser,
    getSubscribers,
    requestPasswordReset,
    resetPassword,
    setUpCyclingExperience,
    setUpProfile,
    subscribe,
    toggleSubscribeToNewsLetter,
    unsubscribe
} from "../controllers/user";

const router = Router();

router.get("/newsletter/subscriptions", getSubscribers);
router.patch("/newsletter/subscribe", subscribe);
router.patch("/newsletter/unsubscribe", unsubscribe);
// Protected Routes
router.use(authenticate);
router.get("/all", getAllUsers);
router.get("/", getCurrentUser);

router.delete("/delete", adminOnly, deleteCurrentUser);
router.delete("/all/delete", adminOnly, deleteAllUsers);

router.post("/forgot-password", requestPasswordReset);
router.patch("/reset-password/:token", resetPassword);

router.patch("/verify-email", confirmEmailVerification);

router.patch("/profile", setUpProfile);
router.patch("/cycling-experience", setUpCyclingExperience);

router.patch("/toggle-subscribe", toggleSubscribeToNewsLetter);

export default router;