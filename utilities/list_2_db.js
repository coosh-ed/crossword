/* Utility function for turning a
   list into a db-like object with
   fields:
	* word : the item (String) in the list
	* len : length of item
	* 0 : 1st char
	* 1 : 2nd char
	* ... 			*/ 

var str_2_obj = require('./str2obj.js');

var itemMapping = function(item) {
	var result = {
		word: item,
		len: item.length
	};
	var itemObj = str_2_obj(item);
	for (var key in itemObj) {
		result[key] = itemObj[key];
		}
	return result;
};
	

var list_2_db = function(list) {
        return	list.map(itemMapping);
};			
module.exports = list_2_db;
