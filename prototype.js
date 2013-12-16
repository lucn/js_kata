function Person () {
}
Person.prototype.sayHello = function() {
	console.log('hello');
};
console.log(Person.prototype);

var jobs = new Person();
console.log(jobs.__proto__);
console.log(Person.prototype === jobs.__proto__);
jobs.sayHello();