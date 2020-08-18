const express = require("express");
const router = express.Router();
const Job = require("./../models/Job");

router.get("/", (req, res) => {
	res.render("post-job");
});

router.post("/", async (req, res) => {
	console.log(req.body);
	const {
		email,
		job_title,
		job_location,
		job_type,
		job_description,
		company_name,
		company_tagline,
		company_description,
		company_website,
	} = req.body;

	const newJob = new Job({
		jobTitle: job_title,
		job_location,
		email,
		jobType: job_type,
		job_description,
		company_name,
		company_tagline,
		company_description,
		company_website,
	});

	await newJob.save();
	res.redirect("/vacancies");
});

module.exports = router;
