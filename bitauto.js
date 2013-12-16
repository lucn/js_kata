// var Class = function () {
// 	var func = function() {
// 		if (func["init"] && typeof func["init"] === 'function') {
// 			func.init.apply(this, arguments);
// 		}
// 	};
// 	return func;
// };

Function.prototype.define = function(constructor) {
	var klass = function() {
		var init = constructor['init'] || klass['init'];
		delete constructor['init'];

		if(typeof init === 'function') {
			init.apply(this, arguments);
		}
		for (var property in constructor) {
			this[property] = constructor[property];
		};
	};
	return klass;
};

var Class = function () {
	var constructor = {};
	if(arguments && arguments.length > 0) {
		constructor['init'] = arguments[0];
	}
	return Class.define(constructor);
};

module.exports = Class;