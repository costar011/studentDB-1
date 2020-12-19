import express from "express";
import morgan from "morgan";
import path from "path";
import dotenv from "dotenv";
dotenv.config();
import globalRouter from "./router/globalRouter";
import mongoose from "mongoose";

const PORT = 7777;

const app = express();

app.use(morgan(`dev`));

app.use(express.static(path.join(__dirname, `/assets`)));

app.set("view engine", "pug");

mongoose.connect(
  `mongodb://4leaf:fourleaf0309@210.114.1.127:27017/admin`,
  {
    dbName: `JYR_PRA`,
    useNewUrlParser: true,
    useCreateIndex: true,
  },
  (error) => {
    if (error) {
      console.log("❌ Failed");
    } else {
      console.log("⭕️  DB SUCCEES ");
    }
  }
);

app.get("/", globalRouter);

app.listen(PORT, () => {
  console.log(`✅  ${PORT} Server Start`);
});
