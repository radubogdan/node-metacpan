"use strict";

var mc = require('../lib/metacpan.js');

// Examples

mc.author("MGV", function(name, err) {
    console.log(name || err);
});

mc.distribution("App-Devbot", function(name, err) {
    console.log(name || err);
});

mc.file("/MGV/Mafia-0.001/lib/Mafia.pm", function(name, err) {
    console.log(name || err);
});

mc.module("Mafia", function(name, err) {
    console.log(name || err);
});

mc.release("Mafia", function(name, err) {
    console.log(name || err)
})
