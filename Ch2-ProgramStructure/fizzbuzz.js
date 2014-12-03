// 3 APPROACHES

// approach 1

for (var i = 1; i <= 100; i++) {
	if (i % 3 === 0) {
		console.log("Fizz");
	}
	else if (i % 5 === 0) {
		console.log("Buzz");
	}
	else {
		console.log(i);
	}
}

// approach 2
// if a number is divisible by 3 it will complete the loop,
// skipping over any other else if statements, including 
// i % 5--meaning no i % 3 === 0 will make it to i % 5 === 0

for (var i = 1; i <= 100; i++) {
	if ( (i % 3 === 0) && (i % 5 === 0) ) {
		console.log("FizzBuzz");
	}
	else if (i % 3 === 0) {
		console.log("Fizz");
	}
	else if (i % 5 === 0) {
		console.log("Buzz");
	}
	else {
		console.log(i);
	}
}

// approach 3--the most elegant

for (var i = 1; i <= 100; i++) {
	var str = "";
	if (i % 3 === 0) {
		str += "Fizz";
	}
	if (i % 5 === 0) {
		str += "Buzz";
	}
	console.log(str || i);
}