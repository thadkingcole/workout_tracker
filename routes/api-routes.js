// * required modules
const db = require("../models");

// * export routes associated with the API
module.exports = (app) => {
  app.get("/api/workouts", async (req, res) => {
    // get all workouts from db
    try {
      const allWorkouts = await db.Workout.find({});
      // allWorkouts.getTotalDuration();
      res.json(allWorkouts);
    } catch (error) {
      res.json(error);
    }
  });

  app.get("/?id=:id", async (req, res) => {
    // TODO get specific workout by id from db
    console.log("You made it here!");
    try {
      const oneWorkout = await db.Workout.findById(req.params.id);
      console.log(oneWorkout);
      res.json(oneWorkout);
    } catch (error) {
      res.json(error);
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
