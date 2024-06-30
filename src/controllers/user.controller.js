import { User } from "../models/user.model.js";

export const user = async (req, res) => {
  const { name } = req.body;

  const newUser = new User({ name });
  await newUser.save();
  return res.status(201).json({ success: true, user_info: newUser });
};
