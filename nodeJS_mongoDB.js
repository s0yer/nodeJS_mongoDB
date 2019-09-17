

var mongo = require('mongodb'); //module to manipulate mongoDB.

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/newDataBase"; // create a DB called 'newDataBase'

//Mongo will create the DB if it does not exist, and make the connection.
MongoClient.connect(url, function(err, db){
	if (err) throw err;
	console.log("Database created!");
	db.close();
});

MongoClient.connect(url, function(err,db){
	if(err) throw err;
	var dbo = db.db("newDataBase");
	dbo.createCollection("clientes", function(err, res){ // create a collection called "clientes"
		if(err) throw err;
		console.log("Collection created!");
		db.close();
	});
});

MongoClient.connect(url, function(err ,db){
	if(err) throw err;
	var dbo = db.db("newDataBase");
	var myObj = { name: " ELCA Instalações", address: "Campinas/São Paulo"}; // Object to be insertOne
	dbo.collection("clientes").insertOne(myObj, function(err, res){ // inset the object in the 'clientes' collection
		if(err) throw err;
		console.log("Um contato adicionado!");
		db.close;
	});
});
	