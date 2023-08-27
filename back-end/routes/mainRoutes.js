const express = require("express");
const router = express.Router();

//Example route
router.get("/", (req, res) => {
    res.send({
        message: "Hello World!"
    });
});

//Exporting the routes
module.exports = router;