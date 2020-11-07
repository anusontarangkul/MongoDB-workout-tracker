const express = require('express');
const router = express.Router();
const Workout = require('../models/workout');

// View workout
router.get('/api/workouts', (req, res) => {
    Workout.find()
        .then(workout_db => {
            res.json(workout_db);
        })
        .catch(err => {
            res.json(err);
        });
});
// Create workout 
router.post('/api/workouts', (req, res) => {
    Workout.create({})
        .then(workout_db => {
            res.json(workout_db);
        })
        .catch(err => {
            res.json(err);
        });
})

// Add exercises to a previous workout plan

// Add new exercises to a new workout plan.

//View the combined weight of multiple exercises on the stats pag

module.exports = router;