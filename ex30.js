// Array of usernames
var usernames = ["Admin", "Ali", "Bella", "Sara", "Zack"];
// Loop through the array and print greetings
for (var _i = 0, usernames_1 = usernames; _i < usernames_1.length; _i++) {
    var username = usernames_1[_i];
    if (username === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("Hello ".concat(username, ", thank you for logging in again."));
    }
}
//Ex:31
usernames.pop();
usernames.pop();
usernames.pop();
usernames.pop();
usernames.pop();
if (usernames.length === 0) {
    console.log("We need to find some users!");
}
