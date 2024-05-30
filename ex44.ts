// Define the function with a rest parameter to collect sandwich items
function makeSandwich(...items: string[]): void {
    // Print a summary of the sandwich
    console.log("Sandwich order summary:");
    if (items.length === 0) {
        console.log("You ordered a plain sandwich.");
    } else {
        console.log("You ordered a sandwich with the following items:");
        for (let item of items) {
            console.log(`- ${item}`);
        }
    }
    console.log("\n");
}

// Call the function three times with different numbers of arguments
makeSandwich("lettuce", "tomato", "mayo");
makeSandwich("ham", "cheese");
makeSandwich("turkey", "cheese", "avocado", "mustard", "pickles");
