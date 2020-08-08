const dotenv = require("dotenv");
const app = require("./app");
const mongoose = require("mongoose");
dotenv.config({ path: "./config.env" });

// Connect to database
mongoose
	.connect(process.env.DATABASE_URL, {
		useUnifiedTopology: true,
		useNewUrlParser: true,
	})
	.then((con) => {
		// console.log(con.connections[0].host);
		console.log(
			`Database connected on ${con.connections[0].host}/${con.connections[0].port}`
		);
	})
	.catch((err) => {
		console.log(err);
	});

const port = process.env.PORT || 3000;

app.listen(port, () => {
	console.log(`Server started on port ${port}`);
});
