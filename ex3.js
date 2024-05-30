var Person_Name = ("Samra Zakir");
//ULower Case
console.log(Person_Name.toLowerCase());
//Upper case
console.log(Person_Name.toUpperCase());
//Title case
var words = Person_Name.split(" ");
var titlecasename = "";
for (var _i = 0, words_1 = words; _i < words_1.length; _i++) {
    var word = words_1[_i];
    titlecasename += word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() + " ";
}
console.log("Titlecase:", titlecasename.trim());
