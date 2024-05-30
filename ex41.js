var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var Magicians = ["Allen", "Bella", "Leverna", "Appolo"];
function show_magicians(Magicians) {
    for (var _i = 0, Magicians_1 = Magicians; _i < Magicians_1.length; _i++) {
        var magician = Magicians_1[_i];
        console.log(Magicians);
    }
}
function make_great(Magicians) {
    var great_magicians = [];
    for (var _i = 0, Magicians_2 = Magicians; _i < Magicians_2.length; _i++) {
        var Magician = Magicians_2[_i];
        great_magicians.push("the Great " + Magicians);
    }
    return great_magicians;
}
// Create a new array with the "Great" names
var great_magicians = make_great(__spreadArray([], Magicians, true));
console.log("\nModified list of magicians:");
show_magicians(great_magicians);
console.log("\nOriginal list of magicians again to show it's unchanged:");
show_magicians(Magicians);
