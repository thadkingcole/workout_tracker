// * required modules
const db = require("../models");

// * export routes associated with the API
module.exports = (app) => {
  // get all workouts from db
  app.get("/api/workouts", async (req, res) => {
    try {
      const allWorkouts = await db.Workout.find({});
      res.status(200).json(allWorkouts);
    } catch (error) {
      res.status(500).json(error);
    }
  });

  app.get("/api/workouts/range", (req, res) => {
    // TODO get workouts within a specific range from db
  });

  app.post("/api/workouts", (req, res) => {
    // TODO add a new workout to db
  });

  app.put("/api/workouts/:id", (req, res) => {
    // TODO edit a speciifc workout in db
  });
};
