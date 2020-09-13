// * required modules
const db = require("../models");

// * export routes associated with the API
module.exports = (app) => {
  // get all workouts from db for last workout
  app.get("/api/workouts", async (req, res) => {
    try {
      const allWorkouts = await db.Workout.find({});
      res.status(200).json(allWorkouts);
    } catch (error) {
      res.status(500).json(error);
    }
  });

  // get all workouts from db for stats page
  app.get("/api/workouts/range", async (req, res) => {
    try {
      const workoutData = await db.Workout.find({});
      res.status(200).json(workoutData);
    } catch (error) {
      res.status(500).json(error);
    }
  });

  app.post("/api/workouts", async (req, res) => {
    // get current time for new workout
    const now = new Date();
    try {
      // add a new workout to db
      const newWorkout = await db.Workout.create({ day: now });
      res.status(201).json(newWorkout); // 201 = created
    } catch (error) {
      res.status(500).json(error);
    }
  });

  app.put("/api/workouts/:id", async (req, res) => {
    // edit a specifc workout in db
    try {
      const currentWorkout = await db.Workout.findById(req.params.id);
      currentWorkout.exercises.push(req.body);
      await currentWorkout.save();
      res.status(201).json(currentWorkout); // 201 = created
    } catch (error) {
      res.status(500).json(error);
    }
  });
};
