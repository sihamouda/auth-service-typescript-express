import mongoose from "mongoose";
import path from "path";
import * as dotenv from "dotenv";
import { describe } from "node:test";
import User from "../../src/models/userModel";

dotenv.config({ path: path.resolve(__dirname, "../../.env") });

beforeAll(() => {
  mongoose
    .connect(process.env.MONGO_URI as string)
    .then(() => {
      console.log("connected to db");
    })
    .catch((error) => {
      console.log(error);
    });
});

describe("users manipulation", () => {
  it("Should add a new user", async () => {});
});
