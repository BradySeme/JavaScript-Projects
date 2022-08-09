//1 & 4 Assignment//
let i = 0;
let o = "";
function callLoop() {
    while (i <= 10) {
        o += i + "<br>";
        i++;
    }
    document.getElementById("loop").innerHTML = o;
}

//2 & 3 Assignment//
var instruments = ["Guitar", "Drums", "Piano","Bass", "Violin", "Trumpet", "Flute"];
var content = "";
var y;
function forLoop() {
    for (y = 0; y < instruments.length; y++) {
        content += instruments[y] + "<br>";
    }
    document.getElementById("instrumentList").innerHTML = content;
}

//5 Assignment//
function carFunction() {
    let car = {
        make: "Jeep ",
        model: "Commander ",
        year: "2008 ",
        color: "black ",
        description: function() {
            return "The car is a " + this.year + this.color + this.make + this.model;
        }
    };
    document.getElementById("car").innerHTML = car.description();
}