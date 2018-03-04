"use strict"
var express = require('express');
var app = express();
var path = require('path');

//Midleware to define folder for static files
app.use(express.static('public'))
console.log('antes get');
app.get('*',function(req, res){
		res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})
console.log('despues get');
console.log('antes listen');
app.listen(3001, function(){
	console.log('Web server is running on localhost:3001');
})
console.log('despues listen');
