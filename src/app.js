import express from "express";
import morgan from "morgan";
import path from "path";
import dotenv from "dotenv";
dotenv.config();
import connect from "../db/mongo";

const PORT = process.env.PORT;

const app = express();

app.use(morgan(`dev`));

app.use(express.static(path.join(__dirname, `/assets`)));

app.set("view engine", "pug");

app.get("/");

app.listen(PORT, (req, res) => {
  console.log(`✅ ${PORT} Server Start`);
});
