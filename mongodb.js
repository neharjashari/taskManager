// CRUD

const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const connectionURL = 'mongodb://127.0.0.1:27017'; // It's better to write the IP of localhost than 'localhost' word
const databaseName = 'task-manager';
