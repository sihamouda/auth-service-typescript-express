import User from "../models/userModel";
import { Request, Response } from "express";
import signup from "../services/signup";

//signup a user
export const signupController = async (req: Request, res: Response) => {
  const { username, email, password, rePassword } = req.body as {
    username: string;
    email: string;
    password: string;
    rePassword: string;
  };
  signup(username, email, password, rePassword);
  try {
    res.status(200).json({ status: "succesfull" });
  } catch (error) {
    // res.status(400).json({ error: error.message });
  }
};
