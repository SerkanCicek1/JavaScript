for (let i = 0; i < 20; i++) {
    console.log("Hello " + i)
}

setTimeout(() => {
    console.log("!!!Hello async function!!!")
});

function printHello() {
    setTimeout(() => {
        console.log("Ben ne zaman calisirim")
    })
}

printHello();

let x = 5;
let y = 10;
let z = x + y;
console.log(z);

for (let i = 0; i < 10000; i++) {
    console.log("Hi " + i)
}