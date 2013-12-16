var jobs = {
	name: 'jobs',
	age: 55,
	say_goodbye: function() {
		console.log(this.name);
	}
};

function Person (name, age) {
	this.name = name;
	this.age = age;
	this.say_goodbye = function() {
		console.log(this.name);
	};
};

jobs.say_goodbye();
var gates = new Person('gates', 56);
gates.say_goodbye();

var jobs = new object();
jobs.name = "aaaa";