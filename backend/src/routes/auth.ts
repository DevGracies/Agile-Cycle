import Router from "express";
import { env } from "../config/env";
import { login, logout, register } from "../controllers/auth";


const authRouter = Router();

authRouter.post("/register", register);
authRouter.post("/login", login);
authRouter.post("/logout", logout);

// authRouter.get(
//     "/google",
//     googleAuth,
//     passport.authenticate(
//         "google",
//         { scope: ["profile", "email"] },
//     )
// );
// authRouter.get(
//     "/google/callback",
//     passport.authenticate("google", {
//         session: false,
//         failureRedirect: `${env.CLIENT_URL}/sign-in`
//     }),
//     googleCallback,
// );


export default authRouter;