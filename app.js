const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const xhbs = require("express-handlebars");
const path = require("path");

// Import routes
const homeRoute = require("./routes/index");
const contactRoute = require("./routes/contact");
const vacanciesRoute = require("./routes/vacancies");
const aboutRoute = require("./routes/about");
const newVacancieRoute = require("./routes/post-job");
const authRoute = require("./routes/auth");

const app = express();

// Template engine
app.set("views", path.join(__dirname, "views"));
app.engine(
	"hbs",
	xhbs({
		defaultLayout: "main",
		extname: ".hbs",
	})
);

app.set("view engine", "hbs");

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger("dev"));

// Route middlewares
app.use("/", homeRoute);
app.use("/contact", contactRoute);
app.use("/vacancies", vacanciesRoute);
app.use("/about", aboutRoute);
app.use("/post-job", newVacancieRoute);
app.use("/auth", authRoute);

module.exports = app;
