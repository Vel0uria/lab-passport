const User = require("../models/User");
const { ensureLoggedIn } = require("connect-ensure-login");

exports.getSignup = (req, res) => {
  res.render("auth/signup");
};
exports.postSignup = async (req, res) => {
  const { username, password } = req.body;
  await User.register(new User({ username }), password);
  res.redirect("/auth/login");
};
exports.getLogin = (req, res) => {
  res.render("auth/login");
};

exports.postLogin = (req, res) => {
  res.redirect("/profile");
};

exports.getProfile = (req, res) => {
  res.render("personal-profile");
};
