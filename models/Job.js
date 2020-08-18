const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const jobSchema = new Schema({
	jobTitle: {
		type: String,
		required: true,
	},
	job_location: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	jobType: {
		type: String,
		required: true,
	},
	job_description: {
		type: String,
		required: true,
	},
	company_name: {
		type: String,
		required: true,
	},
	company_tagline: {
		type: String,
		required: true,
	},
	company_description: {
		type: String,
		required: true,
	},
	company_website: {
		type: String,
		required: true,
	},
	company_website_fb: {
		type: String,
	},
	company_website_tw: {
		type: String,
	},
	date: {
		type: Date,
		default: Date.now,
	},
});

module.exports = mongoose.model("Job", jobSchema);
