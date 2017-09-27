// ==========================================
//  Dependencies
// ==========================================
const express = require('express');

var PORT = process.env.PORT || 3000;

//  Instantiate Express app
const app = express();

//  Set up Express router
const router = express.Router();

//  Designated public folder as a static directory
app.use(express.static(__dirname + '/public'));

app.listen(PORT, ()=>
	console.log('Listening on port: ' + PORT));