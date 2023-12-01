const express = require("express")
const router = express.Router()

const mongoClient = require("../config/db.js")

// localhost:3000/db/

router.get("/", (req, res) => {
    res.send("<h1>Sara McHattie</h1>")
})

// TODO Add a "/collections" route handler that lists the collections available in the sample_mflix database

router.get("/collections", async (req, res) => {
    let connection = await mongoClient.connect()
    let db = await connection.db("sample_mflix")
    let collections = await db.listCollections().toArray()

    let data = {
        collections: collections,
    }

    res.render("collections", data)
})

module.exports = router
