const express = require("express");

const router = express.Router();
//Import model to use the database functions
const burger = require("../models/burger.js");


//Routes for pulling, creating, updating, and deleting
router.get("/", (req, res) => {
    burger.all(function(data) {
        const hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", (req,res) => {
    burger.create([
        "name",
    ], [
        req.body.name,
    ], function(result) {
        res.json({ id: result.Id });
    });
});

router.put("/api/burgers/:id", (req,res) => {
    const condition = "id = " + req.params.id;
    console.log("condition", condition);

    burger.update({
        devoured: req.body.devoured
    }, condition, function(result) {
        if(result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

router.delete("/api/burgers/:id", (req,res) => {
    const condition = "id = " + req.params.id;

    burger.delete(condition, function(result) {
        if(result.affectedRows ==0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

//Export routes for server.js
module.exports = router;