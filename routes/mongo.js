const express = require("express");
const router = express.Router();
const mongoClient = require("../config/db.js");

// By Sara McHattie
// localhost:3000/db/
router.get("/", (req, res) => {
    res.send("<h1>Sara McHattie</h1>");
});


router.get("/collections", async (req, res) => {
    // Connect to the MongoDB server and retrieve the list of collections in the sample_mflix database
    let connection = await mongoClient.connect();
    let db = await connection.db("sample_mflix");
    let collections = await db.listCollections().toArray();

    let data = {
        collections: collections,
    };

    res.render("collections", data);
});

router.get("/movies", async (req, res) => {
    try {
        let connection = await mongoClient.connect();
        let db = await connection.db("sample_mflix");
        let movieCollection = db.collection("movies");

        // Fetch all unique genres and languages from the collection
        let genres = await movieCollection.distinct("genres");
        let languages = await movieCollection.distinct("languages");

        let title = req.query.title;  // Get the title from the query parameters
        let selectedGenre = req.query.genres;

        let query = {};

        if (title) {
            // If a title is provided, use a case-insensitive regular expression to match
            query.title = { $regex: title, $options: "i" };
        }

        if (selectedGenre) {
            // If a genre is selected, filter movies by that genre
            query.genres = selectedGenre;
        }

        // Fetch movies based on the constructed query, limit to 5 results
        let movies = await movieCollection.find(query).limit(5).toArray();

        let data = {
            movies: movies,
            genres: genres,
            languages: languages,  // Include the languages array
        };

        res.render("movies", data);
    } catch (error) {
        console.error("Error fetching movies:", error);
        res.status(500).send("Internal Server Error");
    }
});

module.exports = router;
