"use strict";

// Dependencies
var request = require('request');

/**
 *  Metacpan Object
 *  node-metacpan is a interface to metacpan / to CPAN
 */
var metacpan = {
    author: function (name, callback) {
        return request('http://api.metacpan.org/v0/author/' + name, function (err, res, body) {
            if (!err && res.statusCode === 200) {
                callback(body, null);
            } else {
                callback(null, body);
            }
        });
    },

    distribution: function(name, callback) {
        return request('http://api.metacpan.org/v0/distribution/' + name, function(err, res, body) {
            if (!err && res.statusCode === 200) {
                callback(body, null);
            } else {
                callback(null, body);
            }
        });
    }
};

module.exports = metacpan;
