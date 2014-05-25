"use strict";

var mc = require('../lib/metacpan.js');

mc.author("MG", function(name, err) {
    console.log(name || err);
});
