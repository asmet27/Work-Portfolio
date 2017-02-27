var pick1, pick2, pick3 ;
var match = false ;
while(match == false) {
	
	pick1 = randomInteger(1,10) ;
	pick2 = randomInteger(1,10) ;
	pick3 = randomInteger(1,10) ;

	document.write(pick1 + "," + pick2 + "," + pick3 + "<br>") ;
	if (pick1 == pick2 && pick2 == pick3){
		match = true; 
		document.write("<br>" + "<b>" + "Match" + "<br>" + "Reload the page!" + "<b/>") ;
	} 
}
