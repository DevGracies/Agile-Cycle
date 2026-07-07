// import { Strategy as GoogleStrategy } from "passport-google-oauth20";
// import passport from "passport";
// import { env } from "./env";
// import User from "../models/user";
// import { AppError } from "../utils/AppError";


// passport.use(new GoogleStrategy({
//     clientID: env.GOOGLE_CLIENT_ID,
//     clientSecret: env.GOOGLE_CLIENT_SECRET,
//     callbackURL: env.GOOGLE_CALLBACK_URL,
// },
//     async (_accessToken: any, _refreshToken: any, profile: any, done: any) => {
//         try {
//             const email = profile.emails?.[0]?.value;
//             const image = profile.photos?.[0]?.value.replace("=s96-c", "=s400-c");

//             let user = await User.findOne({
//                 $or: [{ googleId: profile.id }, { email }],
//             });

//             if (!user) {
//                 user = await User.create({
//                     name: profile.displayName,
//                     email,
//                     googleId: profile.id,
//                     provider: "google",
//                     avatar: image,
//                 });
//             } else {
//                 if (!user.avatar && image) {
//                     user.avatar = image;
//                 }

//                 if (!user.googleId) {
//                     user.googleId = profile.id;
//                     user.provider = "google";
//                 }

//                 await user.save();
//             }

//             if (!profile.emails?.[0]?.verified) {
//                 return done(new AppError("Google account email not verified"))
//             }

//             return done(null, user);
//         } catch (error) {
//             return done(error, null);
//         }
//     }
// ));

// export default passport;