var scrape = require("../scripts/scrape");
var makeDate = require("../scripts/date");

var Headline = require("../models/Headline");

module.exports = {
	fetch: function(callback){
		scrape(function(data){
			var articles = data;
			for(var i=0; i<articles.length; i++){
				articles[i].date = makeDate();
				articles[i].saved = false;
			}

			Headline.collection.insertMany(articles, {ordered: false}, function(err, docs){
				callback(err, docs);
			});
		});
	},
	delete: function(query, callback){
		Headline.remove(query, callback);
	},
	get: function(query, callback){
		Headline.find(query)
		.sort({
			_id: -1
		})
		.exec(function(error, callback){
			callback(doc);
		});
	}
}