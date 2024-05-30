var Friend = ["Sam", "Alice", "Max", "Brida"];
console.log(Friend);
for (var i = 0; i < Friend.length; i++) {
    console.log(Friend[i]);
}
// Exercise: 12 -Personalized greeting message
Friend.forEach(function (Friend) {
    console.log("Hello, ".concat(Friend, "! Have a great day."));
});
