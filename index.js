/* jshint esversion: 6 */
const macos = require('./lib/macos.js');
const windows = require('./lib/windows.js');
const linux = require('./lib/linux.js');
const os = require('os');


// module.exports = () => {

// 	os.platform();

// };

macos.get((error, drives) => {
	console.dir(drives);
});

const volumes = macos.sync();
// console.log(volumes);