const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: Date,
  exercises: [
    {
      type: { type: String }, // type of workout (resistance or cardio)
      name: String,
      duration: Number,
      weight: Number, // if resistance
      reps: Number, // if resistance
      sets: Number, // if resistance
      distance: Number, // if cardio
    },
  ],
  totalDuration: Number,
});

WorkoutSchema.methods.getTotalDuration = function () {
  let runningTotal = 0; // initialize at 0
  this.exercises.forEach((exercise) => {
    runningTotal += exercise.duration; // iterate by duration of each exercise
  });
  return runningTotal; // return runningTotal as the totalDuration key
};

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
