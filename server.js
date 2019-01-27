var express = require('express');
var express_graphql = require('express-graphql');
var { buildSchema } = require('graphql');

var getData = require('./utilities/load_data.js');
var parseQuery = require('./utilities/parser.js');
var objSubsetOfOther = require('./utilities/objSubsetOfOther')

var schema = buildSchema (`
	type Query {
		word(queryString: String!): [String] 
	}
`); 

var getMatches = function(args) {
	var query = parseQuery(args.queryString);
	return getData.getWords(args.queryString.length).filter((item) => objSubsetOfOther(query, item)).map((it)=>it.word);
	}

var root = {
	word: getMatches 
};

var app = express();
app.use('/graphql', express_graphql({
	schema: schema,
	rootValue: root,
	graphiql: true
}));

app.listen(4000, () => console.log('now running'));
