function CalcArea(radius) { 
	var pi = 3.1415 ;
	var area;
	area = pi * radius * radius ;
	return area ;
}

var radius = prompt("Enter the radius of the circle");

document.write('The area of a circle with radius' + " " + radius + " " + 'is' + " " + CalcArea(radius) + ".") ;