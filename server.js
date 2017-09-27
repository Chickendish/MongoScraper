// ==========================================
//  Dependencies
// ==========================================
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');

var PORT = process.env.PORT || 3000;

//  Instantiate Express app
const app = express();

//  Set up Express router
const router = express.Router();

//  Designated public folder as a static directory
app.use(express.static(__dirname + '/public'));

//  Use handlebars for HTML templating
app.engine('handlebars', exphbs({
	defaultLayout: 'main'
}));

app.set('view engine', 'handlebars');

//  Use body-parser middleware
app.use(bodyParser.urlencoded({ extended: false }))

app.use(router);

// ==========================================
//  Set up the database
// ==========================================

const db = process.env.MONGODB_URI || "mongodb://localhost/mongoheadlines";

mongoose.connect(db, function(error){
	if (error){
		console.log(error);
	} else {
		console.log("Mongoose connection successful!");
	}
})

app.listen(PORT, ()=>
	console.log('Listening on port: ' + PORT));