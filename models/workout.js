const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Number,
        default: Date.now
    },
    exercise: {
        name: {
            type: String,
            trim: true,
            required: "Exercise Type"
        },

        type: {
            type: String,
            trim: true,
            required: "Exercise Name"
        },
        Duration: {
            type: Number,
            required: "Duration (minutes)"
        },
        weight: {
            type: Number
        },

        sets: {
            type: Number
        },
        reps: {
            type: Number
        },
        duration: {
            type: Number
        }

    }
})

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;