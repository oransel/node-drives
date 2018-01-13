# node-drives (work in progress)

List and get details of all drives in your system. This module doesn't require any native compilation but depends on the builtin commands on each operating system.

Platforms Supported:

* macOS
* Windows
* Linux

## Installation

To install the most recent release from npm, run:

    npm install drives

## Building

The source code is available at [github](http://github.com/oransel/node-drives). You can either clone the repository or download a zip file of the latest release.

Once you have the source, you can build the module by running

	npm install

in the main directory. If everything goes well, the module will be available in the build/Release folder.

## Examples

Drives is very simple to use.
<!-- 
``` js
// load the module and display its version
var talib = require('./build/Release/talib');
console.log("TALib Version: " + talib.version);

// Display all available indicator function names
var functions = talib.functions;
for (i in functions) {
	console.log(functions[i].name);
}
``` -->

For working examples look in the `examples/` directory. You can execute the examples using node.

	node examples/list.js

## License

Copyright (c) 2018 Mustafa Oransel

This library is free software; you can redistribute it and/or
modify it under the terms of the GNU Lesser General Public
License as published by the Free Software Foundation; either
version 3 of the License, or (at your option) any later version.

This library is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
Lesser General Public License for more details.
