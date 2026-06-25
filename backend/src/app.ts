import express from 'express';
import cors from 'cors';
import cookieParser from "cookie-parser";

import connectDB from './config/db';
import { env } from './config/env';
import { errorHandler } from './middlewares/errorHandler';

import authRouter from './routes/auth';
import userRouter from './routes/user';
import ebikeRouter from './routes/ebike';

// Connect to database
connectDB();

const app = express();

// Middlewares
app.use(cors({
  origin: env.CLIENT_URL,
  credentials: true,
}));
app.use(express.json());
app.use(cookieParser())


app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/ebikes", ebikeRouter);

app.use(errorHandler);

app.listen(env.PORT, () => {
  console.log(`Server running on port ${env.PORT}`);
});
