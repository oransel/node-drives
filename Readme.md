# node-drives (work in progress)

List and get details of drives in your system. This module doesn't require any native compilation but depends on the builtin commands on each operating system.

Platforms Supported:

* macOS
* Windows
* Linux

## Installation

To install the most recent release from npm, run:

    npm install drives

## Building

The source code is available at [github](http://github.com/oransel/node-drives). You can either clone the repository or download a zip file of the latest release.

## Examples

Drives is very simple to use.

``` js
const drives = require('drives');

drives.get((error, drives) => {
	if (error) return console.dir(error);
	console.dir(drives);
});
```

For working examples look in the `examples/` directory. You can execute the examples using node.

	node examples/all.js

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
