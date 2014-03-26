/* vim: set shiftwidth=2 tabstop=2 noexpandtab textwidth=80 wrap : */
"use strict";

try {
	exports = module.exports = require('t');
} catch (e) {
	exports = module.exports = require('t-component');
}

var definitions = {};

exports.definition = function definition(code) {
	if (typeof code === 'string')
		return definitions[code];

	// create registries registry
	var parent = null;
	if (code.inherits) {
		parent = exports[code.inherits] = exports[code.inherits] || Object.create(null);
	}
	if (!exports[code.code])
		exports[code.code] = Object.create(parent);
	definitions[code.code] = code;
};

exports.merge = function merge(code, strings) {
	var into = exports[code] = exports[code] || Object.create(null);
	for (var key in strings)
		into[key] = strings[key];
};

// load some standard definitions
require('./lib/definitions').forEach(exports.definition);
