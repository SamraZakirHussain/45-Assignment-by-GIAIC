let Person_Name: string = ("Samra Zakir")
//ULower Case
console.log(Person_Name.toLowerCase())

//Upper case
console.log(Person_Name.toUpperCase())

//Title case
let words: string[] = Person_Name.split(" ");
let titlecasename: string = "";
for (let word of words) {
  titlecasename += word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() + " ";
}

console.log("Titlecase:", titlecasename.trim());

