let Magicians:string[]=["Allen", "Bella", "Leverna", "Appolo"]
function show_magicians(Magicians: string[]): void {
    for (let magician of Magicians) {
        console.log(Magicians);
    }
}
function make_great(Magicians: string[]): string[] {
    let great_magicians: string[] = [];
    for (let Magician of Magicians) {
        great_magicians.push("the Great " + Magicians);
    }
    return great_magicians;
}
// Create a new array with the "Great" names
let great_magicians = make_great([...Magicians]); 
console.log("\nModified list of magicians:");
show_magicians(great_magicians);

console.log("\nOriginal list of magicians again to show it's unchanged:");
show_magicians(Magicians);
