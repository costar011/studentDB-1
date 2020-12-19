import express from "express";
import morgan from "morgan";
import path from "path";
import dotenv from "dotenv";
dotenv.config();
import connect from "../db/mongo";
import globalRouter from "./router/globalRouter";

const PORT = process.env.PORT;

const app = express();

app.use(morgan(`dev`));

app.use(express.static(path.join(__dirname, `/assets`)));

app.set("view engine", "pug");

app.get("/", globalRouter);

app.listen(PORT, () => {
  console.log(`✅  ${PORT} Server Start`);
});
