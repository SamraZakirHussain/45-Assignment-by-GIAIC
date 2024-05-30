var alien_color = "Green";
if (alien_color = "Green") {
    console.log("You earned 5 points");
}
//@nd version with no output
if (alien_color == "Red") {
    console.log("You earned 5 points");
}
//Exercise26: If & Else chain
//To run if block
if (alien_color == "Green") {
    console.log("You just earned 5 points for shooting the alien.");
}
else {
    console.log("You just earned 10 points.");
}
//To run else block
if (alien_color == "Blue") {
    console.log("You just earned 5 points for shooting the alien.");
}
else {
    console.log("You just earned 10 points.");
}
//Exercise:27
// If the alien is green, print a message that the player earned 5 points
//If the alien is yellow, print a message that the player earned 10 points.
//If the alien is red, print a message that the player earned 15 points
//1st version
if (alien_color = "Green") {
    console.log("the player earned 5 points");
}
else if (alien_color == "Yellow") {
    console.log("the player earned 10 points");
}
else {
    console.log("the player earned 15 points");
}
//2nd version
var aliencolor = "Yellow";
if (aliencolor == "Green") {
    console.log("the player earned 5 points");
}
else if (aliencolor = "Yellow") {
    console.log("the player earned 10 points");
}
else {
    console.log("the player earned 15 points");
}
//3rd Version
var AlientColor = "Red";
if (AlientColor == "Green") {
    console.log("the player earned 5 points");
}
else if (AlientColor == "Yellow") {
    console.log("the player earned 10 points");
}
else {
    console.log("the player earned 15 points");
}
