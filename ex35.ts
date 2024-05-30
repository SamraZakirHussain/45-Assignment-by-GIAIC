let animals:string[] = ["whale","shark", "eel", "sea-lion"]

// Print each animal name using a for loop
for (let animal of animals) {
    console.log(animal);
}

// Print a statement about each animal
for (let animal of animals) {
    console.log(`A ${animal.toLowerCase()} live in sea.`);
}

// Print a statement about the common characteristic
console.log("These all are sea animals");


