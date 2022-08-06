//1 Assignment//
function fullSentence() {
    var part1 = "I have ";
    var part2 = "made this ";
    var part3 = "into a complete ";
    var part4 = "sentence.";
    var wholesentence = part1.concat(part2, part3, part4);
    document.getElementById("concat").innerHTML = wholesentence;
}
//2 Assignment//
function sliceMethod() {
    var sentence = "All work and no play makes Johnny a dull boy.";
    var section = sentence.slice(27, 33);
    document.getElementById("slice").innerHTML = section;
}
//3 Assignment//
function stringMethod() {
    var x = 182;
    document.getElementById("number2string").innerHTML = x.toString();
}
//4 Assignment//
function precisionMethod() {
    var x = 12938.3012987376112;
    document.getElementById("precision").innerHTML = x.toPrecision(10);
}

