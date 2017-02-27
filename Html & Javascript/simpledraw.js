window.onload = init;

function init() {

    document.getElementById("Draw").onclick = draw;
    document.getElementById("Clear").onclick = clear;
}

function draw() {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.beginPath()
    ctx.strokeStyle = "Navy";
    ctx.moveTo(50, 50);
    ctx.lineTo(350, 50);
    ctx.stroke();

    ctx.beginPath()
    ctx.strokeStyle = "Orange";
    ctx.moveTo(50, 170);
    ctx.lineTo(350, 170);
    ctx.stroke();

    ctx.fillStyle = "red";
    ctx.fillRect(100, 85, 50, 50)

    ctx.fillStyle = "green";
    ctx.fillRect(175, 85, 50, 50)

    ctx.fillStyle = "blue";
    ctx.fillRect(250, 85, 50, 50)
}

function clear() {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, c.width, c.height);
}