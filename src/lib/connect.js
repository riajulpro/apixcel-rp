import mongoose from "mongoose";

export async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Database successfully connected!");
  } catch (error) {
    console.log("There is an error in database connection", error);
  }
}
