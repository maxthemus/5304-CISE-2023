//Importing configuration file
const config = require("./config/development.json");

//Importing express
const express = require("express");

//Importing cors
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

//Starting the app
const PORT = (config.PORT || 3000);
app.listen(PORT, () => {
    console.log(`Server has started listening on PORT = ${PORT}`);
});


//Importing routes
const mainRoutes = require("./routes/mainRoutes");

//Mounting routes
app.use("/", mainRoutes);

//Importing database connection into page
const dbConnection = require("./config/database");





