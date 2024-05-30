let tourspot: string[] = ["Turkey", "Makkah", "Norway", "Bali", "Italy"]
console.log("Original Order", tourspot)

//Alphabetical Order
console.log("Alphabetical Order",[...tourspot].sort())

// Array in its original order 
console.log("Original Order after Sorting:", tourspot)

//Reverse Alphabetical order
console.log("Reverse Alphabetical order",[...tourspot].sort().reverse())

//  array is still in its original order 
console.log("Original Order after Reverse Sorting:", tourspot)

//Reverse the aray order
console.log("Reverse aray Order", tourspot.reverse())

// Restored original order 
console.log("Restored Original Order :", tourspot.reverse())

//Alphabetical order
console.log("Sorted Alphbetically", tourspot.sort())

//Sort the array in reverse alphabetical order and print it
tourspot.sort((a, b) => b.localeCompare(a)); // Using localeCompare for reverse alphabetical order
console.log("Sorted in Reverse Alphabetical Order:", tourspot);