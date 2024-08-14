// require("dotenv").config({ path: ".env" });
import app from "./app.js";
import connectDB from "./db/index.js";
import dotenv from "dotenv";
dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 3000, () => {
      console.log(`server listening to port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MongoDB failed to connect ", err);
  });
