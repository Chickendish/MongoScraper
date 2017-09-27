// ==========================================
//  Dependencies
// ==========================================
const express = require('express');
const bodyParser = require('body-parser');
const expressHandlebars = require('express-handlebars');

var PORT = process.env.PORT || 3000;

//  Instantiate Express app
const app = express();

//  Set up Express router
const router = express.Router();

//  Designated public folder as a static directory
app.use(express.static(__dirname + '/public'));

//  Use handlebars for HTML templating
app.engine('handlebars', expressHandlebars({
	defaultLayout: 'main'
}));

app.set("view engine", "handlebars");

//  Use body-parser middleware
app.use(bodyParser.urlencoded({ extended: false }))

app.use(router);

app.listen(PORT, ()=>
	console.log('Listening on port: ' + PORT));