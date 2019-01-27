var fs = require('fs');
var list2db = require('./list_2_db.js');

const dataLocation = "./data";

var dataFilenames = fs.readdirSync(dataLocation);
var dataFiles = dataFilenames.map((file) => require('../' + dataLocation + '/' + file)).map(list2db);
module.exports = {
	words : dataFiles,
	getWords: function(id) {
	 return this.words[id-3];
	}
};
