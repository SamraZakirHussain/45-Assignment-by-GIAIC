//• Tests for equality and inequality with strings
var brand = "Khaadi";
console.log("Test 1a: brand==\"Khaadi\"? I predict true");
console.log(brand == "Khaadi");
console.log("Test 1b: brand!=\"Khaadi\"? I predict False");
console.log(brand != "Khaadi");
// Tests using the lower case function
var fruit = "APPLE";
console.log("Test 2a: fruit.toLowerCase()==\"apple\"? I Predict True");
console.log(fruit.toLowerCase() == "apple");
console.log("Test 2a: fruit ==\"apple\"? I predict False");
console.log(fruit == "apple");
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
var a = 4;
var b = 5;
console.log("Test3a: a==b? I predict False");
console.log(a == b);
console.log("Test3b: a!=b? I predict True");
console.log(a != b);
console.log("Test3c: a<b? I predict True.");
console.log(a < b);
console.log("Test3d: a>b? I predict False.");
console.log(a > b);
console.log("Test3e: a<=b? I predict True");
console.log(a <= b);
console.log("Test3f: a>=3? I predict ");
console.log(a >= 3);
// Tests using "and" and "or" operators
var x = 7;
var y = 9;
console.log("Test 4a:x < y && y < x? I predict False");
console.log(x < y && y < x);
console.log("Test 4b:x < y || y < x? I predict True");
console.log(x < y || y < x);
// Test whether an item is in a array and an item is not in a array
var veg = ["onion", "carrot", "tomato"];
console.log("Test 5a:veg[2]==\"potato\"? I predict false");
console.log(veg[2] == "potato");
console.log("Test 5b:veg[0]==\"onion\"? I predict True.");
console.log(veg[0] == "onion");
