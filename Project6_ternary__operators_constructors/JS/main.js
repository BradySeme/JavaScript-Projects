//Javascript Code//

function rideFunction() {
    var height, canride;
    height = document.getElementById("height").value;
    canride = (height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("ride").innerHTML = canride + " to ride.";
}

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");

function myFunction() {
    document.getElementById("keyandCon").innerHTML = 
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
    " manufactured in " + Erik.Vehicle_Year;
}

function countFunction() {
    document.getElementById("nestedfunction").innerHTML = Count();
    function Count() {
        var Startingpoint = 9;
        function plusOne() {Startingpoint += 1;}
        plusOne();
        return Startingpoint;
    }
}