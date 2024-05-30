//Exercise: 14 - Guest List
var guestlist = ["Ali", "Sara", "Dua"];
guestlist.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you are cordially invited to dinner with us. We would be honored to have your presence."));
});
//Exercise: 15 -To Remove guest
var guesttoreplace = guestlist.indexOf("Ali");
if (guesttoreplace !== -1) {
    guestlist[guesttoreplace] = "Bilal";
}
//Print Update Message
guestlist.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", we regret to inform you that our original dinner plans have changed. However, we would be honored to have your presence at our new dinner gathering."));
});
//Exercise: 16 -Add name at the begning
guestlist.unshift("Daniyal");
//Add in the miiddle of an array
guestlist.splice(2, 0, "Alina");
// Add a guest at end of an array
guestlist.push("Mina");
//New invide message
guestlist.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", we're excited to inform you that our dinner plans have changed, and we now have more space available. We would be honored to have your presence at our dinner gathering."));
});
//Excercise: 19 - count of Guest invited
console.log("We are inviting ".concat(guestlist.length, " people to dinner."));
//Excercise: 17 -Remove Guest from an array
console.log("you can invite only two people for dinner.");
//Remove guests from list one at a time
while (guestlist.length > 2) {
    var removeguest = guestlist.pop();
    console.log("Sorry, ".concat(removeguest, ", we can't invite you to dinner."));
}
;
guestlist.forEach(function (guest) {
    console.log(" Dear ".concat(guest, " you're still invited to dinner. We look forward to seeing you."));
});
//remove last 2 guests too
guestlist.pop();
guestlist.pop();
//Empty Guest List
console.log("Empty Guest List:", guestlist);
