const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userWorkout = new Schema({
    day: {
        type: Date,
        default: Date.now
    },

    exercises: [{
        type: {type: String},
        name: {type: String},
        duration: {type: Number},
        weight: {type: Number},
        reps: {type: Number},
        sets: {type: Number},
    }]
});

const workouts = mongoose.model("Workouts", userWorkout);

module.exports = workouts;