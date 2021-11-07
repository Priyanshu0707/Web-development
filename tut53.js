console.log("This is tutorial 53");

function greet(name, greetText="Greetings from JavaScript") {
    let name1 = "Name1";
    console.log(greetText + " " + name);
    console.log(name + " is a good boy");
}

function sum(a,b,c){
    let d = a + b + c;
    return d;
    // This line will never execute (Unreachable code)
    // console.log("Function is returned");
}
let name = "Priyanshu";
let name1 = "Anshu";
let name2 = "Devanshu";
let name3 = "Tinnu";
let greetText = "Good Morning";
greet(name, greetText);
greet(name1, greetText);
greet(name2, greetText);
// let returnVal = greet(name3);
// console.log(returnVal);

let returnVal = sum(1,2,3);
console.log(returnVal);

// console.log(name + " is a good boy");