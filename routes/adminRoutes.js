const { Router } = require("express");
const router = Router();
const { findUser, deleteUser } = require("../controllers/adminControllers");

router.get("/employees/", findUser);
router.get("/employees/:id/delete", deleteUser);

module.exports = router;
