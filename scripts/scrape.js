var request = require('request');
var cheerio = require('cheerio');

var scrape = function(callback){
	request("https://www.nytimes.com", function(err, response, body){
		var $ = cheerio.load(body);
		var articles = [];
		$(".theme-summary").each(function(i, element){
			var head = $(this).children(".story-heading").text().trim();
			var sum = $(this).children(".summary").text().trim();

			if (head && sum){
				var headNeat = head.replace(/(\r\n|\n|\r|\t|\s+)/gm, " ").trim();
				var sumNeat = sum.replace(/(\r\n|\n|\r|\t|\s+)/gm, " ").trim();

				var dataToAdd = {
					headline: headNeat,
					summary: sumNeat
				};
				articles.pushz(dataToAdd);
			}
		});
		callback(articles);
	});
};

module.exports = scrape;