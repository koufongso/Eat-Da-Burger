var express = require("express");
var burger = require("../models/burger.js");

var router = express.Router();

// get all burgers in the database
router.get("/", function (req, res) {
    burger.all(function (result) {
        // res.json(result);
        res.render("index",{burgers:result});
    });
});

// insert a burger into the database
router.post("/api/burgers", function (req, res) {
    // console.log(req);
    burger.create(req.body, function (result) {
        console.log("added!");
        res.json(result);
    });
});


// insert a burger into the database
router.put("/api/burgers/:id", function (req, res) {
    burger.update(req.body, {id:req.params.id}, function (result) {
        console.log("updated!");
        res.json(result);
    });
});


module.exports = router;

