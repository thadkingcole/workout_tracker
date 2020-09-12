const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: Date,
  exercises: {
    type: String, // type of workout (resistance or cardio)
    name: String,
    duration: Number,
    weight: Number, // if resistance
    reps: Number, // if resistance
    sets: Number, // if resistance
    distance: Number, // if cardio
  },
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
