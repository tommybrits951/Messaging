require("dotenv").config();
const accessSecret = process.env.ACCESS_SECRET;
const refreshSecret = process.env.REFRESH_SECRET;
const bcrypt = require("bcrypt");
const User = require("../models/User");
const { format } = require("date-fns");
const jwt = require("jsonwebtoken");

function buildAccess(user) {
  const payload = {
    subject: user.id,
    username: user.username,
    first_name: user.first_name,
    postal: user.postal
  };
  const options = {
    expiresIn: "1h"
  };
  console.log(accessSecret);
  return jwt.sign(payload, accessSecret, options);
}

function buildRefresh(user) {
  const payload = {
    subject: user.id,
    username: user.username,
    first_name: user.first_name,
    postal: user.postal
  };
  const options = {
    expiresIn: "1d"
  };
  return jwt.sign(payload, refreshSecret, options);
}

async function login(req, res, next) {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(401)
        .json({ message: "username and password required!" });
    }
    const user = await User.getByEmail(email);
    const match = await bcrypt.compare(password, user.password);
    if (!user || !match) {
      return res.status(400).json({ message: "email or password incorrect!" });
    }
    const accessToken = buildAccess(user);
    const refreshToken = buildRefresh(user);
    res.cookie("jwt", refreshToken, {
      httpOnly: true,
      secure: false,
      sameSite: "None",
      signed: true,
      maxAge: 1000 * 60 * 60 * 24
    });
    res.status(200).json(accessToken);
  } catch (err) {
    next(err);
  }
}

async function register(req, res, next) {
  try {
    const { username, email, first_name, last_name, password, postal } =
      req.body;
    if (!username || !email || !first_name || !password || !postal) {
      return res
        .status(400)
        .json({ message: "Must fill out required fields." });
    }
    const current = format(new Date(), "yyyy-MM-dd");
    const hash = await bcrypt.hash(password, 8);
    const user = { ...req.body, joined: current, password: hash };
    console.log(user);
    const result = await User.insertUser(user);

    if (!result) {
      return res.status(400).json({ message: "couldn't register user!" });
    }

    res
      .status(201)
      .json({ message: `user ${username} registered successfully!` });
  } catch (err) {
    next(err);
  }
}

module.exports = {
  register,
  login
};
