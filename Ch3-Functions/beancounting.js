// @brief count the number of 'B's found in a string
// @param {string} entered string
// @return {num} number of 'B's located

function countBs(str) {
	var count = 0;
	for (var i = 0; i < str.length; i++) {
		if (str.charAt(i) === 'B') {
			count++;
		}
	}
	return count;
}

// @brief count the number of inputted 'char' found in a string
// @param {string} entered string
// @param {string} entered char
// @return {num} number of 'char's found

function countChar(str, char) {
	var count = 0;
	for (var i = 0; i < str.length; i++) {
		if (str.charAt(i) === char) {
			count++;
		}
	}
	return count;
}

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4