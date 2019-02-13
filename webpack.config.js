var path = require("path");

module.exports = {
entry: './src/functions.js',
output:{
	path: path.resolve(__dirname, 'dict'),
	filename: 'boundle.js'
}
};