const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema(
  {
    day: {
      type: Date,
      required: [true, "day is required"],
    },
    exercises: [
      {
        type: {
          type: String,
          lowercase: true, // always calls .toLowerCase() on the value
          trim: true, // always calls .trim() on the value
          enum: ["resistance", "cardio"], // ensures type is either of the 2 options
          required: [true, "exercise type is required"],
        },
        name: {
          type: String,
          trim: true,
          required: [true, "exercise name is required"],
        },
        duration: {
          type: Number,
          min: [0, "exercise duration cannot be negative"],
          required: [true, "exercise duration is required"],
        },
        weight: {
          type: Number,
          min: [0, "weight cannot be negative"],
          // required for resistance exercises
          required: [
            function () {
              return this.type === "resistance";
            },
            "weight is required for resistance exercises",
          ],
        },
        reps: {
          type: Number,
          min: [0, "reps cannot be negative"],
          // required for resistance exercises
          required: [
            function () {
              return this.type === "resistance";
            },
            "reps are required for resistance exercises",
          ],
        },
        sets: {
          type: Number,
          min: [0, "sets cannot be negative"],
          // required for resistance exercises
          required: [
            function () {
              return this.type === "resistance";
            },
            "sets are required for resistance exercises",
          ],
        },
        distance: {
          type: Number,
          min: [0, "distance cannot be negative"],
          // required for resistance exercises
          required: [
            function () {
              return this.type === "cardio";
            },
            "distance is required for cardio exercises",
          ],
        },
      },
    ],
  },
  // allow for virtuals when querying documents
  {
    toObject: {
      virtuals: true,
    },
    toJSON: {
      virtuals: true,
    },
  }
);

WorkoutSchema.virtual("totalDuration").get(function () {
  let runningTotal = 0; // initialize at 0
  this.exercises.forEach((exercise) => {
    runningTotal += exercise.duration; // iterate by duration of each exercise
  });
  return runningTotal; // return runningTotal as the totalDuration key
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
