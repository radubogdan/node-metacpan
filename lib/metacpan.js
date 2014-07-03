"use strict";

// Dependencies
var request = require('request');

/**
 *  Metacpan Object
 *  node-metacpan is a interface to metacpan / to CPAN
 */


function constructRequest(suffix) {
    "use strict";

    return function(name, callback) {
        return request('http://api.metacpan.org/v0/' + suffix + '/' + name, function (err, res, body) {
            if (!err && res.statusCode === 200) {
                callback(body, null);
            } else {
                callback(null, body);
            }
        });
    };
}

var metacpan = {
    author: constructRequest('author'),
    distribution: constructRequest('distribution'),
    file: constructRequest('file'),
    module: constructRequest('module'),
    release: constructRequest('release')
};

module.exports = metacpan;
