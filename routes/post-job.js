const express = require("express");
const router = express.Router();
const Job = require("./../models/Job");

router.get("/", (req, res) => {
	res.render("post-job");
});

router.post("/", (req, res) => {
	console.log(req.body);
});

module.exports = router;
