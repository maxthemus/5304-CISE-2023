//Importing configuration file
const config = require("./development.json");

const mongoose = require("mongoose");

mongoose.connect(config.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on("error", () => console.log("Error connecting to db"));
db.once("open", () => {
    console.log("Connected to DB");
});

module.exports = db;