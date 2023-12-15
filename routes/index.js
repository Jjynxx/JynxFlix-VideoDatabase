var express = require("express")
var router = express.Router()

/* GET home page. */
router.get("/", function (req, res, next) {
    res.render("index", {
        title: "COMP 206, Assignment 2",
        author: "Sara McHattie",
    })
})


// search page request function
router.post("/search", async (req, res) => {
    try {
        const searchTitle = req.body.title; // Assuming you have a form input with the name "title"
        let movies = await movieCollection.find({ title: { $regex: searchTitle, $options: "i" } }).toArray();
        let data = {
            movies: movies,
        };
        res.render("movies", data);
    } catch (error) {
        console.error("Error fetching movies:", error);
        res.status(500).send("Internal Server Error");
    }
});

module.exports = router
