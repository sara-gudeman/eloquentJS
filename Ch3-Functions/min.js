// @brief return the minimum value between 2 numbers
// @param {num} first number input
// @param {num} second number input
// @return {num} smaller of two numbers

function min(num1, num2) {
	if (num2 >= num1) {
		return num1;
	} else {
		return num2;
	}
}