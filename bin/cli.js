#! /usr/bin/env node

var spawn = require('child_process').spawn,
		tunnelPath = __dirname + "/all.js";

var BrowserstackLocal = function BrowserstackLocal(opts) {
	var local = {};
	var options = opts;

	function _getArgs() {
		var key = options.key;
		var localConfig = options.localConfig;
		if(!key || !localConfig) {
			throw new Error("Key not defined. Cannot proceed ahead. Config:", options);
		}
		var args = [];
		args.push(key);
		args.push(localConfig);

		if(options.tunnelIdentifier) {
			args.push("-tunnelIdentifier");
			args.push(options.tunnelIdentifier);
		} else {
			args.push("-force");
			args.push("-onlyAutomate");
		}
		return args;
	}

	var startTunnel = function(callback) {
		args = _getArgs();
		console.log("Starting local test with args:\n", args);
		var child = spawn(tunnelPath, args, function(error, stdout, stderr) {
			if(callback) {
				return callback(error, stdout, stderror);
			}
			console.error(stderr);
      if (stdout.indexOf('Error') >= 0) {
        console.error("Tunnel launching failed");
        console.error(stdout);
        process.exit(1);
      }
		});
	}

	local.startTunnel = startTunnel;
	return local;
}

exports.BrowserstackLocal = BrowserstackLocal;