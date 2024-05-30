var animals = ["whale", "shark", "eel", "sea-lion"];
// Print each animal name using a for loop
for (var _i = 0, animals_1 = animals; _i < animals_1.length; _i++) {
    var animal = animals_1[_i];
    console.log(animal);
}
// Print a statement about each animal
for (var _a = 0, animals_2 = animals; _a < animals_2.length; _a++) {
    var animal = animals_2[_a];
    console.log("A ".concat(animal.toLowerCase(), " live in sea."));
}
// Print a statement about the common characteristic
console.log("These all are sea animals");
