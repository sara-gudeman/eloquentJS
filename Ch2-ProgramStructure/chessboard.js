// for (var rows = 0; rows < 8; rows++) {
// 	str = '';
// 	for (var columns = 0; columns < 8; columns++) {
// 		str += '#';
// 	}
// 	console.log(str);
// }

var size = 8;
for (var rows = 0; rows < size; rows++) {
	str = '';
	for (var columns = 0; columns < size; columns++) {
		if (rows % 2 === 0) {
			if (columns % 2 === 0) {
				str += ' ';
			}
			else {
				str += '#';
			}
		}
		else {
			if (columns % 2 === 0) {
				str += '#';
			}
			else {
				str += ' ';
			}
		}
	}
	console.log(str);
}

var str = '';
for (var rows = 0; rows < size; rows++) {
	for (var col = 0; col < size; col++) {
		if ( (rows + col) % 2 === 0) {
			str += ' ';
		}
		else {
			str += '#';
		}
	}
	str += '\n';
}
console.log(str);