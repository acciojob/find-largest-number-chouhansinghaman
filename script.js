function findLargest(a, b, c) {
	if (a > b && b > c) return a
	else if(a > b && a < c) return c
	else if (a < b && a > c) return b
	else return a
}

const num1 = parseInt(prompt("Enter First Number."));
const num2 = parseInt(prompt("Enter Second Number."));
const num3 = parseInt(prompt("Enter Third Number."));
alert(findLargest(num1, num2, num3));
