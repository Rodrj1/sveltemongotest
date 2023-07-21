const WorkoutModel = require('../models/WorkoutModel');
const mongoose = require('mongoose');

// Get All

const getWorkouts = async (req, res) => {
	const workouts = await WorkoutModel.find({});

	res.status(200).json(workouts);
};

// Get Specific

const getSpecificWorkout = async (req, res) => {
	const { id } = req.params;

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ error: 'No such workout' });
	}

	const workout = await WorkoutModel.findById(id);

	if (!workout) {
		return res.status(404).json({ error: 'No such workout' });
	}

	res.status(200).json(workout);
};

// Post Workout

const createWorkout = async (req, res) => {
	const { title, reps } = req.body;

	try {
		const workout = await WorkoutModel.create({ title, reps });
		res.status(200).json(workout);
	} catch (err) {
		res.status(400).json({ error: err.message });
	}
};

// Delete Workout

const deleteWorkout = async (req, res) => {
	const { id } = req.params;

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ error: 'No such workout' });
	}

	const workout = await WorkoutModel.findOneAndDelete({ _id: id });

	if (!workout) return res.status(400).json({ error: 'No such workout' });

	res.status(200).json('Succesfully Deleted');
};

// Update Workout

const updateWorkout = async (req, res) => {
	const { id } = req.params;

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ error: 'No such workout' });
	}

	const workout = await WorkoutModel.findOneAndUpdate({ _id: id }, { ...req.body });

	if (!workout) return res.status(400).json({ error: 'No such workout' });

	res.status(200).json('Succesfully Updated');
};

module.exports = {
	createWorkout,
	getWorkouts,
	getSpecificWorkout,
	deleteWorkout,
	updateWorkout
};
