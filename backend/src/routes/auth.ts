import Router from "express";
import { env } from "../config/env";
import { googleAuth, googleCallback, login, logout, register } from "../controllers/auth";
import passport from "passport"

const router = Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);

router.get(
    "/google",
    googleAuth,
    passport.authenticate(
        "google",
        { scope: ["profile", "email"] },
    )
);
router.get(
    "/google/callback",
    passport.authenticate("google", {
        session: false,
        failureRedirect: `${env.CLIENT_URL}/signin?error=google_auth_failed`
    }),
    googleCallback,
);


export default router;