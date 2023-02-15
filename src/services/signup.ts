import User from "../models/userModel";

const signup = async (
  username: string,
  email: string,
  password: string,
  rePassword: string
) => {
  const usernameExists = await User.findOne({ username });
  if (usernameExists) {
    throw Error("Username already exists");
  }

  const emailExists = await User.findOne({ email });
  if (emailExists) {
    throw Error("Email already exists");
  }

  const passwordValidation = password !== rePassword;
  if (passwordValidation) {
    throw Error("The validation password is not the same as the password");
  }

  const user = new User({
    username: username,
    email: email,
    password: password,
  });

  const newDoc = await user.save();
  return newDoc;
};

export default signup;
