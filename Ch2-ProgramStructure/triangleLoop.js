// 3 DIFFERENT APPROACHES

// do-while loop
string = "";
do {
	console.log(string += '#');
} while(string.length < 7);

// simple while loop
string2 = "";
while (string2.length < 7) {
	console.log(string2 += '#')
}

// for loop
string3 = "";
for (var i = 0; i < 7; i++) {
	console.log(string3 += '#')
}

// alternate for loop
for (var line = '#'; line.length < 7; line += '#') {
	console.log(line);
}