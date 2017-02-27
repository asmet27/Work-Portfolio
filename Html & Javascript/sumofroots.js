function sumOfSquareRoots(n) {
	var sum = 0.0
	for (var i=1;i<=n;i++) {
		sum += Math.sqrt(i);

	}
	return sum;
}
var input = +prompt("Enter a number");

document.write('The sum of square roots for the number' + " " + input + " " + 'is' + " " + sumOfSquareRoots(input) + ".") ;