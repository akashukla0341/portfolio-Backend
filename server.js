import { app } from "./app.js";
import { configDotenv } from "dotenv";
import { connectDatabase } from "./config/database.js";
import cloudinary from "cloudinary";

configDotenv()
connectDatabase();

const port = process.env.PORT || 1212

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});


app.listen(port, () => {
  console.log(`Server is running on port: ${port} `);
});
