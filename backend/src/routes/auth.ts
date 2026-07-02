import Router from "express";
import { env } from "../config/env";
import { login, logout, register } from "../controllers/auth";


const router = Router();

router.post("/signup", register);
router.post("/login", login);
router.post("/logout", logout);

// router.get(
//     "/google",
//     googleAuth,
//     passport.authenticate(
//         "google",
//         { scope: ["profile", "email"] },
//     )
// );
// router.get(
//     "/google/callback",
//     passport.authenticate("google", {
//         session: false,
//         failureRedirect: `${env.CLIENT_URL}/sign-in`
//     }),
//     googleCallback,
// );


export default router;