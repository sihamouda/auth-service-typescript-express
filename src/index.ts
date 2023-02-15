import express from "express";
import path from "path";
import * as dotenv from "dotenv";
import router from "./routes/userRoute";

dotenv.config({ path: path.resolve(__dirname, "../.env") });
const app = express();

app.get("/", (req, res) => {
  res.send("test");
});

app.use("/api/auth", router);

app.listen(process.env.PORT, () => {
  console.log("listen on port " + process.env.PORT);
});
