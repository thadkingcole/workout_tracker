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

  app.post("/api/workouts", (req, res) => {
    // TODO add a new workout to db
    console.log(req);
  });

  app.put("/api/workouts/:id", (req, res) => {
    // TODO edit a speciifc workout in db
    console.log(req);
  });
};
