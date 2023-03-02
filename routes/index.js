
const express = require("express");
const apiRouter = express.Router();

//Array for api data
let apiData = [];

//Vairibles for search params
let searchTerm = "";
let amount = 10;
let mediaType = "";

//POST method with instruction from frontend
apiRouter.post("/search", function (req, res) {
  searchTerm = req.body.searchTerm;
  amount = req.body.amount;
  mediaType = req.body.mediaType;
  return res.json({ message: "Request received" });
});

//GET request fetches data from api
apiRouter.get("/api", function (req, res) {
  console.log("GET API");
  fetch(
    `https://itunes.apple.com/search?term=${searchTerm}&limit=${amount}&entity=${mediaType}`
  )
    .then((res) => res.json())
    .then((json) => {
      apiData = json.results;
      res.json(apiData);
    });
});

module.exports = apiRouter;
