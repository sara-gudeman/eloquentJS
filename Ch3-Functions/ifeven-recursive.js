// Initial assignment fcn doesn't work for neg numbers
// Follow up assignment fixes it

// 3 branches:
// if num == 0 --> # is even --> return true
// if num == 1 --> # is odd --> return false
// otherwise repeat num - 2

// intial assignment function--negative values don't work
function isEven(num) {
	if (num == 0) {
		return true;
	}
	else if (num == 1) {
		return false;
	}
	else {
		return isEven(num - 2);
	}
}
// function fixed!
function isEven(num) {
	if (num < 0) {
		num *= -1;
	}
	if (num == 0) {
		return true;
	}
	else if (num == 1) {
		return false;
	}
	else {
		return isEven(num - 2);
	}
}