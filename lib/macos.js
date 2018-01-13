/* jshint esversion: 6 */
const { exec } = require('child_process');
const { parse } = require('fast-plist');
const async = require('async');

exports._getVolumes = (callback) => {
	exec('diskutil list -plist', (error, stdout, stderr) => {
	  if (error) return callback(error);
      const disks = parse(stdout).AllDisksAndPartitions
      	.filter(function(entry) { 
      		return (entry.hasOwnProperty('Partitions') && (entry.Partitions.length > 0)); 
      	})
      	.map(function (drive, index, array) {
      		return drive.Partitions;
      	});
      const volumes = [].concat.apply([], disks)
      	.filter(function(entry) { return entry.hasOwnProperty('MountPoint'); });

	  callback(null, volumes);
	});
};

exports._getDriveInfo = (volume, callback) => {
	exec('diskutil info -plist ' + volume.DeviceIdentifier, (error, stdout, stderr) => {
		if (error) return callback(null, null);
		const driveInfo = parse(stdout);
		callback(null, driveInfo);
	});
};


exports.get = (drives) => {
	const parent = this;
	async.waterfall([
		parent._getVolumes,
		function(volumes, callback) {
			async.concat(volumes, parent._getDriveInfo, callback);
		},
		function(volumes, callback) {
			async.filter(volumes, function(volume, callback) {
				callback(null, volume.BusProtocol != 'Disk Image');
			} ,callback);
		}
	], drives);
};

exports.sync = () => {
	
};
