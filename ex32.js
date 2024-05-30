//Checking Usernames: Do the following to create a program that simulates how websites ensure that
// everyone has a unique username.
// Make a list of five or more usernames called current_users.
//Make another list of five usernames called new_users. Make sure one or two of the new usernames are also 
//in the current_users list.
//Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
//Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
var current_user = ["Jia", "Elen", "Mak", "Mert", "Blair"];
var new_user = ["Can", "Jhon", "Sia", "Elen", "Mak"];
function checkUsernameAvailability(username) {
    // Convert username to lowercase for case-insensitive comparison
    var usernameLowerCase = username.toLowerCase();
    // Check if the username already exists in the current user list
    var isAvailable = !current_user.some(function (user) { return user.toLowerCase() === usernameLowerCase; });
    if (isAvailable) {
        return "".concat(username, " is available!");
    }
    else {
        return "".concat(username, " is already taken. Please choose a different username.");
    }
}
// Loop through new users and check availability
new_user.forEach(function (username) {
    console.log(checkUsernameAvailability(username));
});
