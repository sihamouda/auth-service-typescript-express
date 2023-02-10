import express from "express";
import path from "path";
import * as dotenv from "dotenv";

dotenv.config({ path: path.resolve(__dirname, "../.env") });
const app = express();

app.get("/", (req, res) => {
  res.send("test");
});

app.listen(process.env.PORT, () => {
  console.log("listen on port " + process.env.PORT);
});
