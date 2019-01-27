var str_2_obj = require('./str2obj.js');

const queryChar = '?';

var buildQuery = function(queryString) {
	var query_obj = str_2_obj(queryString);
	var result = {};
	for (var key in Object.keys(query_obj)) {
		if (query_obj[key] != queryChar) {
			result[key] = query_obj[key];
			}
		}
	return result;
}

module.exports = buildQuery;	
