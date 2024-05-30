// Step 1: Define the function
function createCar(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    // Step 3: Create an object with the manufacturer and model
    var car = {
        manufacturer: manufacturer,
        model: model
    };
    // Step 4: Add additional keyword arguments to the object
    for (var _a = 0, options_1 = options; _a < options_1.length; _a++) {
        var option = options_1[_a];
        car[option[0]] = option[1];
    }
    // Step 5: Return the object
    return car;
}
// Step 6: Call the function with required information and additional keyword arguments
var myCar = createCar("Toyota", "Corolla", ["color", "blue"], ["sunroof", true], ["year", 2022]);
// Step 7: Print the object to verify
console.log(myCar);
