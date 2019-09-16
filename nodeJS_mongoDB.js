

var mongo = require('mongodb'); //module to manipulate mongoDB.

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/newDataBase"; // create a DB called 'newDataBase'

//Mongo will create the DB if it does not exist, and make the connection.
MongoClient.connect(url, function(err, db){
	if (err) throw err;
	console.log("Database created!");
	db.close();
});