import mongoose from "mongoose"
import { env } from "../config/env"
import User from "../models/user";
import bcrypt from "bcryptjs";
import { roles } from "../utils";


const seedAdmin = async() => {
    try{
        await mongoose.connect(env.MONGO_URI);
        console.log("Connected to database");

        const email = env.ADMIN_EMAIL;
        const password = env.ADMIN_PASSWORD;
        const name = env.ADMIN_NAME;

        if(!name || !email || !password){
            throw new Error("Missing fields in .env")
        }

        let user = await User.findOne({ email });

        const hashed = await bcrypt.hash(password, 10);


        if(!user){
            user = await User.create({
                name,
                email,
                password: hashed,
                role: roles.admin ?? "admin",
            });

            console.log("Admin user created successfully with email:", user.email);
        } else{
            if(user.role !== roles.admin){
                user.role = roles.admin ?? "admin";
                console.log(`User ${user.email} role has been changed to admin`)
            } else{
                console.log("User already an admin");
            }
        }

        await mongoose.disconnect();
        process.exit(0);
    } catch(error) {
        if(error instanceof Error){
            console.error(error.message);
        } else{
            console.error("Error seeding admin user", error);
            process.exit(1);
        }
    }
}

seedAdmin();