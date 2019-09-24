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
	var dbo = db.db("newDataBase");
	dbo.collection("clientes").findOne({}, function(err, result){ // find de first document in the 'cliente' collection
		if(err) throw err;
		console.log(result.name);
		db.close();
	});
});

MongoClient.connect(url, function(err, db){
	if(err) throw err;
	var dbo = db.db("newDataBase");
	dbo.collection("clientes").find({}).toArray(function(err, result){ // find all documents
		if(err) throw err;
		console.log(result.name);
		db.close();
	});
});

MongoClient.connect(url, function(err, db){
	if(err) throw err;
	var dbo = db.db("newDataBase");
	dbo.collection("clientes").find({}, { projection: {_id: 0, name: 1}).toArray(function(err, result){ // find all documents, the address is omitted and only name appear
		if(err) throw err;
		console.log(result.name);
		console.log(result[1].address); // returns the address of 2º document
		db.close();
	});
});

// query -----------------------------------------------
MongoClient.connect(url, function(err, db){
	if(err) throw err;
	var dbo = db.db("newDataBase");
	var query = {adress:"Santa Catarina"};
	dbo.collection("clientes").find(query).toArray(function(err, result){ // find document in a collection, filter the result to limit your search.
		if(err) throw err;
		console.log(result);
		db.close();
	});
});

MongoClient.connect(url, function(err, db){
	if(err) throw err;
	var dbo = db.db("newDataBase");
	var query = {adress: /^S/}; //filter with regular expression, in this case the address that starts with 'S'
	dbo.collection("clientes").find(query).toArray(function(err, result){ // find document in a collection, filter the result to limit your search.
		if(err) throw err;
		console.log(result);
		db.close();
	});
});

// sort ---------------------------------------------------
MongoClient.connect(url, function(err, db){
	if(err) throw err;
	var dbo = db.db("newDataBase");
	var varSort = {name: 1}; // result alphabetically '1'
	dbo.collection("clientes").find().sort(varSort).toArray(function(err, result){ 
		if(err) throw err;
		console.log(result);
		db.close();
	});
});

MongoClient.connect(url, function(err, db){
	if(err) throw err;
	var dbo = db.db("newDataBase");
	var varSort = {name: -1}; // reverse '-1'
	dbo.collection("clientes").find().sort(varSort).toArray(function(err, result){ 
		if(err) throw err;
		console.log(result);
		db.close();
	});
});

// update ---------------------------------------------------
MongoClient.connect(url, function(err, db){
	if(err) throw err;
	var dbo = db.db("newDataBase");
	var varQuery = {address: 'Santa Catarina'}; 
	var newValues =  {$set: {name: "UBUtOs Tecnology"} // update object with address = 'Santa Catarina'
	dbo.collection("clientes").updateMany(myquery, newValues, function(err, res){ 
		if(err) throw err;
		console.log(res.result.nModified + "document updated");
		db.close();
	});
});
// limit ----------------------------------------------------
MongoClient.connect(url, function(err, db){
	if(err) throw err;
	var dbo = db.db("newDataBase");
	dbo.collection("clientes").find().limit(2).toArray(function(err, result){ // return only 2 documents
		if(err) throw err;
		console.log(result);
		db.close();
	});
});

// delete ---------------------------------------------------
MongoClient.connect(url, function(err, db){
	if(err) throw err;
	var dbo = db.db("newDataBase");
	var delObj = {addres: 'Santa Catarina'};
	dbo.collection("clientes").deleteOne(delObj, function(err, obj){  // del the document -> delObj
		if(err) throw err;
		console.log(" 1 documento foi deletado");
		db.close();
	});
});

// drop collection -------------------------------------------
MongoClient.connect(url, function(err, db){
	if(err) throw err;
	var dbo = db.db("newDataBase");
	dbo.dropCollection("clientes", function(err, deleteOk){  // delete the colection "clientes"
		if(err) throw err;
		if(deleteOk) console.log(" Collection deleted");
		db.close();
	});
});

