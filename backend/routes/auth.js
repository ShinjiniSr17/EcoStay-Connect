const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const authLimiter = require("../middleware/rateLimiter");

const router = express.Router();

router.post(
  "/register",
  authLimiter,

  [
    body("email")
      .isEmail()
      .withMessage("Please enter a valid email."),

    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long."),
  ],

  async (req, res) => {
  try {
    const errors = validationResult(req);

if (!errors.isEmpty()) {
  return res.status(400).json({
    errors: errors.array(),
  });
}
    const { email, password } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: "Email already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      email,
      password: hashedPassword,
    });

    res.status(201).json({
      message: "User registered successfully",
      user: {
        id: user._id,
        email: user.email,
      },
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
});

router.post(
  "/login",
  authLimiter,

  [
    body("email")
      .isEmail()
      .withMessage("Please enter a valid email."),

    body("password")
      .notEmpty()
      .withMessage("Password is required."),
  ],

  async (req, res) => {
  try {
    const errors = validationResult(req);

if (!errors.isEmpty()) {
  return res.status(400).json({
    errors: errors.array(),
  });
}
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
  return res.status(401).json({
    message: "Invalid email or password",
  });
}
const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
  return res.status(401).json({
    message: "Invalid email or password",
  });
}
const token = jwt.sign(
  {
    id: user._id,
    email: user.email,
  },
  process.env.JWT_SECRET,
  {
    expiresIn: "7d",
  }
);
res.status(200).json({
      message: "Login successful",
      token,
      user: {
        id: user._id,
        email: user.email,
      },
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
});
    
module.exports = router;