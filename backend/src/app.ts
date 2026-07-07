import express from 'express';
import cors from 'cors';
import cookieParser from "cookie-parser";

import connectDB from './config/db';
import { env } from './config/env';
import { errorHandler } from './middlewares/errorHandler';

import authRouter from './routes/auth';
import userRouter from './routes/user';
import ebikeRouter from './routes/ebike';
import accessoryRouter from "./routes/accessory"
import enhancementRouter from "./routes/enhancement"
import featuredProductsRouter from "./routes/featured-products";
import orderRouter from "./routes/order"

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
app.use("/api/accessories", accessoryRouter);
app.use("/api/enhancements", enhancementRouter);
app.use("/api/featured-products", featuredProductsRouter);
app.use("/api/orders", orderRouter);

app.use(errorHandler);

app.listen(env.PORT, () => {
  console.log(`Server running on port ${env.PORT}`);
});
