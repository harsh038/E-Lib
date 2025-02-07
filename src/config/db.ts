import mongoose from "mongoose"
import { config } from "./config"

const connectDB = async () => {
     try {
          mongoose.connection.on("connected", () => {
               console.log("Connected to Database Successfully")
          })
          mongoose.connection.on("error", (err) => {
               console.log(`Error in connecting Database : ${err}`)
          })
          await mongoose.connect(config.databaseURL as string)
     } catch (err) {
          console.error("Failed to Connect to Database", err)
          process.exit(1)
     }
}
export default connectDB
