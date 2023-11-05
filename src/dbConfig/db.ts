import mongoose from "mongoose";

export const connect = async () => {
  try {
    mongoose.connect(process.env.MONGO_URI!);
    const connection = mongoose.connection;
    connection.on("connected", () => {
      console.log("Connection established");
    });

    connection.on("error", (err) => {
      console.log(`error occurred ${err.message}`);
      process.exit();
    });
  } catch (error) {
    console.log(`Error connecting to ${error}`);
  }
};
