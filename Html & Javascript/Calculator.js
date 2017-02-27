window.onload = init;

function init() {
    document.getElementById("calcButton").onclick = handleCalcButton;
    document.getElementById("clearButton").onclick = handleClearButton;

    checkLocalStorage();
}

function handleCalcButton() {
    var Danny = parseFloat(document.getElementById("inputOneValue").value);
    var Aaron = parseFloat(document.getElementById("inputTwoValue").value);
    var Operator = document.getElementById("choose").value;

    if (Operator == 0) {
        Result = Danny + Aaron;
    }
    if (Operator == 1) {
        Result = Danny - Aaron;
    }
    if (Operator == 2) {
        Result = Danny / Aaron;
    }
    if (Operator == 3) {
        Result = Danny * Aaron;
    }

    document.getElementById("storageDiv").innerHTML = Result;

    if (isNaN(Danny) || isNaN(Aaron)) {
        alert("Please enter valid numbers");
    }
    localStorage["inputOneValue"] = document.getElementById("inputOneValue").value;
    localStorage["inputTwoValue"] = document.getElementById("inputTwoValue").value;
}

/*function handleRemoveButton() {
    var key = document.getElementById("removeKeyTextBox").value;
    localStorage.removeItem(key);
    localStorage.removeItem("testKey");

    checkLocalStorage();
}*/

function checkLocalStorage() {
    if (localStorage.getItem("inputOneValue") !== null) {
        document.getElementById("inputOneValue").value = localStorage["inputOneValue"];
        document.getElementById("inputTwoValue").value = localStorage["inputTwoValue"];
    }
}

function handleClearButton() {
    for (var key in localStorage) {
        localStorage.removeItem(key);
    }

    document.getElementById("inputOneValue").value = "";
    document.getElementById("inputTwoValue").value = "";

    checkLocalStorage();
}