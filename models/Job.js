const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const jobSchema = new Schema({
	jobTitle: {
		type: String,
		required: true,
	},
	location: {
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
	description: {
		type: String,
		required: true,
	},
});

module.exports = mongoose.model("Job", jobSchema);
