// CRUD create read update delete

// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID;

// Destructuring
const { MongoClient, ObjectID } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017'; // It's better to write the IP of localhost than 'localhost' word
const databaseName = 'task-manager';

MongoClient.connect(
	connectionURL,
	{ useNewUrlParser: true, useUnifiedTopology: true },
	(error, client) => {
		if (error) {
			return console.log('Unable to connect to database!');
		}

		// console.log('Connected correctly.');

		const db = client.db(databaseName);

		db.collection('tasks').findOne(
			{ _id: new ObjectID('5df6234a373e50192ccc09ab') },
			(error, task) => {
				if (error) {
					return console.log('Unable to fetch.');
				}

				console.log(task);
			}
		);

		db.collection('tasks')
			.find({ completed: false })
			.toArray((error, tasks) => {
				console.log(tasks);
			});

		db.collection('tasks')
			.find({ completed: false })
			.count((error, count) => {
				console.log(count);
			});
	}
);

// COMMENTED PARTS

// const id = new ObjectID(); // Creating the id manually
// console.log(id);
// console.log(id.getTimestamp());

// db.collection('users').insertOne(
// 	{
// 		name: 'Behar',
// 		age: 19
// 	},
// 	(error, result) => {
// 		if (error) {
// 			return console.log('Unable to insert users.');
// 		}

// 		console.log(result.ops);
// 	}
// );

// db.collection('users').insertMany(
// 	[
// 		{
// 			name: 'Andrew',
// 			age: 28
// 		},
// 		{
// 			name: 'Florina',
// 			age: 21
// 		}
// 	],
// 	(error, result) => {
// 		if (error) {
// 			return console.log('Unable to insert users.');
// 		}

// 		console.log(result.ops);
// 	}
// );

// db.collection('tasks').insertMany(
// 	[
// 		{
// 			description: 'Cut my hair',
// 			completed: false
// 		},
// 		{
// 			description: 'Have the first concert',
// 			completed: true
// 		},
// 		{
// 			description: 'Learn MongoDB',
// 			completed: false
// 		}
// 	],
// 	(error, result) => {
// 		if (error) {
// 			return console.log('Unable to insert tasks.');
// 		}

// 		console.log(result.ops);
// 	}
// );

// db.collection('users').findOne(
// 	{ _id: new ObjectID('5df61e9cb002af2a5028cfa0') },
// 	(error, user) => {
// 		if (error) {
// 			return console.log('Unable to fetch.');
// 		}

// 		console.log(user);
// 	}
// );

// The find method doesn't take a callback function as a second argument, this function returns a cursor
// db.collection('users')
// 	.find({ age: 21 })
// 	.toArray((error, users) => {
// 		console.log(users);
// 	});

// db.collection('users')
// 	.find({ age: 21 })
// 	.count((error, count) => {
// 		console.log(count);
// 	});
