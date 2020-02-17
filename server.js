const express = require("express");
const db = require("./models/workouts.js");
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
  db.find().then(workouts => res.json(workouts))
})

app.post("/api/workouts", ({ body }, res) => {
  db.create(body).then(workouts => res.json(workouts))
})

app.put("/api/workouts/:id", ({ body, params }, res) => {
  db.findByIdAndUpdate(params.id, {$push: {exercises:body}}).then(workouts => res.json(workouts))
})

app.get("/api/workouts/range", (req, res) => {
  db.find().then(workouts => res.json(workouts))
})

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});

