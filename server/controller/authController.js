import User from "../models/User.js";
import bcrypt from "bcryptjs";

export const registerUser = async (req, res) => {
  try {
    const { username, email, password, leetcodeUsername } = req.body;
    //validate user details
    if (!username || !email || !password) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }
    const userExist = await User.findOne({
      $or: [{ email }, { username }],
    });
    if (userExist) {
      return res.status(400).json({ message: "User Already Exists" });
    }
    //create hash
    const hashPassword = await bcrypt.hash(password, 10);
    //create User
    await User.create({
      username,
      email,
      password: hashPassword,
      leetcodeUsername
    });
    res.json({ message: "User Registered Successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};
