try {
	exports = module.exports = require('t');
} catch (e) {
	exports = module.exports = require('t-component');
}

var definitions = {};

exports.definition = function definition(code) {
	if (typeof code == 'string')
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
}

// load some standard definitions
// until `component install` can actually fetch json files, we need to wrap this
// see https://github.com/component/component/commit/5654ff623484753183c1f7a7fdd3122a318a3eea
try {
	require('./definitions').forEach(exports.definition);
} catch (e) {}
