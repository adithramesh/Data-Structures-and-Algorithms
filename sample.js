function first() {
    console.log("First");
    second();
    console.log("Back to First");
}

function second() {
    console.log("Second");
    third();
}

function third() {
    console.log("Third");
}

first();
