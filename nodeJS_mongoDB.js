var mongo = require('mongodb'); //module to manipulate mongoDB.

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/newDataBase"; // create a DB called 'newDataBase'

//Mongo will create the DB if it does not exist, and make the connection.
MongoClient.connect(url, function(err, db){
	if (err) throw err;
	console.log("Database created!");
	db.close();
});

// create ------------------------------------------
MongoClient.connect(url, function(err,db){
	if(err) throw err;
	var dbo = db.db("newDataBase");
	dbo.createCollection("clientes", function(err, res){ // create a collection called "clientes"
		if(err) throw err;
		console.log("Collection created!");
		db.close();
	});
});


// insert -------------------------------------------
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

MongoClient.connect(url, function(err ,db){
	if(err) throw err;
	var dbo = db.db("newDataBase");
	var myObj = { name: " THONX Materiais", address: "Santa Catarina"}; // Object to be insertOne
	dbo.collection("clientes").insertOne(myObj, function(err, res){ // inset the object in the 'clientes' collection
		if(err) throw err;
		console.log("Um contato adicionado!");
		db.close;
	});
});

MongoClient.connect(url, function(err ,db){
	if(err) throw err;
	var dbo = db.db("newDataBase");
	var myObj = { name: " IKITOS Materia prima", address: "Sao José"}; // Object to be insertOne
	dbo.collection("clientes").insertOne(myObj, function(err, res){ // inset the object in the 'clientes' collection
		if(err) throw err;
		console.log("Um contato adicionado!");
		db.close;
	});
});

// find -----------------------------------------------
MongoClient.connect(url, function(err, db){
	if(err) throw err;
	var dbo = db.db("mydb");
	dbo.collecton("costumers").findOne({}, function(err, result){ // find de first document in the 'cliente' collection
		if(err) throw err;
		console.log(result.name);
		db.close();
	});
});

// query -----------------------------------------------
MongoClient.connect(url, function(err, db){
	if(err) throw err;
	var dbo = db.db("mydb");
	var query = {adress: Santa Catarina};
	dbo.collecton("costumers").find(query).toArray(function(err, result){ // find document in a collection, filter the result to limit your search.
		if(err) throw err;
		console.log(result);
		db.close();
	});
});

MongoClient.connect(url, function(err, db){
	if(err) throw err;
	var dbo = db.db("mydb");
	var query = {adress: /^S/}; //filter with regular expression, in this case the address that starts with 'S'
	dbo.collecton("costumers").find(query).toArray(function(err, result){ // find document in a collection, filter the result to limit your search.
		if(err) throw err;
		console.log(result);
		db.close();
	});
});

