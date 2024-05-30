import mongoose from "mongoose";

export const connectDatabase = () => {
  const options = {
    dbName:process.env.DATABASE_NAME
  }
  mongoose
    .connect(process.env.MONGO_URI,options)
    .then((c) => {
      console.log(`Mongodb connect to: ${c.connection.host}`);
    })
    .catch((e) => {
      console.log(e);
    });
};
