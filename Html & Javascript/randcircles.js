window.onload=init;

function init() {

	document.getElementById("Draw").onclick = draw;
	document.getElementById("Clear").onclick = clear;
}

function draw() {
	var color = randomElement(["Aquamarine", "Blue", "Coral", "CornflowerBlue", "DarkOrchid",
"DarkOrange", "DeepSkyBlue", "DodgerBlue", "ForestGreen", "Gold", "Khaki", "MediumBlue", "MediumPurple", "Navy", "PaleGreen","Plum", "Silver", "SkyBlue",
"Tan", "Tomato"]);
	var size = randomInteger(10,70);
	var ctx = document.getElementById("myCanvas").getContext("2d")
	ctx.beginPath();
	var x = randomInteger(1,700);
	var y = randomInteger(1,700);

ctx.arc(x, y, size, 0, 2*Math.PI) ;
ctx.globalAlpha = 0.70;
ctx.fillStyle = color;
ctx.fill();
}

function clear() {
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.clearRect(0,0,c.width,c.height);
}