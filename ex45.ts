// Step 1: Define the function
function createCar(manufacturer: string, model: string, ...options: [string, any][]): 
{manufacturer: string, model: string, [key: string]: any} {
    // Step 3: Create an object with the manufacturer and model
    let car = {
        manufacturer: manufacturer,
        model: model
    };

    // Step 4: Add additional keyword arguments to the object
    for (let option of options) {
        car[option[0]] = option[1];
    }

    // Step 5: Return the object
    return car;
}

// Step 6: Call the function with required information and additional keyword arguments
let myCar = createCar("Toyota", "Corolla", ["color", "blue"], ["sunroof", true], ["year", 2022]);

// Step 7: Print the object to verify
console.log(myCar);
