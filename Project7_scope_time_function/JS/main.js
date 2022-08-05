//1 Assignment//
var x = 10;
function addNumbers1() {
    document.getElementById("global").innerHTML = 20 + x;
}
function addNumbers2() {
    var y = 20;
    document.getElementById("local").innerHTML = 20 + y;
    console.log(z + 100);
}
function getDate() {
    if (new Date().getHours() < 18) {
        document.getElementById("greeting").innerHTML = "How are you doing today?";
    }
    else {
        document.getElementById("greeting").innerHTML = "How are you doing tonight?";
    }
}
//IF statement assignment//
function ifstate(){
    if (2 < 3) {
        document.getElementById("ifstate").innerHTML = "Number on the right is bigger.";
    }
}
//3 Assignment//
function ageFunction() {
    age = document.getElementById("age").value;
    if (age >= 18) {
        vote = "You are old enough to vote!";
    }
    else {
        vote = "You are not old enough to vote!";
    }
    document.getElementById("howold?").innerHTML = vote;
}
//4 Assignment//
function timeFunction() {
    var time = new Date().getHours();
    var reply;
    if (time < 12 == time > 0) {
        reply = "It is morning time!";
    }
    else if (time >= 12 == time < 18) {
        reply = "It is afternoon!";
    }
    else {
        reply = "It is evening time!";
    }
    document.getElementById("timeofday").innerHTML = reply;
}