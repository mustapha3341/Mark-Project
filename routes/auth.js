const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.get("/", (req, res) => {
	res.render("login");
});

router.post("/", async (req, res) => {
	const { fname, email, password, confirmPassword } = req.body;

	// if (password !== confirmPassword) {
	// 	return res.send("Password do not match.")
	// }

	const userExist = await User.findOne({ email: email });
	if (userExist) {
		return res.send("Email already in use pls enter a valid email");
	}

	const newUser = new User({
		fullName: fname,
		email: email,
		password: password,
	});

	newUser.save();
});

module.exports = router;
