import asyncHandler from "express-async-handler";

import User from "../models/userModel.js";
import generateToken from "../utils/generateWebToken.js";

// @desc    Register user
// @route    POST /api/users
// @access    Public
export const registerUser = asyncHandler(async (req, res, next) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    return next(new Error("Please provide a name, email and password"));
  }

  const newUser = await User.create({
    name,
    email,
    password,
  });

  const token = generateToken(newUser._id);

  res.status(201).json({
    _id: newUser._id,
    name: newUser.name,
    email: newUser.email,
    role: newUser.role,
    token,
  });
});

// @desc    Find and Auth users
// @route    post /api/users/login
// @access    Public
export const loginUser = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400);
    return next(new Error("Please provide an email and password"));
  }

  const user = await User.findOne({ email });

  if (!user) {
    res.status(400);
    return next(new Error("Invalid email"));
  }

  // match passwords
  const isMatch = await user.matchPassword(password);
  if (!isMatch) {
    res.status(400);
    return next(new Error("Invalid password"));
  }

  const token = generateToken(user._id);

  res.status(200).json({
    _id: user._id,
    name: user.name,
    email: user.email,
    role: user.role,
    token,
  });
});
