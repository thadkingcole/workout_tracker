// * required modules
const express = require("express"); // app running the server
const mongoose = require("mongoose"); // mongoDB npm module
const morgan = require("morgan"); // logger middleware

// * port declaration
const PORT = process.env.PORT || 1507;
// it is recommended by most government agencies and health organizations that an individual exercises 150 minutes per week (7 days)

// * create express app instance
const app = express();
// express app settings
app.use(morgan("dev")); // log messages to console with morgan
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public")); // allows use of public directory in static content

// * connect to mongoDB
/*
  DeprecationWarning: current Server Discovery and Monitoring engine is
  deprecated, and will be removed in a future version. To use the new Server 
  Discover and Monitoring engine, pass option
    { useUnifiedTopology: true }
  to the MongoClient constructor.
*/
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/exerciseDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// TODO import routes

// * listen to port
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
