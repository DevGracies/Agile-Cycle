import mongoose from "mongoose";

import { env } from "../config/env";

import { seedEbikes } from "./ebike";
import { seedAccessories } from "./accessories";
import { seedEnhancements } from "./enhancements";

const seedDatabase = async () => {
  try {
    await mongoose.connect(env.MONGO_URI);

    await seedEbikes();

    await seedAccessories();

    await seedEnhancements();

    console.log(
      "🎉 Database seeded successfully"
    );

    process.exit(0);
  } catch (error) {
    console.error(error);

    process.exit(1);
  }
};

seedDatabase();