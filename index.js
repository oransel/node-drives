/* jshint esversion: 6 */
const macos = require('./lib/macos.js');
const windows = require('./lib/windows.js');
const linux = require('./lib/linux.js');
const os = require('os');


module.exports = (() => {

	// export per supported platform
	switch(os.platform()) {
		case 'darwin': return macos;
		case 'win32': return windows;
		case 'linux': return linux;
		default: throw new Error('unsupported platform os');
	}
	
})();