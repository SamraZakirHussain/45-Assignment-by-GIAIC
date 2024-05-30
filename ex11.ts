let Friend: string[] = ["Sam", "Alice", "Max", "Brida"];
console.log(Friend)
for (let i = 0; i < Friend.length; i++) {
    console.log(Friend[i]);
}

// Exercise: 12 -Personalized greeting message
Friend.forEach(Friend => {
    console.log(`Hello, ${Friend}! Have a great day.`);
});

