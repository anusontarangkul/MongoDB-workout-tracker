const express = require('express');
const router = express.Router();
const db = require('../models/workout');

router.get('/api/workouts', (req, res) => {
    db.Workout.find({})
        .then(workout_db => {
            res.json(workout_db);
        })
        .catch(err => {
            res.json(err);
        });
});

module.exports = router;