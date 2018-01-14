/* jshint esversion: 6 */
const drives = require('../index.js');

drives.get((error, drives) => {
	if (error) return console.dir(error);
	console.dir(drives);
});
