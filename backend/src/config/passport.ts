import {
  Strategy as GoogleStrategy,
  Profile,
  VerifyCallback,
} from "passport-google-oauth20";
import passport from "passport";
import { env } from "./env";
import User from "../models/user";
import { AppError } from "../utils/AppError";

passport.use(
  new GoogleStrategy(
    {
      clientID: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
      callbackURL: env.GOOGLE_CALLBACK_URL,
    },
    async (
      _accessToken: string,
      _refreshToken: string,
      profile: Profile,
      done: VerifyCallback
    ) => {
      try {
        const email = profile.emails?.[0]?.value;

        if (!email) {
          return done(new AppError("Google account email does not exist"));
        }

        const image = profile.photos?.[0]?.value?.replace(
          "=s96-c",
          "=s400-c"
        );

        let isNewUser = false;

        let user = await User.findOne({
          $or: [{ googleId: profile.id }, { email }],
        });

        if (!user) {
          isNewUser = true;

          user = await User.create({
            name: profile.displayName,
            email,
            googleId: profile.id,
            provider: "google",
            avatar: image,
            isEmailVerified: true,
          });
        } else {
          if (!user.avatar && image) {
            user.avatar = image;
          }

          if (!user.googleId) {
            user.googleId = profile.id;
            user.provider = "google";
          }

          await user.save();
        }

        // Attach temporary property
        (user as any).isNewUser = isNewUser;

        return done(null, user);
      } catch (error) {
        return done(error as Error);
      }
    }
  )
);

export default passport;