var assert = require('assert'),
Class = require('./bitauto');

describe('bitauto framework', function() {
	it('should have class', function() {
		var Person = new Class();
		var jobs = new Person();
		assert.ok(jobs instanceof Person);
	});

	it('should have constructor', function() {
		var Person = new Class();
		Person.init = function(name) {
			this.name = name;
		};
		var jobs = new Person('jobs');
		assert.equal('jobs', jobs.name);
	});

	describe('other', function() {
		it('class define', function() {
			var Person = Class.define({
				init: function(name) {
					this.name = name;
				},
				sayHello: function() {
					return this.name;
				}
			});
			var jobs = new Person('jobs');
			assert.equal('jobs', jobs.sayHello());
		});
	});
});