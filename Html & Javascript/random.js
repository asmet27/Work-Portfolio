function randomInteger(min,max){
	var result=min + Math.floor(Math.random() * (max - min + 1));

	return result;
}
function randomElement(theArray) {
	var min = 0 ;
	var max = theArray.length - 1 ;
	var randInt = min + Math.floor(Math.random() * (max - min + 1));

	return theArray[randInt] ;
}