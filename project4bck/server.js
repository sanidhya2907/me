import app from "./index.js";
import mongoose from "mongoose";
const dbConnection=async()=>{
 try {
    await mongoose.connect(
      process.env.MONGO_URI
    );
    console.log("db connected")
 } catch (error) {
    console.log(error)
 }
}
export default dbConnection;