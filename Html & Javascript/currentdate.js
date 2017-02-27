alert("Click to get the current day and date.")
var today = new Date();
var Weekdays = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
var dayNo = today.getDay()
var day = Weekdays[dayNo];
document.write("Today is" + " " + day + "," + " " + (today.getMonth()+1) + "/" + today.getDate() + "/" + today.getFullYear() + ".");
//getDay();
//getDate();
//getMonth();
//getFullYear();