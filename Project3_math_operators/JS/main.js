function additionFunction() { //Addition Function
    var answer = 4 + 4;
    document.getElementById("plus").innerHTML = "4 + 4 = " + answer;
}

function subtractionFunction() { //Subtraction Function
    var answer = 4 - 4;
    document.getElementById("minus").innerHTML = "4 - 4 = " + answer;
}

function multiplicationFunction() { //Multiplication Function
    var answer = 4 * 4;
    document.getElementById("multi").innerHTML = "4 * 4 = " + answer;
}

function divisionFunction() { //Division Function
    var answer = 4 / 4;
    document.getElementById("divi").innerHTML = "4 / 4 = " + answer;
}

function modulusFunction() { //Modulus Function
    var answer = 4 % 4;
    document.getElementById("mod").innerHTML = "4 % 4 = " + answer;
} 

function incrementFunction() { //Increment Function
    var answer = 4;
    answer++;
    document.getElementById("incre").innerHTML = "4 + 1 = " + answer;
}

function decrementFunction() { //Decrement Function
    var answer = 4;
    answer--;
    document.getElementById("decre").innerHTML = "4 - 1 = " + answer;
}

function randnumFunction() { //Random Number Function
    var answer = (Math.random() * 100);
    document.getElementById("rand").innerHTML = "Random number between 100: " + answer;
}