"use strict";

var fs = require('fs');
var ncp = require('ncp');

var assetsPath = __dirname + '/../assets/init';
var cwd = process.cwd();

module.exports = function() {
    fs.readdir(cwd, function(err, files) {
        if (files.length > 0) {
            console.error('Current working directory not empty, abort.');
            process.exit(1);
        } else {
            console.log('Initializing new working directory...');
            ncp(assetsPath, cwd, function(err) {
                if (err) {
                    console.error(err);
                    process.exit(1);
                }
                console.log('Finishing up... Edit configuration file and start taking notes now!');
            });
        }
    });
};