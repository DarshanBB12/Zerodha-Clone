const express = require("express");

const { login, logout, me, signup } = require("../controllers/AuthController");
const { AuthMiddleware } = require("../middleware/AuthMiddleware");

const router = express.Router();

router.get("/", (req, res) => {
	res.send("Auth Route Working ✅");
});

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
router.get("/me", AuthMiddleware, me);

module.exports = { AuthRoute: router };