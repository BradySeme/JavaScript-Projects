//JavaScript Code//

var a = typeof "john";
document.getElementById("typeof").innerHTML = a;

//-------------------------------------------------//

document.getElementById("combine").innerHTML = 3 + "4";

//-------------------------------------------------//

document.getElementById("pos").innerHTML = 2E2530;

document.getElementById("neg").innerHTML = -2E1081;

//-------------------------------------------------//

document.getElementById("great").innerHTML = 10 > 5;

document.getElementById("less").innerHTML = 10 < 5;

//-------------------------------------------------//

console.log(6 + 9);

console.log(10 < 5);

//-------------------------------------------------//

document.getElementById("same").innerHTML = 10 == 10;

document.getElementById("diff").innerHTML = 10 == 11;

//-------------------------------------------------//

document.getElementById("b1").innerHTML = 10 === 10;

document.getElementById("b2").innerHTML = 10 === "11";

document.getElementById("b3").innerHTML = 10 === "10";

document.getElementById("b4").innerHTML = 10 === 11;

//-------------------------------------------------//

document.getElementById("l1").innerHTML = 10 > 9 && 10 < 11;

document.getElementById("l2").innerHTML = 10 > 9 && 10 > 11;

document.getElementById("l3").innerHTML = 10 > 9 || 10 < 9;

document.getElementById("l4").innerHTML = 10 < 9 || 10 > 11;

//-------------------------------------------------//

document.getElementById("not").innerHTML = ! 10 > 5;