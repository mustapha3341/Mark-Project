const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
	res.render("vacancies");
});

router.get("/create", (req, res) => {
	res.render("post-job");
});

module.exports = router;
