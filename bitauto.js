// var Class = function () {
// 	var func = function() {
// 		if (func["init"] && typeof func["init"] === 'function') {
// 			func.init.apply(this, arguments);
// 		}
// 	};
// 	return func;
// };

Function.prototype.define = function(constructor) {
	var func = function() {
		var init = constructor['init'] || func['init'];
		delete constructor['init'];

		var obj = this;
		obj.prototype = func.prototype;
		if(typeof init === 'function') {
			init.apply(obj, arguments);
		}
		for (var property in constructor) {
			obj[property] = constructor[property];
		};
		return obj;
	};
	return func;
};

var Class = function () {
	var constructor = {};
	if(arguments && arguments.length > 0) {
		constructor['init'] = arguments[0];
	}
	return Class.define(constructor);
};

module.exports = Class;