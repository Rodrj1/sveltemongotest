require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

const app = express();

const workoutRouter = require('./routes/workouts');

//middleware

app.use(express.json());

app.use((req, res, next) => {
	console.log(req.path, req.method);
	next();
});

// Routes

app.get('/', (req, res) => {
	res.json({ mssg: 'A' });
});

app.use('/api/workouts', workoutRouter);

mongoose
	.connect(process.env.MONGODB_URI)
	.then(() => {
		app.listen(process.env.PORT, () => {
			console.log('It just work!');
		});
	})
	.catch((error) => console.log(error));
