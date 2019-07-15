const User = require("../models/User");

exports.findUser = (req, res, next) => {
  User.find()
    .then(users => res.render("employees", { users }))
    .catch(err => res.render("employees", err));
};

exports.deleteUser = (req, res, next) => {
  User.findByIdAndDelete(id)
    .then(res.redirect("/admin/employees"))
    .catch(err => res.send(err));
};
