for (var i = 0; i < 10; i++) {
	(function(a) {
		setTimeout(function() {
			console.log(a);		
		}, 10);
	})(i);
};


var start = new Date();
setTimeout(function() {
	console.log(new Date() - start);
}, 5);
for (var i = 0; i < 1000000; i++) {
	var a = i;
};