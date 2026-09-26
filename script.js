function findLargest(a, b, c) {
	if (a > b && b > c) return a
	else if(b > a && a > c) return b
	else if (c > b && c > a) return c
	else return a
}

// const num1 = parseInt(prompt("Enter First Number."));
// const num2 = parseInt(prompt("Enter Second Number."));
// const num3 = parseInt(prompt("Enter Third Number."));
// alert(findLargest(num1, num2, num3));
