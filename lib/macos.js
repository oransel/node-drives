/* jshint esversion: 6 */
const { exec } = require('child_process');
const { parse } = require('fast-plist');
const async = require('async');

// get volumes on the system
exports.getVolumes = (callback) => {
	exec('diskutil list -plist', (error, stdout, stderr) => {
	  if (error) return callback(error);

	  // filter out disks without partitions and return only the partitions
      const partitions = parse(stdout).AllDisksAndPartitions
      	.filter(function(disk) { 
      		return (disk.hasOwnProperty('Partitions') && (disk.Partitions.length > 0)); 
      	})
      	.map(function (disk, index, array) {
      		return disk.Partitions;
      	});

      // flatten the partitions and filter only the volumes with mountpoints
      const volumes = [].concat.apply([], partitions)
      	.filter(function(volume) { return volume.hasOwnProperty('MountPoint'); });

	  callback(null, volumes);
	});
};

// get volume info
exports.getVolumeInfo = (volume, callback) => {
	exec('diskutil info -plist ' + volume.DeviceIdentifier, (error, stdout, stderr) => {
		if (error) return callback(null, null);
		const driveInfo = parse(stdout);
		callback(null, driveInfo);
	});
};

// get all drives on the system
exports.get = (drives) => {
	const parent = this;

	// get volumes, volume info, and filter our disk images
	async.waterfall([
		parent.getVolumes,
		function(volumes, callback) {
			async.concat(volumes, parent.getVolumeInfo, callback);
		},
		function(volumes, callback) {
			async.filter(volumes, function(volume, callback) {
				callback(null, volume.BusProtocol != 'Disk Image');
			} ,callback);
		}
	], drives);
};
