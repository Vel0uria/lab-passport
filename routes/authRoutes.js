const passport = require("../middlewares/passport");
const { Router } = require("express");
const router = Router();
const {
  getSignup,
  getLogin,
  postSignup,
  postLogin,
  getProfile
} = require("../controllers/authControllers");
router.get("/signup", getSignup);
router.post("/signup", postSignup);
router.get("/login", getLogin);
router.post("/login", passport.authenticate("local"), postLogin);
router.get("/profile", getProfile);
module.exports = router;
