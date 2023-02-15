import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";

export interface IUser {
  username: String;
  email: String;
  password: String;
  refreshtoken?: String;
}

const userSchema = new Schema<IUser>({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    validate: {
      validator: (v: any) => {
        return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(v as string);
      },
      message: (props: any) => `${props.value} is not a valid email address!`,
    },
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
  refreshtoken: {
    type: String,
  },
});

userSchema.pre("save", function (next) {
  // salt helps us to increase the level of protection of the hash
  // by default the length is 10
  // we need to find balance between user experience and security
  const hash = bcrypt
    .hash(this.password as string, 10)
    .then((result: string) => {
      this.password = result as String;
    });
  next();
});

export default model<IUser>("User", userSchema);
