var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var tourspot = ["Turkey", "Makkah", "Norway", "Bali", "Italy"];
console.log("Original Order", tourspot);
//Alphabetical Order
console.log("Alphabetical Order", __spreadArray([], tourspot, true).sort());
// Array in its original order 
console.log("Original Order after Sorting:", tourspot);
//Reverse Alphabetical order
console.log("Reverse Alphabetical order", __spreadArray([], tourspot, true).sort().reverse());
//  array is still in its original order 
console.log("Original Order after Reverse Sorting:", tourspot);
//Reverse the aray order
console.log("Reverse aray Order", tourspot.reverse());
// Restored original order 
console.log("Restored Original Order :", tourspot.reverse());
//Alphabetical order
console.log("Sorted Alphbetically", tourspot.sort());
//Sort the array in reverse alphabetical order and print it
tourspot.sort(function (a, b) { return b.localeCompare(a); }); // Using localeCompare for reverse alphabetical order
console.log("Sorted in Reverse Alphabetical Order:", tourspot);