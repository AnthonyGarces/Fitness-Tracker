const express = require("express");
const db = require("./models");
const mongoose = require("mongoose");
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workouts", { useNewUrlParser: true, useFindAndModify: false });

app.get("/exercise", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/exercise.html"))
})
  
app.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/stats.html"))
})

app.get("/api/workouts", (req, res) => {

})

app.post("/api/workouts", ({ body }, res) => {

})

app.put("/api/workouts/:id"), ({ body, params }, res) => {

}

app.get("/api/workouts/range", (req, res) => {

})

