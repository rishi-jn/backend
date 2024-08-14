import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

//middlewares
app.use(cors({ origin: process.env.CROS_ORIGIN, credentials: true }));
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ limit: "16kb", extended: true }));
app.use(express.static("public"));

export default app;
