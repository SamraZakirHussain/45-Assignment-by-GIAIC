// Define the function with a rest parameter to collect sandwich items
function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    // Print a summary of the sandwich
    console.log("Sandwich order summary:");
    if (items.length === 0) {
        console.log("You ordered a plain sandwich.");
    }
    else {
        console.log("You ordered a sandwich with the following items:");
        for (var _a = 0, items_1 = items; _a < items_1.length; _a++) {
            var item = items_1[_a];
            console.log("- ".concat(item));
        }
    }
    console.log("\n");
}
// Call the function three times with different numbers of arguments
makeSandwich("lettuce", "tomato", "mayo");
makeSandwich("ham", "cheese");
makeSandwich("turkey", "bacon", "avocado", "mustard", "pickles");
