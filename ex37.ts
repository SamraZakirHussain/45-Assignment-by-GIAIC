//Ex:37

function make_shirt(size: string = "Large", message: string = "I love TypeScript"): void {
    console.log(`You have ordered a ${size} shirt with the message: "${message}".`);
}
make_shirt()
make_shirt("Medium")
make_shirt("Small")
