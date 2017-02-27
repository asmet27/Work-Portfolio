function reverse() {
    var input = document.getElementById("originalList").value;
    input = input.split(" ").reverse().join()

    document.getElementById("reversedList").value = input;
}

function clear() {
    document.getElementById("reversedList").value = "";
    document.getElementById("originalList").value = "";
}
window.onload = init;

function init() {
    document.getElementById("btn").onclick = reverse;
    document.getElementById("clr").onclick = clear;
}