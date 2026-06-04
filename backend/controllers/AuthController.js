const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { UserModel } = require("../model/UserModel");

const isProduction = process.env.NODE_ENV === "production";

const buildCookieOptions = (rememberMe = false) => ({
  httpOnly: true,
  sameSite: isProduction ? "none" : "lax",
  secure: isProduction,
  maxAge: rememberMe ? 30 * 24 * 60 * 60 * 1000 : 7 * 24 * 60 * 60 * 1000,
});

const createToken = (userId, rememberMe = false) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET || "jwt_secret_key", {
    expiresIn: rememberMe ? "30d" : "7d",
  });
};

const sanitizeUser = (user) => ({
  id: user._id,
  username: user.username,
  email: user.email,
  createdAt: user.createdAt,
});

const isBcryptHash = (value) => typeof value === "string" && /^\$2[abxy]?\$\d{2}\$/.test(value);

const signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({ success: false, message: "All fields are required" });
    }

    const normalizedEmail = String(email).trim().toLowerCase();
    const normalizedPassword = String(password).trim();
    const normalizedUsername = String(username).trim();

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail)) {
      return res.status(400).json({ success: false, message: "Enter a valid email address" });
    }

    if (normalizedPassword.length < 6) {
      return res.status(400).json({ success: false, message: "Password must be at least 6 characters" });
    }

    const existingUser = await UserModel.findOne({ email: normalizedEmail });

    if (existingUser) {
      return res.status(409).json({ success: false, message: "Email already exists. Please login instead" });
    }

    const user = await UserModel.create({
      username: normalizedUsername,
      email: normalizedEmail,
      password: normalizedPassword,
    });

    const token = createToken(user._id);
    res.cookie("token", token, buildCookieOptions());

    return res.status(201).json({
      success: true,
      message: "Signup successful",
      user: sanitizeUser(user),
    });
  } catch (error) {
    if (error && error.code === 11000) {
      return res.status(409).json({ success: false, message: "Email already exists" });
    }

    return res.status(500).json({ success: false, message: "Signup failed", error: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password, rememberMe } = req.body;

    if (!email || !password) {
      return res.status(400).json({ success: false, message: "Email and password are required" });
    }

    const normalizedEmail = String(email).trim().toLowerCase();
    const submittedPassword = String(password).trim();

    const user = await UserModel.findOne({ email: normalizedEmail });

    if (!user) {
      return res.status(401).json({ success: false, message: "User not found" });
    }

    let isMatch = false;

    if (isBcryptHash(user.password)) {
      isMatch = await bcrypt.compare(submittedPassword, user.password);
    } else if (typeof user.password === "string") {
      // Backward compatibility: upgrade legacy plain-text passwords on successful login.
      isMatch = user.password === submittedPassword;

      if (isMatch) {
        user.password = submittedPassword;
        await user.save();
      }
    }

    if (!isMatch) {
      return res.status(401).json({ success: false, message: "Wrong password" });
    }

    const token = createToken(user._id, Boolean(rememberMe));
    res.cookie("token", token, buildCookieOptions(Boolean(rememberMe)));

    // Helpful for local debugging; no effect on prod behavior.
    if (process.env.NODE_ENV !== "production") {
      console.log("Login set cookie token for user:", user.email);
    }

    return res.status(200).json({
      success: true,
      message: "Login successful",
      user: sanitizeUser(user),
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Login failed", error: error.message });
  }
};

const logout = async (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    sameSite: isProduction ? "none" : "lax",
    secure: isProduction,
  });

  return res.status(200).json({ success: true, message: "Logout successful" });
};

const me = async (req, res) => {
  return res.status(200).json({
    success: true,
    user: sanitizeUser(req.user),
  });
};

module.exports = { signup, login, logout, me };
